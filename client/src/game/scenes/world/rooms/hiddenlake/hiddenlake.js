import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { SCENE_ROOM_CAVE_MINE, SCENE_ROOM_FOREST, SCENE_ROOM_HIDDEN_LAKE, SCENE_ROOM_UNDERWATER } from "../../../sceneNames";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

// TODO: Fix waterfall animation
// TODO: Add water

export class HiddenLakeScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_HIDDEN_LAKE);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "hiddenlake",
            "paths": ["assets/world/rooms/hiddenlake/hiddenlake-pack.json"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "hidden_lake_walking_trigger",
            "paths": ["assets/world/rooms/hiddenlake/hidden_lake_walking_trigger.png"]
        });
    }

    createContent() {
		// hidden_lake_walls_png
		const hidden_lake_walls_png = this.add.image(771, 480, "hiddenlake", "hidden_lake_walls.png");

		// hidden_lake_door0001_png
		const hidden_lake_door0001_png = this.add.sprite(1428, 481, "hiddenlake", "hidden_lake_door0001.png");
		hidden_lake_door0001_png.scaleY = 1.1487328100116816;

		// hidden_lake_right_waterfall_left0001_png
		const hidden_lake_right_waterfall_left0001_png = this.add.sprite(1093, 418, "hiddenlake", "hidden_lake_right_waterfall_left0001.png");

		// hidden_lake_right_waterfall_left0001_png_1
		const hidden_lake_right_waterfall_left0001_png_1 = this.add.sprite(742, 417, "hiddenlake", "hidden_lake_right_waterfall_left0001.png");

		// hidden_lake_right_waterfall_right_top_left0001_png_3
		const hidden_lake_right_waterfall_right_top_left0001_png_3 = this.add.sprite(756, 138, "hiddenlake", "hidden_lake_right_waterfall_right_top_left0001.png");
		hidden_lake_right_waterfall_right_top_left0001_png_3.tintTopLeft = 31446;
		hidden_lake_right_waterfall_right_top_left0001_png_3.tintTopRight = 31446;
		hidden_lake_right_waterfall_right_top_left0001_png_3.tintBottomLeft = 31446;
		hidden_lake_right_waterfall_right_top_left0001_png_3.tintBottomRight = 31446;

		// hidden_lake_right_waterfall_right_top_left0001_png_2
		const hidden_lake_right_waterfall_right_top_left0001_png_2 = this.add.sprite(701, 136, "hiddenlake", "hidden_lake_right_waterfall_right_top_left0001.png");
		hidden_lake_right_waterfall_right_top_left0001_png_2.tintTopLeft = 31446;
		hidden_lake_right_waterfall_right_top_left0001_png_2.tintTopRight = 31446;
		hidden_lake_right_waterfall_right_top_left0001_png_2.tintBottomLeft = 31446;
		hidden_lake_right_waterfall_right_top_left0001_png_2.tintBottomRight = 31446;

		// hidden_lake_right_waterfall_right_top_left0001_png_1
		const hidden_lake_right_waterfall_right_top_left0001_png_1 = this.add.sprite(1127, 148, "hiddenlake", "hidden_lake_right_waterfall_right_top_left0001.png");
		hidden_lake_right_waterfall_right_top_left0001_png_1.tintTopLeft = 31446;
		hidden_lake_right_waterfall_right_top_left0001_png_1.tintTopRight = 31446;
		hidden_lake_right_waterfall_right_top_left0001_png_1.tintBottomLeft = 31446;
		hidden_lake_right_waterfall_right_top_left0001_png_1.tintBottomRight = 31446;

		// hidden_lake_right_waterfall_right_top_left0001_png
		const hidden_lake_right_waterfall_right_top_left0001_png = this.add.sprite(1071, 145, "hiddenlake", "hidden_lake_right_waterfall_right_top_left0001.png");
		hidden_lake_right_waterfall_right_top_left0001_png.tintTopLeft = 31446;
		hidden_lake_right_waterfall_right_top_left0001_png.tintTopRight = 31446;
		hidden_lake_right_waterfall_right_top_left0001_png.tintBottomLeft = 31446;
		hidden_lake_right_waterfall_right_top_left0001_png.tintBottomRight = 31446;

		// hidden_lake_background_png
		const hidden_lake_background_png = this.add.image(770, 481, "hiddenlake", "hidden_lake_background.png");

		// hidden_lake_rock_2_png
		const hidden_lake_rock_2_png = this.add.image(53, 457, "hiddenlake", "hidden_lake_rock_2.png");

		// hidden_lake_coins_png
		const hidden_lake_coins_png = this.add.image(95, 650, "hiddenlake", "hidden_lake_coins.png");

		// hidden_lake_rock_png
		const hidden_lake_rock_png = this.add.image(61, 643, "hiddenlake", "hidden_lake_rock.png");

		// hidden_lake_aqua_grabber_top_png
		const hidden_lake_aqua_grabber_top_png = this.add.image(219, 753, "hiddenlake", "hidden_lake_aqua_grabber_top.png");

		// hidden_lake_aqua_grabber_bottom_png
		const hidden_lake_aqua_grabber_bottom_png = this.add.image(200, 792, "hiddenlake", "hidden_lake_aqua_grabber_bottom.png");
		hidden_lake_aqua_grabber_bottom_png.scaleX = 0.9972117072761048;

		// hidden_lake_outline_png
		const hidden_lake_outline_png = this.add.sprite(779, 473, "hiddenlake", "hidden_lake_outline.png");

		// hidden_lake_no_key_note0001_png
		const hidden_lake_no_key_note0001_png = this.add.image(1373, 496, "hiddenlake", "hidden_lake_no_key_note0001.png");

		// hidden_lake_round_thing_png
		const hidden_lake_round_thing_png = this.add.image(294, 256, "hiddenlake", "hidden_lake_round_thing.png");

		// hidden_lake_coins_1_png
		const hidden_lake_coins_1_png = this.add.image(337, 327, "hiddenlake", "hidden_lake_coins_1.png");

		// hidden_lake_rock_4_png
		const hidden_lake_rock_4_png = this.add.image(608, 305, "hiddenlake", "hidden_lake_rock_4.png");

		// hidden_lake_rock_3_png
		const hidden_lake_rock_3_png = this.add.image(577, 371, "hiddenlake", "hidden_lake_rock_3.png");
		hidden_lake_rock_3_png.scaleX = 1.1047721555647945;

		// hidden_lake_coins_rock_png
		const hidden_lake_coins_rock_png = this.add.image(518, 465, "hiddenlake", "hidden_lake_coins_rock.png");

		// hidden_lake_right_waterfall_right_top0001_png
		const hidden_lake_right_waterfall_right_top0001_png = this.add.sprite(1086, 171, "hiddenlake", "hidden_lake_right_waterfall_right_top0001.png");

		// hidden_lake_right_waterfall_left_topo0001_png
		const hidden_lake_right_waterfall_left_topo0001_png = this.add.sprite(728, 158, "hiddenlake", "hidden_lake_right_waterfall_left_topo0001.png");

		// hidden_lake_rock_5_png
		const hidden_lake_rock_5_png = this.add.image(337, 360, "hiddenlake", "hidden_lake_rock_5.png");

		// hidden_lake_rock_56_png
		const hidden_lake_rock_56_png = this.add.image(240, 301, "hiddenlake", "hidden_lake_rock_56.png");

		// hidden_lake_no_key_note0002_png
		const hidden_lake_no_key_note0002_png = this.add.image(1373, 496, "hiddenlake", "hidden_lake_no_key_note0002.png");
		hidden_lake_no_key_note0002_png.visible = false;

		// hidden_lake_underwater_room_trigger_png
		const hidden_lake_underwater_room_trigger_png = this.add.image(1418, 568, "hiddenlake", "hidden_lake_underwater_room_trigger.png");
		hidden_lake_underwater_room_trigger_png.alpha = 0.001;
		hidden_lake_underwater_room_trigger_png.alphaTopLeft = 0.001;
		hidden_lake_underwater_room_trigger_png.alphaTopRight = 0.001;
		hidden_lake_underwater_room_trigger_png.alphaBottomLeft = 0.001;
		hidden_lake_underwater_room_trigger_png.alphaBottomRight = 0.001;

		// hidden_lake_walking_trigger_png
		const hidden_lake_walking_trigger_png = this.physics.add.sprite(757, 478, "hidden_lake_walking_trigger");
		hidden_lake_walking_trigger_png.alpha = 0.001;
		hidden_lake_walking_trigger_png.alphaTopLeft = 0.001;
		hidden_lake_walking_trigger_png.alphaTopRight = 0.001;
		hidden_lake_walking_trigger_png.alphaBottomLeft = 0.001;
		hidden_lake_walking_trigger_png.alphaBottomRight = 0.001;
		hidden_lake_walking_trigger_png.body.setSize(1521, 960, false);
		this.collisionMap = this.createCollisionMap(this, 757, 478, "hidden_lake_walking_trigger");

		// hidden_lake_cave_mine_trigger
		const hidden_lake_cave_mine_trigger = this.physics.add.sprite(111, 420, "hiddenlake", "hidden_lake_left_room_trigger.png");
		hidden_lake_cave_mine_trigger.scaleX = 0.47895764362429427;
		hidden_lake_cave_mine_trigger.scaleY = 0.5523838835131725;
		hidden_lake_cave_mine_trigger.alpha = 0.001;
		hidden_lake_cave_mine_trigger.alphaTopLeft = 0.001;
		hidden_lake_cave_mine_trigger.alphaTopRight = 0.001;
		hidden_lake_cave_mine_trigger.alphaBottomLeft = 0.001;
		hidden_lake_cave_mine_trigger.alphaBottomRight = 0.001;
		hidden_lake_cave_mine_trigger.body.setSize(266, 253, false);

		// hidden_lake_forest_trigger
		const hidden_lake_forest_trigger = this.physics.add.sprite(473, 141, "hiddenlake", "hidden_lake_forest_trigger.png");
		hidden_lake_forest_trigger.scaleX = 0.34342974502261314;
		hidden_lake_forest_trigger.scaleY = 0.9238735500749449;
		hidden_lake_forest_trigger.alpha = 0.001;
		hidden_lake_forest_trigger.alphaTopLeft = 0.001;
		hidden_lake_forest_trigger.alphaTopRight = 0.001;
		hidden_lake_forest_trigger.alphaBottomLeft = 0.001;
		hidden_lake_forest_trigger.alphaBottomRight = 0.001;
		hidden_lake_forest_trigger.body.setSize(278, 247, false);

		// hidden_lake_underwater_room_trigger
		const hidden_lake_underwater_room_trigger = this.physics.add.sprite(1440, 535, "hiddenlake", "hidden_lake_underwater_room_trigger.png");
		hidden_lake_underwater_room_trigger.alpha = 0.001;
		hidden_lake_underwater_room_trigger.alphaTopLeft = 0.001;
		hidden_lake_underwater_room_trigger.alphaTopRight = 0.001;
		hidden_lake_underwater_room_trigger.alphaBottomLeft = 0.001;
		hidden_lake_underwater_room_trigger.alphaBottomRight = 0.001;
		hidden_lake_underwater_room_trigger.body.setSize(208, 253, false);

		// Setting triggers starts here
		this.triggers.push([hidden_lake_walking_trigger_png, () => {
			onWalkingTrigger(this);
		}]);

		this.triggers.push([hidden_lake_underwater_room_trigger, () => {
			onJoinRoomTrigger(SCENE_ROOM_UNDERWATER);
		}]);

		this.triggers.push([hidden_lake_forest_trigger, () => {
			onJoinRoomTrigger(SCENE_ROOM_FOREST);
		}]);

		this.triggers.push([hidden_lake_cave_mine_trigger, () => {
			onJoinRoomTrigger(SCENE_ROOM_CAVE_MINE);
		}]);
		// Setting triggers ends here
		

		// Creating animations starts here
		createAnimation({
			"scene": this,
			"logicalAnimationKey": "hidden_lake_bottom_waterfall_animation",
			"phaserAnimationKey": "hidden_lake_bottom_waterfall_animation_play",
			"textureKey": "hiddenlake",
			"framePrefix": "hidden_lake_right_waterfall_left",
			"frames": Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(4, "0")),
			"framesExtension": ".png",
			"frameRate": 24,
			"repeat": -1
		});

		createAnimation({
			"scene": this,
			"logicalAnimationKey": "hidden_lake_top_waterfall_animation",
			"phaserAnimationKey": "hidden_lake_top_waterfall_animation_play",
			"textureKey": "hiddenlake",
			"framePrefix": "hidden_lake_right_waterfall_left_topo",
			"frames": Array.from({ length: 30 }, (_, i) => String(i + 1).padStart(4, "0")),
			"framesExtension": ".png",
			"frameRate": 24,
			"repeat": -1
		});

		createAnimation({
			"scene": this,
			"logicalAnimationKey": "hidden_lake_higher_top_waterfall_animation",
			"phaserAnimationKey": "hidden_lake_higher_top_waterfall_animation_play",
			"textureKey": "hiddenlake",
			"framePrefix": "hidden_lake_right_waterfall_right_top_left",
			"frames": Array.from({ length: 30 }, (_, i) => String(i + 1).padStart(4, "0")),
			"framesExtension": ".png",
			"frameRate": 24,
			"repeat": -1
		});

		createAnimation({
			"scene": this,
			"logicalAnimationKey": "hidden_lake_door_animation",
			"phaserAnimationKey": "hidden_lake_door_animation_play",
			"textureKey": "hiddenlake",
			"framePrefix": "hidden_lake_door",
			"frames": Array.from({ length: 27 }, (_, i) => String(i + 1).padStart(4, "0")),
			"framesExtension": ".png",
			"frameRate": 24,
			"repeat": 0
		});

		hidden_lake_right_waterfall_left0001_png.play("hidden_lake_bottom_waterfall_animation_play");
		hidden_lake_right_waterfall_left0001_png_1.play("hidden_lake_bottom_waterfall_animation_play");
		hidden_lake_right_waterfall_right_top0001_png.play("hidden_lake_top_waterfall_animation_play");
		hidden_lake_right_waterfall_left_topo0001_png.play("hidden_lake_top_waterfall_animation_play");
		hidden_lake_right_waterfall_right_top_left0001_png_1.play("hidden_lake_higher_top_waterfall_animation_play");
		hidden_lake_right_waterfall_right_top_left0001_png_2.play("hidden_lake_higher_top_waterfall_animation_play");
		hidden_lake_right_waterfall_right_top_left0001_png_3.play("hidden_lake_higher_top_waterfall_animation_play");
		hidden_lake_right_waterfall_right_top_left0001_png.play("hidden_lake_higher_top_waterfall_animation_play");
		// Creating animations ends here

		// Setting all interactives sprites starts here
		hidden_lake_underwater_room_trigger_png.setInteractive({ useHandCursor: true });
		hidden_lake_no_key_note0001_png.setInteractive({ useHandCursor: true });
		// Setting all interactives sprites ends here

		// All interactive events start here
		hidden_lake_underwater_room_trigger_png.on("pointerover", () => {
			hidden_lake_door0001_png.play("hidden_lake_door_animation_play");
		});

		hidden_lake_no_key_note0001_png.on("pointerover", () => {
			hidden_lake_no_key_note0001_png.visible = false;
			hidden_lake_no_key_note0002_png.visible = true;
		});

		hidden_lake_no_key_note0001_png.on("pointerout", () => {
			hidden_lake_no_key_note0001_png.visible = true;
			hidden_lake_no_key_note0002_png.visible = false;
		});

		hidden_lake_no_key_note0001_png.on("pointerdown", () => {
			console.log("noteee")
		});
		// All interactive events ends here

		super.createContent(this);
    }

	update() {
		super.update();
	}
}