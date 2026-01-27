import { BaseScene } from "../base/baseScene";
import { ASSET_TYPES } from '../../assets/assetTypes.js';
import { removeError } from "./errorHelper.js";
import { SCENE_ERROR } from "../sceneNames.js";

export class ErrorScene extends BaseScene {
	constructor() {
		super(SCENE_ERROR);
	}

	init(data) {
		this.sceneManager = this.getSceneManager();
		this.assetManager = this.getAssetManager();
		this.errorMessage = (data.message == null ? "No error message provided.\nPlease provide one." : data.message);
	}

	preload() {
		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.PACK,
			name: "error",
			paths: ["assets/error/error-pack.json"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.BITMAP_FONT,
			name: "ArialNarrow",
			paths: ["assets/fonts/ArialNarrow.png", "assets/fonts/ArialNarrow.xml"]
		});
	}

	createContent() {
		
		// error_gui
		const error_gui = this.add.image(125, 114, "error", "app/error");
		error_gui.scaleX = 0.8477412343159033;
		error_gui.scaleY = 1.1155659700223062;
		error_gui.setOrigin(-0.5, -0.5);

		// error_okay_button
		const error_okay_button = this.add.image(661, 555, "error", "app/button");
		error_okay_button.scaleX = 0.7953929265542756;
		error_okay_button.scaleY = 0.7911391779848883;
		error_okay_button.setOrigin(0, 0);

		// error_okay_button_hover
		const error_okay_button_hover = this.add.image(661, 555, "error", "app/buttonHover");
		error_okay_button_hover.scaleX = 0.7953929265542756;
		error_okay_button_hover.scaleY = 0.7911391779848883;
		error_okay_button_hover.setOrigin(0, 0);
		error_okay_button_hover.visible = false;

		// error_okay_button_clicked
		const error_okay_button_clicked = this.add.image(586, 464, "error", "app/buttonDown");
		error_okay_button_clicked.scaleX = 0.6615413590165267;
		error_okay_button_clicked.scaleY = 0.6954831986522744;
		error_okay_button_clicked.setOrigin(0, 0);
		error_okay_button_clicked.visible = false;

		// error_okay_button_text
		const error_okay_button_text = this.add.bitmapText(763, 577, "ArialNarrow", "Okay");
		error_okay_button_text.scaleX = 1.427758075467004;
		error_okay_button_text.scaleY = 1.3000653035379415;
		error_okay_button_text.text = "Okay";
		error_okay_button_text.fontSize = 32;

		// create button text
		const bounds = error_gui.getBounds();
		const buttonText = this.add.bitmapText(0, 0, "ArialNarrow", this.errorMessage);
		buttonText.fontSize = 40;
		buttonText.setOrigin(0.5, 0);
		buttonText.setPosition(bounds.centerX, bounds.centerY - 115);
		buttonText.setTint("000000");
		buttonText.setLineSpacing(5);
		buttonText.setCenterAlign();

		// interactives
		error_okay_button.setInteractive({ useHandCursor: true });
		error_okay_button_hover.setInteractive({ useHandCursor: true });
		error_okay_button_clicked.setInteractive({ useHandCursor: true });

		error_okay_button.on("pointerover", () => {
			error_okay_button.visible = false;
			error_okay_button_hover.visible = true;
		});

		error_okay_button_hover.on("pointerout", () => {
			error_okay_button.visible = true;
			error_okay_button_hover.visible = false;
		});

		error_okay_button_hover.on("pointerdown", () => {
			error_okay_button_hover.visible = false;
			error_okay_button_clicked.visible = true;
			removeError();
		});

		this.events.emit("scene-awake");
	}
}