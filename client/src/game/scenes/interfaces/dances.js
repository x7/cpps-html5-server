import { BaseScene } from "../baseScene";
import { SCENE_INTERFACE, SCENE_INTERFACE_DANCE } from "../sceneNames";

export class InterfaceDanceScene extends BaseScene {
    constructor() {
        super(SCENE_INTERFACE_DANCE)
    }

    init(data = {}) {
        super.init(data);
    }

    createContent() {
        // interface_dance_box_trigger
		const interface_dance_box_trigger = this.add.image(384, 681, "interface", "interface_dance_box.png");
		interface_dance_box_trigger.scaleX = 1.0029867193649498;
		interface_dance_box_trigger.scaleY = 1.142267359065548;
        interface_dance_box_trigger.setAlpha(0.001);

        // interface_dance_box_png
		const interface_dance_box_png = this.add.image(382, 655, "interface", "interface_dance_box.png");

		// interface_emoji_button_sitting_down_bottom_left
		const interface_emoji_button_sitting_down_bottom_left = this.add.image(351, 815, "interface", "interface_emoji_button0001.png");

		// interface_emoji_button_sitting_down_bottom_right
		const interface_emoji_button_sitting_down_bottom_right = this.add.image(415, 815, "interface", "interface_emoji_button0001.png");

		// interface_emoji_button_sitting_down_top_left
		const interface_emoji_button_sitting_down_top_left = this.add.image(351, 751, "interface", "interface_emoji_button0001.png");

		// interface_emoji_button_sitting_down_top_right
		const interface_emoji_button_sitting_down_top_right = this.add.image(415, 751, "interface", "interface_emoji_button0001.png");

		// interface_emoji_button_penguin_wave
		const interface_emoji_button_penguin_wave = this.add.image(382, 656, "interface", "interface_big_white_buttons0001.png");

		// interface_emoji_button_penguin_default_dance
		const interface_emoji_button_penguin_default_dance = this.add.image(382, 529, "interface", "interface_big_white_buttons0001.png");

		// interface_emoji_button_penguin_default_dance_hover
		const interface_emoji_button_penguin_default_dance_hover = this.add.image(382, 529, "interface", "interface_big_white_buttons0002.png");
		interface_emoji_button_penguin_default_dance_hover.visible = false;

		// interface_emoji_button_penguin_wave_hover
		const interface_emoji_button_penguin_wave_hover = this.add.image(382, 656, "interface", "interface_big_white_buttons0002.png");
		interface_emoji_button_penguin_wave_hover.visible = false;

		// interface_emoji_button_sitting_down_top_left_hover
		const interface_emoji_button_sitting_down_top_left_hover = this.add.image(351, 751, "interface", "interface_emoji_button0002.png");
		interface_emoji_button_sitting_down_top_left_hover.visible = false;

		// interface_emoji_button_sitting_down_top_right_hover
		const interface_emoji_button_sitting_down_top_right_hover = this.add.image(415, 751, "interface", "interface_emoji_button0002.png");
		interface_emoji_button_sitting_down_top_right_hover.visible = false;

		// interface_emoji_button_sitting_down_bottom_left_hover
		const interface_emoji_button_sitting_down_bottom_left_hover = this.add.image(351, 815, "interface", "interface_emoji_button0002.png");
		interface_emoji_button_sitting_down_bottom_left_hover.visible = false;

		// interface_emoji_button_sitting_down_bottom_right_hover
		const interface_emoji_button_sitting_down_bottom_right_hover = this.add.image(415, 815, "interface", "interface_emoji_button0002.png");
		interface_emoji_button_sitting_down_bottom_right_hover.visible = false;

		// interface_emoji_button_penguin_sat_down_image
		const interface_emoji_button_penguin_sat_down_image = this.add.image(383, 781, "interface", "interface_dances_penguin_sitting.png");

		// interface_emoji_button_penguin_wave_image
		const interface_emoji_button_penguin_wave_image = this.add.image(383, 653, "interface", "interface_dances_penguin_waving.png");

		// interface_emoji_button_penguin_dance_image
		const interface_emoji_button_penguin_dance_image = this.add.image(383, 527, "interface", "interface_dances_penguin_dancing.png");

        // Setting all interactives sprites starts here
        interface_emoji_button_sitting_down_bottom_right.setInteractive({ useHandCursor: true });
        interface_emoji_button_sitting_down_bottom_left.setInteractive({ useHandCursor: true });
        interface_emoji_button_sitting_down_top_left.setInteractive({ useHandCursor: true });
        interface_emoji_button_sitting_down_top_right.setInteractive({ useHandCursor: true });
        interface_emoji_button_penguin_wave.setInteractive({ useHandCursor: true });
        interface_emoji_button_penguin_default_dance.setInteractive({ useHandCursor: true });
        interface_emoji_button_penguin_default_dance_hover.setInteractive({ useHandCursor: true });
        interface_emoji_button_penguin_wave_hover.setInteractive({ useHandCursor: true });
        interface_emoji_button_sitting_down_top_right_hover.setInteractive({ useHandCursor: true });
        interface_emoji_button_sitting_down_top_left_hover.setInteractive({ useHandCursor: true });
        interface_emoji_button_sitting_down_bottom_left_hover.setInteractive({ useHandCursor: true });
        interface_emoji_button_sitting_down_bottom_right_hover.setInteractive({ useHandCursor: true });
        interface_dance_box_trigger.setInteractive({ useHandCursor: false });
        // Setting all interactives sprites ends here

        // All interactive events start here
        interface_emoji_button_sitting_down_bottom_right.on("pointerover", () => {
            interface_emoji_button_sitting_down_bottom_right.visible = false;
            interface_emoji_button_sitting_down_bottom_right_hover.visible = true;
        });

        interface_emoji_button_sitting_down_bottom_right_hover.on("pointerout", () => {
            interface_emoji_button_sitting_down_bottom_right.visible = true;
            interface_emoji_button_sitting_down_bottom_right_hover.visible = false;
        });

        interface_emoji_button_sitting_down_bottom_right_hover.on("pointerdown", () => {   
        });

        interface_emoji_button_sitting_down_bottom_left.on("pointerover", () => {
            interface_emoji_button_sitting_down_bottom_left.visible = false;
            interface_emoji_button_sitting_down_bottom_left_hover.visible = true;
        });

        interface_emoji_button_sitting_down_bottom_left_hover.on("pointerout", () => {
            interface_emoji_button_sitting_down_bottom_left.visible = true;
            interface_emoji_button_sitting_down_bottom_left_hover.visible = false;
        });

        interface_emoji_button_sitting_down_bottom_left_hover.on("pointerdown", () => {   
        });

        interface_emoji_button_sitting_down_top_right.on("pointerover", () => {
            interface_emoji_button_sitting_down_top_right.visible = false;
            interface_emoji_button_sitting_down_top_right_hover.visible = true;
        });

        interface_emoji_button_sitting_down_top_right_hover.on("pointerout", () => {
            interface_emoji_button_sitting_down_top_right.visible = true;
            interface_emoji_button_sitting_down_top_right_hover.visible = false;
        });

        interface_emoji_button_sitting_down_top_right_hover.on("pointerdown", () => {   
        });

        interface_emoji_button_sitting_down_top_left.on("pointerover", () => {
            interface_emoji_button_sitting_down_top_left.visible = false;
            interface_emoji_button_sitting_down_top_left_hover.visible = true;
        });

        interface_emoji_button_sitting_down_top_left_hover.on("pointerout", () => {
            interface_emoji_button_sitting_down_top_left.visible = true;
            interface_emoji_button_sitting_down_top_left_hover.visible = false;
        });

        interface_emoji_button_sitting_down_top_left_hover.on("pointerdown", () => {   
        });

        interface_emoji_button_penguin_wave.on("pointerover", () => {
            interface_emoji_button_penguin_wave.visible = false;
            interface_emoji_button_penguin_wave_hover.visible = true;
        });

        interface_emoji_button_penguin_wave_hover.on("pointerout", () => {
            interface_emoji_button_penguin_wave.visible = true;
            interface_emoji_button_penguin_wave_hover.visible = false;
        });

        interface_emoji_button_penguin_wave_hover.on("pointerdown", () => {   
        });

        interface_emoji_button_penguin_default_dance.on("pointerover", () => {
            interface_emoji_button_penguin_default_dance.visible = false;
            interface_emoji_button_penguin_default_dance_hover.visible = true;
        });

        interface_emoji_button_penguin_default_dance_hover.on("pointerout", () => {
            interface_emoji_button_penguin_default_dance.visible = true;
            interface_emoji_button_penguin_default_dance_hover.visible = false;
        });

        interface_emoji_button_penguin_default_dance_hover.on("pointerdown", () => {   
        });

        // interface_dance_box_trigger.on("pointerout", () => {
        //     this.sceneManager.stop(SCENE_INTERFACE_DANCE);
        // });

        // input events start here
        this.input.on("pointermove", (pointer) => {
            const x = pointer.worldX;
            const y = pointer.worldY;

            if(x < 347 && y > 880) {
                this.sceneManager.stop(SCENE_INTERFACE_DANCE);
            }

            if(x > 415 && y > 880) {
                this.sceneManager.stop(SCENE_INTERFACE_DANCE);
            }

            if(x < 314 && y < 880) {
                this.sceneManager.stop(SCENE_INTERFACE_DANCE);
            }

            if(x > 450) {
                this.sceneManager.stop(SCENE_INTERFACE_DANCE);
            }

            if(y < 450) {
                this.sceneManager.stop(SCENE_INTERFACE_DANCE);
            }

            if(y > 935) {
                this.sceneManager.stop(SCENE_INTERFACE_DANCE);
            }
        });
        // input events end here
        // All interactive events end here

        this.sceneManager.sendToTop(SCENE_INTERFACE_DANCE);
    }
}