import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { MINE_SHACK_ROOM_DOOR_CLOSE, MINE_SHACK_ROOM_DOOR_OPEN, MINE_SHACK_ROOM_MINE_LIGHT_OFF, MINE_SHACK_ROOM_MINE_LIGHT_ON, MINE_SHACK_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_DOJO_COURTYARD, SCENE_ROOM_FOREST, SCENE_ROOM_MINE, SCENE_ROOM_MINE_SHACK, SCENE_ROOM_SCHOOL, SCENE_ROOM_SKATE_PARK } from "../../../sceneNames";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

export class MineShackScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_MINE_SHACK);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "mineshack",
            "paths": ["assets/world/rooms/mineshack/mineshack-pack.json"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "mine_shack_walking_trigger",
            "paths": ["assets/world/rooms/mineshack/mine_shack_walking_trigger.png"]
        });

        this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.AUDIO,
			name: MINE_SHACK_ROOM_MUSIC,
			paths: ["assets/world/rooms/mineshack/mineshack_music.mp3"]
		});

        this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.AUDIO,
			name: MINE_SHACK_ROOM_DOOR_OPEN,
			paths: ["assets/world/rooms/mineshack/shack2014-dooropen.mp3"]
		});

        this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.AUDIO,
			name: MINE_SHACK_ROOM_DOOR_CLOSE,
			paths: ["assets/world/rooms/mineshack/shack2014-doorclose.mp3"]
		});

        this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.AUDIO,
			name: MINE_SHACK_ROOM_MINE_LIGHT_OFF,
			paths: ["assets/world/rooms/mineshack/shack2014-lightoff.mp3"]
		});

        this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.AUDIO,
			name: MINE_SHACK_ROOM_MINE_LIGHT_ON,
			paths: ["assets/world/rooms/mineshack/shack2014-lighton.mp3"]
		});
    }

    createContent() {
        // mine_shack_dojo_png
		const mine_shack_dojo_png = this.add.image(777, 132, "mine_shack", "mine_shack_dojo.png");
		mine_shack_dojo_png.scaleX = 0.9595555280826681;

		// mine_shack_floor_png
		const mine_shack_floor_png = this.add.image(-76, -55, "mine_shack", "mine_shack_floor.png");
		mine_shack_floor_png.scaleX = 0.9300895797835096;
		mine_shack_floor_png.setOrigin(0, 0);

		// mine_shack_stand_png
		const mine_shack_stand_png = this.add.image(227, 352, "mine_shack", "mine_shack_stand.png");

		// mine_shack_tree_png
		const mine_shack_tree_png = this.add.image(132, 291, "mine_shack", "mine_shack_tree.png");
		mine_shack_tree_png.scaleX = 0.9091465909449435;
		mine_shack_tree_png.scaleY = 0.9203846851855811;

		// mine_shack_pole_png
		const mine_shack_pole_png = this.add.image(395, 256, "mine_shack", "mine_shack_pole.png");
		mine_shack_pole_png.scaleX = 1.0218350570694466;
		mine_shack_pole_png.scaleY = 0.9481438699400263;

		// mine_shack_fish_wall_png
		const mine_shack_fish_wall_png = this.add.image(53, 594, "mine_shack", "mine_shack_fish_wall.png");

		// mine_shack_fish_wall_2_png
		const mine_shack_fish_wall_2_png = this.add.image(491, 744, "mine_shack", "mine_shack_fish_wall_2.png");

		// mine_shack_school_indoor_png
		const mine_shack_school_indoor_png = this.add.image(527, 358, "mine_shack", "mine_shack_school_indoor.png");
		mine_shack_school_indoor_png.scaleX = 0.9626992711746606;
		mine_shack_school_indoor_png.scaleY = 0.9988849339706622;

		// mine_shack_cave_door0002_png
		const mine_shack_cave_door0002_png = this.add.image(1008, 384, "mine_shack", "mine_shack_cave_door0002.png");
		mine_shack_cave_door0002_png.scaleX = 0.9101320866967804;
		mine_shack_cave_door0002_png.scaleY = 1.0252016692534525;

		// mine_shack_latern_png
		const mine_shack_latern_png = this.add.image(1073, 457, "mine_shack", "mine_shack_latern.png");

		// mine_shack_blue_book_png
		const mine_shack_blue_book_png = this.add.image(747, 807, "mine_shack", "mine_shack_blue_book.png");
		mine_shack_blue_book_png.scaleX = 0.892293509161904;
		mine_shack_blue_book_png.scaleY = 0.8118032196494619;

		// mine_shack_coffee_mug_png
		const mine_shack_coffee_mug_png = this.add.image(849, 856, "mine_shack", "mine_shack_coffee_mug.png");

		// mine_shack_guitar_png
		const mine_shack_guitar_png = this.add.image(915, 822, "mine_shack", "mine_shack_guitar.png");

		// mine_shack_cpu_text_png
		const mine_shack_cpu_text_png = this.add.image(210, 529, "mine_shack", "mine_shack_cpu_text.png");
		mine_shack_cpu_text_png.scaleX = 0.04488898859851208;
		mine_shack_cpu_text_png.scaleY = 0.041551883042804424;

		// mine_shack_red_flag0001_png
		const mine_shack_red_flag0001_png = this.add.sprite(341, 154, "mine_shack", "mine_shack_red_flag0001.png");

		// mine_shack_ball_png
		const mine_shack_ball_png = this.add.image(1114, 817, "mine_shack", "mine_shack_ball.png");

		// mine_shack_blue_pole_left_png
		const mine_shack_blue_pole_left_png = this.add.image(1109, 704, "mine_shack", "mine_shack_blue_pole_left.png");

		// mine_shack_bucket_png
		const mine_shack_bucket_png = this.add.image(1340, 756, "mine_shack", "mine_shack_bucket.png");

		// mine_shack_net_png
		const mine_shack_net_png = this.add.image(1196, 702, "mine_shack", "mine_shack_net.png");
		mine_shack_net_png.scaleX = 0.6613257782718515;
		mine_shack_net_png.scaleY = 1.0588134715160715;

		// mine_shack_blue_pole_right_png
		const mine_shack_blue_pole_right_png = this.add.image(1279, 770, "mine_shack", "mine_shack_blue_pole_right.png");

		// mine_shack_tree_right_side_png
		const mine_shack_tree_right_side_png = this.add.image(1477, 590, "mine_shack", "mine_shack_tree_right_side.png");
		mine_shack_tree_right_side_png.scaleY = 1.137587457029348;

		// mine_shack_rock_png
		const mine_shack_rock_png = this.add.image(1457, 697, "mine_shack", "mine_shack_rock.png");

		// mine_shack_school_door0001_png
		const mine_shack_school_door0001_png = this.add.image(538, 363, "mine_shack", "mine_shack_school_door0001.png");
		mine_shack_school_door0001_png.scaleX = 0.9356493445634586;

		// mine_shack_school_door0002_png
		const mine_shack_school_door0002_png = this.add.image(538, 363, "mine_shack", "mine_shack_school_door0002.png");
		mine_shack_school_door0002_png.scaleX = 0.9356493445634586;
		mine_shack_school_door0002_png.visible = false;

		// mine_shack_cave_door0001_png
		const mine_shack_cave_door0001_png = this.add.image(1007, 384, "mine_shack", "mine_shack_cave_door0001.png");
		mine_shack_cave_door0001_png.scaleX = 0.8962693406297523;
		mine_shack_cave_door0001_png.scaleY = 1.034189335423005;

		// mine_shack_school_trigger
		const mine_shack_school_trigger = this.add.rectangle(529, 376, 128, 128);
		mine_shack_school_trigger.scaleX = 0.829960439316069;
		mine_shack_school_trigger.scaleY = 0.4932207044490308;
		mine_shack_school_trigger.alpha = 0.001;
		mine_shack_school_trigger.isFilled = true;

		// mine_shack_dojo_courtyard_trigger
		const mine_shack_dojo_courtyard_trigger = this.add.rectangle(780, 319, 128, 128);
		mine_shack_dojo_courtyard_trigger.scaleX = 1.0260727677057497;
		mine_shack_dojo_courtyard_trigger.scaleY = 0.4932207044490308;
		mine_shack_dojo_courtyard_trigger.alpha = 0.001;
		mine_shack_dojo_courtyard_trigger.isFilled = true;

		// mine_shack_mine_trigger
		const mine_shack_mine_trigger = this.add.rectangle(1019, 390, 128, 128);
		mine_shack_mine_trigger.scaleX = 0.6476194669143516;
		mine_shack_mine_trigger.scaleY = 0.4912898748547185;
		mine_shack_mine_trigger.alpha = 0.001;
		mine_shack_mine_trigger.isFilled = true;

		// mine_shack_forest_trigger
		const mine_shack_forest_trigger = this.add.rectangle(199, 810, 128, 128);
		mine_shack_forest_trigger.scaleX = 1.0521910068903717;
		mine_shack_forest_trigger.scaleY = 1.4088731710193558;
		mine_shack_forest_trigger.alpha = 0.001;
		mine_shack_forest_trigger.isFilled = true;

		// mine_shack_walking_trigger
		const mine_shack_walking_trigger = this.physics.add.sprite(760, 482, "mine_shack_walking_trigger");
		mine_shack_walking_trigger.alpha = 0.001;
		mine_shack_walking_trigger.alphaTopLeft = 0.001;
		mine_shack_walking_trigger.alphaTopRight = 0.001;
		mine_shack_walking_trigger.alphaBottomLeft = 0.001;
		mine_shack_walking_trigger.alphaBottomRight = 0.001;
		mine_shack_walking_trigger.body.setSize(1520, 960, false);
		this.collisionMap = this.createCollisionMap(this, 760, 482, "mine_shack_walking_trigger");

		// mine_shack_skate_park_trigger
		const mine_shack_skate_park_trigger = this.add.rectangle(1413, 361, 128, 128);
		mine_shack_skate_park_trigger.scaleX = 1.0521910068903717;
		mine_shack_skate_park_trigger.scaleY = 1.4088731710193558;
		mine_shack_skate_park_trigger.alpha = 0.001;
		mine_shack_skate_park_trigger.isFilled = true;

		// Setting arcade physics sprites starts here
		this.physics.add.existing(mine_shack_forest_trigger);
		this.physics.add.existing(mine_shack_mine_trigger);
		this.physics.add.existing(mine_shack_dojo_courtyard_trigger);
		this.physics.add.existing(mine_shack_school_trigger);
		this.physics.add.existing(mine_shack_skate_park_trigger);
		// Setting arcade physics sprites ends here

		// Setting triggers starts here
		this.triggers.push([mine_shack_walking_trigger, () => {
			onWalkingTrigger(this);
		}]);

		this.triggers.push([mine_shack_forest_trigger, () => {
			onJoinRoomTrigger(SCENE_ROOM_FOREST);
		}]);

		this.triggers.push([mine_shack_mine_trigger, () => {
			onJoinRoomTrigger(SCENE_ROOM_MINE);
		}]);

		this.triggers.push([mine_shack_dojo_courtyard_trigger, () => {
			onJoinRoomTrigger(SCENE_ROOM_DOJO_COURTYARD);
		}]);

		this.triggers.push([mine_shack_school_trigger, () => {
			onJoinRoomTrigger(SCENE_ROOM_SCHOOL);
		}]);

		this.triggers.push([mine_shack_skate_park_trigger, () => {
			onJoinRoomTrigger(SCENE_ROOM_SKATE_PARK);
		}]);
		// Setting triggers ends here

        // Animations start here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "mineshack_red_flag_animation",
            "phaserAnimationKey": "mineshack_red_flag_animation_play",
            "textureKey": "mine_shack",
            "framePrefix": "mine_shack_red_flag",
            "frames": Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        mine_shack_red_flag0001_png.play("mineshack_red_flag_animation_play");
        // Animations end here

        // Setting all interactives sprites starts here
        mine_shack_school_door0001_png.setInteractive({ useHandCursor: true });
        mine_shack_school_door0002_png.setInteractive({ useHandCursor: true });
        mine_shack_cave_door0001_png.setInteractive({ useHandCursor: true });
        mine_shack_cave_door0002_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites end here

        // All interactive events start here
        mine_shack_school_door0001_png.on("pointerover", () => {
            mine_shack_school_door0001_png.visible = false;
            mine_shack_school_door0002_png.visible = true;
            this.audioManager.play(MINE_SHACK_ROOM_DOOR_OPEN);
        });

        mine_shack_school_door0002_png.on("pointerout", () => {
            mine_shack_school_door0001_png.visible = true;
            mine_shack_school_door0002_png.visible = false;
            this.audioManager.play(MINE_SHACK_ROOM_DOOR_CLOSE);
        });

        mine_shack_cave_door0001_png.on("pointerover", () => {
            mine_shack_cave_door0001_png.visible = false;
            mine_shack_cave_door0002_png.visible = true;
            this.audioManager.play(MINE_SHACK_ROOM_MINE_LIGHT_ON);
        });

        mine_shack_cave_door0002_png.on("pointerout", () => {
            mine_shack_cave_door0001_png.visible = true;
            mine_shack_cave_door0002_png.visible = false;
            this.audioManager.play(MINE_SHACK_ROOM_MINE_LIGHT_OFF);
        });
        // All interactive events end here

        this.audioManager.play(MINE_SHACK_ROOM_MUSIC);
		super.createContent(this);
    }

	update() {
		super.update();
	}
}