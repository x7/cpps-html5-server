import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { MINE_LIGHT_OFF, MINE_LIGHT_ON, MINE_MINE_CART_INCOMING, MINE_TELEPHONE_RING } from "../../../../audio/audioConstants";
import { SCENE_ROOM_MINE } from "../../../sceneNames";
import { RoomScene } from "../RoomScene";

// TODO: Add music
// TODO: Fix some incorrectly positioned hover images

export class MineScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_MINE);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {  
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "mine",
            "paths": ["assets/world/rooms/mine/mine-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": MINE_LIGHT_ON,
            "paths": [`assets/world/rooms/mine/${MINE_LIGHT_ON}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": MINE_LIGHT_OFF,
            "paths": [`assets/world/rooms/mine/${MINE_LIGHT_OFF}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": MINE_MINE_CART_INCOMING,
            "paths": [`assets/world/rooms/mine/${MINE_MINE_CART_INCOMING}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": MINE_TELEPHONE_RING,
            "paths": [`assets/world/rooms/mine/${MINE_TELEPHONE_RING}.mp3`]
        });
    }

    createContent() {
// mine_background_png
		const mine_background_png = this.add.image(785, 467, "mine", "mine_background.png");

		// mine_puffle_rescue_board0001_png
		const mine_puffle_rescue_board0001_png = this.add.image(510, 95, "mine", "mine_puffle_rescue_board0001.png");

		// mine_puffle_rescue_board0002_png
		const mine_puffle_rescue_board0002_png = this.add.image(510, 95, "mine", "mine_puffle_rescue_board0002.png");
		mine_puffle_rescue_board0002_png.visible = false;

		// mine_underground_pool_door_light_png
		const mine_underground_pool_door_light_png = this.add.image(165, 338, "mine", "mine_underground_pool_door_light.png");
		mine_underground_pool_door_light_png.scaleX = 1.0411838528385315;
		mine_underground_pool_door_light_png.visible = false;

		// mine_left_side_png
		const mine_left_side_png = this.add.image(377, 312, "mine", "mine_left_side.png");
		mine_left_side_png.scaleX = 1.2159107188035907;

		// mine_rock_7_png
		const mine_rock_7_png = this.add.image(93, 604, "mine", "mine_rock_7.png");
		mine_rock_7_png.scaleX = 1.1686213035302462;
		mine_rock_7_png.scaleY = 1.3650476533305915;

		// mine_rock_6_png
		const mine_rock_6_png = this.add.image(354, 825, "mine", "mine_rock_6.png");

		// mine_mine_cart0001_png
		const mine_mine_cart0001_png = this.add.sprite(1415, 306, "mine", "mine_mine_cart0001.png");

		// mine_rock_8_png
		const mine_rock_8_png = this.add.image(993, 832, "mine", "mine_rock_8.png");

		// mine_cart_surfer_wall_left_png
		const mine_cart_surfer_wall_left_png = this.add.image(1172, 288, "mine", "mine_cart_surfer_wall_left.png");

		// mine_cart_surfer_wall_png
		const mine_cart_surfer_wall_png = this.add.image(1223, 280, "mine", "mine_cart_surfer_wall.png");

		// mine_gold_mine_door0001_png
		const mine_gold_mine_door0001_png = this.add.image(1231, 654, "mine", "mine_gold_mine_door0001.png");

		// mine_gold_mine_door_hovered0001_png
		const mine_gold_mine_door_hovered0001_png = this.add.image(1289, 754, "mine", "mine_gold_mine_door_hovered0001.png");
		mine_gold_mine_door_hovered0001_png.visible = false;

		// mine_bottomo_png
		const mine_bottomo_png = this.add.image(777, 464, "mine", "mine_bottomo.png");

		// mine_rock_1_png
		const mine_rock_1_png = this.add.image(439, 787, "mine", "mine_rock_1.png");

		// mine_rock_2_png
		const mine_rock_2_png = this.add.image(507, 834, "mine", "mine_rock_2.png");

		// mine_rock_5_png
		const mine_rock_5_png = this.add.image(453, 567, "mine", "mine_rock_5.png");

		// mine_rock_3_png
		const mine_rock_3_png = this.add.image(295, 468, "mine", "mine_rock_3.png");

		// mine_med_kit_png
		const mine_med_kit_png = this.add.image(363, 500, "mine", "mine_med_kit.png");

		// mine_rock_4_png
		const mine_rock_4_png = this.add.image(418, 541, "mine", "mine_rock_4.png");

		// mine_exit_door_light_png
		const mine_exit_door_light_png = this.add.image(849, 196, "mine", "mine_exit_door_light.png");
		mine_exit_door_light_png.scaleX = 1.000149399555367;

		// mine_exit_door_overlay_png
		const mine_exit_door_overlay_png = this.add.image(805, 183, "mine", "mine_exit_door_overlay.png");

		// mine_puffle_rescue_table_png
		const mine_puffle_rescue_table_png = this.add.image(517, 361, "mine", "mine_puffle_rescue_table.png");

		// mine_black_puffle_seat_png
		const mine_black_puffle_seat_png = this.add.image(384, 409, "mine", "mine_black_puffle_seat.png");

		// mine_black_puffle0001_png
		const mine_black_puffle0001_png = this.add.sprite(385, 392, "mine", "mine_black_puffle0001.png");

		// mine_mine_cart_no_animm_png
		const mine_mine_cart_no_animm_png = this.add.image(1181, 400, "mine", "mine_mine_cart_no_animm.png");

		// mine_puffle_rescue_sign_png
		const mine_puffle_rescue_sign_png = this.add.image(506, 95, "mine", "mine_puffle_rescue_sign.png");
		mine_puffle_rescue_sign_png.scaleX = 0.989692350246752;
		mine_puffle_rescue_sign_png.scaleY = 0.8833221835905611;

		// mine_puffle_rescue_text0001_png
		const mine_puffle_rescue_text0001_png = this.add.image(483, 92, "mine", "mine_puffle_rescue_text0001.png");

		// mine_cart_surfer_text0001_png
		const mine_cart_surfer_text0001_png = this.add.image(1215, 185, "mine", "mine_cart_surfer_text0001.png");

		// mine_cart_surfer_trigger0004_png
		const mine_cart_surfer_trigger0004_png = this.add.image(1352, 203, "mine", "mine_cart_surfer_trigger0004.png");
		mine_cart_surfer_trigger0004_png.alpha = 0.001;
		mine_cart_surfer_trigger0004_png.alphaTopLeft = 0.001;
		mine_cart_surfer_trigger0004_png.alphaTopRight = 0.001;
		mine_cart_surfer_trigger0004_png.alphaBottomLeft = 0.001;
		mine_cart_surfer_trigger0004_png.alphaBottomRight = 0.001;

		// mine_puffle_rescue_trigger
		const mine_puffle_rescue_trigger = this.add.rectangle(481, 224, 128, 128);
		mine_puffle_rescue_trigger.scaleX = 1.8709229674343564;
		mine_puffle_rescue_trigger.scaleY = 2.5478780177969442;
		mine_puffle_rescue_trigger.alpha = 0.001;
		mine_puffle_rescue_trigger.isFilled = true;

		// mine_mineshack_door_trigger
		const mine_mineshack_door_trigger = this.add.ellipse(848, 212, 128, 128);
		mine_mineshack_door_trigger.scaleX = 2.43617095904557;
		mine_mineshack_door_trigger.scaleY = 1.8067930955738416;
		mine_mineshack_door_trigger.alpha = 0.001;
		mine_mineshack_door_trigger.isFilled = true;

		// mine_gold_mine_door0004_png
		const mine_gold_mine_door0004_png = this.add.image(1282, 886, "mine", "mine_gold_mine_door0004.png");
		mine_gold_mine_door0004_png.alpha = 0.001;
		mine_gold_mine_door0004_png.alphaTopLeft = 0.001;
		mine_gold_mine_door0004_png.alphaTopRight = 0.001;
		mine_gold_mine_door0004_png.alphaBottomLeft = 0.001;
		mine_gold_mine_door0004_png.alphaBottomRight = 0.001;

		// mine_underground_pool_trigger
		const mine_underground_pool_trigger = this.add.rectangle(160, 330, 128, 128);
		mine_underground_pool_trigger.scaleX = 1.472917760639545;
		mine_underground_pool_trigger.scaleY = 2.9508694701570555;
		mine_underground_pool_trigger.alpha = 0.001;
		mine_underground_pool_trigger.isFilled = true;

        // Creating animations starts here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "mine_cart_surfer_incoming_animation",
            "phaserAnimationKey": "mine_cart_surfer_incoming_animation_play",
            "textureKey": "mine",
            "framePrefix": "mine_mine_cart",
            "frames": Array.from({ length: 7 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "mine_black_puffle_animation",
            "phaserAnimationKey": "mine_black_puffle_animation_play",
            "textureKey": "mine",
            "framePrefix": "mine_black_puffle",
            "frames": Array.from({ length: 67 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        mine_black_puffle0001_png.play("mine_black_puffle_animation_play");
        // Creating animations ends here

        // Setting all interactives sprites starts here
        mine_cart_surfer_trigger0004_png.setInteractive({ useHandCursor: true });
        mine_puffle_rescue_trigger.setInteractive({ useHandCursor: true });
        mine_mineshack_door_trigger.setInteractive({ useHandCursor: true });
        mine_gold_mine_door0004_png.setInteractive({ useHandCursor: true });
        mine_underground_pool_trigger.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        mine_cart_surfer_trigger0004_png.on("pointerover", () => {
            mine_mine_cart0001_png.play("mine_cart_surfer_incoming_animation_play");
            this.audioManager.play(MINE_MINE_CART_INCOMING);
        });

        mine_cart_surfer_trigger0004_png.on("pointerout", () => {
            mine_mine_cart0001_png.stop();
            mine_mine_cart0001_png.setFrame("mine_mine_cart0001.png");
        });

        mine_puffle_rescue_trigger.on("pointerover", () => {
            mine_puffle_rescue_board0001_png.visible = false;
            mine_puffle_rescue_board0002_png.visible = true;
            this.audioManager.play(MINE_TELEPHONE_RING);
        });

        mine_puffle_rescue_trigger.on("pointerout", () => {
            mine_puffle_rescue_board0001_png.visible = true;
            mine_puffle_rescue_board0002_png.visible = false;
        });

        mine_mineshack_door_trigger.on("pointerover", () => {
            mine_exit_door_light_png.visible = true;
            this.audioManager.play(MINE_LIGHT_ON);
        });

        mine_mineshack_door_trigger.on("pointerout", () => {
            mine_exit_door_light_png.visible = false;
            this.audioManager.play(MINE_LIGHT_OFF);
        });

        mine_gold_mine_door0004_png.on("pointerover", () => {
            mine_gold_mine_door_hovered0001_png.visible = true;
            this.audioManager.play(MINE_LIGHT_ON);
        });

        mine_gold_mine_door0004_png.on("pointerout", () => {
            mine_gold_mine_door_hovered0001_png.visible = false;
            this.audioManager.play(MINE_LIGHT_OFF);
        });

        mine_underground_pool_trigger.on("pointerover", () => {
            mine_underground_pool_door_light_png.visible = true;
            this.audioManager.play(MINE_LIGHT_ON);
        });

        mine_underground_pool_trigger.on("pointerout", () => {
            mine_underground_pool_door_light_png.visible = false;
            this.audioManager.play(MINE_LIGHT_OFF)
        });
        // All interactive events ends here
    }
}