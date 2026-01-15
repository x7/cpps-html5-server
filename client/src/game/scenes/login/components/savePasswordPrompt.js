import { showWarningImage, getWarningImages } from './savePasswordPromptHelper.js';
import { enableRememberMeBoxes } from '../loginHelper.js';
import { BaseScene } from '../../base/baseScene.js';
import { ASSET_TYPES } from '../../../assets/assetTypes.js';

export class LoginSavePasswordPrompt extends BaseScene {

	constructor() {
		super("LoginSavePasswordPromptScene");
        this.warningLoopInterval = 5;
	}

    init() {
		this.sceneManager = this.getSceneManager();
		this.assetManager = this.getAssetManager();
	}

    preload() {
        this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.BITMAP_FONT,
			name: "BurbankSmallBold",
			paths: ["assets/fonts/BurbankSmallBold.png", "assets/fonts/BurbankSmallBold.xml"]
		});
    }

	create() {
		// login_save_password_background_gui
		const login_save_password_background_gui = this.add.image(210, 78, "login", "login-screen/warn");
		login_save_password_background_gui.scaleX = 0.718656484232741;
		login_save_password_background_gui.scaleY = 0.6458724011667826;
		login_save_password_background_gui.setOrigin(0, 0);

		// login_save_password_exit_button
		const login_save_password_exit_button = this.add.image(1000, 104, "login", "login-screen/closeButton");
		login_save_password_exit_button.scaleX = 0.6465140210955824;
		login_save_password_exit_button.scaleY = 0.67916261000179;
		login_save_password_exit_button.setOrigin(0, 0);

		// login_save_password_warning_text
		const login_save_password_warning_text = this.add.bitmapText(288, 118, "BurbankSmallBold", "If you save your password here, anyone who uses this\ncomputer could access your account.");
		login_save_password_warning_text.scaleX = 1.0513310794326511;
		login_save_password_warning_text.scaleY = 1.0705376885654603;
		login_save_password_warning_text.text = "If you save your password here, anyone who uses this\ncomputer could access your account.";
		login_save_password_warning_text.fontSize = 26;

		// login_save_password_save_password_button
		const login_save_password_save_password_button = this.add.image(288, 524, "login", "login-screen/publicpromptbutton0001");
		login_save_password_save_password_button.scaleX = 0.7548025348131256;
		login_save_password_save_password_button.scaleY = 0.7441638975677048;
		login_save_password_save_password_button.setOrigin(0, 0);

		// login_save_password_dont_save_password_button
		const login_save_password_dont_save_password_button = this.add.image(548, 524, "login", "login-screen/publicpromptbutton0001");
		login_save_password_dont_save_password_button.scaleX = 0.7548025348131256;
		login_save_password_dont_save_password_button.scaleY = 0.7441638975677048;
		login_save_password_dont_save_password_button.setOrigin(0, 0);

		// login_save_password_learn_more_button
		const login_save_password_learn_more_button = this.add.image(847, 542, "login", "login-screen/publicpromptbutton0001");
		login_save_password_learn_more_button.scaleX = 0.5430784050813093;
		login_save_password_learn_more_button.scaleY = 0.45608937830351015;
		login_save_password_learn_more_button.setOrigin(0, 0);

		// login_save_password_save_password_button_hover
		const login_save_password_save_password_button_hover = this.add.image(288, 524, "login", "login-screen/learnButtonHover");
		login_save_password_save_password_button_hover.scaleX = 0.912589370217293;
		login_save_password_save_password_button_hover.scaleY = 1.1040157390874816;
		login_save_password_save_password_button_hover.setOrigin(0, 0);
		login_save_password_save_password_button_hover.visible = false;

		// login_save_password_dont_save_password_button_hover
		const login_save_password_dont_save_password_button_hover = this.add.image(548, 524, "login", "login-screen/learnButtonHover");
		login_save_password_dont_save_password_button_hover.scaleX = 0.912589370217293;
		login_save_password_dont_save_password_button_hover.scaleY = 1.1040157390874816;
		login_save_password_dont_save_password_button_hover.setOrigin(0, 0);
		login_save_password_dont_save_password_button_hover.visible = false;

		// login_save_password_learn_more_button_hover
		const login_save_password_learn_more_button_hover = this.add.image(847, 542, "login", "login-screen/learnButtonHover");
		login_save_password_learn_more_button_hover.scaleX = 0.653920704600741;
		login_save_password_learn_more_button_hover.scaleY = 0.7128298286441427;
		login_save_password_learn_more_button_hover.setOrigin(0, 0);
		login_save_password_learn_more_button_hover.visible = false;

		// login_save_password_save_password_text
		const login_save_password_save_password_text = this.add.bitmapText(317, 547, "BurbankSmallBold", "Save Password");
		login_save_password_save_password_text.scaleX = 0.9757192145029956;
		login_save_password_save_password_text.scaleY = 1.228486742083282;
		login_save_password_save_password_text.text = "Save Password";
		login_save_password_save_password_text.fontSize = 20;

		// login_save_password_dont_save_password_text
		const login_save_password_dont_save_password_text = this.add.bitmapText(599, 535, "BurbankSmallBold", "Don't Save\n Password");
		login_save_password_dont_save_password_text.scaleX = 1.051657796085224;
		login_save_password_dont_save_password_text.scaleY = 1.1689209937574048;
		login_save_password_dont_save_password_text.text = "Don't Save\n Password";
		login_save_password_dont_save_password_text.fontSize = 20;

		// login_save_password_learn_more_text
		const login_save_password_learn_more_text = this.add.bitmapText(868, 554, "BurbankSmallBold", "Learn More");
		login_save_password_learn_more_text.scaleX = 0.9584914705454524;
		login_save_password_learn_more_text.scaleY = 0.9795840888647462;
		login_save_password_learn_more_text.text = "Learn More";
		login_save_password_learn_more_text.fontSize = 20;

		// login_save_password_exit_button_hover
		const login_save_password_exit_button_hover = this.add.image(1024, 130, "login", "login-screen/moreserversclose0002");
		login_save_password_exit_button_hover.scaleX = 0.7939596363645354;
		login_save_password_exit_button_hover.scaleY = 0.817451681584833;
        login_save_password_exit_button_hover.visible = false;

        // interactive
        login_save_password_save_password_button.setInteractive({ useHandCursor: true });
        login_save_password_save_password_button_hover.setInteractive({ useHandCursor: true });
        login_save_password_dont_save_password_button.setInteractive({ useHandCursor: true });
        login_save_password_dont_save_password_button_hover.setInteractive({ useHandCursor: true });
        login_save_password_learn_more_button.setInteractive({ useHandCursor: true });
        login_save_password_learn_more_button_hover.setInteractive({ useHandCursor: true });
        login_save_password_exit_button.setInteractive({ useHandCursor: true });
        login_save_password_exit_button_hover.setInteractive({ useHandCursor: true });

        // events
        login_save_password_save_password_button.on("pointerover", () => {
            login_save_password_save_password_button.visible = false;
            login_save_password_save_password_button_hover.visible = true;
        });

        login_save_password_save_password_button_hover.on("pointerout", () => {
            login_save_password_save_password_button.visible = true;
            login_save_password_save_password_button_hover.visible = false;
        });

        login_save_password_save_password_button_hover.on("pointerdown", () => {
            enableRememberMeBoxes(this.sceneManager.get("LoginScene"));
            this.sceneManager.resume("LoginScene");
            this.sceneManager.stop("LoginSavePasswordPromptScene");
        });

        login_save_password_dont_save_password_button.on("pointerover", () => {
            login_save_password_dont_save_password_button.visible = false;
            login_save_password_dont_save_password_button_hover.visible = true;
        });

        login_save_password_dont_save_password_button_hover.on("pointerout", () => {
            login_save_password_dont_save_password_button.visible = true;
            login_save_password_dont_save_password_button_hover.visible = false;
        });

        login_save_password_dont_save_password_button_hover.on("pointerdown", () => {
            this.sceneManager.resume("LoginScene");
            this.sceneManager.stop("LoginSavePasswordPromptScene");
        });

        login_save_password_learn_more_button.on("pointerover", () => {
            login_save_password_learn_more_button.visible = false;
            login_save_password_learn_more_button_hover.visible = true;
        });

        login_save_password_learn_more_button_hover.on("pointerout", () => {
            login_save_password_learn_more_button.visible = true;
            login_save_password_learn_more_button_hover.visible = false;
        });

        login_save_password_learn_more_button_hover.on("pointerdown", () => {
            // learn more page redirect here + close scene
        });

        login_save_password_exit_button.on("pointerover", () => {
            login_save_password_exit_button.visible = false;
            login_save_password_exit_button_hover.visible = true;
        });

        login_save_password_exit_button_hover.on("pointerout", () => {
            login_save_password_exit_button.visible = true;
            login_save_password_exit_button_hover.visible = false;
        });

        login_save_password_exit_button_hover.on("pointerdown", () => {
            this.sceneManager.stop('LoginSavePasswordPromptScene');
            this.sceneManager.resume('LoginScene');
        });

        const totalWarningImages = Object.entries(getWarningImages()).length;
        let imageIndex = 0;
        let lastUsedImage = null;
        let lastUsedText = null;

        this.warningImageInterval = this.time.addEvent({
            delay: this.warningLoopInterval * 1000,
            callback: () => {
                if(lastUsedImage !== null) {
                    lastUsedImage.destroy();
                }

                if(lastUsedText !== null) {
                    lastUsedText.destroy();
                }

                const {image, text} = showWarningImage(this, imageIndex);
                lastUsedImage = image;
                lastUsedText = text;

                if(imageIndex === totalWarningImages - 1) {
                    imageIndex = 0;
                    return;
                }

                imageIndex = imageIndex + 1;
            },
            callbackScope: this,
            loop: true,
        });
        
        // Instantly start the loop
        this.warningImageInterval.callback(this.warningImageInterval.callbackScope);

		this.events.emit("scene-awake");
        this.events.once("shutdown", this.shutdown, this);
	}

    shutdown() {
        this.warningImageInterval.destroy();
    }
}
