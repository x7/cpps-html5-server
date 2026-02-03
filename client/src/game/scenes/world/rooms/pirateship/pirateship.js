import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { PIRATE_SHIP_DOOR_CLOSE, PIRATE_SHIP_DOOR_OPEN, PIRATE_SHIP_LADDER_DOWN, PIRATE_SHIP_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_PIRATE_SHOP } from "../../../sceneNames";
import { RoomScene } from "../RoomScene";

export class PirateShipScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_PIRATE_SHOP);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "pirateship",
            "paths": ["assets/world/rooms/pirateship/pirateship-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PIRATE_SHIP_ROOM_MUSIC,
            "paths": [`assets/world/rooms/pirateship/${PIRATE_SHIP_ROOM_MUSIC}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PIRATE_SHIP_DOOR_OPEN,
            "paths": [`assets/world/rooms/pirateship/${PIRATE_SHIP_DOOR_OPEN}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PIRATE_SHIP_DOOR_CLOSE,
            "paths": [`assets/world/rooms/pirateship/${PIRATE_SHIP_DOOR_CLOSE}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PIRATE_SHIP_LADDER_DOWN,
            "paths": [`assets/world/rooms/pirateship/${PIRATE_SHIP_LADDER_DOWN}.mp3`]
        });
    }

    createContent() {
		// pirate_ship_clouds_png
		const pirate_ship_clouds_png = this.add.image(731, 160, "pirateship", "pirate_ship_clouds.png");

		// pirate_shop_top_png
		const pirate_shop_top_png = this.add.image(763, 534, "pirateship", "pirate_shop_top.png");

		// pirate_ship_chest_png
		const pirate_ship_chest_png = this.add.image(1369, 385, "pirateship", "pirate_ship_chest.png");

		// pirate_shop_stick_png
		const pirate_shop_stick_png = this.add.image(1435, 391, "pirateship", "pirate_shop_stick.png");

		// pirate_ship_mop_bucket_png
		const pirate_ship_mop_bucket_png = this.add.image(264, 267, "pirateship", "pirate_ship_mop_bucket.png");

		// pirate_ship_left_middle_cheese_png
		const pirate_ship_left_middle_cheese_png = this.add.image(148, 388, "pirateship", "pirate_ship_left_middle_cheese.png");

		// pirate_ship_bottom_png
		const pirate_ship_bottom_png = this.add.image(771, 703, "pirateship", "pirate_ship_bottom.png");

		// pirate_ship_rope_png
		const pirate_ship_rope_png = this.add.image(872, 763, "pirateship", "pirate_ship_rope.png");

		// pirate_ship_wheel_png
		const pirate_ship_wheel_png = this.add.image(365, 406, "pirateship", "pirate_ship_wheel.png");

		// pirate_ship_downstairs_entire_door0001_png
		const pirate_ship_downstairs_entire_door0001_png = this.add.image(518, 477, "pirateship", "pirate_ship_downstairs_entire_door0001.png");

		// pirate_ship_downstairs_dooor0002_png
		const pirate_ship_downstairs_dooor0002_png = this.add.image(544, 484, "pirateship", "pirate_ship_downstairs_dooor0002.png");
		pirate_ship_downstairs_dooor0002_png.scaleX = 1.0272728188474962;
		pirate_ship_downstairs_dooor0002_png.visible = false;

		// pirate_ship_railing_png
		const pirate_ship_railing_png = this.add.image(1091, 458, "pirateship", "pirate_ship_railing.png");

		// pirate_ship_flag_pole_png
		const pirate_ship_flag_pole_png = this.add.image(315, 131, "pirateship", "pirate_ship_flag_pole.png");

		// pirate_ship_flag0001_png
		const pirate_ship_flag0001_png = this.add.sprite(233, 127, "pirateship", "pirate_ship_flag0001.png");

		// pirate_ship_middle_png
		const pirate_ship_middle_png = this.add.image(774, 313, "pirateship", "pirate_ship_middle.png");

		// pirate_shop_top_deck_png
		const pirate_shop_top_deck_png = this.add.image(750, 351, "pirateship", "pirate_shop_top_deck.png");

		// pirate_ship_up_sign0001_png
		const pirate_ship_up_sign0001_png = this.add.image(761, 98, "pirateship", "pirate_ship_up_sign0001.png");

		// pirate_ship_up_sign0004_png
		const pirate_ship_up_sign0004_png = this.add.image(775, 129, "pirateship", "pirate_ship_up_sign0004.png");
		pirate_ship_up_sign0004_png.scaleX = 0.5140786587466499;
		pirate_ship_up_sign0004_png.scaleY = 0.790074172326869;
		pirate_ship_up_sign0004_png.alpha = 0.001;
		pirate_ship_up_sign0004_png.alphaTopLeft = 0.001;
		pirate_ship_up_sign0004_png.alphaTopRight = 0.001;
		pirate_ship_up_sign0004_png.alphaBottomLeft = 0.001;
		pirate_ship_up_sign0004_png.alphaBottomRight = 0.001;

		// pirate_ship_red_puffle0001_png
		const pirate_ship_red_puffle0001_png = this.add.sprite(583, 97, "pirateship", "pirate_ship_red_puffle0001.png");

		// pirate_ship_rope_down0003_png
		const pirate_ship_rope_down0003_png = this.add.sprite(824, 164, "pirateship", "pirate_ship_rope_down0003.png");
		pirate_ship_rope_down0003_png.scaleY = 1.2266138255627863;

		// pirate_ship_snow_png
		const pirate_ship_snow_png = this.add.image(824, 924, "pirateship", "pirate_ship_snow.png");

		// pirate_ship_door_trigger
		const pirate_ship_door_trigger = this.add.image(567, 502, "pirateship", "pirate_ship_flag_trigger.png");
		pirate_ship_door_trigger.scaleX = 1.1199192399666822;
		pirate_ship_door_trigger.scaleY = 1.0553411030926816;
		pirate_ship_door_trigger.alpha = 0.001;
		pirate_ship_door_trigger.alphaTopLeft = 0.001;
		pirate_ship_door_trigger.alphaTopRight = 0.001;
		pirate_ship_door_trigger.alphaBottomLeft = 0.001;
		pirate_ship_door_trigger.alphaBottomRight = 0.001;

		// pirate_ship_flag_trigger_png_1
		const pirate_ship_flag_trigger_png_1 = this.add.image(234, 125, "pirateship", "pirate_ship_flag_trigger.png");
		pirate_ship_flag_trigger_png_1.scaleX = 0.9787552017784978;
		pirate_ship_flag_trigger_png_1.scaleY = 0.8818862014906393;
		pirate_ship_flag_trigger_png_1.alpha = 0.001;
		pirate_ship_flag_trigger_png_1.alphaTopLeft = 0.001;
		pirate_ship_flag_trigger_png_1.alphaTopRight = 0.001;
		pirate_ship_flag_trigger_png_1.alphaBottomLeft = 0.001;
		pirate_ship_flag_trigger_png_1.alphaBottomRight = 0.001;

        // Creating animations starts here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pirate_ship_red_puffle_animation",
            "phaserAnimationKey": "pirate_ship_red_puffle_animation_play",
            "textureKey": "pirateship",
            "framePrefix": "pirate_ship_red_puffle",
            "frames": Array.from({ length: 468 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pirate_ship_ladder_drop_down_animation",
            "phaserAnimationKey": "pirate_ship_ladder_drop_down_animation_play",
            "textureKey": "pirateship",
            "framePrefix": "pirate_ship_rope_down",
            "frames": Array.from({ length: 18 }, (_, i) => String(i + 3).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pirate_ship_flag_animation",
            "phaserAnimationKey": "pirate_ship_flag_animation_play",
            "textureKey": "pirateship",
            "framePrefix": "pirate_ship_flag",
            "frames": Array.from({ length: 13 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        pirate_ship_red_puffle0001_png.play("pirate_ship_red_puffle_animation_play");
        // Creating animations ends here

        // Setting all interactives sprites starts here
        pirate_ship_up_sign0004_png.setInteractive({ useHandCursor: true });
        pirate_ship_door_trigger.setInteractive({ useHandCursor: true });
        pirate_ship_flag_trigger_png_1.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        pirate_ship_door_trigger.on("pointerover", () => {
            pirate_ship_downstairs_dooor0002_png.visible = true;
            this.audioManager.play(PIRATE_SHIP_DOOR_OPEN);
        });

        pirate_ship_door_trigger.on("pointerout", () => {
            pirate_ship_downstairs_dooor0002_png.visible = false;
            this.audioManager.play(PIRATE_SHIP_DOOR_CLOSE);
        });

        pirate_ship_flag_trigger_png_1.on("pointerover", () => {
            pirate_ship_flag0001_png.play("pirate_ship_flag_animation_play");
        });

        pirate_ship_flag_trigger_png_1.on("pointerout", () => {
            pirate_ship_flag0001_png.stop();
            pirate_ship_flag0001_png.setFrame("pirate_ship_flag0001.png");
        });

        pirate_ship_up_sign0004_png.on("pointerover", () => {
            pirate_ship_rope_down0003_png.play("pirate_ship_ladder_drop_down_animation_play");
            this.audioManager.play(PIRATE_SHIP_LADDER_DOWN);
        });

        pirate_ship_up_sign0004_png.on("pointerout", () => {
            pirate_ship_rope_down0003_png.stop();
            pirate_ship_rope_down0003_png.setFrame("pirate_ship_rope_down0003.png");
        });
        // All interactive events ends here

        this.audioManager.play(PIRATE_SHIP_ROOM_MUSIC);
    }
}