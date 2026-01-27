import { BaseScene } from '../base/baseScene.js';
import { ASSET_TYPES } from '../../assets/assetTypes.js';
import { hideDomElements, login } from './loginHelper.js';
import { SCENE_LOGIN, SCENE_REGISTER, SCENE_START_SCREEN } from '../sceneNames.js';
import { displayLoading, removeLoading } from '../loading/loadingHelper.js';

export class LoginScene extends BaseScene {
	constructor() {
		super(SCENE_LOGIN);
	}

	init(data) {
		super.init(data)
		this.sceneManager = this.getSceneManager();
		this.assetManager = this.getAssetManager();
		this.username = null;
		this.password = null;
		this.rememberMeComputer = false;
		this.rememberMyPassword = false;
	}

	preloadContent() {
		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.PACK,
			name: "login",
			paths: ["assets/login/login-pack.json"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.BITMAP_FONT,
			name: "ArialNarrow",
			paths: ["assets/fonts/ArialNarrow.png", "assets/fonts/ArialNarrow.xml"]
		});
	}

	async createContent() {
		// login_forgot_password_hover
		const login_forgot_password_hover = this.add.image(588, 610, "login", "login-screen/background");
		login_forgot_password_hover.scaleX = 0.2113536761173771;
		login_forgot_password_hover.scaleY = 0.06486862419527441;
		login_forgot_password_hover.setOrigin(0, 0);

		// login_create_penguin_hover
		const login_create_penguin_hover = this.add.image(542, 706, "login", "login-screen/background");
		login_create_penguin_hover.scaleX = 0.26990066253322303;
		login_create_penguin_hover.scaleY = 0.09623164289465366;
		login_create_penguin_hover.setOrigin(0, 0);

		// login_back_button_hover
		const login_back_button_hover = this.add.image(606, 850, "login", "login-screen/background");
		login_back_button_hover.scaleX = 0.19732195125169272;
		login_back_button_hover.scaleY = 0.05934418952142533;
		login_back_button_hover.setOrigin(0, 0);

		// login_screen_background
		const login_screen_background = this.add.image(-32, -21, "login", "login-screen/background");
		login_screen_background.scaleX = 0.9126762350732655;
		login_screen_background.scaleY = 0.9245221499361267;
		login_screen_background.setOrigin(0, 0);

		// login_back_button_hover_display
		const login_back_button_hover_display = this.add.image(583, 846, "login", "login-screen/account0001");
		login_back_button_hover_display.scaleX = 0.3875402965450471;
		login_back_button_hover_display.scaleY = 0.3739456724686127;
		login_back_button_hover_display.setOrigin(0, 0);
		login_back_button_hover_display.visible = false;

		// login_keep_password_safe_note
		const login_keep_password_safe_note = this.add.image(1217, 559, "login", "login-screen/secret0001");
		login_keep_password_safe_note.scaleX = 0.8818197552959005;
		login_keep_password_safe_note.scaleY = 0.8975777543978966;
		login_keep_password_safe_note.setOrigin(0.492188, 0.490588);

		// login_create_penguin_hover_display
		const login_create_penguin_hover_display = this.add.image(527, 704, "login", "login-screen/account0001");
		login_create_penguin_hover_display.scaleX = 0.47728164554186425;
		login_create_penguin_hover_display.scaleY = 0.5864731292925616;
		login_create_penguin_hover_display.setOrigin(0, 0);
		login_create_penguin_hover_display.visible = false;

		// login_forgot_password_hover_display
		const login_forgot_password_hover_display = this.add.image(550, 610, "login", "login-screen/account0001");
		login_forgot_password_hover_display.scaleX = 0.452032754718954;
		login_forgot_password_hover_display.scaleY = 0.39902531566654004;
		login_forgot_password_hover_display.setOrigin(0, 0);
		login_forgot_password_hover_display.visible = false;

		// login_login_button
		const login_login_button = this.add.image(607, 474, "login", "login-screen/button");
		login_login_button.scaleX = 0.8903200395717945;
		login_login_button.scaleY = 0.9507586237590265;
		login_login_button.setOrigin(0, 0);

		// login_login_button_hover
		const login_login_button_hover = this.add.image(607, 474, "login", "login-screen/buttonHover");
		login_login_button_hover.scaleX = 0.8903200395717945;
		login_login_button_hover.scaleY = 0.9507586237590265;
		login_login_button_hover.setOrigin(0, 0);
		login_login_button_hover.visible = false;

		// login_login_button_clicked
		const login_login_button_clicked = this.add.image(607, 474, "login", "login-screen/buttonDown");
		login_login_button_clicked.scaleX = 0.8903200395717945;
		login_login_button_clicked.scaleY = 0.9507586237590265;
		login_login_button_clicked.setOrigin(0, 0);
		login_login_button_clicked.visible = false;

		// login_remember_password_checkbox
		const login_remember_password_checkbox = this.add.image(521, 377, "login", "login-screen/checkbox");
		login_remember_password_checkbox.scaleX = 1.0790002080934058;
		login_remember_password_checkbox.scaleY = 1.0392083038701059;
		login_remember_password_checkbox.setOrigin(0, 0);

		// login_remember_me_computer_checkbox
		const login_remember_me_computer_checkbox = this.add.image(521, 310, "login", "login-screen/checkbox");
		login_remember_me_computer_checkbox.scaleX = 1.0790002080934058;
		login_remember_me_computer_checkbox.scaleY = 1.0392083038701059;
		login_remember_me_computer_checkbox.setOrigin(0, 0);

		// login_remember_me_computer_checkbox_ticked
		const login_remember_me_computer_checkbox_ticked = this.add.image(521, 310, "login", "login-screen/checkboxChecked");
		login_remember_me_computer_checkbox_ticked.scaleX = 1.0790002080934058;
		login_remember_me_computer_checkbox_ticked.scaleY = 1.0392083038701059;
		login_remember_me_computer_checkbox_ticked.setOrigin(0, 0);
		login_remember_me_computer_checkbox_ticked.visible = false;

		// login_remember_password_checkbox_ticked
		const login_remember_password_checkbox_ticked = this.add.image(521, 377, "login", "login-screen/checkboxChecked");
		login_remember_password_checkbox_ticked.scaleX = 1.0790002080934058;
		login_remember_password_checkbox_ticked.scaleY = 1.0392083038701059;
		login_remember_password_checkbox_ticked.setOrigin(0, 0);
		login_remember_password_checkbox_ticked.visible = false;

		// login_penguin_name_text
		const login_penguin_name_text = this.add.bitmapText(387, 146, "ArialNarrow", "Penguin Name:");
		login_penguin_name_text.scaleX = 1.4486571177026133;
		login_penguin_name_text.scaleY = 1.5039007923811938;
		login_penguin_name_text.tintFill = true;
		login_penguin_name_text.tintTopLeft = 0;
		login_penguin_name_text.tintTopRight = 0;
		login_penguin_name_text.tintBottomLeft = 65536;
		login_penguin_name_text.tintBottomRight = 0;
		login_penguin_name_text.text = "Penguin Name:";
		login_penguin_name_text.fontSize = 28;

		// login_password_text
		const login_password_text = this.add.bitmapText(459, 229, "ArialNarrow", "Password:");
		login_password_text.scaleX = 1.4486571177026133;
		login_password_text.scaleY = 1.5039007923811938;
		login_password_text.tintFill = true;
		login_password_text.tintTopLeft = 0;
		login_password_text.tintTopRight = 0;
		login_password_text.tintBottomLeft = 65536;
		login_password_text.tintBottomRight = 0;
		login_password_text.text = "Password:";
		login_password_text.fontSize = 28;

		// login_remember_me_computer_text
		const login_remember_me_computer_text = this.add.bitmapText(591, 326, "ArialNarrow", "Remember me on this computer");
		login_remember_me_computer_text.scaleX = 1.4486571177026133;
		login_remember_me_computer_text.scaleY = 1.5039007923811938;
		login_remember_me_computer_text.tintFill = true;
		login_remember_me_computer_text.tintTopLeft = 0;
		login_remember_me_computer_text.tintTopRight = 0;
		login_remember_me_computer_text.tintBottomLeft = 65536;
		login_remember_me_computer_text.tintBottomRight = 0;
		login_remember_me_computer_text.text = "Remember me on this computer";
		login_remember_me_computer_text.fontSize = 24;

		// login_remember_my_password_text
		const login_remember_my_password_text = this.add.bitmapText(591, 391, "ArialNarrow", "Remember my password");
		login_remember_my_password_text.scaleX = 1.4486571177026133;
		login_remember_my_password_text.scaleY = 1.5039007923811938;
		login_remember_my_password_text.tintFill = true;
		login_remember_my_password_text.tintTopLeft = 0;
		login_remember_my_password_text.tintTopRight = 0;
		login_remember_my_password_text.tintBottomLeft = 65536;
		login_remember_my_password_text.tintBottomRight = 0;
		login_remember_my_password_text.text = "Remember my password";
		login_remember_my_password_text.fontSize = 24;

		// login_forgot_your_password_text
		const login_forgot_your_password_text = this.add.bitmapText(627, 623, "ArialNarrow", "Forgot your password?");
		login_forgot_your_password_text.scaleX = 1.4676691378317765;
		login_forgot_your_password_text.scaleY = 1.5665332229636384;
		login_forgot_your_password_text.tintFill = true;
		login_forgot_your_password_text.tintTopLeft = 16777215;
		login_forgot_your_password_text.tintTopRight = 16777215;
		login_forgot_your_password_text.tintBottomLeft = 16777215;
		login_forgot_your_password_text.tintBottomRight = 16777215;
		login_forgot_your_password_text.text = "Forgot your password?";
		login_forgot_your_password_text.fontSize = 23;

		// login_dont_have_a_penguin_text
		const login_dont_have_a_penguin_text = this.add.bitmapText(647, 718, "ArialNarrow", "Don't have a penguin?");
		login_dont_have_a_penguin_text.scaleX = 1.2335951820280002;
		login_dont_have_a_penguin_text.scaleY = 1.3665332229636384;
		login_dont_have_a_penguin_text.tintTopLeft = 0;
		login_dont_have_a_penguin_text.tintTopRight = 0;
		login_dont_have_a_penguin_text.tintBottomLeft = 0;
		login_dont_have_a_penguin_text.tintBottomRight = 0;
		login_dont_have_a_penguin_text.text = "Don't have a penguin?";
		login_dont_have_a_penguin_text.fontSize = 23;

		// login_create_free_account_text
		const login_create_free_account_text = this.add.bitmapText(614, 749, "ArialNarrow", "Create a free account now");
		login_create_free_account_text.scaleX = 1.433595182028;
		login_create_free_account_text.scaleY = 1.5665332229636384;
		login_create_free_account_text.text = "Create a free account now";
		login_create_free_account_text.fontSize = 23;

		// login_back_text
		const login_back_text = this.add.bitmapText(706, 859, "ArialNarrow", "Back");
		login_back_text.scaleX = 1.3062100006425357;
		login_back_text.scaleY = 1.3596581013993316;
		login_back_text.setOrigin(-0.5, 0);
		login_back_text.text = "Back";
		login_back_text.fontSize = 26;

		// login_login_text
		const login_login_text = this.add.bitmapText(718, 500, "ArialNarrow", "Login");
		login_login_text.scaleX = 1.488476887705402;
		login_login_text.scaleY = 1.3571840703979463;
		login_login_text.tintFill = true;
		login_login_text.tintTopLeft = 16777215;
		login_login_text.tintTopRight = 16777215;
		login_login_text.tintBottomLeft = 16777215;
		login_login_text.tintBottomRight = 16777215;
		login_login_text.text = "Login";
		login_login_text.fontSize = 33;
		
		// Dom elements start here
		const inputStyle = `
			width: 400px;
			height: 65px;
			font-size: 35px;
			border-radius: 0px;
			border: 4px solid rgba(0,0,0,0.45);
			box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.25), inset 0 2px 0 rgba(0, 0, 0, 0.25);
			padding: 0 5px;
			font-family: "Arial Rounded MT Bold", Nunito, "Varela Round", sans-serif;
			background: #ffffff;
			color: #000000;
			outline: none;
			box-shadow: none;
        `;

		this.penguinInput = this.add.dom(500 + 650/2, 170, 'input', inputStyle);
		this.penguinInput.id = 'loginPenguinUsernameInput'
		this.penguinInput.node.type = 'text';
		this.penguinInput.node.autocomplete = 'off';
		this.penguinInput.node.spellcheck = false;
		this.penguinInput.node.maxLength = 16;

		this.passwordInput = this.add.dom(500 + 650/2, 250, 'input', inputStyle);
		this.passwordInput.id = 'loginPasswordInput'
		this.passwordInput.node.type = 'text';
		this.passwordInput.node.autocomplete = 'off';
		this.passwordInput.node.style.setProperty('-webkit-textfield-decoration-container', 'none');
		this.passwordInput.node.style.setProperty('::-ms-reveal', 'display:none');
		this.passwordInput.node.style.setProperty('::-ms-clear', 'display:none');
		// Dom elements end here

		// Dom elements events start here
		this.penguinInput.node.addEventListener("input", (event) => {
			const input = event.target.value;
			this.username = input;
		});

		this.hiddenPassword = "";
		this.passwordInput.node.addEventListener("input", (event) => {
			const input = event.target.value;
			if(input.length < this.hiddenPassword.length) {
				this.hiddenPassword = this.hiddenPassword.slice(0, input.length);
			}

			if(input.length > this.hiddenPassword.length) {
				this.hiddenPassword += "*".repeat(input.length - this.hiddenPassword.length);
			}

			this.password = input;
			this.passwordInput.node.value = this.hiddenPassword;
		});
		// Dom elements events end here

		// Setting global instances start here
		this.login_remember_me_computer_checkbox_ticked = login_remember_me_computer_checkbox_ticked;
		this.login_remember_password_checkbox_ticked = login_remember_password_checkbox_ticked;
		// Setting global instances end here

		// Setting all interactives sprites starts here
		login_forgot_password_hover.setInteractive({ useHandCursor: true });
		login_create_penguin_hover.setInteractive({ useHandCursor: true });
		login_back_button_hover.setInteractive({ useHandCursor: true });
		login_back_button_hover_display.setInteractive({ useHandCursor: true });
		login_create_penguin_hover_display.setInteractive({ useHandCursor: true });
		login_forgot_password_hover_display.setInteractive({ useHandCursor: true });
		login_login_button.setInteractive({ useHandCursor: true });
		login_login_button_hover.setInteractive({ useHandCursor: true });
		login_remember_password_checkbox.setInteractive({ useHandCursor: true });
		login_remember_me_computer_checkbox.setInteractive({ useHandCursor: true });
		this.login_remember_me_computer_checkbox_ticked.setInteractive({ useHandCursor: true });
		this.login_remember_password_checkbox_ticked.setInteractive({ useHandCursor: true });
		// Setting all interactives sprites ends here

		// All interactive events start here
		login_forgot_password_hover.on("pointerover", () => {
			login_forgot_password_hover.visible = false;
			login_forgot_password_hover_display.visible = true;
		});

		login_forgot_password_hover_display.on("pointerout", () => {
			login_forgot_password_hover.visible = true;
			login_forgot_password_hover_display.visible = false;
		});

		login_create_penguin_hover.on("pointerover", () => {
			login_create_penguin_hover.visible = false;
			login_create_penguin_hover_display.visible = true;
		});

		login_create_penguin_hover_display.on("pointerout", () => {
			login_create_penguin_hover.visible = true;
			login_create_penguin_hover_display.visible = false;
		});

		login_create_penguin_hover_display.on("pointerdown", () => {
			displayLoading(SCENE_LOGIN, "Loading Register");
			removeLoading({
				currentScene: SCENE_LOGIN,
				goToScene: SCENE_REGISTER,
				goToSceneText: null,
				callback: null
			});
		});

		login_back_button_hover.on("pointerover", () => {
			login_back_button_hover.visible = false;
			login_back_button_hover_display.visible = true;
		});

		login_back_button_hover_display.on("pointerout", () => {
			login_back_button_hover.visible = true;
			login_back_button_hover_display.visible = false;
		});
		
		login_back_button_hover_display.on("pointerdown", () => {
			displayLoading(SCENE_LOGIN, "Loading Start");
			removeLoading({
				currentScene: SCENE_LOGIN,
				goToScene: SCENE_START_SCREEN,
				goToSceneText: null,
				callback: null
			});
		});

		login_login_button.on("pointerover", () => {
			login_login_button.visible = false;
			login_login_button_hover.visible = true;
		});

		login_login_button_hover.on("pointerout", () => {
			login_login_button.visible = true;
			login_login_button_hover.visible = false;
		});

		login_remember_me_computer_checkbox.on("pointerdown", () => {
			login_remember_me_computer_checkbox.visible = false;
			this.login_remember_me_computer_checkbox_ticked.visible = true;
		});

		this.login_remember_me_computer_checkbox_ticked.on("pointerdown", () => {
			login_remember_me_computer_checkbox.visible = true;
			this.login_remember_me_computer_checkbox_ticked.visible = false;
		});

		login_remember_password_checkbox.on("pointerdown", () => {
			this.sceneManager.add({
				"sceneKey": 'LoginSharedDevicePromptScene',
				"scene": null,
				"autoStart": false
			});
			this.sceneManager.pause('LoginScene');
			this.sceneManager.launch('LoginSharedDevicePromptScene');
		});

		this.login_remember_password_checkbox_ticked.on("pointerdown", () => {
			login_remember_password_checkbox.visible = true;
			this.login_remember_password_checkbox_ticked.visible = false;
		});

		login_login_button_hover.on("pointerdown", async () => {
			login_login_button_hover.setVisible = false;
			login_login_button_clicked.visible = true;
			hideDomElements(this);
			await login(this.username, this.password);
		});
		// All interactive events end here

		this.events.emit("scene-awake");
		this.events.on('resume', this.resume, this);
		this.events.once('shutdown', this.shutdown, this);
	}

	resume() {
		this.game.domContainer.style.display = 'block';
	}

	shutdown() {
		this.penguinInput.destroy();
		this.passwordInput.destroy();
	}
}