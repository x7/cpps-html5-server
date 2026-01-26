import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { SKI_VILLAGE_ROOM_EPF_DOOR_CLOSE, SKI_VILLAGE_ROOM_EPF_DOOR_OPEN, SKI_VILLAGE_ROOM_MUSIC, SKI_VILLAGE_ROOM_SKI_LODGE_DOOR_CLOSE, SKI_VILLAGE_ROOM_SKI_LODGE_DOOR_OPEN } from "../../../../audio/audioConstants";
import { BaseScene } from "../../../base/baseScene";

// TODO: Fix animations (1)
// TODO: Add mission animation (1)

export class SkiVillageScene extends BaseScene {
    constructor() {
        super("SkiVillageScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
        this.audioManager = this.getAudioManager();
    }

    preloadContent() {
        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.PACK,
            name: "skivillage",
            paths: ["assets/world/rooms/skivillage/skivillage-pack.json"]
        });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: SKI_VILLAGE_ROOM_MUSIC,
            paths: ["assets/world/rooms/skivillage/ski_village_room_music.mp3"]
        });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: SKI_VILLAGE_ROOM_SKI_LODGE_DOOR_OPEN,
            paths: ["assets/world/rooms/skivillage/village2014-dooropen.mp3"]
        });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: SKI_VILLAGE_ROOM_SKI_LODGE_DOOR_CLOSE,
            paths: ["assets/world/rooms/skivillage/village2014-doorclose1.mp3"]
        });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: SKI_VILLAGE_ROOM_EPF_DOOR_OPEN,
            paths: ["assets/world/rooms/skivillage/village2014-dooropen.mp3"]
        });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: SKI_VILLAGE_ROOM_EPF_DOOR_CLOSE,
            paths: ["assets/world/rooms/skivillage/village2014-doorclose.mp3"]
        });
    }

    createContent() {

		// skivillage_background_png
		const skivillage_background_png = this.add.image(765, 173, "skivillage", "skivillage_background.png");
		skivillage_background_png.scaleX = 0.8752239238348142;
		skivillage_background_png.scaleY = 0.9814237536282568;

		// ski_village_main_png
		const ski_village_main_png = this.add.image(-2, -3, "skivillage", "ski_village_main.png");
		ski_village_main_png.scaleX = 1.1299282576648517;
		ski_village_main_png.scaleY = 1.2362333118074642;
		ski_village_main_png.setOrigin(0, 0);

		// ski_village_lodge_door0001_png
		const ski_village_lodge_door0001_png = this.add.image(997, 361, "skivillage", "ski_village_lodge_door0001.png");
		ski_village_lodge_door0001_png.scaleX = 0.9430683964035707;
		ski_village_lodge_door0001_png.scaleY = 0.971568772923885;

		// ski_village_epf_door_png
		const ski_village_epf_door_png = this.add.image(1284, 433, "skivillage", "ski_village_epf_door.png");
		ski_village_epf_door_png.scaleX = 0.9057598079518092;
		ski_village_epf_door_png.scaleY = 0.9704255931047322;

		// skivillage_seats0001_png
		const skivillage_seats0001_png = this.add.sprite(264, 325, "skivillage", "skivillage_seats0001.png");
		skivillage_seats0001_png.scaleX = 0.8645745633318944;
		skivillage_seats0001_png.scaleY = 0.9392297774097994;

		// ski_village_seats0001_png
		const ski_village_seats0001_png = this.add.sprite(548, 436, "skivillage", "ski_village_seats0001.png");
		ski_village_seats0001_png.scaleX = 0.39994831380066526;
		ski_village_seats0001_png.scaleY = 0.40906754797685285;

		// skivillage_seat_going_up_and_down0001_png
		const skivillage_seat_going_up_and_down0001_png = this.add.sprite(150, 59, "skivillage", "skivillage_seat_going_up_and_down0001.png");
		skivillage_seat_going_up_and_down0001_png.scaleX = 0.9331652764402452;
		skivillage_seat_going_up_and_down0001_png.scaleY = 0.905358179501486;

		// skivillage_epf_side_png
		const skivillage_epf_side_png = this.add.image(773, 339, "skivillage", "skivillage_epf_side.png");
		skivillage_epf_side_png.scaleX = 0.8827253393018074;
		skivillage_epf_side_png.scaleY = 0.9572340508134033;

		// skivillage_side_png
		const skivillage_side_png = this.add.image(366, 650, "skivillage", "skivillage_side.png");
		skivillage_side_png.scaleX = 1.0138944740663867;
		skivillage_side_png.scaleY = 0.9139958469829678;

		// skivillage_epf_text0001_png
		const skivillage_epf_text0001_png = this.add.image(1281, 266, "skivillage", "skivillage_epf_text0001.png");
		skivillage_epf_text0001_png.scaleX = 0.8459603790323005;
		skivillage_epf_text0001_png.scaleY = 0.8530767131877395;

		// skivillage_right_side_arrow_png
		const skivillage_right_side_arrow_png = this.add.image(1339, 602, "skivillage", "skivillage_right_side_arrow.png");
		skivillage_right_side_arrow_png.scaleX = 0.9936347067251903;
		skivillage_right_side_arrow_png.scaleY = 0.9896481836173983;

		// symbol_2990001_png
		const symbol_2990001_png = this.add.image(312, 575, "skivillage", "Symbol 2990001.png");
		symbol_2990001_png.scaleX = 1.1382475693605403;
		symbol_2990001_png.scaleY = 1.0169437034793816;

		// symbol_2990002_png
		const symbol_2990002_png = this.add.image(312, 575, "skivillage", "Symbol 2990002.png");
		symbol_2990002_png.scaleX = 1.1382475693605403;
		symbol_2990002_png.scaleY = 1.0169437034793816;
		symbol_2990002_png.visible = false;

		// skivillage_rope_png
		const skivillage_rope_png = this.add.image(495, 347, "skivillage", "skivillage_rope.png");
		skivillage_rope_png.scaleX = 0.8856808867926599;
		skivillage_rope_png.scaleY = 0.8778343064800821;

		// skivillage_bottom_trees_png
		const skivillage_bottom_trees_png = this.add.image(810, 865, "skivillage", "skivillage_bottom_trees.png");
		skivillage_bottom_trees_png.scaleX = 0.9004263972429297;
		skivillage_bottom_trees_png.scaleY = 1.019580582073548;

		// skivillage_puffle_wild_entrance_png
		const skivillage_puffle_wild_entrance_png = this.add.image(728, 255, "skivillage", "skivillage_puffle_wild_entrance.png");
		skivillage_puffle_wild_entrance_png.scaleX = 0.9223202488983618;
		skivillage_puffle_wild_entrance_png.scaleY = 0.9554690789929879;

		// ski_village_lodge_door0002_png
		const ski_village_lodge_door0002_png = this.add.image(997, 361, "skivillage", "ski_village_lodge_door0002.png");
		ski_village_lodge_door0002_png.scaleX = 0.9430683964035707;
		ski_village_lodge_door0002_png.scaleY = 0.971568772923885;
		ski_village_lodge_door0002_png.visible = false;

		// ski_village_epf_door_open_png
		const ski_village_epf_door_open_png = this.add.image(1282, 433, "skivillage", "ski_village_epf_door_open.png");
		ski_village_epf_door_open_png.scaleX = 0.9057598079518092;
		ski_village_epf_door_open_png.scaleY = 0.9704255931047322;
		ski_village_epf_door_open_png.visible = false;

        // Animations start here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "skivillage_moving_seats_animation",
            "phaserAnimationKey": "skivillage_moving_seats_animation_play",
            "textureKey": "skivillage",
            "framePrefix": "skivillage_seats",
            "frames": Array.from({ length: 42 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "skivillage_bouncy_seats_animation",
            "phaserAnimationKey": "skivillage_bouncy_seats_animation_play",
            "textureKey": "skivillage",
            "framePrefix": "ski_village_seats",
            "frames": Array.from({ length: 42 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "skivillage_moving_seats_up_and_down_animation",
            "phaserAnimationKey": "skivillage_moving_seats_up_and_down_animation_play",
            "textureKey": "skivillage",
            "framePrefix": "skivillage_seat_going_up_and_down",
            "frames": Array.from({ length: 210 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        ski_village_seats0001_png.play("skivillage_bouncy_seats_animation_play");
        skivillage_seats0001_png.play("skivillage_moving_seats_animation_play");
        skivillage_seat_going_up_and_down0001_png.play("skivillage_moving_seats_up_and_down_animation_play");
        // Animations end here

        // Setting all interactives sprites starts here
        symbol_2990001_png.setInteractive({ useHandCursor: true });
        symbol_2990002_png.setInteractive({ useHandCursor: true });
        ski_village_lodge_door0001_png.setInteractive({ useHandCursor: true });
        ski_village_lodge_door0002_png.setInteractive({ useHandCursor: true });
        ski_village_epf_door_png.setInteractive({ useHandCursor: true });
        ski_village_epf_door_open_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        symbol_2990001_png.on("pointerover", () => {
            symbol_2990001_png.visible = false;
            symbol_2990002_png.visible = true;
        });

        symbol_2990002_png.on("pointerout", () => {
            symbol_2990001_png.visible = true;
            symbol_2990002_png.visible = false;
        });

        symbol_2990002_png.on("pointerdown", () => {
            console.log("tour guide");
        });

        ski_village_lodge_door0001_png.on("pointerover", () => {
            ski_village_lodge_door0001_png.visible = false;
            ski_village_lodge_door0002_png.visible = true;
            this.audioManager.play(SKI_VILLAGE_ROOM_SKI_LODGE_DOOR_OPEN);
        });

        ski_village_lodge_door0002_png.on("pointerout", () => {
            ski_village_lodge_door0001_png.visible = true;
            ski_village_lodge_door0002_png.visible = false;
            this.audioManager.play(SKI_VILLAGE_ROOM_SKI_LODGE_DOOR_CLOSE);
        });

        ski_village_epf_door_png.on("pointerover", () => {
            ski_village_epf_door_png.visible = false;
            ski_village_epf_door_open_png.visible = true;
            this.audioManager.play(SKI_VILLAGE_ROOM_EPF_DOOR_OPEN);
        });

        ski_village_epf_door_open_png.on("pointerout", () => {
            ski_village_epf_door_png.visible = true;
            ski_village_epf_door_open_png.visible = false;
            this.audioManager.play(SKI_VILLAGE_ROOM_EPF_DOOR_CLOSE);
        });
        // All interactive events end here

        this.audioManager.play(SKI_VILLAGE_ROOM_MUSIC);
    }
}