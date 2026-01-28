import { pickRandomCharacter, updateProgress } from './loadingHelper.js'
import { BaseScene } from '../base/baseScene.js';
import { ASSET_TYPES } from '../../assets/assetTypes.js';
import { SCENE_LOADING } from '../sceneNames.js';

export class LoadingScene extends BaseScene {
	constructor() {
		super(SCENE_LOADING);
	}

	init(data) {
		super.init(data);
		
		this.progress = 0;
		this.text = "No loading message provided"
		
		if(data.text != null) {
			this.text = data.text;
		}

		if(data.returnScene != null) {
			this.returnScene = data.returnScene;
		}

		if(data.newScene != null) {
			this.newScene = data.newScene;
		}
	}

	preloadContent() {
		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.PACK,
			name: "load",
			paths: ["assets/loading/load-pack.json"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.PACK,
			name: "login",
			paths: ["assets/login/login-pack.json"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.BITMAP_FONT,
			name: "BurbankSmallBold",
			paths: ["assets/fonts/BurbankSmallBold.png", "assets/fonts/BurbankSmallBold.xml"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.JSON,
			name: "loading-characters-json",
			paths: ["src/game/gamedata/loadingCharacters.json"]
		})
	}

	createContent() {		
		// login_screen_background
		const login_screen_background = this.add.image(-35, -20, "login", "login-screen/background");
		login_screen_background.scaleX = 0.91822095603599;
		login_screen_background.scaleY = 0.9307085567300964;
		login_screen_background.setOrigin(0, 0);

		// load_screen_background
		const load_screen_background = this.add.image(653, 502, "load", "load-screen/background");
		load_screen_background.scaleX = 0.7;
		load_screen_background.scaleY = 0.8;
		load_screen_background.setOrigin(0, 0);

		// load_screen_spinner0001
		const load_screen_spinner0001 = this.add.sprite(659, 509, "load", "load-screen/spinner0001");
		load_screen_spinner0001.scaleX = 0.6426046833060873;
		load_screen_spinner0001.scaleY = 0.7090060693349223;
		load_screen_spinner0001.setOrigin(0, 0);
		load_screen_spinner0001.play("load-spinner-animation");

		// load_screen_mask
		const load_screen_mask = this.add.sprite(691, 514, "load", "load-screen/mask");
		load_screen_mask.scaleX = 0.6788731834515179;
		load_screen_mask.scaleY = 0.9448333658041439;
		load_screen_mask.setOrigin(0, 0);
		load_screen_mask.visible = false;
		load_screen_mask.tintFill = true;
		load_screen_mask.tintTopLeft = 16761134;
		load_screen_mask.tintTopRight = 16761134;
		load_screen_mask.tintBottomLeft = 16761134;
		load_screen_mask.tintBottomRight = 16761134;

		// loading_random_text
		const bounds = load_screen_mask.getBounds();
		const loading_random_text = this.add.bitmapText(bounds.centerX, bounds.centerY + 30, "BurbankSmallBold", this.text);
		loading_random_text.scaleX = 1.0251222621528076;
		loading_random_text.scaleY = 1.1359024394507538;
		loading_random_text.text = this.text;
		loading_random_text.fontSize = 20;
		loading_random_text.setOrigin(0.5, 0.0)
		loading_random_text.setLineSpacing(5);
		loading_random_text.setCenterAlign();

		// Setting global instances starts here
		this.login_screen_background = login_screen_background;
		this.load_screen_mask = load_screen_mask;
		this.loading_random_text = loading_random_text;
		// Setting global instances ends here

		this.progressInterval = this.time.addEvent({
			delay: 250,
			callback: () => {
				if(this.progress >= 1) {
					this.time.removeEvent(this.progressInterval);
					return;
				}

				if(this.progress >= 0.075) {
					this.progress = 0;
				}
				
				this.progress += 0.01;
				updateProgress(this);
			},
			callbackScope: this,
			loop: true
		});

		// Main character animation
		const characters = this.cache.json.get("loading-characters-json");
        const mainCharacterPicked = pickRandomCharacter(characters);
        const mainCharacter = this.add.sprite(mainCharacterPicked['x'], mainCharacterPicked['y'], "load", mainCharacterPicked['mainSpriteName']);
		mainCharacter.scaleX = mainCharacterPicked['scaleX'];
		mainCharacter.scaleY = mainCharacterPicked['scaleY'];
		mainCharacter.setOrigin(0, 0);
		mainCharacter.play(mainCharacterPicked['animationName']);

		this.events.once("shutdown", this.shutdown, this);
		this.events.emit("scene-awake");
	}

	update() {
		this.loading_random_text.text = this.text;
	}

	shutdown() {
		this.time.removeEvent(this.progressInterval);
	}
}