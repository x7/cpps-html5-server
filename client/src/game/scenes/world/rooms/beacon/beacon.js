import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { BEACON_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { BaseScene } from "../../../base/baseScene";

// TODO: Launch pad hover effect little buggy
// TODO: Fix stair railing looks slanted

export class BeaconScene extends BaseScene {
    constructor() {
        super("BeaconScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
        this.audioManager = this.getAudioManager();
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
            "type": ASSET_TYPES.AUDIO,
            "name": BEACON_ROOM_MUSIC,
            "paths": ["assets/world/rooms/beacon/beacon_music.json"]
        });
    }

    createContent() {
		// beacon_sky_png
		this.add.image(711, 119, "beacon", "beacon_sky.png");

		// beacon_water_png
		this.add.image(740, 538, "beacon", "beacon_water.png");

		// beacon_floor_light_off_png
		const beacon_floor_light_off_png = this.add.image(579, 482, "beacon", "beacon_floor_light_off.png");
		beacon_floor_light_off_png.scaleX = 0.8105923176720654;
		beacon_floor_light_off_png.scaleY = 0.8770878446041519;
		beacon_floor_light_off_png.visible = false;

		// beacon_floor_light_on0001_png
		const beacon_floor_light_on0001_png = this.add.image(578, 480, "beacon", "beacon_floor_light_on0001.png");
		beacon_floor_light_on0001_png.scaleX = 0.8132171864518978;
		beacon_floor_light_on0001_png.scaleY = 0.8770878446041519;

		// beacon_under_layer_png
		const beacon_under_layer_png = this.add.image(654, 467, "beacon", "beacon_under_layer.png");
		beacon_under_layer_png.scaleX = 0.8246238236003475;
		beacon_under_layer_png.scaleY = 0.848474166047867;

		// beacon_telescope_png
		const beacon_telescope_png = this.add.image(266, 183, "beacon", "beacon_telescope.png");
		beacon_telescope_png.scaleX = 0.8064646661930708;
		beacon_telescope_png.scaleY = 0.7376054011817891;

		// beacon_launch_pad_png
		const beacon_launch_pad_png = this.add.image(1116, 435, "beacon", "beacon_launch_pad.png");
		beacon_launch_pad_png.scaleX = 0.8675362277119308;
		beacon_launch_pad_png.scaleY = 0.8369468160064936;

		// beacon_launch_pad_open0001_png
		const beacon_launch_pad_open0001_png = this.add.sprite(1116, 422, "beacon", "beacon_launch_pad_open0001.png");
		beacon_launch_pad_open0001_png.scaleX = 0.7861300521511044;
		beacon_launch_pad_open0001_png.scaleY = 0.8357420240966268;
		beacon_launch_pad_open0001_png.visible = false;

		// beacon_light_off_png
		const beacon_light_off_png = this.add.image(594, 261, "beacon", "beacon_light_off.png");
		beacon_light_off_png.scaleX = 0.8496726561027311;
		beacon_light_off_png.scaleY = 0.9011393123654468;
		beacon_light_off_png.visible = false;

		// beacon_light_ono_png
		const beacon_light_ono_png = this.add.image(594, 261, "beacon", "beacon_light_ono.png");
		beacon_light_ono_png.scaleX = 0.8496726561027311;
		beacon_light_ono_png.scaleY = 0.9011393123654468;

		// beacon_toggle_switch0001_png
		const beacon_toggle_switch0001_png = this.add.sprite(401, 347, "beacon", "beacon_toggle_switch0001.png");
		beacon_toggle_switch0001_png.scaleX = 0.846520655621429;
		beacon_toggle_switch0001_png.scaleY = 0.7938532510830505;

		// beacon_inside_png
		const beacon_inside_png = this.add.image(590, 303, "beacon", "beacon_inside.png");
		beacon_inside_png.scaleX = 0.8269382893362774;
		beacon_inside_png.scaleY = 0.9050076935438041;

		// beacon_roof_png
		const beacon_roof_png = this.add.image(597, 31, "beacon", "beacon_roof.png");
		beacon_roof_png.scaleX = 0.8124351147864151;
		beacon_roof_png.scaleY = 0.8106911772077768;

		// beacon_bottom_railing_png
		const beacon_bottom_railing_png = this.add.image(577, 581, "beacon", "beacon_bottom_railing.png");
		beacon_bottom_railing_png.scaleX = 0.8230393040150125;
		beacon_bottom_railing_png.scaleY = 0.9569585119925079;

		// beacon_downstairs_png
		const beacon_downstairs_png = this.add.image(173, 433, "beacon", "beacon_downstairs.png");
		beacon_downstairs_png.scaleX = 0.9227019878760856;
		beacon_downstairs_png.scaleY = 0.8213879701448422;

		// beacon_poole_png
		this.add.image(415, 729, "beacon", "beacon_poole.png");

		// beacon_poole_png_1
		this.add.image(739, 729, "beacon", "beacon_poole.png");

		// beacon_downstairs_hovered0001_png
		const beacon_downstairs_hovered0001_png = this.add.image(174, 432, "beacon", "beacon_downstairs_hovered0001.png");
		beacon_downstairs_hovered0001_png.scaleX = 0.905143221519351;
		beacon_downstairs_hovered0001_png.scaleY = 0.8748122998332565;
		beacon_downstairs_hovered0001_png.visible = false;

		// beacon_downstairs_rail_png
		const beacon_downstairs_rail_png = this.add.image(200, 401, "beacon", "beacon_downstairs_rail.png");
		beacon_downstairs_rail_png.scaleX = 1.0090295456025662;
		beacon_downstairs_rail_png.scaleY = 0.8903624957700477;

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
    }
}