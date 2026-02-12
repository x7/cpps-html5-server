import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { BEACH_ROOM_LIGHTHOUSE_DOOR_CLOSE, BEACH_ROOM_LIGHTHOUSE_DOOR_OPEN, BEACH_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_BEACH, SCENE_ROOM_DOCKS, SCENE_ROOM_LIGHT_HOUSE, SCENE_ROOM_PIRATE_SHIP, SCENE_ROOM_SKI_VILLAGE } from "../../../sceneNames";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

// TODO: Add green bucket sounds

export class BeachScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_BEACH);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "beach",
            "paths": ["assets/world/rooms/beach/beach-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "beach_walking_trigger",
            "paths": ["assets/world/rooms/beach/beach_walking_trigger.png"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": BEACH_ROOM_MUSIC,
            "paths": ["assets/world/rooms/beach/beach_music.mp3"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": BEACH_ROOM_LIGHTHOUSE_DOOR_OPEN,
            "paths": ["assets/world/rooms/beach/beach2013-dooropen.mp3"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": BEACH_ROOM_LIGHTHOUSE_DOOR_CLOSE,
            "paths": ["assets/world/rooms/beach/beach2013-doorclose.mp3"]
        });
    }

    createContent() {
		// beach_background_png
		const beach_background_png = this.add.image(773, 117, "beach", "beach_background.png");
		beach_background_png.scaleX = 1.1469691133278472;
		beach_background_png.scaleY = 1.781668969161465;

		// beach_background_clouds_png
		const beach_background_clouds_png = this.add.image(763, 160, "beach", "beach_background_clouds.png");
		beach_background_clouds_png.scaleX = 0.993620930829786;
		beach_background_clouds_png.scaleY = 1.3232399233345262;

		// beach_water_png
		const beach_water_png = this.add.image(-136, 230, "beach", "beach_water.png");
		beach_water_png.scaleX = 0.9931020532325403;
		beach_water_png.scaleY = 1.0107935036331477;
		beach_water_png.setOrigin(0, 0);

		// beach_rockhopper_migrator_ship0001_png
		const beach_rockhopper_migrator_ship0001_png = this.add.sprite(415, 173, "beach", "beach_rockhopper_migrator_ship0001.png");
		beach_rockhopper_migrator_ship0001_png.scaleX = 0.9246441120731139;
		beach_rockhopper_migrator_ship0001_png.scaleY = 1.079138656266888;

		// beach_mountains_png
		const beach_mountains_png = this.add.image(1320, 123, "beach", "beach_mountains.png");
		beach_mountains_png.scaleX = 0.9306300060101699;
		beach_mountains_png.scaleY = 1.1286294407166402;

		// beach_main_floor_png
		const beach_main_floor_png = this.add.image(20, -22, "beach", "beach_main_floor.png");
		beach_main_floor_png.setOrigin(0, 0);

		// beach_debris_png
		const beach_debris_png = this.add.image(243, 635, "beach", "beach_debris.png");
		beach_debris_png.scaleX = 0.9973278516239773;
		beach_debris_png.scaleY = 1.0337830890666655;

		// beach_light_house_door0001_png
		const beach_light_house_door0001_png = this.add.image(394, 307, "beach", "beach_light_house_door0001.png");
		beach_light_house_door0001_png.scaleX = 1.0072261085967595;
		beach_light_house_door0001_png.scaleY = 0.985384023524362;

		// beach_light_house_door0002_png
		const beach_light_house_door0002_png = this.add.image(394, 307, "beach", "beach_light_house_door0002.png");
		beach_light_house_door0002_png.scaleX = 1.0072261085967595;
		beach_light_house_door0002_png.scaleY = 0.985384023524362;
		beach_light_house_door0002_png.visible = false;

		// beach_handle_png
		const beach_handle_png = this.add.image(382, 403, "beach", "beach_handle.png");
		beach_handle_png.scaleX = 1.0658649908621685;
		beach_handle_png.scaleY = 0.9362029377019738;

		// beach_right_side_tree_png
		const beach_right_side_tree_png = this.add.image(1378, 427, "beach", "beach_right_side_tree.png");
		beach_right_side_tree_png.scaleX = 1.0703246076656712;
		beach_right_side_tree_png.scaleY = 1.0071305610735295;

		// beach_left_chair_png
		const beach_left_chair_png = this.add.image(835, 531, "beach", "beach_left_chair.png");
		beach_left_chair_png.scaleX = 0.998961725864967;
		beach_left_chair_png.scaleY = 1.052818960980209;

		// beach_sunbrella_chair_png
		const beach_sunbrella_chair_png = this.add.image(1013, 453, "beach", "beach_sunbrella_chair.png");
		beach_sunbrella_chair_png.scaleX = 0.998961725864967;
		beach_sunbrella_chair_png.scaleY = 1.052818960980209;

		// beach_sunbrella_chair_arm_png
		const beach_sunbrella_chair_arm_png = this.add.image(943, 507, "beach", "beach_sunbrella_chair_arm.png");
		beach_sunbrella_chair_arm_png.scaleX = 0.9222789389850943;
		beach_sunbrella_chair_arm_png.scaleY = 1.0079129949320513;

		// beach_green_bucket0001_png
		const beach_green_bucket = this.add.sprite(1061, 586, "beach", "beach_green_bucket0001.png");

		// beach_sand_castle_png
		const beach_sand_castle_png = this.add.image(773, 683, "beach", "beach_sand_castle.png");
		beach_sand_castle_png.scaleX = 0.9945447508904232;
		beach_sand_castle_png.scaleY = 1.0597168661052654;

		// beach_right_lower_ledge_png
		const beach_right_lower_ledge_png = this.add.image(1351, 598, "beach", "beach_right_lower_ledge.png");
		beach_right_lower_ledge_png.scaleX = 1.1130646404568485;
		beach_right_lower_ledge_png.scaleY = 1.235393419120074;

        // beach_docks_trigger
		const beach_docks_trigger = this.add.rectangle(1257, 299, 128, 128);
		beach_docks_trigger.setInteractive(new Phaser.Geom.Circle(64, 64, 64), Phaser.Geom.Circle.Contains);
		beach_docks_trigger.scaleX = 0.7811366259881916;
		beach_docks_trigger.scaleY = 1.1912750425360845;
		beach_docks_trigger.alpha = 0.001;
		beach_docks_trigger.isFilled = true;

		// beach_ski_village_trigger
		const beach_ski_village_trigger = this.add.rectangle(919, 184, 128, 128);
		beach_ski_village_trigger.setInteractive(new Phaser.Geom.Circle(64, 64, 64), Phaser.Geom.Circle.Contains);
		beach_ski_village_trigger.scaleX = 2.045086882486506;
		beach_ski_village_trigger.scaleY = 1.8148714114032596;
		beach_ski_village_trigger.alpha = 0.001;
		beach_ski_village_trigger.isFilled = true;

		// beach_pirate_ship_trigger
		const beach_pirate_ship_trigger = this.add.rectangle(614, 232, 128, 128);
		beach_pirate_ship_trigger.scaleX = 0.7811366259881916;
		beach_pirate_ship_trigger.scaleY = 1.4477237071805544;
		beach_pirate_ship_trigger.alpha = 0.001;
		beach_pirate_ship_trigger.isFilled = true;

		// beach_light_house_trigger
		const beach_light_house_trigger = this.add.rectangle(397, 330, 128, 128);
		beach_light_house_trigger.scaleX = 0.8187578201515209;
		beach_light_house_trigger.scaleY = 0.6563003843500301;
		beach_light_house_trigger.alpha = 0.001;
		beach_light_house_trigger.isFilled = true;
        
		// beach_walking_trigger
		const beach_walking_trigger = this.physics.add.sprite(759, 473, "beach_walking_trigger");
		beach_walking_trigger.alpha = 0.001;
		beach_walking_trigger.alphaTopLeft = 0.001;
		beach_walking_trigger.alphaTopRight = 0.001;
		beach_walking_trigger.alphaBottomLeft = 0.001;
		beach_walking_trigger.alphaBottomRight = 0.001;
		beach_walking_trigger.body.setSize(1520, 960, false);
        this.collisionMap = this.createCollisionMap(this, 759, 473, "beach_walking_trigger");

        // Setting arcade physics sprites starts here
		this.physics.add.existing(beach_light_house_trigger);
		this.physics.add.existing(beach_pirate_ship_trigger);
		this.physics.add.existing(beach_ski_village_trigger);
        this.physics.add.existing(beach_docks_trigger);
		// Setting arcade physics sprites ends here

        // Setting triggers starts here
        this.triggers.push([beach_walking_trigger, () => {
            onWalkingTrigger(this);
        }]);
        
        this.triggers.push([beach_light_house_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_LIGHT_HOUSE);
        }]);

        this.triggers.push([beach_pirate_ship_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_PIRATE_SHIP);
        }]);

        this.triggers.push([beach_ski_village_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_SKI_VILLAGE);
        }]);

        this.triggers.push([beach_docks_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_DOCKS);
        }]);
        // Setting triggers ends here

        // Animations start here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "beach_rockhoppers_ship_movement",
            "phaserAnimationKey": "beach_rockhopper_ship_move_play",
            "textureKey": "beach",
            "framePrefix": "beach_rockhopper_migrator_ship",
            "frames": Array.from({ length: 100 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "beach_green_bucket",
            "phaserAnimationKey": "beach_green_bucket_play",
            "textureKey": "beach",
            "framePrefix": "beach_green_bucket",
            "frames": Array.from({ length: 304 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        beach_rockhopper_migrator_ship0001_png.play("beach_rockhopper_ship_move_play");
        // Animations end here

        // Setting all interactives sprites starts here
        beach_light_house_door0001_png.setInteractive({ useHandCursor: true });
        beach_light_house_door0002_png.setInteractive({ useHandCursor: true });
        beach_green_bucket.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        beach_light_house_door0001_png.on("pointerover", () => {
            beach_light_house_door0001_png.visible = false;
            beach_light_house_door0002_png.visible = true;
			this.audioManager.play(BEACH_ROOM_LIGHTHOUSE_DOOR_OPEN);
        });

        beach_light_house_door0002_png.on("pointerout", () => {
            beach_light_house_door0001_png.visible = true;
            beach_light_house_door0002_png.visible = false;
			this.audioManager.play(BEACH_ROOM_LIGHTHOUSE_DOOR_CLOSE);
        });

        beach_green_bucket.on("pointerover", () => {
            beach_green_bucket.play("beach_green_bucket_play");
        });
        // All interactive events end here

		this.audioManager.play(BEACH_ROOM_MUSIC);
        super.createContent(this);
    }

    update() {
        super.update();
    }
}