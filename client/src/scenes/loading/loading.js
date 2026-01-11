import Phaser from 'phaser';
import * as loadingHelper from './loadingHelper.js';
import { getSceneManager } from '../../main.js';
import eventEmitter from '../../util/eventEmitter.js';

export class LoadingScene extends Phaser.Scene {
	constructor() {
		super("LoadingScene");
		this.getSceneManager = getSceneManager();
		this.getSceneManager.setCurrentScene(this);
		this.progress = 0;
	}

	init(data) {
		this.text = data.text ?? "          No loading text";
		eventEmitter.addEventOnce("loading:completed", (callback) => {
			setTimeout(() => {
				callback();
			}, 1250);
		});
	}

	preload() {
		this.load.pack("load-pack", "public/phaser/loading/load-pack.json");
        this.load.pack("login-pack", "public/phaser/login/login-pack.json");
		this.load.bitmapFont("BurbankSmallBold", "public/phaser/fonts/BurbankSmallBold.png", "public/phaser/fonts/BurbankSmallBold.xml");
	}

	async create() {
		// login_screen_background
		const login_screen_background = this.add.image(-54, -69, "login_1", "login-screen/background");
		login_screen_background.scaleX = 0.8005228796833518;
		login_screen_background.scaleY = 0.7697808237235164;
		login_screen_background.setOrigin(0, 0);

		// load_screen_background
		const load_screen_background = this.add.image(548, 393, "load", "load-screen/background");
		load_screen_background.scaleX = 0.6043379501487305;
		load_screen_background.scaleY = 0.6244561279852182;
		load_screen_background.setOrigin(0, 0);

		// load_screen_spinner0001
		const load_screen_spinner0001 = this.add.sprite(554, 400, "load", "load-screen/spinner0001");
		load_screen_spinner0001.scaleX = 0.5116844663233825;
		load_screen_spinner0001.scaleY = 0.529299740149275;
		load_screen_spinner0001.setOrigin(0, 0);
		load_screen_spinner0001.play("load-spinner-animation");

		// load_screen_mask
		const load_screen_mask = this.add.image(581, 402, "load", "load-screen/mask");
		load_screen_mask.scaleX = 0.6037870622124922;
		load_screen_mask.scaleY = 0.7291006632874022;
		load_screen_mask.setOrigin(0, 0);
		load_screen_mask.tintFill = true;
		load_screen_mask.tintTopLeft = 16761134;
		load_screen_mask.tintTopRight = 16761134;
		load_screen_mask.tintBottomLeft = 16761134;
		load_screen_mask.tintBottomRight = 16761134;
		load_screen_mask.visible = false;

		const loading_random_text = this.add.bitmapText(515, 431, "BurbankSmallBold", this.text);
		loading_random_text.text = this.text;
		loading_random_text.fontSize = 18;

		function updateProgress(progress) {
			load_screen_mask.visible = true;
			load_screen_mask.displayWidth = login_screen_background.displayWidth * progress;
		}

		let progress = 0;
		const progressInterval = setInterval(() => {
			if (progress >= 1) {
				clearInterval(progressInterval);
			} else {
				if(progress >= 0.08) {
					progress = 0;
				}

				progress += 0.01;
				updateProgress(progress);
				loading_random_text.text = this.text; // incase we update
			}
		}, 500); 

		// Main character animation
        const mainCharacterArray = loadingHelper.pickRandomCharacter();
        for(const character of mainCharacterArray) {
            const mainCharacter = this.add.sprite(character['x'], character['y'], "load", character['mainSpriteName']);
            mainCharacter.scaleX = character['scaleX'];
            mainCharacter.scaleY = character['scaleY'];
            mainCharacter.setOrigin(0, 0);
            mainCharacter.play(character['animationName']);
		}

		this.events.emit("scene-awake");
	}

	updateText(text) {
		this.text = text;
	}
}