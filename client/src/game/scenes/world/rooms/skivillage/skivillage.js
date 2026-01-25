import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { SKI_VILLAGE_ROOM_MUSIC } from "../../../../audio/audioConstants";
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
    }

    createContent() {
// skivillage_background_png
		const skivillage_background_png = this.add.image(674, 121, "skivillage", "skivillage_background.png");
		skivillage_background_png.scaleX = 0.7414075852574362;
		skivillage_background_png.scaleY = 0.8445084288655564;

		// ski_village_main_png
		const ski_village_main_png = this.add.image(638, 350, "skivillage", "ski_village_main.png");
		ski_village_main_png.scaleX = 0.957495102716426;
		ski_village_main_png.scaleY = 0.9862267628985915;

		// ski_village_lodge_door0001_png
		const ski_village_lodge_door0001_png = this.add.image(830, 255.5, "skivillage", "ski_village_lodge_door0001.png");
		ski_village_lodge_door0001_png.scaleX = 0.814129332667989;
		ski_village_lodge_door0001_png.scaleY = 0.7965529324188587;

		// ski_village_epf_door_png
		const ski_village_epf_door_png = this.add.image(1072, 311, "skivillage", "ski_village_epf_door.png");
		ski_village_epf_door_png.scaleX = 0.7368844219453189;
		ski_village_epf_door_png.scaleY = 0.7748779451984283;

		// skivillage_seats0001_png
		const skivillage_seats0001_png = this.add.sprite(204, 220, "skivillage", "skivillage_seats0001.png");
		skivillage_seats0001_png.scaleX = 0.7664011099068395;
		skivillage_seats0001_png.scaleY = 0.7990694784530897;

		// ski_village_seats0001_png
		const ski_village_seats0001_png = this.add.sprite(445, 323, "skivillage", "ski_village_seats0001.png");
		ski_village_seats0001_png.scaleX = 0.32145868577203107;
		ski_village_seats0001_png.scaleY = 0.32552745773314185;

		// skivillage_seat_going_up_and_down0001_png
		const skivillage_seat_going_up_and_down0001_png = this.add.sprite(227, 59, "skivillage", "skivillage_seat_going_up_and_down0001.png");
		skivillage_seat_going_up_and_down0001_png.scaleX = 0.8121705794112772;
		skivillage_seat_going_up_and_down0001_png.scaleY = 0.7746049322989668;

		// skivillage_epf_side_png
		const skivillage_epf_side_png = this.add.image(641, 238, "skivillage", "skivillage_epf_side.png");
		skivillage_epf_side_png.scaleX = 0.7483797895650145;
		skivillage_epf_side_png.scaleY = 0.7830574069961632;

		// skivillage_side_png
		const skivillage_side_png = this.add.image(276, 464, "skivillage", "skivillage_side.png");
		skivillage_side_png.scaleX = 0.7981679112057272;
		skivillage_side_png.scaleY = 0.7953348174266212;

		// skivillage_epf_text0001_png
		const skivillage_epf_text0001_png = this.add.image(1071, 182, "skivillage", "skivillage_epf_text0001.png");
		skivillage_epf_text0001_png.scaleX = 0.7442751811076744;
		skivillage_epf_text0001_png.scaleY = 0.7098869088219908;

		// skivillage_right_side_arrow_png
		const skivillage_right_side_arrow_png = this.add.image(1102, 455, "skivillage", "skivillage_right_side_arrow.png");
		skivillage_right_side_arrow_png.scaleX = 0.8684697731461315;
		skivillage_right_side_arrow_png.scaleY = 0.8942883677539032;

		// symbol_2990001_png
		const symbol_2990001_png = this.add.image(246, 408, "skivillage", "Symbol 2990001.png");
		symbol_2990001_png.scaleX = 0.8070643230766085;
		symbol_2990001_png.scaleY = 0.7583716399559578;

		// symbol_2990002_png
		const symbol_2990002_png = this.add.image(250, 403, "skivillage", "Symbol 2990002.png");
		symbol_2990002_png.scaleX = 0.8070643230766085;
		symbol_2990002_png.scaleY = 0.7583716399559578;
		symbol_2990002_png.visible = false;

		// skivillage_rope_png
		const skivillage_rope_png = this.add.image(402, 245, "skivillage", "skivillage_rope.png");
		skivillage_rope_png.scaleX = 0.7337063473754355;
		skivillage_rope_png.scaleY = 0.6996252001635451;

		// skivillage_bottom_trees_png
		const skivillage_bottom_trees_png = this.add.image(650, 645, "skivillage", "skivillage_bottom_trees.png");
		skivillage_bottom_trees_png.scaleX = 0.8560762849235586;
		skivillage_bottom_trees_png.scaleY = 0.9093500905328752;

		// skivillage_puffle_wild_entrance_png
		const skivillage_puffle_wild_entrance_png = this.add.image(603, 170, "skivillage", "skivillage_puffle_wild_entrance.png");
		skivillage_puffle_wild_entrance_png.scaleX = 0.7511674830711204;
		skivillage_puffle_wild_entrance_png.scaleY = 0.7790249118314748;

		// ski_village_lodge_door0002_png
		const ski_village_lodge_door0002_png = this.add.image(830, 252, "skivillage", "ski_village_lodge_door0002.png");
		ski_village_lodge_door0002_png.scaleX = 0.7965529324188587;
		ski_village_lodge_door0002_png.scaleY = 0.7179888876781995;
		ski_village_lodge_door0002_png.visible = false;

        // ski_village_epf_door_open_png
		const ski_village_epf_door_open_png = this.add.image(1070, 314, "skivillage", "ski_village_epf_door_open.png");
		ski_village_epf_door_open_png.scaleX = 0.7487175927818921;
		ski_village_epf_door_open_png.scaleY = 0.7781516183700736;
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
        });

        ski_village_lodge_door0002_png.on("pointerout", () => {
            ski_village_lodge_door0001_png.visible = true;
            ski_village_lodge_door0002_png.visible = false;
        });

        ski_village_epf_door_png.on("pointerover", () => {
            ski_village_epf_door_png.visible = false;
            ski_village_epf_door_open_png.visible = true;
        });

        ski_village_epf_door_open_png.on("pointerout", () => {
            ski_village_epf_door_png.visible = true;
            ski_village_epf_door_open_png.visible = false;
        });
        // All interactive events end here

        this.audioManager.play(SKI_VILLAGE_ROOM_MUSIC);
    }
}