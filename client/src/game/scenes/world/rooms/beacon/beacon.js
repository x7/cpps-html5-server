import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { BEACON_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_BEACON, SCENE_ROOM_LIGHT_HOUSE } from "../../../sceneNames";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

// TODO: Launch pad hover effect little buggy
// TODO: Fix stair railing looks slanted

export class BeaconScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_BEACON);
    }

    init(data) {
        super.init(data);

        this.beaconLightOn = true;
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "beacon",
            "paths": ["assets/world/rooms/beacon/beacon-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "beacon_walking_trigger",
            "paths": ["assets/world/rooms/beacon/beacon_walking_trigger.png"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": BEACON_ROOM_MUSIC,
            "paths": ["assets/world/rooms/beacon/beacon_room_music.mp3"]
        });
    }

    createContent() {
		// beacon_sky_png
		const beacon_sky_png = this.add.image(745, 203, "beacon", "beacon_sky.png");

		// beacon_water_png
		const beacon_water_png = this.add.image(758, 663, "beacon", "beacon_water.png");
		beacon_water_png.scaleY = 1.0833942904947986;

		// beacon_floor_light_off_png
		const beacon_floor_light_off_png = this.add.image(691, 605, "beacon", "beacon_floor_light_off.png");
		beacon_floor_light_off_png.scaleX = 0.9856919461627679;
		beacon_floor_light_off_png.scaleY = 1.040736296472284;

		// beacon_floor_light_on0001_png
		const beacon_floor_light_on0001_png = this.add.image(691, 605, "beacon", "beacon_floor_light_on0001.png");
		beacon_floor_light_on0001_png.scaleX = 0.9856919461627679;
		beacon_floor_light_on0001_png.scaleY = 1.040736296472284;

		// beacon_under_layer_png
		const beacon_under_layer_png = this.add.image(775, 590, "beacon", "beacon_under_layer.png");
		beacon_under_layer_png.scaleX = 0.9932129452733911;
		beacon_under_layer_png.scaleY = 1.0558648949523652;

		// beacon_telescope_png
		const beacon_telescope_png = this.add.image(306, 237, "beacon", "beacon_telescope.png");
		beacon_telescope_png.scaleX = 1.0395706853092044;
		beacon_telescope_png.scaleY = 0.9459036024329147;

		// beacon_launch_pad_png
		const beacon_launch_pad_png = this.add.image(1329, 552, "beacon", "beacon_launch_pad.png");
		beacon_launch_pad_png.scaleX = 0.9941624795762657;
		beacon_launch_pad_png.scaleY = 1.0581677323447876;

		// beacon_launch_pad_open0001_png
		const beacon_launch_pad_open0001_png = this.add.sprite(1329, 533, "beacon", "beacon_launch_pad_open0001.png");
		beacon_launch_pad_open0001_png.scaleX = 0.9941624795762657;
		beacon_launch_pad_open0001_png.scaleY = 1.0581677323447876;
		beacon_launch_pad_open0001_png.visible = false;

		// beacon_light_off_png
		const beacon_light_off_png = this.add.image(708, 336, "beacon", "beacon_light_off.png");
		beacon_light_off_png.scaleX = 1.0007923866312578;
		beacon_light_off_png.scaleY = 1.0572257872061104;
		beacon_light_off_png.visible = false;

		// beacon_light_ono_png
		const beacon_light_ono_png = this.add.image(708, 336, "beacon", "beacon_light_ono.png");
		beacon_light_ono_png.scaleX = 1.0007923866312578;
		beacon_light_ono_png.scaleY = 1.0572257872061104;

		// beacon_toggle_switch0001_png
		const beacon_toggle_switch0001_png = this.add.sprite(489, 446, "beacon", "beacon_toggle_switch0001.png");
		beacon_toggle_switch0001_png.scaleX = 1.051047609621347;
		beacon_toggle_switch0001_png.scaleY = 0.9936474224138665;

		// beacon_inside_png
		const beacon_inside_png = this.add.image(708, 401, "beacon", "beacon_inside.png");
		beacon_inside_png.scaleX = 0.9677033492024847;
		beacon_inside_png.scaleY = 1.02546627617923;

		// beacon_roof_png
		const beacon_roof_png = this.add.image(717, 78, "beacon", "beacon_roof.png");
		beacon_roof_png.scaleX = 0.9134839825968978;
		beacon_roof_png.scaleY = 0.9147310901174381;

		// beacon_bottom_railing_png
		const beacon_bottom_railing_png = this.add.image(687, 733, "beacon", "beacon_bottom_railing.png");
		beacon_bottom_railing_png.scaleX = 0.9951899562158322;
		beacon_bottom_railing_png.scaleY = 1.060750289210318;

		// beacon_downstairs_png
		const beacon_downstairs_png = this.add.image(170, 561, "beacon", "beacon_downstairs.png");
		beacon_downstairs_png.scaleX = 0.8539222176362102;
		beacon_downstairs_png.scaleY = 0.7111298146392973;
		beacon_downstairs_png.angle = -6;

		// beacon_poole_png_1
		const beacon_poole_png_1 = this.add.image(845, 906, "beacon", "beacon_poole.png");
		beacon_poole_png_1.scaleX = 1.4434381140865555;
		beacon_poole_png_1.scaleY = 0.7876176405593813;

		// beacon_downstairs_hovered0001_png
		const beacon_downstairs_hovered0001_png = this.add.image(170, 561, "beacon", "beacon_downstairs_hovered0001.png");
		beacon_downstairs_hovered0001_png.scaleX = 0.8539222176362102;
		beacon_downstairs_hovered0001_png.scaleY = 0.7111298146392973;
		beacon_downstairs_hovered0001_png.angle = -6;
		beacon_downstairs_hovered0001_png.visible = false;

		// beacon_downstairs_rail_png
		const beacon_downstairs_rail_png = this.add.image(206, 531, "beacon", "beacon_downstairs_rail.png");
		beacon_downstairs_rail_png.scaleX = 1.1133084717904316;
		beacon_downstairs_rail_png.scaleY = 0.8128586148991293;
		beacon_downstairs_rail_png.angle = -5;

		// beacon_poole_png_2
		const beacon_poole_png_2 = this.add.image(520, 906, "beacon", "beacon_poole.png");
		beacon_poole_png_2.scaleX = 1.4434381140865555;
		beacon_poole_png_2.scaleY = 0.7876176405593813;

		// beacon_light_house_trigger
		const beacon_light_house_trigger = this.add.rectangle(169, 567, 128, 128);
		beacon_light_house_trigger.scaleX = 0.861041044414108;
		beacon_light_house_trigger.scaleY = 0.7708025147089017;
		beacon_light_house_trigger.alpha = 0.001;
		beacon_light_house_trigger.isFilled = true;

		// beacon_walking_trigger
		const beacon_walking_trigger = this.physics.add.sprite(774, 449, "beacon_walking_trigger");
		beacon_walking_trigger.alpha = 0.001;
		beacon_walking_trigger.alphaTopLeft = 0.001;
		beacon_walking_trigger.alphaTopRight = 0.001;
		beacon_walking_trigger.alphaBottomLeft = 0.001;
		beacon_walking_trigger.alphaBottomRight = 0.001;
		beacon_walking_trigger.body.setSize(1520, 960, false);
        this.collisionMap = this.createCollisionMap(this, 774, 449, "beacon_walking_trigger");

        // Setting arcade physics sprites starts here
        this.physics.add.existing(beacon_light_house_trigger);
        // Setting arcade physics sprites ends here

        // Setting triggers starts here
        this.triggers.push([beacon_walking_trigger, () => {
            onWalkingTrigger(this);
        }]);
        
        this.triggers.push([beacon_light_house_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_LIGHT_HOUSE);
        }]);
        // Setting triggers ends here

        // Animations starts here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "beacon_light_house_switch_light_off_animation",
            "phaserAnimationKey": "beacon_light_house_switch_light_off_animation_play",
            "textureKey": "beacon",
            "framePrefix": "beacon_toggle_switch",
            "frames": Array.from({ length: 19 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "beacon_light_house_switch_light_on_animation",
            "phaserAnimationKey": "beacon_light_house_switch_light_on_animation_play",
            "textureKey": "beacon",
            "framePrefix": "beacon_toggle_switch",
            "frames": Array.from({ length: 10 }, (_, i) => String(i + 19).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "beacon_light_house_launch_pad_animation",
            "phaserAnimationKey": "beacon_light_house_launch_pad_animation_play",
            "textureKey": "beacon",
            "framePrefix": "beacon_launch_pad_open",
            "frames": Array.from({ length: 18 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });
        // Animations ends here

        // Setting all interactives sprites starts here
        beacon_telescope_png.setInteractive({ useHandCursor: true });
        beacon_downstairs_png.setInteractive({ useHandCursor: true });
        beacon_launch_pad_png.setInteractive({ useHandCursor: true });
        beacon_downstairs_hovered0001_png.setInteractive({ useHandCursor: true });
        beacon_launch_pad_open0001_png.setInteractive({ useHandCursor: true });
        beacon_toggle_switch0001_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        beacon_telescope_png.on("pointerdown", () => {
            console.log("opened telescope");
        });

        beacon_downstairs_png.on("pointerover", () => {
            beacon_downstairs_png.visible = false;
            beacon_downstairs_hovered0001_png.visible = true;
        });

        beacon_downstairs_hovered0001_png.on("pointerout", () => {
            beacon_downstairs_png.visible = true;
            beacon_downstairs_hovered0001_png.visible = false;
        });

        beacon_launch_pad_png.on("pointerover", () => {
            beacon_launch_pad_png.visible = false;
            beacon_launch_pad_open0001_png.visible = true;
            beacon_launch_pad_open0001_png.play("beacon_light_house_launch_pad_animation_play");
        });

        beacon_launch_pad_open0001_png.on("pointerout", () => {
            beacon_launch_pad_png.visible = true;
            beacon_launch_pad_open0001_png.visible = false;
            beacon_launch_pad_open0001_png.stop("beacon_light_house_launch_pad_animation_play");
        });

        beacon_toggle_switch0001_png.on("pointerdown", () => {
            if(this.beaconLightOn) {
                beacon_toggle_switch0001_png.play("beacon_light_house_switch_light_off_animation_play");
                this.beaconLightOn = false;
                beacon_floor_light_on0001_png.visible = false;
                beacon_floor_light_off_png.visible = true;
                beacon_light_ono_png.visible = false;
                beacon_light_off_png.visible = true;
                return;
            }

            beacon_toggle_switch0001_png.play("beacon_light_house_switch_light_on_animation_play");
            this.beaconLightOn = true;
            beacon_floor_light_on0001_png.visible = true;
            beacon_floor_light_off_png.visible = false;
            beacon_light_ono_png.visible = true;
            beacon_light_off_png.visible = false;
        });
        // All interactive events end here

        this.audioManager.play(BEACON_ROOM_MUSIC);
        super.createContent(this);
    }

    update() {
        super.update();
    }
}