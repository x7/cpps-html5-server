import { BaseScene } from '../baseScene.js';
import { ASSET_TYPES } from '../../assets/assetTypes.js';
import { displayLoading, removeLoading } from '../loading/loadingHelper.js';
import { SCENE_LOGIN, SCENE_REGISTER, SCENE_START_SCREEN } from '../sceneNames.js';

export class StartScene extends BaseScene {
	constructor() {
		super(SCENE_START_SCREEN);
	}

	init(data) {
		super.init(data);
	}

	preloadContent() {
		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.IMAGE,
			name: "brb-billboardShadow",
			paths: ["assets/start/brb-billboardShadow.png"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.PACK,
			name: "login",
			paths: ["assets/login/login-pack.json"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.IMAGE,
			name: "brb-billboard",
			paths: ["assets/start/brb-billboard.png"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.PACK,
			name: "start",
			paths: ["assets/start/start-pack.json"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.BITMAP_FONT,
			name: "BurbankSmallBold",
			paths: ["assets/fonts/BurbankSmallBold.png", "assets/fonts/BurbankSmallBold.xml"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.BITMAP_FONT,
			name: "CCComicCrazyBoldItalicShadow",
			paths: ["assets/fonts/CCComicCrazyBoldItalicShadow.png", "assets/fonts/CCComicCrazyBoldItalicShadow.xml"]
		});
	}

	createContent() {
		// start_main_blue_background
		const start_main_blue_background = this.add.image(730, 473, "brb-billboardShadow");
		start_main_blue_background.scaleX = 1.2164996704841768;
		start_main_blue_background.scaleY = 1.246165561289864;

		// start_home_screen_page
		const start_home_screen_page = this.add.image(760, 367, "brb-billboard");
		start_home_screen_page.scaleX = 0.9073591929891096;
		start_home_screen_page.scaleY = 0.7297869042513413;

		// start_blue_border
		const start_blue_border = this.add.image(765, 561, "start", "start-screen/module");
		start_blue_border.scaleX = 0.9301137006375564;
		start_blue_border.scaleY = 0.9328153761045828;
		start_blue_border.setOrigin(0.5, 0);

		// start_create_penguin_underlay_not_hovered
		const start_create_penguin_underlay_not_hovered = this.add.image(158, 689, "start", "start-screen/createPenguinGraphic0001");
		start_create_penguin_underlay_not_hovered.scaleX = 0.9704766680573679;
		start_create_penguin_underlay_not_hovered.scaleY = 1.026196925509367;
		start_create_penguin_underlay_not_hovered.setOrigin(0, 0);

		// start_create_penguin_underlay_hovered
		const start_create_penguin_underlay_hovered = this.add.image(158, 689, "start", "start-screen/createPenguinGraphic0002");
		start_create_penguin_underlay_hovered.scaleX = 0.9704766680573679;
		start_create_penguin_underlay_hovered.scaleY = 1.026196925509367;
		start_create_penguin_underlay_hovered.setOrigin(0, 0);
		start_create_penguin_underlay_hovered.visible = false;

		// start_login_button
		const start_login_button = this.add.image(858, 755, "login", "login-screen/button");
		start_login_button.scaleX = 1.1502188521084615;
		start_login_button.scaleY = 1.1366304439897212;
		start_login_button.setOrigin(0, 0);

		// start_login_button_hover
		const start_login_button_hover = this.add.image(858, 755, "login", "login-screen/buttonHover");
		start_login_button_hover.scaleX = 1.1502188521084615;
		start_login_button_hover.scaleY = 1.1366304439897212;
		start_login_button_hover.setOrigin(0, 0);
		start_login_button_hover.visible = false;

		// start_login_button_clicked
		const start_login_button_clicked = this.add.image(828, 755, "login", "login-screen/publicpromptbutton0002");
		start_login_button_clicked.scaleX = 1.6119253946021173;
		start_login_button_clicked.scaleY = 1.3003574364380923;
		start_login_button_clicked.setOrigin(0, 0);
		start_login_button_clicked.visible = false;

		// start_login_button_text
		const start_login_button_text = this.add.bitmapText(997, 788, "CCComicCrazyBoldItalicShadow", "Login");
		start_login_button_text.scaleX = 0.7;
		start_login_button_text.scaleY = 0.6598527246831939;
		start_login_button_text.text = "Login";
		start_login_button_text.fontSize = 65;
		start_login_button_text.letterSpacing = 3;

		// start_login_button_yellow_penguin
		const start_login_button_yellow_penguin = this.add.image(1218, 689, "start", "start-screen/loginGraphic0001");
		start_login_button_yellow_penguin.scaleX = 1.0409005180477484;
		start_login_button_yellow_penguin.scaleY = 1.0394809824885978;
		start_login_button_yellow_penguin.setOrigin(0, 0);

		// start_login_button_yellow_penguin_hover
		const start_login_button_yellow_penguin_hover = this.add.image(1218, 689, "start", "start-screen/loginGraphic0002");
		start_login_button_yellow_penguin_hover.scaleX = 1.0409005180477484;
		start_login_button_yellow_penguin_hover.scaleY = 1.0394809824885978;
		start_login_button_yellow_penguin_hover.setOrigin(0, 0);
		start_login_button_yellow_penguin_hover.visible = false;

		// start_register_button
		const start_register_button = this.add.image(322, 755, "login", "login-screen/button");
		start_register_button.scaleX = 1.1502188521084615;
		start_register_button.scaleY = 1.1366304439897212;
		start_register_button.setOrigin(0, 0);

		// start_register_button_hover
		const start_register_button_hover = this.add.image(322, 755, "login", "login-screen/buttonHover");
		start_register_button_hover.scaleX = 1.2021885210846146;
		start_register_button_hover.scaleY = 1.1766304439897213;
		start_register_button_hover.setOrigin(0, 0);
		start_register_button_hover.visible = false;

		// start_register_button_clicked
		const start_register_button_clicked = this.add.image(322, 755, "login", "login-screen/publicpromptbutton0002");
		start_register_button_clicked.scaleX = 1.614754302734691;
		start_register_button_clicked.scaleY = 1.295649671904039;
		start_register_button_clicked.setOrigin(0, 0);
		start_register_button_clicked.visible = false;

		// start_create_penguin_button_text
		const start_create_penguin_button_text = this.add.bitmapText(370, 795, "CCComicCrazyBoldItalicShadow", "Create a Penguin");
		start_create_penguin_button_text.scaleX = 0.48;
		start_create_penguin_button_text.scaleY = 0.6143235996320014;
		start_create_penguin_button_text.text = "Create a Penguin";
		start_create_penguin_button_text.fontSize = 60;

		// start_club_penguin_logo
		const start_club_penguin_logo = this.add.image(772, 589, "start", "start-screen/logo");
		start_club_penguin_logo.scaleX = 0.9803020602141062;
		start_club_penguin_logo.scaleY = 0.8133384718625689;
		start_club_penguin_logo.setOrigin(0.5, 0);

        // Setting all interactives sprites starts here
        start_register_button.setInteractive({ useHandCursor: true });
        start_register_button_hover.setInteractive({ useHandCursor: true });
		start_register_button_clicked.setInteractive({ useHandCursor: true });
        start_login_button.setInteractive({ useHandCursor: true });
        start_login_button_hover.setInteractive({ useHandCursor: true });
		start_login_button_clicked.setInteractive({ useHandCursor: true });
		// Setting all interactives sprites ends here

		// All interactive events start here
		// Create a penguin button events start here
		start_register_button.on("pointerover", () => {
			start_register_button.visible = false;
			start_register_button_hover.visible = true;
			start_create_penguin_underlay_not_hovered.visible = false;
			start_create_penguin_underlay_hovered.visible = true;
		});

		start_register_button_hover.on("pointerout", () => {
			start_register_button.visible = true;
			start_register_button_hover.visible = false;
			start_create_penguin_underlay_not_hovered.visible = true;
			start_create_penguin_underlay_hovered.visible = false;
		});

		start_register_button_hover.on("pointerdown", () => {
			start_register_button_hover.visible = false;
			start_register_button_clicked.visible = true;
		});

		// Create a penguin button events end here

		// Login button events start here
		start_login_button.on("pointerover", () => {
			start_login_button.visible = false;
			start_login_button_hover.visible = true;
			start_login_button_yellow_penguin.visible = false;
			start_login_button_yellow_penguin_hover.visible = true;
		});

		start_login_button_hover.on("pointerout", () => {
			start_login_button.visible = true;
			start_login_button_hover.visible = false;
			start_login_button_yellow_penguin.visible = true;
			start_login_button_yellow_penguin_hover.visible = false;
		});

		start_login_button_hover.on("pointerdown", () => {
			start_login_button_hover.visible = false;
			start_login_button_clicked.visible = true;
		});

		start_login_button_hover.on("pointerout", () => {
			start_login_button.visible = true;
			start_login_button_clicked.visible = false;
		});
		// Login button events end here
		// All interactive events end here

		// events
		start_register_button.on("pointerover", () => {
			start_register_button.visible = false;
			start_register_button_hover.visible = true;
			start_create_penguin_underlay_not_hovered.visible = false;
		    start_create_penguin_underlay_hovered.visible = true;
		});

		start_register_button_hover.on("pointerout", () => {
			start_register_button.visible = true;
			start_register_button_hover.visible = false;
			start_create_penguin_underlay_not_hovered.visible = true;
		    start_create_penguin_underlay_hovered.visible = false;
		});

		start_login_button.on("pointerover", () => {
		    start_login_button.visible = false;
		    start_login_button_hover.visible = true;
		});

		start_login_button_hover.on("pointerout", () => {
		    start_login_button.visible = true;
		    start_login_button_hover.visible = false;
		});

		start_login_button_hover.on("pointerdown", () => {
			start_login_button_hover.visible = false;
			start_login_button_clicked.visible = true;
			displayLoading(SCENE_START_SCREEN, "Loading Login");
			removeLoading({
				"currentScene": SCENE_START_SCREEN,
				"goToScene": SCENE_LOGIN,
				"goToSceneText": null,
				"callback": null
			});
		});

		start_register_button_hover.on("pointerdown", () => {
			start_register_button_hover.visible = false;
			start_register_button_clicked.visible = true;
			displayLoading(SCENE_START_SCREEN, "Loading Register");
			removeLoading({
				"currentScene": SCENE_START_SCREEN,
				"goToScene": SCENE_REGISTER,
				"goToSceneText": null,
				"callback": null
			});
		});

		this.events.emit("scene-awake");
	}
}