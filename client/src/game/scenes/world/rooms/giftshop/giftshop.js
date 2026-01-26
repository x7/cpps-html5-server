import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { GIFT_SHOP_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { BaseScene } from "../../../base/baseScene";

export class GiftshopScene extends BaseScene {
    constructor() {
        super("GiftShopScene");
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
		const giftshop_main_png = this.add.image(-117, -41, "giftshop", "giftshop_main.png");
		giftshop_main_png.scaleX = 0.9958943252972757;
		giftshop_main_png.setOrigin(0, 0);

		// giftshop_bottom_fish_png
		const giftshop_bottom_fish_png = this.add.image(733, 495, "giftshop", "giftshop_bottom_fish.png");
		giftshop_bottom_fish_png.scaleX = 1.0072285539494639;
		giftshop_bottom_fish_png.scaleY = 1.0158509427060216;

		// giftshop_chair_one_png
		const giftshop_chair_one_png = this.add.image(1095, 626, "giftshop", "giftshop_chair_one.png");
		giftshop_chair_one_png.scaleX = 0.7730058883734877;
		giftshop_chair_one_png.scaleY = 0.765819493532557;

		// giftshop_chair_two_png
		const giftshop_chair_two_png = this.add.image(1027, 703, "giftshop", "giftshop_chair_two.png");
		giftshop_chair_two_png.scaleX = 0.8828193203111082;
		giftshop_chair_two_png.scaleY = 0.9958005547647024;

		// giftshop_chair_three_png
		const giftshop_chair_three_png = this.add.image(1366, 384, "giftshop", "giftshop_chair_three.png");
		giftshop_chair_three_png.scaleX = 1.06280078513135;
		giftshop_chair_three_png.scaleY = 0.8431859648966638;

		// giftshop_counter_png
		const giftshop_counter_png = this.add.image(1347, 466, "giftshop", "giftshop_counter.png");
		giftshop_counter_png.scaleX = 1.1497372224116273;
		giftshop_counter_png.scaleY = 1.2252148278035895;

		// giftshop_watches0001_png
		const giftshop_watches0001_png = this.add.sprite(1407, 442, "giftshop", "giftshop_watches0001.png");
		giftshop_watches0001_png.scaleX = 0.46428219009474814;
		giftshop_watches0001_png.scaleY = 0.45112374089539253;

		// giftshop_cash_register0001_png
		const giftshop_cash_register0001_png = this.add.sprite(1276, 364, "giftshop", "giftshop_cash_register0001.png");
		giftshop_cash_register0001_png.scaleX = 0.8720126380575843;
		giftshop_cash_register0001_png.scaleY = 0.7910136529145547;

		// giftshop_speakers0001_png
		const giftshop_speakers0001_png = this.add.sprite(747, 228, "giftshop", "giftshop_speakers0001.png");
		giftshop_speakers0001_png.scaleX = 0.986864014002472;
		giftshop_speakers0001_png.scaleY = 1.0275086975098104;

		// giftshop_curtain0001_png
		const giftshop_curtain0001_png = this.add.sprite(446, 282, "giftshop", "giftshop_curtain0001.png");
		giftshop_curtain0001_png.scaleX = 0.8623817951869084;
		giftshop_curtain0001_png.scaleY = 0.9586460794322212;

		// giftshop_clothes_png
		const giftshop_clothes_png = this.add.image(350, 475, "giftshop", "giftshop_clothes.png");
		giftshop_clothes_png.scaleX = 1.0601878935022935;
		giftshop_clothes_png.scaleY = 1.031001967903876;

		// giftshop_door0001_png
		const giftshop_door0001_png = this.add.image(1091, 240, "giftshop", "giftshop_door0001.png");
		giftshop_door0001_png.scaleX = 1.0367026714260419;
		giftshop_door0001_png.scaleY = 0.984027915938957;

		// giftshop_chair_four_png
		const giftshop_chair_four_png = this.add.image(318, 780, "giftshop", "giftshop_chair_four.png");
		giftshop_chair_four_png.scaleX = 0.9241198991873245;
		giftshop_chair_four_png.scaleY = 0.9115332169037532;

		// giftshop_chair_four_arm_png_1
		const giftshop_chair_four_arm_png_1 = this.add.image(322, 840, "giftshop", "giftshop_chair_four_arm.png");
		giftshop_chair_four_arm_png_1.scaleX = 0.8217715947129681;
		giftshop_chair_four_arm_png_1.scaleY = 0.8266244164140131;

		// giftshop_chair_four_png_1
		const giftshop_chair_four_png_1 = this.add.image(284, 645, "giftshop", "giftshop_chair_four.png");
		giftshop_chair_four_png_1.scaleX = 0.9241198991873245;
		giftshop_chair_four_png_1.scaleY = 0.9115332169037532;

		// giftshop_chair_four_arm_png
		const giftshop_chair_four_arm_png = this.add.image(286, 707, "giftshop", "giftshop_chair_four_arm.png");
		giftshop_chair_four_arm_png.scaleX = 0.8217715947129681;
		giftshop_chair_four_arm_png.scaleY = 0.8266244164140131;

		// giftshop_door0002_png
		const giftshop_door0002_png = this.add.image(1091, 240, "giftshop", "giftshop_door0002.png");
		giftshop_door0002_png.scaleX = 1.0367026714260419;
		giftshop_door0002_png.scaleY = 0.984027915938957;
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