import { BaseScene } from "../baseScene";
import { SCENE_INTERFACE_EMOJIS } from "../sceneNames";

export class InterfaceEmojiScene extends BaseScene {
    constructor() {
        super(SCENE_INTERFACE_EMOJIS);
    }

    createContent() {
        // interface_emoji_box_png
		const interface_emoji_box_png = this.add.image(320, 620, "interface", "interface_emoji_box.png");
		interface_emoji_box_png.scaleX = 1.036802767680024;
		interface_emoji_box_png.scaleY = 1.0253384801385017;

		// interface_emoji_red_heart_button
		const interface_emoji_red_heart_button = this.add.image(256, 812, "interface", "interface_emoji_button0001.png");

		// interface_emoji_lightbulb_button
		const interface_emoji_lightbulb_button = this.add.image(320, 812, "interface", "interface_emoji_button0001.png");

		// interface_emoji_yellow_flower_button
		const interface_emoji_yellow_flower_button = this.add.image(384, 812, "interface", "interface_emoji_button0001.png");

		// interface_emoji_sidewards_straight_face_button
		const interface_emoji_sidewards_straight_face_button = this.add.image(256, 748, "interface", "interface_emoji_button0001.png");

		// interface_emoji_birthday_cake_button
		const interface_emoji_birthday_cake_button = this.add.image(320, 748, "interface", "interface_emoji_button0001.png");

		// interface_emoji_green_leaf_button
		const interface_emoji_green_leaf_button = this.add.image(384, 748, "interface", "interface_emoji_button0001.png");

		// interface_emoji_angry_face_button
		const interface_emoji_angry_face_button = this.add.image(256, 684, "interface", "interface_emoji_button0001.png");

		// interface_emoji_lonely_face_button
		const interface_emoji_lonely_face_button = this.add.image(320, 684, "interface", "interface_emoji_button0001.png");

		// interface_emoji_pink_ice_cream_button
		const interface_emoji_pink_ice_cream_button = this.add.image(384, 684, "interface", "interface_emoji_button0001.png");

		// interface_emoji_wink_face_button
		const interface_emoji_wink_face_button = this.add.image(256, 620, "interface", "interface_emoji_button0001.png");

		// interface_emoji_vomit_face_button
		const interface_emoji_vomit_face_button = this.add.image(320, 620, "interface", "interface_emoji_button0001.png");

		// interface_emoji_pizza_button
		const interface_emoji_pizza_button = this.add.image(384, 620, "interface", "interface_emoji_button0001.png");

		// interface_emoji_shocked_face_button
		const interface_emoji_shocked_face_button = this.add.image(256, 556, "interface", "interface_emoji_button0001.png");

		// interface_emoji_tongue_face_button
		const interface_emoji_tongue_face_button = this.add.image(320, 556, "interface", "interface_emoji_button0001.png");

		// interface_emoji_popcorn_button
		const interface_emoji_popcorn_button = this.add.image(384, 556, "interface", "interface_emoji_button0001.png");

		// interface_emoji_straight_face_button
		const interface_emoji_straight_face_button = this.add.image(256, 492, "interface", "interface_emoji_button0001.png");

		// interface_emoji_sad_frown_face_button
		const interface_emoji_sad_frown_face_button = this.add.image(320, 492, "interface", "interface_emoji_button0001.png");

		// interface_emoji_gaming_button
		const interface_emoji_gaming_button = this.add.image(384, 492, "interface", "interface_emoji_button0001.png");

		// interface_emoji_happy_face_button
		const interface_emoji_happy_face_button = this.add.image(256, 428, "interface", "interface_emoji_button0001.png");

		// interface_emoji_smile_face_button
		const interface_emoji_smile_face_button = this.add.image(320, 428, "interface", "interface_emoji_button0001.png");

		// interface_emoji_coffee_cup_button
		const interface_emoji_coffee_cup_button = this.add.image(384, 428, "interface", "interface_emoji_button0001.png");

		// interface_emoji_happy_face_button_hover
		const interface_emoji_happy_face_button_hover = this.add.image(256, 428, "interface", "interface_emoji_button0002.png");
		interface_emoji_happy_face_button_hover.visible = false;

		// interface_emoji_smile_face_button_hover
		const interface_emoji_smile_face_button_hover = this.add.image(320, 428, "interface", "interface_emoji_button0002.png");
		interface_emoji_smile_face_button_hover.visible = false;

		// interface_emoji_coffee_cup_button_hover
		const interface_emoji_coffee_cup_button_hover = this.add.image(384, 428, "interface", "interface_emoji_button0002.png");
		interface_emoji_coffee_cup_button_hover.visible = false;

		// interface_emoji_straight_face_button_hover
		const interface_emoji_straight_face_button_hover = this.add.image(256, 492, "interface", "interface_emoji_button0002.png");
		interface_emoji_straight_face_button_hover.visible = false;

		// interface_emoji_sad_frown_face_button_hover
		const interface_emoji_sad_frown_face_button_hover = this.add.image(320, 492, "interface", "interface_emoji_button0002.png");
		interface_emoji_sad_frown_face_button_hover.visible = false;

		// interface_emoji_gaming_button_hover
		const interface_emoji_gaming_button_hover = this.add.image(384, 492, "interface", "interface_emoji_button0002.png");
		interface_emoji_gaming_button_hover.visible = false;

		// interface_emoji_shocked_face_button_hover
		const interface_emoji_shocked_face_button_hover = this.add.image(256, 556, "interface", "interface_emoji_button0002.png");
		interface_emoji_shocked_face_button_hover.visible = false;

		// interface_emoji_tongue_face_button_hover
		const interface_emoji_tongue_face_button_hover = this.add.image(320, 556, "interface", "interface_emoji_button0002.png");
		interface_emoji_tongue_face_button_hover.visible = false;

		// interface_emoji_popcorn_button_hover
		const interface_emoji_popcorn_button_hover = this.add.image(384, 556, "interface", "interface_emoji_button0002.png");
		interface_emoji_popcorn_button_hover.visible = false;

		// interface_emoji_wink_face_button_hover
		const interface_emoji_wink_face_button_hover = this.add.image(256, 620, "interface", "interface_emoji_button0002.png");
		interface_emoji_wink_face_button_hover.visible = false;

		// interface_emoji_vomit_face_button_hover
		const interface_emoji_vomit_face_button_hover = this.add.image(320, 620, "interface", "interface_emoji_button0002.png");
		interface_emoji_vomit_face_button_hover.visible = false;

		// interface_emoji_pizza_button_hover
		const interface_emoji_pizza_button_hover = this.add.image(384, 620, "interface", "interface_emoji_button0002.png");
		interface_emoji_pizza_button_hover.visible = false;

		// interface_emoji_angry_face_button_hover
		const interface_emoji_angry_face_button_hover = this.add.image(256, 684, "interface", "interface_emoji_button0002.png");
		interface_emoji_angry_face_button_hover.visible = false;

		// interface_emoji_lonely_face_button_hover
		const interface_emoji_lonely_face_button_hover = this.add.image(320, 684, "interface", "interface_emoji_button0002.png");
		interface_emoji_lonely_face_button_hover.visible = false;

		// interface_emoji_pink_ice_cream_button_hover
		const interface_emoji_pink_ice_cream_button_hover = this.add.image(384, 684, "interface", "interface_emoji_button0002.png");
		interface_emoji_pink_ice_cream_button_hover.visible = false;

		// interface_emoji_sidewards_straight_face_button_hover
		const interface_emoji_sidewards_straight_face_button_hover = this.add.image(256, 748, "interface", "interface_emoji_button0002.png");
		interface_emoji_sidewards_straight_face_button_hover.visible = false;

		// interface_emoji_birthday_cake_button_hover
		const interface_emoji_birthday_cake_button_hover = this.add.image(320, 748, "interface", "interface_emoji_button0002.png");
		interface_emoji_birthday_cake_button_hover.visible = false;

		// interface_emoji_green_leaf_button_hover
		const interface_emoji_green_leaf_button_hover = this.add.image(384, 748, "interface", "interface_emoji_button0002.png");
		interface_emoji_green_leaf_button_hover.visible = false;

		// interface_emoji_red_heart_button_hover
		const interface_emoji_red_heart_button_hover = this.add.image(256, 812, "interface", "interface_emoji_button0002.png");
		interface_emoji_red_heart_button_hover.visible = false;

		// interface_emoji_lightbulb_button_hover
		const interface_emoji_lightbulb_button_hover = this.add.image(320, 812, "interface", "interface_emoji_button0002.png");
		interface_emoji_lightbulb_button_hover.visible = false;

		// interface_emoji_yellow_flower_button_hover
		const interface_emoji_yellow_flower_button_hover = this.add.image(384, 812, "interface", "interface_emoji_button0002.png");
		interface_emoji_yellow_flower_button_hover.visible = false;

		// interface_emoji_happy_face_icon
		const interface_emoji_happy_face_icon = this.add.image(255, 425, "interface", "interface_emoji_happy_face0001.png");
		interface_emoji_happy_face_icon.scaleX = 0.8504544147534642;
		interface_emoji_happy_face_icon.scaleY = 0.8217306663746075;

		// interface_emoji_smile_face_icon
		const interface_emoji_smile_face_icon = this.add.image(319, 425, "interface", "interface_emoji_happy_face0002.png");
		interface_emoji_smile_face_icon.scaleX = 0.8504544147534642;
		interface_emoji_smile_face_icon.scaleY = 0.8504544147534642;

		// interface_emoji_coffee_cup_icon
		const interface_emoji_coffee_cup_icon = this.add.image(385, 425, "interface", "interface_emoji_happy_face0013.png");
		interface_emoji_coffee_cup_icon.scaleX = 0.8504544147534642;
		interface_emoji_coffee_cup_icon.scaleY = 0.8504544147534642;

		// interface_emoji_straight_face_icon
		const interface_emoji_straight_face_icon = this.add.image(255, 489, "interface", "interface_emoji_happy_face0003.png");
		interface_emoji_straight_face_icon.scaleX = 0.8504544147534642;
		interface_emoji_straight_face_icon.scaleY = 0.8217306663746075;

		// interface_emoji_sad_frown_face_icon
		const interface_emoji_sad_frown_face_icon = this.add.image(319, 489, "interface", "interface_emoji_happy_face0004.png");
		interface_emoji_sad_frown_face_icon.scaleX = 0.8504544147534642;
		interface_emoji_sad_frown_face_icon.scaleY = 0.8217306663746075;

		// interface_emoji_gaming_icon
		const interface_emoji_gaming_icon = this.add.image(383, 489, "interface", "interface_emoji_happy_face0018.png");
		interface_emoji_gaming_icon.scaleX = 0.8504544147534642;
		interface_emoji_gaming_icon.scaleY = 0.8217306663746075;

		// interface_emoji_shocked_face_icon
		const interface_emoji_shocked_face_icon = this.add.image(255, 554, "interface", "interface_emoji_happy_face0005.png");
		interface_emoji_shocked_face_icon.scaleX = 0.8504544147534642;
		interface_emoji_shocked_face_icon.scaleY = 0.8217306663746075;

		// interface_emoji_tongue_face_icon
		const interface_emoji_tongue_face_icon = this.add.image(319, 554, "interface", "interface_emoji_happy_face0006.png");
		interface_emoji_tongue_face_icon.scaleX = 0.8504544147534642;
		interface_emoji_tongue_face_icon.scaleY = 0.8217306663746075;

		// interface_emoji_popcorn_icon
		const interface_emoji_popcorn_icon = this.add.image(383, 556, "interface", "interface_emoji_happy_face0029.png");
		interface_emoji_popcorn_icon.scaleX = 0.786240357588246;
		interface_emoji_popcorn_icon.scaleY = 0.7316268545415423;

		// interface_emoji_wink_face_icon
		const interface_emoji_wink_face_icon = this.add.image(255, 618, "interface", "interface_emoji_happy_face0007.png");
		interface_emoji_wink_face_icon.scaleX = 0.8504544147534642;
		interface_emoji_wink_face_icon.scaleY = 0.8217306663746075;

		// interface_emoji_vomit_face_icon
		const interface_emoji_vomit_face_icon = this.add.image(319, 618, "interface", "interface_emoji_happy_face0008.png");
		interface_emoji_vomit_face_icon.scaleX = 0.8504544147534642;
		interface_emoji_vomit_face_icon.scaleY = 0.8217306663746075;

		// interface_emoji_pizza_icon
		const interface_emoji_pizza_icon = this.add.image(381, 618, "interface", "interface_emoji_happy_face0024.png");
		interface_emoji_pizza_icon.scaleX = 0.8504544147534642;
		interface_emoji_pizza_icon.scaleY = 0.8217306663746075;

		// interface_emoji_angry_face_icon
		const interface_emoji_angry_face_icon = this.add.image(255, 682, "interface", "interface_emoji_happy_face0009.png");
		interface_emoji_angry_face_icon.scaleX = 0.8504544147534642;
		interface_emoji_angry_face_icon.scaleY = 0.8217306663746075;

		// interface_emoji_lonely_face_icon
		const interface_emoji_lonely_face_icon = this.add.image(319, 682, "interface", "interface_emoji_happy_face0010.png");
		interface_emoji_lonely_face_icon.scaleX = 0.8504544147534642;
		interface_emoji_lonely_face_icon.scaleY = 0.8217306663746075;

		// interface_emoji_pink_ice_cream_icon
		const interface_emoji_pink_ice_cream_icon = this.add.image(384, 682, "interface", "interface_emoji_happy_face0026.png");
		interface_emoji_pink_ice_cream_icon.scaleX = 0.8504544147534642;
		interface_emoji_pink_ice_cream_icon.scaleY = 0.8217306663746075;

		// interface_emoji_sidewards_straight_face_icon
		const interface_emoji_sidewards_straight_face_icon = this.add.image(255, 746, "interface", "interface_emoji_happy_face0011.png");
		interface_emoji_sidewards_straight_face_icon.scaleX = 0.8504544147534642;
		interface_emoji_sidewards_straight_face_icon.scaleY = 0.8217306663746075;

		// interface_emoji_birthday_cake_icon
		const interface_emoji_birthday_cake_icon = this.add.image(319, 746, "interface", "interface_emoji_happy_face0028.png");
		interface_emoji_birthday_cake_icon.scaleX = 0.8504544147534642;
		interface_emoji_birthday_cake_icon.scaleY = 0.8217306663746075;

		// interface_emoji_green_leaf_icon
		const interface_emoji_green_leaf_icon = this.add.image(384, 745, "interface", "interface_emoji_happy_face0017.png");
		interface_emoji_green_leaf_icon.scaleX = 0.8504544147534642;
		interface_emoji_green_leaf_icon.scaleY = 0.8217306663746075;

		// interface_emoji_red_heart_icon
		const interface_emoji_red_heart_icon = this.add.image(255, 810, "interface", "interface_emoji_happy_face0030.png");
		interface_emoji_red_heart_icon.scaleX = 0.8504544147534642;
		interface_emoji_red_heart_icon.scaleY = 0.8217306663746075;

		// interface_emoji_lightbulb_icon
		const interface_emoji_lightbulb_icon = this.add.image(319, 810, "interface", "interface_emoji_happy_face0012.png");
		interface_emoji_lightbulb_icon.scaleX = 0.8504544147534642;
		interface_emoji_lightbulb_icon.scaleY = 0.8217306663746075;

		// interface_emoji_yellow_flower_icon
		const interface_emoji_yellow_flower_icon = this.add.image(384, 810, "interface", "interface_emoji_happy_face0016.png");
		interface_emoji_yellow_flower_icon.scaleX = 0.7797032709742509;
		interface_emoji_yellow_flower_icon.scaleY = 0.7515722065298248;

        // Setting all interactives sprites starts here
        interface_emoji_happy_face_button.setInteractive({ useHandCursor: true });
        interface_emoji_happy_face_button_hover.setInteractive({ useHandCursor: true });
        interface_emoji_smile_face_button.setInteractive({ useHandCursor: true });
        interface_emoji_smile_face_button_hover.setInteractive({ useHandCursor: true });
        interface_emoji_coffee_cup_button.setInteractive({ useHandCursor: true });
        interface_emoji_coffee_cup_button_hover.setInteractive({ useHandCursor: true });
        interface_emoji_straight_face_button.setInteractive({ useHandCursor: true });
        interface_emoji_straight_face_button_hover.setInteractive({ useHandCursor: true });
        interface_emoji_sad_frown_face_button.setInteractive({ useHandCursor: true });
        interface_emoji_sad_frown_face_button_hover.setInteractive({ useHandCursor: true });
        interface_emoji_gaming_button.setInteractive({ useHandCursor: true });
        interface_emoji_gaming_button_hover.setInteractive({ useHandCursor: true });
        interface_emoji_shocked_face_button.setInteractive({ useHandCursor: true });
        interface_emoji_shocked_face_button_hover.setInteractive({ useHandCursor: true });
        interface_emoji_tongue_face_button.setInteractive({ useHandCursor: true });
        interface_emoji_tongue_face_button_hover.setInteractive({ useHandCursor: true });
        interface_emoji_popcorn_button.setInteractive({ useHandCursor: true });
        interface_emoji_popcorn_button_hover.setInteractive({ useHandCursor: true });
        interface_emoji_wink_face_button.setInteractive({ useHandCursor: true });
        interface_emoji_wink_face_button_hover.setInteractive({ useHandCursor: true });
        interface_emoji_vomit_face_button.setInteractive({ useHandCursor: true });
        interface_emoji_vomit_face_button_hover.setInteractive({ useHandCursor: true });
        interface_emoji_pizza_button.setInteractive({ useHandCursor: true });
        interface_emoji_pizza_button_hover.setInteractive({ useHandCursor: true });
        interface_emoji_angry_face_button.setInteractive({ useHandCursor: true });
        interface_emoji_angry_face_button_hover.setInteractive({ useHandCursor: true });
        interface_emoji_lonely_face_button.setInteractive({ useHandCursor: true });
        interface_emoji_lonely_face_button_hover.setInteractive({ useHandCursor: true });
        interface_emoji_pink_ice_cream_button.setInteractive({ useHandCursor: true });
        interface_emoji_pink_ice_cream_button_hover.setInteractive({ useHandCursor: true });
        interface_emoji_sidewards_straight_face_button.setInteractive({ useHandCursor: true });
        interface_emoji_sidewards_straight_face_button_hover.setInteractive({ useHandCursor: true });
        interface_emoji_birthday_cake_button.setInteractive({ useHandCursor: true });
        interface_emoji_birthday_cake_button_hover.setInteractive({ useHandCursor: true });
        interface_emoji_green_leaf_button.setInteractive({ useHandCursor: true });
        interface_emoji_green_leaf_button_hover.setInteractive({ useHandCursor: true });
        interface_emoji_red_heart_button.setInteractive({ useHandCursor: true });
        interface_emoji_red_heart_button_hover.setInteractive({ useHandCursor: true });
        interface_emoji_lightbulb_button.setInteractive({ useHandCursor: true });
        interface_emoji_lightbulb_button_hover.setInteractive({ useHandCursor: true });
        interface_emoji_yellow_flower_button.setInteractive({ useHandCursor: true });
        interface_emoji_yellow_flower_button_hover.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        // Happy Face
        interface_emoji_happy_face_button.on("pointerover", () => {
            interface_emoji_happy_face_button.visible = false;
            interface_emoji_happy_face_button_hover.visible = true;
        });

        interface_emoji_happy_face_button_hover.on("pointerout", () => {
            interface_emoji_happy_face_button.visible = true;
            interface_emoji_happy_face_button_hover.visible = false;
        });

        interface_emoji_happy_face_button_hover.on("pointerdown", () => {
            console.log("yay")
        });

        // Smile Face
        interface_emoji_smile_face_button.on("pointerover", () => {
            interface_emoji_smile_face_button.visible = false;
            interface_emoji_smile_face_button_hover.visible = true;
        });

        interface_emoji_smile_face_button_hover.on("pointerout", () => {
            interface_emoji_smile_face_button.visible = true;
            interface_emoji_smile_face_button_hover.visible = false;
        });

        interface_emoji_smile_face_button_hover.on("pointerdown", () => {
            console.log("smile face clicked");
        });

        // Coffee Cup
        interface_emoji_coffee_cup_button.on("pointerover", () => {
            interface_emoji_coffee_cup_button.visible = false;
            interface_emoji_coffee_cup_button_hover.visible = true;
        });

        interface_emoji_coffee_cup_button_hover.on("pointerout", () => {
            interface_emoji_coffee_cup_button.visible = true;
            interface_emoji_coffee_cup_button_hover.visible = false;
        });

        interface_emoji_coffee_cup_button_hover.on("pointerdown", () => {
            console.log("coffee cup clicked");
        });

        // Straight Face
        interface_emoji_straight_face_button.on("pointerover", () => {
            interface_emoji_straight_face_button.visible = false;
            interface_emoji_straight_face_button_hover.visible = true;
        });

        interface_emoji_straight_face_button_hover.on("pointerout", () => {
            interface_emoji_straight_face_button.visible = true;
            interface_emoji_straight_face_button_hover.visible = false;
        });

        interface_emoji_straight_face_button_hover.on("pointerdown", () => {
            console.log("straight face clicked");
        });

        // Sad Frown Face
        interface_emoji_sad_frown_face_button.on("pointerover", () => {
            interface_emoji_sad_frown_face_button.visible = false;
            interface_emoji_sad_frown_face_button_hover.visible = true;
        });

        interface_emoji_sad_frown_face_button_hover.on("pointerout", () => {
            interface_emoji_sad_frown_face_button.visible = true;
            interface_emoji_sad_frown_face_button_hover.visible = false;
        });

        interface_emoji_sad_frown_face_button_hover.on("pointerdown", () => {
            console.log("sad frown face clicked");
        });

        // Gaming
        interface_emoji_gaming_button.on("pointerover", () => {
            interface_emoji_gaming_button.visible = false;
            interface_emoji_gaming_button_hover.visible = true;
        });

        interface_emoji_gaming_button_hover.on("pointerout", () => {
            interface_emoji_gaming_button.visible = true;
            interface_emoji_gaming_button_hover.visible = false;
        });

        interface_emoji_gaming_button_hover.on("pointerdown", () => {
            console.log("gaming clicked");
        });

        // Shocked Face
        interface_emoji_shocked_face_button.on("pointerover", () => {
            interface_emoji_shocked_face_button.visible = false;
            interface_emoji_shocked_face_button_hover.visible = true;
        });

        interface_emoji_shocked_face_button_hover.on("pointerout", () => {
            interface_emoji_shocked_face_button.visible = true;
            interface_emoji_shocked_face_button_hover.visible = false;
        });

        interface_emoji_shocked_face_button_hover.on("pointerdown", () => {
            console.log("shocked face clicked");
        });

        // Tongue Face
        interface_emoji_tongue_face_button.on("pointerover", () => {
            interface_emoji_tongue_face_button.visible = false;
            interface_emoji_tongue_face_button_hover.visible = true;
        });

        interface_emoji_tongue_face_button_hover.on("pointerout", () => {
            interface_emoji_tongue_face_button.visible = true;
            interface_emoji_tongue_face_button_hover.visible = false;
        });

        interface_emoji_tongue_face_button_hover.on("pointerdown", () => {
            console.log("tongue face clicked");
        });

        // Popcorn
        interface_emoji_popcorn_button.on("pointerover", () => {
            interface_emoji_popcorn_button.visible = false;
            interface_emoji_popcorn_button_hover.visible = true;
        });

        interface_emoji_popcorn_button_hover.on("pointerout", () => {
            interface_emoji_popcorn_button.visible = true;
            interface_emoji_popcorn_button_hover.visible = false;
        });

        interface_emoji_popcorn_button_hover.on("pointerdown", () => {
            console.log("popcorn clicked");
        });

        // Wink Face
        interface_emoji_wink_face_button.on("pointerover", () => {
            interface_emoji_wink_face_button.visible = false;
            interface_emoji_wink_face_button_hover.visible = true;
        });

        interface_emoji_wink_face_button_hover.on("pointerout", () => {
            interface_emoji_wink_face_button.visible = true;
            interface_emoji_wink_face_button_hover.visible = false;
        });

        interface_emoji_wink_face_button_hover.on("pointerdown", () => {
            console.log("wink face clicked");
        });

        // Vomit Face
        interface_emoji_vomit_face_button.on("pointerover", () => {
            interface_emoji_vomit_face_button.visible = false;
            interface_emoji_vomit_face_button_hover.visible = true;
        });

        interface_emoji_vomit_face_button_hover.on("pointerout", () => {
            interface_emoji_vomit_face_button.visible = true;
            interface_emoji_vomit_face_button_hover.visible = false;
        });

        interface_emoji_vomit_face_button_hover.on("pointerdown", () => {
            console.log("vomit face clicked");
        });

        // Pizza
        interface_emoji_pizza_button.on("pointerover", () => {
            interface_emoji_pizza_button.visible = false;
            interface_emoji_pizza_button_hover.visible = true;
        });

        interface_emoji_pizza_button_hover.on("pointerout", () => {
            interface_emoji_pizza_button.visible = true;
            interface_emoji_pizza_button_hover.visible = false;
        });

        interface_emoji_pizza_button_hover.on("pointerdown", () => {
            console.log("pizza clicked");
        });

        // Angry Face
        interface_emoji_angry_face_button.on("pointerover", () => {
            interface_emoji_angry_face_button.visible = false;
            interface_emoji_angry_face_button_hover.visible = true;
        });

        interface_emoji_angry_face_button_hover.on("pointerout", () => {
            interface_emoji_angry_face_button.visible = true;
            interface_emoji_angry_face_button_hover.visible = false;
        });

        interface_emoji_angry_face_button_hover.on("pointerdown", () => {
            console.log("angry face clicked");
        });

        // Lonely Face
        interface_emoji_lonely_face_button.on("pointerover", () => {
            interface_emoji_lonely_face_button.visible = false;
            interface_emoji_lonely_face_button_hover.visible = true;
        });

        interface_emoji_lonely_face_button_hover.on("pointerout", () => {
            interface_emoji_lonely_face_button.visible = true;
            interface_emoji_lonely_face_button_hover.visible = false;
        });

        interface_emoji_lonely_face_button_hover.on("pointerdown", () => {
            console.log("lonely face clicked");
        });

        // Pink Ice Cream
        interface_emoji_pink_ice_cream_button.on("pointerover", () => {
            interface_emoji_pink_ice_cream_button.visible = false;
            interface_emoji_pink_ice_cream_button_hover.visible = true;
        });

        interface_emoji_pink_ice_cream_button_hover.on("pointerout", () => {
            interface_emoji_pink_ice_cream_button.visible = true;
            interface_emoji_pink_ice_cream_button_hover.visible = false;
        });

        interface_emoji_pink_ice_cream_button_hover.on("pointerdown", () => {
            console.log("pink ice cream clicked");
        });

        // Sidewards Straight Face
        interface_emoji_sidewards_straight_face_button.on("pointerover", () => {
            interface_emoji_sidewards_straight_face_button.visible = false;
            interface_emoji_sidewards_straight_face_button_hover.visible = true;
        });

        interface_emoji_sidewards_straight_face_button_hover.on("pointerout", () => {
            interface_emoji_sidewards_straight_face_button.visible = true;
            interface_emoji_sidewards_straight_face_button_hover.visible = false;
        });

        interface_emoji_sidewards_straight_face_button_hover.on("pointerdown", () => {
            console.log("sidewards straight face clicked");
        });

        // Birthday Cake
        interface_emoji_birthday_cake_button.on("pointerover", () => {
            interface_emoji_birthday_cake_button.visible = false;
            interface_emoji_birthday_cake_button_hover.visible = true;
        });

        interface_emoji_birthday_cake_button_hover.on("pointerout", () => {
            interface_emoji_birthday_cake_button.visible = true;
            interface_emoji_birthday_cake_button_hover.visible = false;
        });

        interface_emoji_birthday_cake_button_hover.on("pointerdown", () => {
            console.log("birthday cake clicked");
        });

        // Green Leaf
        interface_emoji_green_leaf_button.on("pointerover", () => {
            interface_emoji_green_leaf_button.visible = false;
            interface_emoji_green_leaf_button_hover.visible = true;
        });

        interface_emoji_green_leaf_button_hover.on("pointerout", () => {
            interface_emoji_green_leaf_button.visible = true;
            interface_emoji_green_leaf_button_hover.visible = false;
        });

        interface_emoji_green_leaf_button_hover.on("pointerdown", () => {
            console.log("green leaf clicked");
        });

        // Red Heart
        interface_emoji_red_heart_button.on("pointerover", () => {
            interface_emoji_red_heart_button.visible = false;
            interface_emoji_red_heart_button_hover.visible = true;
        });

        interface_emoji_red_heart_button_hover.on("pointerout", () => {
            interface_emoji_red_heart_button.visible = true;
            interface_emoji_red_heart_button_hover.visible = false;
        });

        interface_emoji_red_heart_button_hover.on("pointerdown", () => {
            console.log("red heart clicked");
        });

        // Lightbulb
        interface_emoji_lightbulb_button.on("pointerover", () => {
            interface_emoji_lightbulb_button.visible = false;
            interface_emoji_lightbulb_button_hover.visible = true;
        });

        interface_emoji_lightbulb_button_hover.on("pointerout", () => {
            interface_emoji_lightbulb_button.visible = true;
            interface_emoji_lightbulb_button_hover.visible = false;
        });

        interface_emoji_lightbulb_button_hover.on("pointerdown", () => {
            console.log("lightbulb clicked");
        });

        // Yellow Flower
        interface_emoji_yellow_flower_button.on("pointerover", () => {
            interface_emoji_yellow_flower_button.visible = false;
            interface_emoji_yellow_flower_button_hover.visible = true;
        });

        interface_emoji_yellow_flower_button_hover.on("pointerout", () => {
            interface_emoji_yellow_flower_button.visible = true;
            interface_emoji_yellow_flower_button_hover.visible = false;
        });

        interface_emoji_yellow_flower_button_hover.on("pointerdown", () => {
            console.log("yellow flower clicked");
        });
        // All interactive events ends here

        // input events start here
        this.input.on("pointermove", (pointer) => {
            const x = pointer.worldX;
            const y = pointer.worldY;

            if(x <= 280 && y > 870) {
                this.sceneManager.stop(SCENE_INTERFACE_EMOJIS);
            }

            if(x >= 350 && y > 870) {
                this.sceneManager.stop(SCENE_INTERFACE_EMOJIS);
            }

            if(x <= 217 || x >= 428) {
                this.sceneManager.stop(SCENE_INTERFACE_EMOJIS);
            }

            if(y <= 376 || y >= 955) {
                this.sceneManager.stop(SCENE_INTERFACE_EMOJIS);
            }
        });
        // input events end here

        this.sceneManager.sendToTop(SCENE_INTERFACE_EMOJIS);
    }
}