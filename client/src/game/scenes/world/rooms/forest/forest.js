import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { FOREST_ROCK_CLOSE, FOREST_ROCK_OPEN, FOREST_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_PRELOAD_ASSETS, SCENE_ROOM_COVE, SCENE_ROOM_FOREST, SCENE_ROOM_HIDDEN_LAKE, SCENE_ROOM_MINE_SHACK, SCENE_ROOM_PLAZA } from "../../../sceneNames";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

export class ForestScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_FOREST);
    }

    init(data) {
        super.init(data);

		// Globals
        this.assetPath = "assets/world/rooms/forest/";
        this.textureKey = "forest";
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
            "name": `${this.textureKey}_walking_trigger`,
            "paths": [`${this.assetPath}${this.textureKey}_walking_trigger.png`]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": FOREST_ROOM_MUSIC,
            "paths": [`${this.assetPath}${FOREST_ROOM_MUSIC}.mp3`]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": FOREST_ROCK_OPEN,
            "paths": [`${this.assetPath}${FOREST_ROCK_OPEN}.mp3`]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": FOREST_ROCK_CLOSE,
            "paths": [`${this.assetPath}${FOREST_ROCK_CLOSE}.mp3`]
        });
    }

    createContent() {
		// forest_sky_png
		const forest_sky_png = this.add.image(757, 92, "forest", "forest_sky.png");

		// forest_background_png
		const forest_background_png = this.add.image(-140, -50, "forest", "forest_background.png");
		forest_background_png.setOrigin(0, 0);

		// forest_cove_stairs_bush_png
		const forest_cove_stairs_bush_png = this.add.image(1494, 693, "forest", "forest_cove_stairs_bush.png");

		// forest_cove_stairsa_png
		const forest_cove_stairsa_png = this.add.image(1401, 821, "forest", "forest_cove_stairsa.png");

		// forest_bigger_bush_png
		const forest_bigger_bush_png = this.add.image(209, 585, "forest", "forest_bigger_bush.png");

		// forest_smaller_bush_png
		const forest_smaller_bush_png = this.add.image(226, 613, "forest", "forest_smaller_bush.png");

		// forest_rock_move0001_png
		const forest_rock_move0001_png = this.add.sprite(87, 674, "forest", "forest_rock_move0001.png");

		// forest_middle_bottom_rock_png
		const forest_middle_bottom_rock_png = this.add.image(636, 810, "forest", "forest_middle_bottom_rock.png");

		// forest_bottom_left_png
		const forest_bottom_left_png = this.add.image(620, 713, "forest", "forest_bottom_left.png");

		// forest_middle_part_right_png
		const forest_middle_part_right_png = this.add.image(891, 539, "forest", "forest_middle_part_right.png");

		// forest_middle_part_tree_png
		const forest_middle_part_tree_png = this.add.image(748, 537, "forest", "forest_middle_part_tree.png");

		// forest_cove_sign_png
		const forest_cove_sign_png = this.add.image(1428, 678, "forest", "forest_cove_sign.png");

		// forest_right_middle_left_bush_png
		const forest_right_middle_left_bush_png = this.add.image(1508, 430, "forest", "forest_right_middle_left_bush.png");

		// forest_water_bubbles0001_png
		const forest_water_bubbles0001_png = this.add.sprite(847, 306, "forest", "forest_water_bubbles0001.png");
		forest_water_bubbles0001_png.scaleX = 0.35968175987461154;
		forest_water_bubbles0001_png.scaleY = 0.29985257104711643;

		// forest_right_middle_left_tree_png
		const forest_right_middle_left_tree_png = this.add.image(1414, 442, "forest", "forest_right_middle_left_tree.png");

		// forest_right_middle_middle_tree_png
		const forest_right_middle_middle_tree_png = this.add.image(1511, 279, "forest", "forest_right_middle_middle_tree.png");

		// forest_right_middle_rock_png
		const forest_right_middle_rock_png = this.add.image(1488, 513, "forest", "forest_right_middle_rock.png");

		// forest_bush_3_png
		const forest_bush_3_png = this.add.image(438, 280, "forest", "forest_bush_3.png");

		// forest_bush_1_png
		const forest_bush_1_png = this.add.image(330, 258, "forest", "forest_bush_1.png");

		// forest_half_tall_tree_png
		const forest_half_tall_tree_png = this.add.image(376, 137, "forest", "forest_half_tall_tree.png");

		// forest_tree_fallen_png
		const forest_tree_fallen_png = this.add.image(618, 185, "forest", "forest_tree_fallen.png");

		// forest_right_middle_left_tree_png_1
		const forest_right_middle_left_tree_png_1 = this.add.image(720, 261, "forest", "forest_right_middle_left_tree.png");

		// forest_rock_next_to_water_png
		const forest_rock_next_to_water_png = this.add.image(758, 321, "forest", "forest_rock_next_to_water.png");

		// forest_tree_log_png
		const forest_tree_log_png = this.add.image(721, 366, "forest", "forest_tree_log.png");

		// forest_middle_part_left_png
		const forest_middle_part_left_png = this.add.image(609, 566, "forest", "forest_middle_part_left.png");

		// forest_bush_2_png
		const forest_bush_2_png = this.add.image(424, 319, "forest", "forest_bush_2.png");

		// forest_tree_stump_png
		const forest_tree_stump_png = this.add.image(489, 329, "forest", "forest_tree_stump.png");

		// forest_cave_dark_2_png
		const forest_cave_dark_2_png = this.add.image(1087, 271, "forest", "forest_cave_dark_2.png");

		// forest_cave_dark_3_png
		const forest_cave_dark_3_png = this.add.image(1100, 271, "forest", "forest_cave_dark_3.png");

		// forest_cave_dark_1_png
		const forest_cave_dark_1_png = this.add.image(1091, 268, "forest", "forest_cave_dark_1.png");

		// forest_bigger_cave_png
		const forest_bigger_cave_png = this.add.image(1087, 224, "forest", "forest_bigger_cave.png");

		// forest_tiny_rock_png
		const forest_tiny_rock_png = this.add.image(1171, 346, "forest", "forest_tiny_rock.png");

		// forest_water_line0001_png
		const forest_water_line0001_png = this.add.sprite(821, 166, "forest", "forest_water_line0001.png");
		forest_water_line0001_png.scaleX = 1.0254245895384397;
		forest_water_line0001_png.angle = 10;

		// forest_water_falling_down0001_png
		const forest_water_falling_down0001_png = this.add.sprite(837, 235, "forest", "forest_water_falling_down0001.png");
		forest_water_falling_down0001_png.scaleX = 0.5331748939661696;
		forest_water_falling_down0001_png.scaleY = 0.5417969605300536;

		// forest_water_middle0001_png
		const forest_water_middle0001_png = this.add.sprite(836, 233, "forest", "forest_water_middle0001.png");
		forest_water_middle0001_png.scaleX = 0.38973561233955295;
		forest_water_middle0001_png.scaleY = 0.5675806682804683;
		forest_water_middle0001_png.angle = 154;

		// forest_moving_rock_hover_trigger0004_png
		const forest_moving_rock_hover_trigger0004_png = this.add.image(176, 692, "forest", "forest_moving_rock_hover_trigger0004.png");
		forest_moving_rock_hover_trigger0004_png.alpha = 0.001;
		forest_moving_rock_hover_trigger0004_png.alphaTopLeft = 0.001;
		forest_moving_rock_hover_trigger0004_png.alphaTopRight = 0.001;
		forest_moving_rock_hover_trigger0004_png.alphaBottomLeft = 0.001;
		forest_moving_rock_hover_trigger0004_png.alphaBottomRight = 0.001;

		// forest_cove_trigger_png
		const forest_cove_trigger_png = this.physics.add.sprite(1407, 866, "forest", "forest_cove_trigger.png");
		forest_cove_trigger_png.alpha = 0.001;
		forest_cove_trigger_png.alphaTopLeft = 0.001;
		forest_cove_trigger_png.alphaTopRight = 0.001;
		forest_cove_trigger_png.alphaBottomLeft = 0.001;
		forest_cove_trigger_png.alphaBottomRight = 0.001;
		forest_cove_trigger_png.body.setSize(452, 213, false);

		// forest_mine_shack_trigger
		const forest_mine_shack_trigger = this.physics.add.sprite(1346, 320, "forest", "forest_mine_shack_trigger.png");
		forest_mine_shack_trigger.alpha = 0.001;
		forest_mine_shack_trigger.alphaTopLeft = 0.001;
		forest_mine_shack_trigger.alphaTopRight = 0.001;
		forest_mine_shack_trigger.alphaBottomLeft = 0.001;
		forest_mine_shack_trigger.alphaBottomRight = 0.001;
		forest_mine_shack_trigger.body.setSize(179, 82, false);

		// forest_plaza_trigger
		const forest_plaza_trigger = this.physics.add.sprite(112, 290, "forest", "forest_plaza_trigger.png");
		forest_plaza_trigger.alpha = 0.001;
		forest_plaza_trigger.alphaTopLeft = 0.001;
		forest_plaza_trigger.alphaTopRight = 0.001;
		forest_plaza_trigger.alphaBottomLeft = 0.001;
		forest_plaza_trigger.alphaBottomRight = 0.001;
		forest_plaza_trigger.body.setSize(165, 82, false);

		// forest_walking_trigger
		const forest_walking_trigger = this.physics.add.sprite(757, 472, `${this.textureKey}_walking_trigger`);
		forest_walking_trigger.alpha = 0.001;
		forest_walking_trigger.alphaTopLeft = 0.001;
		forest_walking_trigger.alphaTopRight = 0.001;
		forest_walking_trigger.alphaBottomLeft = 0.001;
		forest_walking_trigger.alphaBottomRight = 0.001;
		forest_walking_trigger.body.setSize(1520, 960, false);
		this.collisionMap = this.createCollisionMap(this, 757, 472, `${this.textureKey}_walking_trigger`);

		// forest_underground_trigger
		const forest_underground_trigger = this.physics.add.sprite(176, 717, "forest", "forest_underground_trigger.png");
		forest_underground_trigger.alpha = 0.001;
		forest_underground_trigger.alphaTopLeft = 0.001;
		forest_underground_trigger.alphaTopRight = 0.001;
		forest_underground_trigger.alphaBottomLeft = 0.001;
		forest_underground_trigger.alphaBottomRight = 0.001;
		forest_underground_trigger.body.setSize(138, 98, false);

		// Setting triggers starts here
		this.triggers.push([forest_walking_trigger, () => {
			onWalkingTrigger(this);
		}]);

		this.triggers.push([forest_underground_trigger, () => {
			onJoinRoomTrigger(SCENE_ROOM_HIDDEN_LAKE);
		}]);

		this.triggers.push([forest_plaza_trigger, () => {
			onJoinRoomTrigger(SCENE_ROOM_PLAZA);
		}]);

		this.triggers.push([forest_mine_shack_trigger, () => {
			onJoinRoomTrigger(SCENE_ROOM_MINE_SHACK);
		}]);

		this.triggers.push([forest_cove_trigger_png, () => {
			onJoinRoomTrigger(SCENE_ROOM_COVE);
		}]);
		// Setting triggers ends here

		// Creating animations starts here
		createAnimation({
			"scene": this,
			"logicalAnimationKey": "forest_rock_open_animation",
			"phaserAnimationKey": "forest_rock_open_animation_play",
			"textureKey": this.textureKey,
			"framePrefix": "forest_rock_move",
			"frames": Array.from({ length: 14 }, (_, i) => String(i + 1).padStart(4, "0")),
			"framesExtension": ".png",
			"frameRate": 24,
			"repeat": 0
		});

		createAnimation({
			"scene": this,
			"logicalAnimationKey": "forest_rock_close_animation",
			"phaserAnimationKey": "forest_rock_close_animation_play",
			"textureKey": this.textureKey,
			"framePrefix": "forest_rock_move",
			"frames": Array.from({ length: 14 }, (_, i) => String(i + 14).padStart(4, "0")),
			"framesExtension": ".png",
			"frameRate": 24,
			"repeat": 0
		});

		createAnimation({
			"scene": this,
			"logicalAnimationKey": "forest_water_bubbles_animation",
			"phaserAnimationKey": "forest_water_bubbles_animation_play",
			"textureKey": this.textureKey,
			"framePrefix": "forest_water_bubbles",
			"frames": Array.from({ length: 16 }, (_, i) => String(i + 1).padStart(4, "0")),
			"framesExtension": ".png",
			"frameRate": 24,
			"repeat": -1
		});

		createAnimation({
			"scene": this,
			"logicalAnimationKey": "forest_water_middle_line_animation",
			"phaserAnimationKey": "forest_water_middle_line_animation_play",
			"textureKey": this.textureKey,
			"framePrefix": "forest_water_middle",
			"frames": Array.from({ length: 6 }, (_, i) => String(i + 1).padStart(4, "0")),
			"framesExtension": ".png",
			"frameRate": 24,
			"repeat": -1
		});

		createAnimation({
			"scene": this,
			"logicalAnimationKey": "forest_water_falling_animation",
			"phaserAnimationKey": "forest_water_falling_animation_play",
			"textureKey": this.textureKey,
			"framePrefix": "forest_water_falling_down",
			"frames": Array.from({ length: 30 }, (_, i) => String(i + 1).padStart(4, "0")),
			"framesExtension": ".png",
			"frameRate": 24,
			"repeat": -1
		});

		createAnimation({
			"scene": this,
			"logicalAnimationKey": "forest_water_top_line_animation",
			"phaserAnimationKey": "forest_water_top_line_animation_play",
			"textureKey": this.textureKey,
			"framePrefix": "forest_water_line",
			"frames": Array.from({ length: 6 }, (_, i) => String(i + 1).padStart(4, "0")),
			"framesExtension": ".png",
			"frameRate": 24,
			"repeat": -1
		});

		forest_water_bubbles0001_png.play("forest_water_bubbles_animation_play");
		forest_water_middle0001_png.play("forest_water_middle_line_animation_play");
		forest_water_falling_down0001_png.play("forest_water_falling_animation_play");
		forest_water_line0001_png.play("forest_water_top_line_animation_play");
		// Creating animations ends here

		// Setting all interactives sprites starts here
		forest_moving_rock_hover_trigger0004_png.setInteractive({ useHandCursor: true });
		// Setting all interactives sprites ends here

		// All interactive events start here
		forest_moving_rock_hover_trigger0004_png.on("pointerover", () => {
			forest_rock_move0001_png.play("forest_rock_open_animation_play");
			this.audioManager.play(FOREST_ROCK_OPEN);
		});

		forest_moving_rock_hover_trigger0004_png.on("pointerout", () => {
			forest_rock_move0001_png.play("forest_rock_close_animation_play");
			this.audioManager.play(FOREST_ROCK_CLOSE);
		});
		// All interactive events ends here

		this.audioManager.play(FOREST_ROOM_MUSIC);
		super.createContent(this);
    }

	update() {
		super.update();
	}
}