import Phaser from 'phaser';
import { getSceneManager } from '../../main.js';
import { hideDomElements } from './loginHelper.js';

export class SharedDevicePrompt extends Phaser.Scene {
	constructor() {
		super("LoginSharedDevicePromptScene");
		this.sceneManager = getSceneManager();
	}

	preload() {
		this.load.bitmapFont("BurbankSmallBold", "public/phaser/fonts/BurbankSmallBold.png", "public/phaser/fonts/BurbankSmallBold.xml")
	}

	create() {
	// login_shared_device_background
		const login_shared_device_background = this.add.image(38, 45, "login_1", "login-screen/itembg4");
		login_shared_device_background.scaleX = 0.8150498575626238;
		login_shared_device_background.scaleY = 1.024858964161464;
		login_shared_device_background.setOrigin(-0.5, -0.5);

		// login_shared_device_no_button
		const login_shared_device_no_button = this.add.image(695, 414, "login_1", "login-screen/publicpromptbutton0001");
		login_shared_device_no_button.scaleX = 0.6936608167846001;
		login_shared_device_no_button.scaleY = 0.7247912756884711;
		login_shared_device_no_button.setOrigin(0, 0);

		// login_shared_device_yes_button
		const login_shared_device_yes_button = this.add.image(452, 413, "login_1", "login-screen/publicpromptbutton0001");
		login_shared_device_yes_button.scaleX = 0.6936608167846001;
		login_shared_device_yes_button.scaleY = 0.7247912756884711;
		login_shared_device_yes_button.setOrigin(0, 0);

		// login_shared_device_yes_button_hover
		const login_shared_device_yes_button_hover = this.add.image(452, 413, "login_1", "login-screen/publicpromptbutton0002");
		login_shared_device_yes_button_hover.scaleX = 0.6936608167846001;
		login_shared_device_yes_button_hover.scaleY = 0.7247912756884711;
		login_shared_device_yes_button_hover.setOrigin(0, 0);
		login_shared_device_yes_button_hover.visible = false;

		// login_shared_device_no_button_hover
		const login_shared_device_no_button_hover = this.add.image(695, 414, "login_1", "login-screen/saveButtonHover");
		login_shared_device_no_button_hover.scaleX = 0.566368078776814;
		login_shared_device_no_button_hover.scaleY = 0.6368496203711478;
		login_shared_device_no_button_hover.setOrigin(0, 0);
		login_shared_device_no_button_hover.visible = false;

		// login_shared_device_wait_people_text
		const login_shared_device_wait_people_text = this.add.bitmapText(489, 254, "BurbankSmallBold", "                WAIT!\nDo other people use this\n            computer?");
		login_shared_device_wait_people_text.scaleX = 0.9254240814270847;
		login_shared_device_wait_people_text.scaleY = 0.9066980328033849;
		login_shared_device_wait_people_text.text = "                WAIT!\nDo other people use this\n            computer?";
		login_shared_device_wait_people_text.fontSize = 32;
		login_shared_device_wait_people_text.letterSpacing = 1;

		// login_shared_device_yes_button_text
		const login_shared_device_yes_button_text = this.add.bitmapText(514, 428, "BurbankSmallBold", "Yes");
		login_shared_device_yes_button_text.text = "Yes";
		login_shared_device_yes_button_text.fontSize = 36;

		// login_shared_device_no_button_text
		const login_shared_device_no_button_text = this.add.bitmapText(768, 429, "BurbankSmallBold", "No");
		login_shared_device_no_button_text.text = "No";
		login_shared_device_no_button_text.fontSize = 36;

		// Setting all interactives sprites starts here
		login_shared_device_no_button.setInteractive({ useHandCursor: true });
		login_shared_device_yes_button.setInteractive({ useHandCursor: true });
		login_shared_device_no_button_hover.setInteractive({ useHandCursor: true });
		login_shared_device_yes_button_hover.setInteractive({ useHandCursor: true });
		// Setting all interactives sprites ends here

		// All interactive events start here
		login_shared_device_no_button.on("pointerover", () => {
			login_shared_device_no_button.visible = false;
			login_shared_device_no_button_hover.visible = true;
		});

		login_shared_device_yes_button.on("pointerover", () => {
			login_shared_device_yes_button.visible = false;
			login_shared_device_yes_button_hover.visible = true;
		});

		login_shared_device_no_button_hover.on("pointerout", () => {
			login_shared_device_no_button.visible = true;
			login_shared_device_no_button_hover.visible = false;
		});

		login_shared_device_yes_button_hover.on("pointerout", () => {
			login_shared_device_yes_button.visible = true;
			login_shared_device_yes_button_hover.visible = false;
		});

		login_shared_device_no_button_hover.on("pointerdown", () => {
			this.sceneManager.add({
				sceneKey: 'LoginSavePasswordPromptScene',
				scene: null,
				autoStart: false
			});

			hideDomElements(this.sceneManager.get("LoginScene"));
			this.sceneManager.stop('LoginSharedDevicePromptScene');
			this.sceneManager.launch('LoginSavePasswordPromptScene');
		});

		login_shared_device_yes_button_hover.on("pointerdown", () => {
			this.sceneManager.add({
				sceneKey: 'LoginSavePasswordPromptScene',
				scene: null,
				autoStart: false
			});

			hideDomElements(this.sceneManager.get("LoginScene"));
			this.sceneManager.stop('LoginSharedDevicePromptScene');
			this.sceneManager.launch('LoginSavePasswordPromptScene');
		});
		// All interactive events end here

		this.events.emit("scene-awake");
	}
}