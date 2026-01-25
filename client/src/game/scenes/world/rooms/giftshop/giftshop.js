import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { GIFT_SHOP_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { BaseScene } from "../../../base/baseScene";

export class GiftshopScene extends BaseScene {
    constructor() {
        super("GiftshopScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
        this.audioManager = this.getAudioManager();
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "giftshop",
            "paths": ["assets/world/rooms/giftshop/giftshop-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": GIFT_SHOP_ROOM_MUSIC,
            "paths": ["assets/world/rooms/giftshop/giftshop_music.mp3"]
        });
    }

    createContent() {
        // giftshop_main_png
		const giftshop_main_png = this.add.image(639, 348, "giftshop", "giftshop_main.png");
		giftshop_main_png.scaleX = 0.8341172842105191;
		giftshop_main_png.scaleY = 0.7989655305329657;

		// giftshop_chair_one_png
		const giftshop_chair_one_png = this.add.image(897, 472, "giftshop", "giftshop_chair_one.png");
		giftshop_chair_one_png.scaleX = 0.8063047279890161;
		giftshop_chair_one_png.scaleY = 0.8427180897400216;

		// giftshop_chair_two_png
		const giftshop_chair_two_png = this.add.image(850, 537, "giftshop", "giftshop_chair_two.png");
		giftshop_chair_two_png.scaleX = 0.9073095875486503;
		giftshop_chair_two_png.scaleY = 0.9027477597206355;

		// giftshop_chair_three_png
		const giftshop_chair_three_png = this.add.image(1130, 260, "giftshop", "giftshop_chair_three.png");
		giftshop_chair_three_png.scaleX = 0.7525579679235725;
		giftshop_chair_three_png.scaleY = 0.679815267517664;

		// giftshop_counter_png
		this.add.image(1124, 345, "giftshop", "giftshop_counter.png");

		// giftshop_watches0001_png
		const giftshop_watches0001_png = this.add.sprite(1177, 320, "giftshop", "giftshop_watches0001.png");
		giftshop_watches0001_png.scaleX = 0.42545940775314095;
		giftshop_watches0001_png.scaleY = 0.40176609180343753;

		// giftshop_cash_register0001_png
		const giftshop_cash_register0001_png = this.add.sprite(1053, 254, "giftshop", "giftshop_cash_register0001.png");
		giftshop_cash_register0001_png.scaleX = 0.8954750343146596;
		giftshop_cash_register0001_png.scaleY = 0.7823409037511551;

		// giftshop_speakers0001_png
		const giftshop_speakers0001_png = this.add.sprite(636, 152, "giftshop", "giftshop_speakers0001.png");
		giftshop_speakers0001_png.scaleX = 0.8382762739375111;
		giftshop_speakers0001_png.scaleY = 0.7967244747027603;

		// giftshop_curtain0001_png
		const giftshop_curtain0001_png = this.add.sprite(385, 195, "giftshop", "giftshop_curtain0001.png");
		giftshop_curtain0001_png.scaleX = 0.8623817951869084;
		giftshop_curtain0001_png.scaleY = 0.7227630932941281;

		// giftshop_clothes_png
		const giftshop_clothes_png = this.add.image(302, 354, "giftshop", "giftshop_clothes.png");
		giftshop_clothes_png.scaleX = 0.8834237598933798;
		giftshop_clothes_png.scaleY = 0.8962818601092272;

		// giftshop_door0001_png
		const giftshop_door0001_png = this.add.image(923, 164, "giftshop", "giftshop_door0001.png");
		giftshop_door0001_png.scaleX = 0.8639646815147847;
		giftshop_door0001_png.scaleY = 0.8101392975615017;

		// giftshop_chair_four_png
		const giftshop_chair_four_png = this.add.image(250, 481, "giftshop", "giftshop_chair_four.png");
		giftshop_chair_four_png.scaleX = 0.8277605975483534;
		giftshop_chair_four_png.scaleY = 0.7770450616314644;

		// giftshop_chair_four_arm_png_1
		const giftshop_chair_four_arm_png_1 = this.add.image(264, 541, "giftshop", "giftshop_chair_four_arm.png");
		giftshop_chair_four_arm_png_1.scaleX = 0.8821788296805595;
		giftshop_chair_four_arm_png_1.scaleY = 0.8653492940459486;

		// giftshop_chair_four_png_1
		const giftshop_chair_four_png_1 = this.add.image(286, 582, "giftshop", "giftshop_chair_four.png");
		giftshop_chair_four_png_1.scaleX = 0.8277605975483534;
		giftshop_chair_four_png_1.scaleY = 0.7770450616314644;

		// giftshop_chair_four_arm_png
		const giftshop_chair_four_arm_png = this.add.image(291, 632, "giftshop", "giftshop_chair_four_arm.png");
		giftshop_chair_four_arm_png.scaleX = 0.8821788296805595;
		giftshop_chair_four_arm_png.scaleY = 0.8653492940459486;

		// giftshop_bottom_fish_png
		const giftshop_bottom_fish_png = this.add.image(622, 359, "giftshop", "giftshop_bottom_fish.png");
		giftshop_bottom_fish_png.scaleX = 0.8001464119979486;
		giftshop_bottom_fish_png.scaleY = 0.8394006326069317;

        // giftshop_door0002_png
		const giftshop_door0002_png = this.add.image(922, 165, "giftshop", "giftshop_door0002.png");
		giftshop_door0002_png.scaleX = 0.8936018970163114;
		giftshop_door0002_png.scaleY = 0.8113039455908615;
		giftshop_door0002_png.visible = false;

        // Animations start here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "giftshop_watches_box_animation",
            "phaserAnimationKey": "giftshop_watches_box_animation_play",
            "textureKey": "giftshop",
            "framePrefix": "giftshop_watches",
            "frames": Array.from({ length: 24 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "giftshop_cash_register_open_animation",
            "phaserAnimationKey": "giftshop_cash_register_open_animation_play",
            "textureKey": "giftshop",
            "framePrefix": "giftshop_cash_register",
            "frames": Array.from({ length: 3 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "giftshop_cash_register_close_animation",
            "phaserAnimationKey": "giftshop_cash_register_close_animation_play",
            "textureKey": "giftshop",
            "framePrefix": "giftshop_cash_register",
            "frames": Array.from({ length: 3 }, (_, i) => String(3 - i).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "giftshop_speakers_animation",
            "phaserAnimationKey": "giftshop_speakers_animation_play",
            "textureKey": "giftshop",
            "framePrefix": "giftshop_speakers",
            "frames": Array.from({ length: 10 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        giftshop_speakers0001_png.play("giftshop_speakers_animation_play");
        // Animations end here

        // Setting all interactives sprites starts here
        giftshop_watches0001_png.setInteractive({ useHandCursor: true });
        giftshop_cash_register0001_png.setInteractive({ useHandCursor: true });
        giftshop_door0001_png.setInteractive({ useHandCursor: true });
        giftshop_door0002_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        giftshop_watches0001_png.on("pointerover", () => {
            giftshop_watches0001_png.play("giftshop_watches_box_animation_play");
        });

        giftshop_cash_register0001_png.on("pointerover", () => {
            giftshop_cash_register0001_png.play("giftshop_cash_register_open_animation_play");
        });

        giftshop_cash_register0001_png.on("pointerout", () => {
            giftshop_cash_register0001_png.play("giftshop_cash_register_close_animation_play");
        });

        giftshop_door0001_png.on("pointerover", () => {
            giftshop_door0001_png.visible = false;
            giftshop_door0002_png.visible = true;
        });

        giftshop_door0002_png.on("pointerout", () => {
            giftshop_door0001_png.visible = true;
            giftshop_door0002_png.visible = false;
        });
        // All interactive events emd here

        this.audioManager.play(GIFT_SHOP_ROOM_MUSIC);
    }
}