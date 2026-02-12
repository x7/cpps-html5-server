import { createAnimation } from "../../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../../assets/assetTypes";
import { DOJO_WATER_ROOM_MUSIC } from "../../../../../audio/audioConstants";
import { SCENE_ROOM_DOJO, SCENE_ROOM_WATER_DOJO } from "../../../../sceneNames";
import { onJoinRoomTrigger } from "../../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../../triggers/walkingTrigger";
import { RoomScene } from "../../RoomScene";

export class WaterDojoScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_WATER_DOJO);
    }

    init(data) {
		super.init(data);

		// Globals
        this.assetPath = "assets/world/rooms/dojo/waterdojo/";
        this.textureKey = "dojowater";
    }

    preloadContent() {
		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": this.textureKey,
            "paths": [`${this.assetPath}${this.textureKey}-pack.json`]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "water_dojo_walking_trigger",
            "paths": [`${this.assetPath}water_dojo_walking_trigger.png`]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": DOJO_WATER_ROOM_MUSIC,
            "paths": [`${this.assetPath}${DOJO_WATER_ROOM_MUSIC}.mp3`]
        });
    }

    createContent() {
		// water_dojo_background_png
		const water_dojo_background_png = this.add.image(0, -5, "dojowater", "water_dojo_background.png");
		water_dojo_background_png.setOrigin(0, 0);

		// water_dojo_instructions_wall_png
		const water_dojo_instructions_wall_png = this.add.image(1309, 426, "dojowater", "water_dojo_instructions_wall.png");
		water_dojo_instructions_wall_png.scaleX = 0.9950628911098461;

		// water_dojo_third_match_mat0001_png
		const water_dojo_third_match_mat0001_png = this.add.image(1039, 674, "dojowater", "water_dojo_third_match_mat0001.png");

		// water_dojo_small_bucket_back_png
		const water_dojo_small_bucket_back_png = this.add.image(642, 213, "dojowater", "water_dojo_small_bucket_back.png");
		water_dojo_small_bucket_back_png.scaleX = 1.0261479697612153;

		// water_dojo_small_bucket_front_png
		const water_dojo_small_bucket_front_png = this.add.image(643, 271, "dojowater", "water_dojo_small_bucket_front.png");

		// water_dojo_first_match_mat0001_png
		const water_dojo_first_match_mat0001_png = this.add.image(352, 584, "dojowater", "water_dojo_first_match_mat0001.png");

		// water_dojo_fourth_match_mat0001_png
		const water_dojo_fourth_match_mat0001_png = this.add.image(1195, 591, "dojowater", "water_dojo_fourth_match_mat0001.png");

		// water_dojo_bottom_left_water_line0001_png
		const water_dojo_bottom_left_water_line0001_png = this.add.sprite(423, 446, "dojowater", "water_dojo_bottom_left_water_line0001.png");

		// water_dojo_bottom_left_water_top_line0001_png
		const water_dojo_bottom_left_water_top_line0001_png = this.add.sprite(279, 167, "dojowater", "water_dojo_bottom_left_water_top_line0001.png");

		// water_dojo_legend_poster_wall_png
		const water_dojo_legend_poster_wall_png = this.add.image(358, 397, "dojowater", "water_dojo_legend_poster_wall.png");

		// water_dojo_legend_poster_white_overlay_png
		const water_dojo_legend_poster_white_overlay_png = this.add.image(228, 388, "dojowater", "water_dojo_legend_poster_white_overlay.png");
		water_dojo_legend_poster_white_overlay_png.visible = false;

		// water_dojo_legend_poster_png
		const water_dojo_legend_poster_png = this.add.image(228, 389, "dojowater", "water_dojo_legend_poster.png");

		// water_dojo_first_match_mat0002_png
		const water_dojo_first_match_mat0002_png = this.add.image(349, 583, "dojowater", "water_dojo_first_match_mat0002.png");
		water_dojo_first_match_mat0002_png.visible = false;

		// water_dojo_second_match_mat0001_png
		const water_dojo_second_match_mat0001_png = this.add.image(524, 675, "dojowater", "water_dojo_second_match_mat0001.png");

		// water_dojo_second_match_mat0002_png
		const water_dojo_second_match_mat0002_png = this.add.image(520, 671, "dojowater", "water_dojo_second_match_mat0002.png");
		water_dojo_second_match_mat0002_png.visible = false;

		// water_dojo_third_match_mat0002_png
		const water_dojo_third_match_mat0002_png = this.add.image(1037, 666, "dojowater", "water_dojo_third_match_mat0002.png");
		water_dojo_third_match_mat0002_png.visible = false;

		// water_dojo_fourth_match_mat0002_png
		const water_dojo_fourth_match_mat0002_png = this.add.image(1200, 589, "dojowater", "water_dojo_fourth_match_mat0002.png");
		water_dojo_fourth_match_mat0002_png.visible = false;

		// water_dojo_exit_bridge_png
		const water_dojo_exit_bridge_png = this.add.image(776, 708, "dojowater", "water_dojo_exit_bridge.png");

		// water_dojo_two_small_balsl_png
		const water_dojo_two_small_balsl_png = this.add.image(1126, 501, "dojowater", "water_dojo_two_small_balsl.png");

		// water_dojo_laterns_png
		const water_dojo_laterns_png = this.add.image(771, 235, "dojowater", "water_dojo_laterns.png");

		// water_dojo_orange_fish0001_png
		const water_dojo_orange_fish0001_png = this.add.sprite(431, 136, "dojowater", "water_dojo_orange_fish0001.png");

		// water_dojo_statues_png
		const water_dojo_statues_png = this.add.image(779, 192, "dojowater", "water_dojo_statues.png");

		// water_dojo_sensi_white_overlay_png
		const water_dojo_sensi_white_overlay_png = this.add.image(779, 193, "dojowater", "water_dojo_sensi_white_overlay.png");
		water_dojo_sensi_white_overlay_png.visible = false;

		// water_dojo_sensi0001_png
		const water_dojo_sensi0001_png = this.add.image(778, 193, "dojowater", "water_dojo_sensi0001.png");

		// water_dojo_big_water_left0001_png
		const water_dojo_big_water_left0001_png = this.add.sprite(365, 812, "dojowater", "water_dojo_big_water_left0001.png");

		// water_dojo_instructions_poster_white_overlay_png_1
		const water_dojo_instructions_poster_white_overlay_png_1 = this.add.image(1335, 389, "dojowater", "water_dojo_legend_poster_white_overlay.png");
		water_dojo_instructions_poster_white_overlay_png_1.flipX = true;
		water_dojo_instructions_poster_white_overlay_png_1.visible = false;

		// water_dojo_instructions_poster_png
		const water_dojo_instructions_poster_png = this.add.image(1336, 390, "dojowater", "water_dojo_instructions_poster.png");

		// water_dojo_blue_dots0001_png
		const water_dojo_blue_dots0001_png = this.add.sprite(644, 239, "dojowater", "water_dojo_blue_dots0001.png");

		// water_dojo_lights_png
		const water_dojo_lights_png = this.add.image(873, 129, "dojowater", "water_dojo_lights.png");

		// water_dojo_big_water_right0001_png
		const water_dojo_big_water_right0001_png = this.add.sprite(1197, 817, "dojowater", "water_dojo_big_water_right0001.png");

		// water_dojo_bottom_right_water_bottom_line0001_png
		const water_dojo_bottom_right_water_bottom_line0001_png = this.add.sprite(1144, 452, "dojowater", "water_dojo_bottom_right_water_bottom_line0001.png");

		// water_dojo_instructions_text_1_png
		const water_dojo_instructions_text_1_png = this.add.image(1337, 357, "dojowater", "water_dojo_instructions_text_1.png");

		// water_dojo_legend_text_1_png
		const water_dojo_legend_text_1_png = this.add.image(229, 356, "dojowater", "water_dojo_legend_text_1.png");

		// water_dojo_third_match_hover_trigger
		const water_dojo_third_match_hover_trigger = this.add.rectangle(1008, 659, 128, 128);
		water_dojo_third_match_hover_trigger.scaleY = 1.4614215690320573;
		water_dojo_third_match_hover_trigger.angle = -30;
		water_dojo_third_match_hover_trigger.alpha = 0.001;
		water_dojo_third_match_hover_trigger.isFilled = true;

		// water_dojo_fourth_match_hover_trigger
		const water_dojo_fourth_match_hover_trigger = this.add.rectangle(1168, 572, 128, 128);
		water_dojo_fourth_match_hover_trigger.scaleY = 1.4614215690320573;
		water_dojo_fourth_match_hover_trigger.angle = -59.99999999999994;
		water_dojo_fourth_match_hover_trigger.alpha = 0.001;
		water_dojo_fourth_match_hover_trigger.isFilled = true;

		// water_dojo_second_match_hover_trigger
		const water_dojo_second_match_hover_trigger = this.add.rectangle(552, 646, 128, 128);
		water_dojo_second_match_hover_trigger.scaleY = 1.4614215690320573;
		water_dojo_second_match_hover_trigger.angle = 30;
		water_dojo_second_match_hover_trigger.alpha = 0.001;
		water_dojo_second_match_hover_trigger.isFilled = true;

		// water_dojo_first_match_hover_trigger
		const water_dojo_first_match_hover_trigger = this.add.rectangle(371, 562, 128, 128);
		water_dojo_first_match_hover_trigger.scaleY = 1.4614215690320573;
		water_dojo_first_match_hover_trigger.angle = 60;
		water_dojo_first_match_hover_trigger.alpha = 0.001;
		water_dojo_first_match_hover_trigger.isFilled = true;

		// water_dojo_bigger_rock_png
		const water_dojo_bigger_rock_png = this.add.image(956, 462, "dojowater", "water_dojo_bigger_rock.png");

		// water_dojo_instructions_poster_hover_trigger
		const water_dojo_instructions_poster_hover_trigger = this.add.rectangle(1334, 389, 128, 128);
		water_dojo_instructions_poster_hover_trigger.scaleX = 1.0878464802015149;
		water_dojo_instructions_poster_hover_trigger.scaleY = 0.8556450575784182;
		water_dojo_instructions_poster_hover_trigger.angle = 10;
		water_dojo_instructions_poster_hover_trigger.alpha = 0.001;
		water_dojo_instructions_poster_hover_trigger.isFilled = true;

		// water_dojo_legend_poster_hover_trigger_1
		const water_dojo_legend_poster_hover_trigger_1 = this.add.rectangle(232, 388, 128, 128);
		water_dojo_legend_poster_hover_trigger_1.scaleX = 1.0878464802015149;
		water_dojo_legend_poster_hover_trigger_1.scaleY = 0.8556450575784182;
		water_dojo_legend_poster_hover_trigger_1.angle = -10;
		water_dojo_legend_poster_hover_trigger_1.alpha = 0.001;
		water_dojo_legend_poster_hover_trigger_1.isFilled = true;

		// water_dojo_sensi_hover_trigger
		const water_dojo_sensi_hover_trigger = this.add.rectangle(785, 191, 128, 128);
		water_dojo_sensi_hover_trigger.scaleX = 1.8072761787675415;
		water_dojo_sensi_hover_trigger.scaleY = 1.8041036129849024;
		water_dojo_sensi_hover_trigger.alpha = 0.001;
		water_dojo_sensi_hover_trigger.isFilled = true;

		// water_dojo_walking_trigger_png
		const water_dojo_walking_trigger_png = this.physics.add.sprite(774, 475, "water_dojo_walking_trigger");
		water_dojo_walking_trigger_png.alpha = 0.001;
		water_dojo_walking_trigger_png.alphaTopLeft = 0.001;
		water_dojo_walking_trigger_png.alphaTopRight = 0.001;
		water_dojo_walking_trigger_png.alphaBottomLeft = 0.001;
		water_dojo_walking_trigger_png.alphaBottomRight = 0.001;
		water_dojo_walking_trigger_png.body.setSize(1520, 960, false);
		this.collisionMap = this.createCollisionMap(this, 774, 475, "water_dojo_walking_trigger");

		// water_dojo_dojo_trigger
		const water_dojo_dojo_trigger = this.physics.add.sprite(776, 828, "dojowater", "water_dojo_first_match_mat0004.png");
		water_dojo_dojo_trigger.alpha = 0.001;
		water_dojo_dojo_trigger.alphaTopLeft = 0.001;
		water_dojo_dojo_trigger.alphaTopRight = 0.001;
		water_dojo_dojo_trigger.alphaBottomLeft = 0.001;
		water_dojo_dojo_trigger.alphaBottomRight = 0.001;
		water_dojo_dojo_trigger.body.setSize(320, 140, false);

		// Setting triggers starts here
		this.triggers.push([water_dojo_walking_trigger_png, () => {
			onWalkingTrigger(this);
		}]);

		this.triggers.push([water_dojo_dojo_trigger, () => {
			onJoinRoomTrigger(SCENE_ROOM_DOJO);
		}]);
		// Setting triggers ends here

		// Creating animations starts here
		createAnimation({
			"scene": this,
			"logicalAnimationKey": "water_dojo_fish_animation",
			"phaserAnimationKey": "water_dojo_fish_animation_play",
			"textureKey": this.textureKey,
			"framePrefix": "water_dojo_orange_fish",
			"frames": Array.from({ length: 160 }, (_, i) => String(i + 1).padStart(4, "0")),
			"framesExtension": ".png",
			"frameRate": 24,
			"repeat": -1
		});

		createAnimation({
			"scene": this,
			"logicalAnimationKey": "water_dojo_bottom_left_water_falling_animation",
			"phaserAnimationKey": "water_dojo_bottom_left_water_falling_animation_play",
			"textureKey": this.textureKey,
			"framePrefix": "water_dojo_big_water_left",
			"frames": Array.from({ length: 6 }, (_, i) => String(i + 1).padStart(4, "0")),
			"framesExtension": ".png",
			"frameRate": 24,
			"repeat": -1
		});

		createAnimation({
			"scene": this,
			"logicalAnimationKey": "water_dojo_bottom_right_water_falling_animation",
			"phaserAnimationKey": "water_dojo_bottom_right_water_falling_animation_play",
			"textureKey": this.textureKey,
			"framePrefix": "water_dojo_big_water_right",
			"frames": Array.from({ length: 6 }, (_, i) => String(i + 1).padStart(4, "0")),
			"framesExtension": ".png",
			"frameRate": 24,
			"repeat": -1
		});

		createAnimation({
			"scene": this,
			"logicalAnimationKey": "water_dojo_top_left_top_falling_animation",
			"phaserAnimationKey": "water_dojo_top_left_top_falling_animation_play",
			"textureKey": this.textureKey,
			"framePrefix": "water_dojo_bottom_left_water_top_line",
			"frames": Array.from({ length: 6 }, (_, i) => String(i + 1).padStart(4, "0")),
			"framesExtension": ".png",
			"frameRate": 24,
			"repeat": -1
		});

		createAnimation({
			"scene": this,
			"logicalAnimationKey": "water_dojo_top_left_bottom_falling_animation",
			"phaserAnimationKey": "water_dojo_top_left_bottom_falling_animation_play",
			"textureKey": this.textureKey,
			"framePrefix": "water_dojo_bottom_left_water_line",
			"frames": Array.from({ length: 6 }, (_, i) => String(i + 1).padStart(4, "0")),
			"framesExtension": ".png",
			"frameRate": 24,
			"repeat": -1
		});

		createAnimation({
			"scene": this,
			"logicalAnimationKey": "water_dojo_top_right_bottom_falling_animation",
			"phaserAnimationKey": "water_dojo_top_right_bottom_falling_animation_play",
			"textureKey": this.textureKey,
			"framePrefix": "water_dojo_bottom_right_water_bottom_line",
			"frames": Array.from({ length: 6 }, (_, i) => String(i + 1).padStart(4, "0")),
			"framesExtension": ".png",
			"frameRate": 24,
			"repeat": -1
		});

		createAnimation({
			"scene": this,
			"logicalAnimationKey": "water_dojo_blue_dots_next_to_sensi_animation",
			"phaserAnimationKey": "water_dojo_blue_dots_next_to_sensi_animation_play",
			"textureKey": this.textureKey,
			"framePrefix": "water_dojo_blue_dots",
			"frames": Array.from({ length: 30 }, (_, i) => String(i + 1).padStart(4, "0")),
			"framesExtension": ".png",
			"frameRate": 24,
			"repeat": -1
		});

		water_dojo_orange_fish0001_png.play("water_dojo_fish_animation_play");
		water_dojo_big_water_left0001_png.play("water_dojo_bottom_left_water_falling_animation_play");
		water_dojo_big_water_right0001_png.play("water_dojo_bottom_right_water_falling_animation_play");
		water_dojo_bottom_left_water_top_line0001_png.play("water_dojo_top_left_top_falling_animation_play");
		water_dojo_bottom_left_water_line0001_png.play("water_dojo_top_left_bottom_falling_animation_play");
		water_dojo_bottom_right_water_bottom_line0001_png.play("water_dojo_top_right_bottom_falling_animation_play");
		water_dojo_blue_dots0001_png.play("water_dojo_blue_dots_next_to_sensi_animation_play");
		// Creating animations ends here

		// Setting all interactives sprites starts here
		water_dojo_first_match_hover_trigger.setInteractive({ useHandCursor: true });
		water_dojo_second_match_hover_trigger.setInteractive({ useHandCursor: true });
		water_dojo_third_match_hover_trigger.setInteractive({ useHandCursor: true });
		water_dojo_fourth_match_hover_trigger.setInteractive({ useHandCursor: true });
		water_dojo_instructions_poster_hover_trigger.setInteractive({ useHandCursor: true });
		water_dojo_legend_poster_hover_trigger_1.setInteractive({ useHandCursor: true });
		water_dojo_sensi_hover_trigger.setInteractive({ useHandCursor: true });
		// Setting all interactives sprites ends here

		// All interactive events start here
		water_dojo_first_match_hover_trigger.on("pointerover", () => {
			water_dojo_first_match_mat0001_png.visible = false;
			water_dojo_first_match_mat0002_png.visible = true;
		});

		water_dojo_first_match_hover_trigger.on("pointerout", () => {
			water_dojo_first_match_mat0001_png.visible = true;
			water_dojo_first_match_mat0002_png.visible = false;
		});

		water_dojo_second_match_hover_trigger.on("pointerover", () => {
			water_dojo_second_match_mat0001_png.visible = false;
			water_dojo_second_match_mat0002_png.visible = true;
		});

		water_dojo_second_match_hover_trigger.on("pointerout", () => {
			water_dojo_second_match_mat0001_png.visible = true;
			water_dojo_second_match_mat0002_png.visible = false;
		});

		water_dojo_third_match_hover_trigger.on("pointerover", () => {
			water_dojo_third_match_mat0001_png.visible = false;
			water_dojo_third_match_mat0002_png.visible = true;
		});

		water_dojo_third_match_hover_trigger.on("pointerout", () => {
			water_dojo_third_match_mat0001_png.visible = true;
			water_dojo_third_match_mat0002_png.visible = false;
		});

		water_dojo_fourth_match_hover_trigger.on("pointerover", () => {
			water_dojo_fourth_match_mat0001_png.visible = false;
			water_dojo_fourth_match_mat0002_png.visible = true;
		});

		water_dojo_fourth_match_hover_trigger.on("pointerout", () => {
			water_dojo_fourth_match_mat0001_png.visible = true;
			water_dojo_fourth_match_mat0002_png.visible = false;
		});

		water_dojo_instructions_poster_hover_trigger.on("pointerover", () => {
			water_dojo_instructions_poster_white_overlay_png_1.visible = true;
		});

		water_dojo_instructions_poster_hover_trigger.on("pointerout", () => {
			water_dojo_instructions_poster_white_overlay_png_1.visible = false;
		});

		water_dojo_instructions_poster_hover_trigger.on("pointerdown", () => {
			console.log("instructions!!!!!!!!")
		});

		water_dojo_legend_poster_hover_trigger_1.on("pointerover", () => {
			water_dojo_legend_poster_white_overlay_png.visible = true;
		});

		water_dojo_legend_poster_hover_trigger_1.on("pointerout", () => {
			water_dojo_legend_poster_white_overlay_png.visible = false;
		});

		water_dojo_legend_poster_hover_trigger_1.on("pointerdown", () => {
			console.log("legendss!!!!!!!!")
		});

		water_dojo_sensi_hover_trigger.on("pointerover", () => {
			water_dojo_sensi_white_overlay_png.visible = true;
		});

		water_dojo_sensi_hover_trigger.on("pointerout", () => {
			water_dojo_sensi_white_overlay_png.visible = false;
		});
		// All interactive events ends here

		this.audioManager.play(DOJO_WATER_ROOM_MUSIC);
		super.createContent(this);
    }

	update() {
		super.update();
	}
}