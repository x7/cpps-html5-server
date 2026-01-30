import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { PLAZA_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { RoomScene } from "../RoomScene";

export class PlazaScene extends RoomScene {
    constructor() {
        super("PlazaScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
        this.audioManager = this.getAudioManager();
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "plaza",
            "paths": ["assets/world/rooms/plaza/plaza-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PLAZA_ROOM_MUSIC,
            "paths": ["assets/world/rooms/plaza/plaza_music.mp3"]
        });
    }

    createContent() {
        // plaza_sky_png
		const plaza_sky_png = this.add.image(716, 87, "plaza", "plaza_sky.png");
		plaza_sky_png.scaleX = 0.9982228920870307;
		plaza_sky_png.scaleY = 1.1666968570750087;

		// plaza_main_background_png
		const plaza_main_background_png = this.add.image(-130, 115, "plaza", "plaza_main_background.png");
		plaza_main_background_png.scaleX = 0.9923768666057723;
		plaza_main_background_png.scaleY = 1.1621760421090446;
		plaza_main_background_png.setOrigin(0, 0);

		// plaza_park_tower0001_png
		const plaza_park_tower0001_png = this.add.image(163, 361, "plaza", "plaza_park_tower0001.png");
		plaza_park_tower0001_png.scaleX = 0.9609596954890374;
		plaza_park_tower0001_png.scaleY = 0.7397304783197567;

		// plaza_shops_png
		const plaza_shops_png = this.add.image(782, 327, "plaza", "plaza_shops.png");
		plaza_shops_png.scaleX = 0.9675524343224674;
		plaza_shops_png.scaleY = 0.9602046578154335;

		// plaza_puffle_berry_mall_wall_png
		const plaza_puffle_berry_mall_wall_png = this.add.image(921, 299, "plaza", "plaza_puffle_berry_mall_wall.png");
		plaza_puffle_berry_mall_wall_png.scaleX = 0.9696429132114572;
		plaza_puffle_berry_mall_wall_png.scaleY = 0.9414280911169803;

		// plaza_mall_door0001_png
		const plaza_mall_door0001_png = this.add.image(928, 398, "plaza", "plaza_mall_door0001.png");
		plaza_mall_door0001_png.scaleX = 0.9613526645238123;
		plaza_mall_door0001_png.scaleY = 1.00317853852403;

		// plaza_flag_pole_png
		const plaza_flag_pole_png = this.add.image(762, 91, "plaza", "plaza_flag_pole.png");
		plaza_flag_pole_png.scaleX = 1.3577579000410323;
		plaza_flag_pole_png.scaleY = 0.9157917966406792;

		// plaza_flag_left0001_png
		const plaza_flag_left0001_png = this.add.sprite(787, 81, "plaza", "plaza_flag_left0001.png");
		plaza_flag_left0001_png.scaleX = 0.8442693028290237;
		plaza_flag_left0001_png.scaleY = 0.7630716486464258;

		// plaza_right_pole_png
		const plaza_right_pole_png = this.add.image(1061, 89, "plaza", "plaza_right_pole.png");
		plaza_right_pole_png.scaleX = 1.3782836157168727;
		plaza_right_pole_png.scaleY = 0.8461297124601583;

		// plaza_flag_right0001_png
		const plaza_flag_right0001_png = this.add.sprite(1085, 88, "plaza", "plaza_flag_right0001.png");
		plaza_flag_right0001_png.scaleX = 0.8442693028290237;
		plaza_flag_right0001_png.scaleY = 0.7630716486464258;

		// plaza_left_side_tree_png
		const plaza_left_side_tree_png = this.add.image(53, 842, "plaza", "plaza_left_side_tree.png");
		plaza_left_side_tree_png.scaleX = 0.938495891823824;
		plaza_left_side_tree_png.scaleY = 0.9320356401941057;

		// plaza_pizza_shop_door0001_png
		const plaza_pizza_shop_door0001_png = this.add.image(1221, 412, "plaza", "plaza_pizza_shop_door0001.png");
		plaza_pizza_shop_door0001_png.scaleX = 0.9449561112101815;
		plaza_pizza_shop_door0001_png.scaleY = 1.013302273693885;

		// plaza_pizza_text_png
		const plaza_pizza_text_png = this.add.image(1248, 292, "plaza", "plaza_pizza_text.png");
		plaza_pizza_text_png.scaleX = 0.9555118122845913;
		plaza_pizza_text_png.scaleY = 0.9764278983063226;

		// plaza_mall_text_png
		const plaza_mall_text_png = this.add.image(932, 93, "plaza", "plaza_mall_text.png");
		plaza_mall_text_png.scaleX = 0.950296390792287;
		plaza_mall_text_png.scaleY = 0.8961547482232987;

		// plaza_puffle_hotel_text_png
		const plaza_puffle_hotel_text_png = this.add.image(549, 154, "plaza", "plaza_puffle_hotel_text.png");
		plaza_puffle_hotel_text_png.scaleX = 0.9330859388354946;
		plaza_puffle_hotel_text_png.scaleY = 0.9148031041298177;

		// plaza_puffle_hotel_door0001_png
		const plaza_puffle_hotel_door0001_png = this.add.image(663, 403, "plaza", "plaza_puffle_hotel_door0001.png");
		plaza_puffle_hotel_door0001_png.scaleX = 0.87434473129851;
		plaza_puffle_hotel_door0001_png.scaleY = 1.006923573217672;
		plaza_puffle_hotel_door0001_png.angle = 2;

		// plaza_puffle_hotel_door0002_png
		const plaza_puffle_hotel_door0002_png = this.add.image(568, 298, "plaza", "plaza_puffle_hotel_door0002.png");
		plaza_puffle_hotel_door0002_png.scaleX = 0.5866500729166357;
		plaza_puffle_hotel_door0002_png.scaleY = 0.46527247818253115;
		plaza_puffle_hotel_door0002_png.visible = false;

		// plaza_pet_shop_door0001_png
		const plaza_pet_shop_door0001_png = this.add.image(410, 423, "plaza", "plaza_pet_shop_door0001.png");
		plaza_pet_shop_door0001_png.scaleX = 1.001132851130645;
		plaza_pet_shop_door0001_png.scaleY = 1.121252500105973;

		// plaza_pet_shop_door0002_png
		const plaza_pet_shop_door0002_png = this.add.image(410, 423, "plaza", "plaza_pet_shop_door0002.png");
		plaza_pet_shop_door0002_png.scaleX = 1.001132851130645;
		plaza_pet_shop_door0002_png.scaleY = 1.121252500105973;
		plaza_pet_shop_door0002_png.visible = false;

		// plaza_pet_shop_front_png
		const plaza_pet_shop_front_png = this.add.image(410, 288, "plaza", "plaza_pet_shop_front.png");
		plaza_pet_shop_front_png.scaleX = 0.9229875738389257;
		plaza_pet_shop_front_png.scaleY = 0.9063592705272285;

		// plaza_puffle_hotel_front_png
		const plaza_puffle_hotel_front_png = this.add.image(650, 372, "plaza", "plaza_puffle_hotel_front.png");
		plaza_puffle_hotel_front_png.scaleX = 0.874477116919654;
		plaza_puffle_hotel_front_png.scaleY = 0.9612319347642855;

		// plaza_pet_shop_text_png
		const plaza_pet_shop_text_png = this.add.image(394, 314, "plaza", "plaza_pet_shop_text.png");
		plaza_pet_shop_text_png.scaleX = 1.0241992135000602;
		plaza_pet_shop_text_png.scaleY = 0.9646549840649263;

		// plaza_mall_door0002_png
		const plaza_mall_door0002_png = this.add.image(782, 298, "plaza", "plaza_mall_door0002.png");
		plaza_mall_door0002_png.scaleX = 0.5118579561616498;
		plaza_mall_door0002_png.scaleY = 0.4095148455734794;
		plaza_mall_door0002_png.visible = false;

		// plaza_pizza_shop_door0002_png
		const plaza_pizza_shop_door0002_png = this.add.image(1221, 412, "plaza", "plaza_pizza_shop_door0002.png");
		plaza_pizza_shop_door0002_png.scaleX = 0.9449561112101815;
		plaza_pizza_shop_door0002_png.scaleY = 1.013302273693885;
		plaza_pizza_shop_door0002_png.visible = false;

		// plaza_underground_door_png
		const plaza_underground_door_png = this.add.sprite(525, 493, "plaza", "plaza_underground_door0001.png");
		plaza_underground_door_png.scaleX = 1.062600097429365;
		plaza_underground_door_png.scaleY = 0.9322432415619236;

        // Animations start here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "plaza_underground_well_open_animation",
            "phaserAnimationKey": "plaza_underground_well_open_animation_play",
            "textureKey": "plaza",
            "framePrefix": "plaza_underground_door",
            "frames": Array.from({ length: 18 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "plaza_underground_well_close_animation",
            "phaserAnimationKey": "plaza_underground_well_close_animation_play",
            "textureKey": "plaza",
            "framePrefix": "plaza_underground_door",
            "frames": Array.from({ length: 12 }, (_, i) => String(i + 18).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "plaza_left_flag_animation",
            "phaserAnimationKey": "plaza_left_flag_animation_play",
            "textureKey": "plaza",
            "framePrefix": "plaza_flag_left",
            "frames": Array.from({ length: 15 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "plaza_right_flag_animation",
            "phaserAnimationKey": "plaza_right_flag_animation_play",
            "textureKey": "plaza",
            "framePrefix": "plaza_flag_right",
            "frames": Array.from({ length: 15 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        plaza_flag_left0001_png.play("plaza_left_flag_animation_play");
        plaza_flag_right0001_png.play("plaza_right_flag_animation_play");
        // Animations end here

        // Setting all interactives sprites starts here
        plaza_pet_shop_door0001_png.setInteractive({ useHandCursor: true });
        plaza_pet_shop_door0002_png.setInteractive({ useHandCursor: true });
        plaza_puffle_hotel_door0001_png.setInteractive({ useHandCursor: true });
        plaza_puffle_hotel_door0002_png.setInteractive({ useHandCursor: true });
        plaza_pizza_shop_door0001_png.setInteractive({ useHandCursor: true });
        plaza_pizza_shop_door0002_png.setInteractive({ useHandCursor: true });
        plaza_mall_door0001_png.setInteractive({ useHandCursor: true });
        plaza_mall_door0002_png.setInteractive({ useHandCursor: true });
        plaza_underground_door_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        plaza_pet_shop_door0001_png.on("pointerover", () => {
            plaza_pet_shop_door0001_png.visible = false;
            plaza_pet_shop_door0002_png.visible = true;
        });

        plaza_pet_shop_door0002_png.on("pointerout", () => {
            plaza_pet_shop_door0001_png.visible = true;
            plaza_pet_shop_door0002_png.visible = false;
        });

        plaza_puffle_hotel_door0001_png.on("pointerover", () => {
            plaza_puffle_hotel_door0001_png.visible = false;
            plaza_puffle_hotel_door0002_png.visible = true;
        });

        plaza_puffle_hotel_door0002_png.on("pointerout", () => {
            plaza_puffle_hotel_door0001_png.visible = true;
            plaza_puffle_hotel_door0002_png.visible = false;
        });

        plaza_pizza_shop_door0001_png.on("pointerover", () => {
            plaza_pizza_shop_door0001_png.visible = false;
            plaza_pizza_shop_door0002_png.visible = true;
        });

        plaza_pizza_shop_door0002_png.on("pointerout", () => {
            plaza_pizza_shop_door0001_png.visible = true;
            plaza_pizza_shop_door0002_png.visible = false;
        });

        plaza_mall_door0001_png.on("pointerover", () => {
            plaza_mall_door0001_png.visible = false;
            plaza_mall_door0002_png.visible = true;
        });

        plaza_mall_door0002_png.on("pointerout", () => {
            plaza_mall_door0001_png.visible = true;
            plaza_mall_door0002_png.visible = false;
        });

        plaza_underground_door_png.on("pointerover", () => {
            plaza_underground_door_png.play("plaza_underground_well_open_animation_play");
        });

        plaza_underground_door_png.on("pointerout", () => {
            plaza_underground_door_png.play("plaza_underground_well_close_animation_play");
        });
        // All interactive events end here

        this.audioManager.play(PLAZA_ROOM_MUSIC);
    }
}