import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { BaseScene } from "../../../base/baseScene";

export class PlazaScene extends BaseScene {
    constructor() {
        super("PlazaScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
    }

    preloadContent() {
        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.PACK,
            name: "beacon",
            paths: ["assets/world/rooms/plaza/plaza-pack.json"]
        });
    }

    createContent() {

		// plaza_sky_png
		const plaza_sky_png = this.add.image(649, 118, "plaza", "plaza_sky.png");
		plaza_sky_png.scaleX = 0.866196899107259;
		plaza_sky_png.scaleY = 0.9512974171275344;

		// plaza_main_background_png
		const plaza_main_background_png = this.add.image(651, 459, "plaza", "plaza_main_background.png");
		plaza_main_background_png.scaleX = 0.8234270839425257;
		plaza_main_background_png.scaleY = 0.7885969412015126;

		// plaza_park_tower0001_png
		const plaza_park_tower0001_png = this.add.image(175, 294, "plaza", "plaza_park_tower0001.png");
		plaza_park_tower0001_png.scaleX = 0.7731677116136404;
		plaza_park_tower0001_png.scaleY = 0.6546549935999003;

		// plaza_shops_png
		const plaza_shops_png = this.add.image(674, 276, "plaza", "plaza_shops.png");
		plaza_shops_png.scaleX = 0.762071488284151;
		plaza_shops_png.scaleY = 0.7178557582572045;

		// plaza_puffle_berry_mall_wall_png
		const plaza_puffle_berry_mall_wall_png = this.add.image(783, 255, "plaza", "plaza_puffle_berry_mall_wall.png");
		plaza_puffle_berry_mall_wall_png.scaleX = 0.7586191668311087;
		plaza_puffle_berry_mall_wall_png.scaleY = 0.6902443017238041;

		// plaza_mall_door0001_png
		const plaza_mall_door0001_png = this.add.image(789, 331, "plaza", "plaza_mall_door0001.png");
		plaza_mall_door0001_png.scaleX = 0.7400249733654839;
		plaza_mall_door0001_png.scaleY = 0.6792779132968871;

		// plaza_flag_pole_png
		const plaza_flag_pole_png = this.add.image(677, 100, "plaza", "plaza_flag_pole.png");
		plaza_flag_pole_png.scaleX = 0.943212800350139;
		plaza_flag_pole_png.scaleY = 0.6378602439212424;

		// plaza_flag_left0001_png
		const plaza_flag_left0001_png = this.add.sprite(701, 89, "plaza", "plaza_flag_left0001.png");

		// plaza_right_pole_png
		const plaza_right_pole_png = this.add.image(929, 95, "plaza", "plaza_right_pole.png");
		plaza_right_pole_png.scaleX = 0.8213670845642599;
		plaza_right_pole_png.scaleY = 0.7801506702882304;

		// plaza_flag_right0001_png
		const plaza_flag_right0001_png = this.add.sprite(953, 94, "plaza", "plaza_flag_right0001.png");

		// plaza_left_side_tree_png
		const plaza_left_side_tree_png = this.add.image(82, 593, "plaza", "plaza_left_side_tree.png");
		plaza_left_side_tree_png.scaleX = 0.8626102041875087;
		plaza_left_side_tree_png.scaleY = 0.8664474471571797;

		// plaza_right_side_tre_png
		this.add.image(1221, 718, "plaza", "plaza_right_side_tre.png");

		// plaza_pizza_shop_door0001_png
		const plaza_pizza_shop_door0001_png = this.add.image(1019, 340, "plaza", "plaza_pizza_shop_door0001.png");
		plaza_pizza_shop_door0001_png.scaleX = 0.7557343716765533;
		plaza_pizza_shop_door0001_png.scaleY = 0.7136581841193501;

		// plaza_pizza_text_png
		const plaza_pizza_text_png = this.add.image(1037, 244, "plaza", "plaza_pizza_text.png");
		plaza_pizza_text_png.scaleX = 0.7933290176117571;
		plaza_pizza_text_png.scaleY = 0.7100706114587162;

		// plaza_mall_text_png
		const plaza_mall_text_png = this.add.image(793, 98, "plaza", "plaza_mall_text.png");
		plaza_mall_text_png.scaleX = 0.6661959887582997;
		plaza_mall_text_png.scaleY = 0.7891853764710802;

		// plaza_puffle_hotel_text_png
		const plaza_puffle_hotel_text_png = this.add.image(491, 144, "plaza", "plaza_puffle_hotel_text.png");
		plaza_puffle_hotel_text_png.scaleX = 0.7600595838995324;
		plaza_puffle_hotel_text_png.scaleY = 0.6658043801046107;

		// plaza_puffle_hotel_door0001_png
		const plaza_puffle_hotel_door0001_png = this.add.image(575, 331, "plaza", "plaza_puffle_hotel_door0001.png");
		plaza_puffle_hotel_door0001_png.scaleX = 0.8622577526824471;
		plaza_puffle_hotel_door0001_png.scaleY = 0.7486370490404299;

		// plaza_puffle_hotel_door0002_png
		const plaza_puffle_hotel_door0002_png = this.add.image(575, 331, "plaza", "plaza_puffle_hotel_door0002.png");
		plaza_puffle_hotel_door0002_png.scaleX = 0.8622577526824471;
		plaza_puffle_hotel_door0002_png.scaleY = 0.7486370490404299;
		plaza_puffle_hotel_door0002_png.visible = false;

		// plaza_puffle_hotel_front_png
		const plaza_puffle_hotel_front_png = this.add.image(567, 309, "plaza", "plaza_puffle_hotel_front.png");
		plaza_puffle_hotel_front_png.scaleX = 0.739862379233522;
		plaza_puffle_hotel_front_png.scaleY = 0.7279274907416562;

		// plaza_pet_shop_door0001_png
		const plaza_pet_shop_door0001_png = this.add.image(388, 357, "plaza", "plaza_pet_shop_door0001.png");
		plaza_pet_shop_door0001_png.scaleX = 0.7035733871874337;
		plaza_pet_shop_door0001_png.scaleY = 0.6787849861854823;

		// plaza_pet_shop_door0002_png
		const plaza_pet_shop_door0002_png = this.add.image(396, 357, "plaza", "plaza_pet_shop_door0002.png");
		plaza_pet_shop_door0002_png.scaleX = 0.7035733871874337;
		plaza_pet_shop_door0002_png.scaleY = 0.6787849861854823;
		plaza_pet_shop_door0002_png.visible = false;

		// plaza_pet_shop_front_png
		const plaza_pet_shop_front_png = this.add.image(386, 249, "plaza", "plaza_pet_shop_front.png");
		plaza_pet_shop_front_png.scaleX = 0.6849064318240295;
		plaza_pet_shop_front_png.scaleY = 0.6780484724994561;

		// plaza_pet_shop_text_png
		const plaza_pet_shop_text_png = this.add.image(372, 252, "plaza", "plaza_pet_shop_text.png");
		plaza_pet_shop_text_png.scaleX = 0.7390819904197071;
		plaza_pet_shop_text_png.scaleY = 0.8683650685856568;

		// plaza_mall_door0002_png
		const plaza_mall_door0002_png = this.add.image(789, 331, "plaza", "plaza_mall_door0002.png");
		plaza_mall_door0002_png.scaleX = 0.7400249733654839;
		plaza_mall_door0002_png.scaleY = 0.6792779132968871;
		plaza_mall_door0002_png.visible = false;

		// plaza_pizza_shop_door0002_png
		const plaza_pizza_shop_door0002_png = this.add.image(1019, 340, "plaza", "plaza_pizza_shop_door0002.png");
		plaza_pizza_shop_door0002_png.scaleX = 0.7557343716765533;
		plaza_pizza_shop_door0002_png.scaleY = 0.7136581841193501;
		plaza_pizza_shop_door0002_png.visible = false;

        // plaza_underground_door_png
		const plaza_underground_door_png = this.add.sprite(477, 400, "plaza", "plaza_underground_door0001.png");
		plaza_underground_door_png.scaleX = 0.8551738797057651;
		plaza_underground_door_png.scaleY = 0.6697521097169279;

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
    }
}