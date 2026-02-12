import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { COFFEE_SHOP_BEAN_COUNTER_HOVER, COFFEE_SHOP_BOTTOM_CASH_REGISTER, COFFEE_SHOP_CPT_LIGHT_OFF, COFFEE_SHOP_CPT_LIGHT_ON, COFFEE_SHOP_ROOM_MUSIC, COFFEE_SHOP_SMOOTHIE_SMASH_HOVER, COFFEE_SHOP_TOP_CASH_REGISTER, COFFEE_SHOP_TOWN_DOOR_CLOSE, COFFEE_SHOP_TOWN_DOOR_OPEN } from "../../../../audio/audioConstants";
import { SCENE_BOOK_ROOM, SCENE_ROOM_COFFEE_SHOP, SCENE_ROOM_TOWN } from "../../../sceneNames";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

// TODO: Add blue light when hovering over smoothie smash
// TODO: Fix animation in smoothie smash the knifes in the smoothie machien bugs out for a second near the end of the animation
// TODO: Add room music

export class CoffeeShopScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_COFFEE_SHOP);
    }

    init() {
        super.init();
    }

    preloadContent() {
        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.PACK,
            name: "coffeeshop",
            paths: ["assets/world/rooms/coffeeshop/coffeeshop-pack.json"]
        });

		this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.IMAGE,
            name: "coffeeshop_walking_trigger",
            paths: ["assets/world/rooms/coffeeshop/coffee_shop_walking_trigger.png"]
        });

        // this.assetManager.load({
        //     scene: this,
        //     type: ASSET_TYPES.AUDIO,
        //     name: COFFEE_SHOP_ROOM_MUSIC,
        //     paths: ["assets/world/rooms/coffeeshop/coffeeshop_room_music.mp3"]
        // });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: COFFEE_SHOP_TOWN_DOOR_OPEN,
            paths: ["assets/world/rooms/coffeeshop/coffee_shop_town_door_open.mp3"]
        });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: COFFEE_SHOP_TOWN_DOOR_CLOSE,
            paths: ["assets/world/rooms/coffeeshop/coffee_shop_town_door_close.mp3"]
        });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: COFFEE_SHOP_CPT_LIGHT_ON,
            paths: ["assets/world/rooms/coffeeshop/coffee_shop_cpt_light_on.mp3"]
        });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: COFFEE_SHOP_CPT_LIGHT_OFF,
            paths: ["assets/world/rooms/coffeeshop/coffee_shop_cpt_light_off.mp3"]
        });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: COFFEE_SHOP_BEAN_COUNTER_HOVER,
            paths: ["assets/world/rooms/coffeeshop/coffee_shop_bean_counter_game_hover.mp3"]
        });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: COFFEE_SHOP_SMOOTHIE_SMASH_HOVER,
            paths: ["assets/world/rooms/coffeeshop/coffee_shop_smoothie_smash_hover.mp3"]
        });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: COFFEE_SHOP_TOP_CASH_REGISTER,
            paths: ["assets/world/rooms/coffeeshop/coffee_shop_top_cash_register.mp3"]
        });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: COFFEE_SHOP_BOTTOM_CASH_REGISTER,
            paths: ["assets/world/rooms/coffeeshop/coffee_shop_bottom_cash_register.mp3"]
        });
    }

    createContent() {
		// coffee_shop_main_floor_png
		const coffee_shop_main_floor_png = this.add.image(728, 478, "coffeeshop", "coffee_shop_main_floor.png");

		// coffee_shop_town_door0001_png
		const coffee_shop_town_door0001_png = this.add.image(706, 240, "coffeeshop", "coffee_shop_town_door0001.png");
		coffee_shop_town_door0001_png.scaleX = 0.4427888795842937;
		coffee_shop_town_door0001_png.scaleY = 0.4172271332049616;

		// coffee_shop_smaller_carpet_png
		const coffee_shop_smaller_carpet_png = this.add.image(458, 438, "coffeeshop", "coffee_shop_smaller_carpet.png");
		coffee_shop_smaller_carpet_png.scaleX = 0.43230992372013777;
		coffee_shop_smaller_carpet_png.scaleY = 0.42301182500325096;

		// coffee_shop_top_table_png
		const coffee_shop_top_table_png = this.add.image(449, 419, "coffeeshop", "coffee_shop_top_table.png");
		coffee_shop_top_table_png.scaleX = 0.45816157810235314;
		coffee_shop_top_table_png.scaleY = 0.4556595780521608;

		// coffee_shop_window_png
		const coffee_shop_window_png = this.add.image(452, 175, "coffeeshop", "coffee_shop_window.png");
		coffee_shop_window_png.scaleX = 0.43305001248742836;
		coffee_shop_window_png.scaleY = 0.4625995141110907;

		// coffee_shop_tree_png
		const coffee_shop_tree_png = this.add.image(288, 253, "coffeeshop", "coffee_shop_tree.png");
		coffee_shop_tree_png.scaleX = 0.5205712839793422;
		coffee_shop_tree_png.scaleY = 0.5113643948339319;

		// coffee_shop_top_couch_png
		const coffee_shop_top_couch_png = this.add.image(467, 292, "coffeeshop", "coffee_shop_top_couch.png");
		coffee_shop_top_couch_png.scaleX = 0.43816181251301095;
		coffee_shop_top_couch_png.scaleY = 0.4224046869296946;

		// coffee_shop_top_left_side_couch_png
		const coffee_shop_top_left_side_couch_png = this.add.image(226, 370, "coffeeshop", "coffee_shop_top_left_side_couch.png");
		coffee_shop_top_left_side_couch_png.scaleX = 0.4321856991877677;
		coffee_shop_top_left_side_couch_png.scaleY = 0.40873663561901596;

		// coffee_shop_chair_arm_png
		const coffee_shop_chair_arm_png = this.add.image(203, 428, "coffeeshop", "coffee_shop_chair_arm.png");
		coffee_shop_chair_arm_png.scaleX = 0.48856446796275865;
		coffee_shop_chair_arm_png.scaleY = 0.4448014408793563;

		// coffee_shop_paintings_png
		const coffee_shop_paintings_png = this.add.image(161, 182, "coffeeshop", "coffee_shop_paintings.png");
		coffee_shop_paintings_png.scaleX = 0.4676913474617863;
		coffee_shop_paintings_png.scaleY = 0.4640943975137752;

		// coffee_shop_chair_seat_png
		const coffee_shop_chair_seat_png = this.add.image(243, 491, "coffeeshop", "coffee_shop_chair_seat.png");
		coffee_shop_chair_seat_png.scaleX = 0.5628553570933474;
		coffee_shop_chair_seat_png.scaleY = 0.5335307510180065;

		// coffee_shop_yellow_rails_png
		const coffee_shop_yellow_rails_png = this.add.image(648, 537, "coffeeshop", "coffee_shop_yellow_rails.png");
		coffee_shop_yellow_rails_png.scaleX = 0.4433742509981592;
		coffee_shop_yellow_rails_png.scaleY = 0.4936494055294237;

		// coffee_shop_smoothie_back_table_png
		const coffee_shop_smoothie_back_table_png = this.add.image(117, 624, "coffeeshop", "coffee_shop_smoothie_back_table.png");
		coffee_shop_smoothie_back_table_png.scaleX = 0.39168090414366397;
		coffee_shop_smoothie_back_table_png.scaleY = 0.370091928509571;


		// coffee_shop_smoothie_smash_animation_trigger0002_png
		const coffee_shop_smoothie_smash_animation_trigger0002_png = this.add.image(70, 526, "coffeeshop", "coffee_shop_smoothie_smash_animation_trigger0002.png");
		coffee_shop_smoothie_smash_animation_trigger0002_png.scaleX = 0.30322017098650345;
		coffee_shop_smoothie_smash_animation_trigger0002_png.scaleY = 0.47814279521004355;
		coffee_shop_smoothie_smash_animation_trigger0002_png.alpha = 0.001;
		coffee_shop_smoothie_smash_animation_trigger0002_png.alphaTopLeft = 0.001;
		coffee_shop_smoothie_smash_animation_trigger0002_png.alphaTopRight = 0.001;
		coffee_shop_smoothie_smash_animation_trigger0002_png.alphaBottomLeft = 0.001;
		coffee_shop_smoothie_smash_animation_trigger0002_png.alphaBottomRight = 0.001;

		// coffee_shop_smoothie_smash_top_png
		const coffee_shop_smoothie_smash_top_png = this.add.image(75, 478, "coffeeshop", "coffee_shop_smoothie_smash_top.png");
		coffee_shop_smoothie_smash_top_png.scaleX = 0.4171476000176657;
		coffee_shop_smoothie_smash_top_png.scaleY = 0.420260529107175;

		// coffee_shop_lights_png
		const coffee_shop_lights_png = this.add.image(741, 500, "coffeeshop", "coffee_shop_lights.png");
		coffee_shop_lights_png.scaleX = 0.4296044236614773;
		coffee_shop_lights_png.scaleY = 0.4280038582684184;

		// coffee_shop_table_behind_counter_png
		const coffee_shop_table_behind_counter_png = this.add.image(1061, 424, "coffeeshop", "coffee_shop_table_behind_counter.png");
		coffee_shop_table_behind_counter_png.scaleX = 0.4409792581531393;
		coffee_shop_table_behind_counter_png.scaleY = 0.45052598901020097;

		// coffee_shop_bean_counter_w_bucket_png
		const coffee_shop_bean_counter_w_bucket_png = this.add.image(909, 318, "coffeeshop", "coffee_shop_bean_counter_w_bucket.png");
		coffee_shop_bean_counter_w_bucket_png.scaleX = 0.4372302576668026;
		coffee_shop_bean_counter_w_bucket_png.scaleY = 0.4295202765592806;

		// coffee_shop_counter_table_png
		const coffee_shop_counter_table_png = this.add.image(900, 406, "coffeeshop", "coffee_shop_counter_table.png");
		coffee_shop_counter_table_png.scaleX = 0.4237991053749753;
		coffee_shop_counter_table_png.scaleY = 0.4709065736823277;

		// coffee_shop_coffee_maker_png
		const coffee_shop_coffee_maker_png = this.add.image(975, 260, "coffeeshop", "coffee_shop_coffee_maker.png");
		coffee_shop_coffee_maker_png.scaleX = 0.3596255743533479;
		coffee_shop_coffee_maker_png.scaleY = 0.3864082717042355;

		// coffee_shop_coffee_maker_1_png
		const coffee_shop_coffee_maker_1_png = this.add.image(1035, 286, "coffeeshop", "coffee_shop_coffee_maker_1.png");
		coffee_shop_coffee_maker_1_png.scaleX = 0.39743295887101243;
		coffee_shop_coffee_maker_1_png.scaleY = 0.4106406409169515;

		// coffee_shop_counter_bottle_2_png
		const coffee_shop_counter_bottle_2_png = this.add.image(1064, 354, "coffeeshop", "coffee_shop_counter_bottle_2.png");
		coffee_shop_counter_bottle_2_png.scaleX = 0.40530355184316613;
		coffee_shop_counter_bottle_2_png.scaleY = 0.3919635193506838;

		// coffee_shop_counter_bottle_1_png
		const coffee_shop_counter_bottle_1_png = this.add.image(1089, 381, "coffeeshop", "coffee_shop_counter_bottle_1.png");
		coffee_shop_counter_bottle_1_png.scaleX = 0.40530355184316613;
		coffee_shop_counter_bottle_1_png.scaleY = 0.3919635193506838;

		// coffee_shop_counter_bottle_png
		const coffee_shop_counter_bottle_png = this.add.image(1114, 412, "coffeeshop", "coffee_shop_counter_bottle.png");
		coffee_shop_counter_bottle_png.scaleX = 0.40530355184316613;
		coffee_shop_counter_bottle_png.scaleY = 0.3919635193506838;

		// coffee_shop_right_side_cash_register0001_png
		const coffee_shop_right_side_cash_register0001_png = this.add.sprite(898, 462, "coffeeshop", "coffee_shop_right_side_cash_register0001.png");
		coffee_shop_right_side_cash_register0001_png.scaleX = 0.3702525979991861;
		coffee_shop_right_side_cash_register0001_png.scaleY = 0.35826419178406266;

		// coffee_shop_bean_counter_gamme0001_png
		const coffee_shop_bean_counter_gamme0001_png = this.add.sprite(1349, 768, "coffeeshop", "coffee_shop_bean_counter_gamme00010001.png");
		coffee_shop_bean_counter_gamme0001_png.scaleX = 0.4544304025192314;
		coffee_shop_bean_counter_gamme0001_png.scaleY = 0.41728602049745817;

		// coffee_shop_bean_counter_door_png
		const coffee_shop_bean_counter_door_png = this.add.image(1424, 806, "coffeeshop", "coffee_shop_bean_counter_door.png");
		coffee_shop_bean_counter_door_png.scaleX = 0.4911975551795293;
		coffee_shop_bean_counter_door_png.scaleY = 0.44214875630707273;

		// coffee_shop_bean_counter_arrow_png
		const coffee_shop_bean_counter_arrow_png = this.add.image(1470, 455, "coffeeshop", "coffee_shop_bean_counter_arrow.png");
		coffee_shop_bean_counter_arrow_png.scaleX = 0.4222039589102974;
		coffee_shop_bean_counter_arrow_png.scaleY = 0.38343913465674806;

		// coffee_shop_smoothie_front_table_png
		const coffee_shop_smoothie_front_table_png = this.add.image(180, 808, "coffeeshop", "coffee_shop_smoothie_front_table.png");
		coffee_shop_smoothie_front_table_png.scaleX = 0.3784958978632053;
		coffee_shop_smoothie_front_table_png.scaleY = 0.3920240126409131;

		// coffee_shop_ceiling_light_png
		const coffee_shop_ceiling_light_png = this.add.image(532, 67, "coffeeshop", "coffee_shop_ceiling_light.png");
		coffee_shop_ceiling_light_png.scaleX = 0.4748984967987585;
		coffee_shop_ceiling_light_png.scaleY = 0.5348002480514867;

		// coffee_shop_ceiling_light_png_1
		const coffee_shop_ceiling_light_png_1 = this.add.image(352, 69, "coffeeshop", "coffee_shop_ceiling_light.png");
		coffee_shop_ceiling_light_png_1.scaleX = 0.4748984967987585;
		coffee_shop_ceiling_light_png_1.scaleY = 0.5348002480514867;

		// coffee_shop_smooth_smash0001_png
		const coffee_shop_smooth_smash0001_png = this.add.sprite(129, 748, "coffeeshop", "coffee_shop_smooth_smash0001.png");
		coffee_shop_smooth_smash0001_png.scaleX = 0.42204900100199966;
		coffee_shop_smooth_smash0001_png.scaleY = 0.4279798025365009;

		// coffee_shop_black_berry_png
		const coffee_shop_black_berry_png = this.add.image(358, 596, "coffeeshop", "coffee_shop_black_berry.png");

		// coffee_shop_smooth_smash_text_board_png_1
		const coffee_shop_smooth_smash_text_board_png_1 = this.add.image(99, 365, "coffeeshop", "coffee_shop_smooth_smash_text_board.png");
		coffee_shop_smooth_smash_text_board_png_1.scaleX = 0.4062900420056371;
		coffee_shop_smooth_smash_text_board_png_1.scaleY = 0.3969979029822167;

		// coffee_shop_smooth_smash_chair_png
		const coffee_shop_smooth_smash_chair_png = this.add.image(417, 816, "coffeeshop", "coffee_shop_smooth_smash_chair.png");

		// coffee_shop_smooth_smash_chair_png_1
		const coffee_shop_smooth_smash_chair_png_1 = this.add.image(428, 714, "coffeeshop", "coffee_shop_smooth_smash_chair.png");

		// coffee_shop_carpet_png
		const coffee_shop_carpet_png = this.add.image(893, 826, "coffeeshop", "coffee_shop_carpet.png");
		coffee_shop_carpet_png.scaleX = 0.471296259068;
		coffee_shop_carpet_png.scaleY = 0.38091980980307205;

		// coffee_shop_bottom_right_couch_png
		const coffee_shop_bottom_right_couch_png = this.add.image(1113, 832, "coffeeshop", "coffee_shop_bottom_right_couch.png");
		coffee_shop_bottom_right_couch_png.scaleX = 0.5223855417148998;
		coffee_shop_bottom_right_couch_png.scaleY = 0.4323150897187319;

		// coffee_shop_bottom_right_couch_top_png
		const coffee_shop_bottom_right_couch_top_png = this.add.image(1226, 813, "coffeeshop", "coffee_shop_bottom_right_couch_top.png");

		// coffee_shop_yellow_table_png
		const coffee_shop_yellow_table_png = this.add.image(895, 791, "coffeeshop", "coffee_shop_yellow_table.png");
		coffee_shop_yellow_table_png.scaleX = 0.4645204937843975;
		coffee_shop_yellow_table_png.scaleY = 0.4676391193550611;

		// coffee_shop_bottom_right_seat_png
		const coffee_shop_bottom_right_seat_png = this.add.image(695, 835, "coffeeshop", "coffee_shop_bottom_right_seat.png");
		coffee_shop_bottom_right_seat_png.scaleX = 0.4974575258909829;
		coffee_shop_bottom_right_seat_png.scaleY = 0.4816567159341131;

		// coffee_shop_bottom_right_seat_top_png
		const coffee_shop_bottom_right_seat_top_png = this.add.image(688, 787, "coffeeshop", "coffee_shop_bottom_right_seat_top.png");
		coffee_shop_bottom_right_seat_top_png.scaleX = 0.5655820190215506;
		coffee_shop_bottom_right_seat_top_png.scaleY = 0.5307908590370582;

		// coffee_shop_smoothie_cash_register0001_png
		const coffee_shop_smoothie_cash_register0001_png = this.add.sprite(288, 651, "coffeeshop", "coffee_shop_smoothie_cash_register0001.png");
		coffee_shop_smoothie_cash_register0001_png.scaleX = 0.3425214491743712;
		coffee_shop_smoothie_cash_register0001_png.scaleY = 0.3463056484989952;

		// coffee_shop_cpt_door_png
		const coffee_shop_cpt_door_png = this.add.image(1302, 328, "coffeeshop", "coffee_shop_cpt_door.png");
		coffee_shop_cpt_door_png.scaleX = 1.0258050610626377;
		coffee_shop_cpt_door_png.scaleY = 1.013893890840069;

		// coffee_shop_cpt_door_light_png
		const coffee_shop_cpt_door_light_png = this.add.image(1298, 415, "coffeeshop", "coffee_shop_cpt_door_light.png");
		coffee_shop_cpt_door_light_png.scaleX = 0.4941881855465728;
		coffee_shop_cpt_door_light_png.scaleY = 0.6788635701432557;
		coffee_shop_cpt_door_light_png.angle = 1;
		coffee_shop_cpt_door_light_png.alpha = 0.001;
		coffee_shop_cpt_door_light_png.alphaTopLeft = 0.001;
		coffee_shop_cpt_door_light_png.alphaTopRight = 0.001;
		coffee_shop_cpt_door_light_png.alphaBottomLeft = 0.001;
		coffee_shop_cpt_door_light_png.alphaBottomRight = 0.001;

		// coffee_shop_smooth_smash_text0001_png
		const coffee_shop_smooth_smash_text0001_png = this.add.image(107, 364, "coffeeshop", "coffee_shop_smooth_smash_text0001.png");
		coffee_shop_smooth_smash_text0001_png.scaleX = 0.42310074362333777;
		coffee_shop_smooth_smash_text0001_png.scaleY = 0.41108539690234486;

		// coffee_shop_town_door0002_png
		const coffee_shop_town_door0002_png = this.add.image(706, 240, "coffeeshop", "coffee_shop_town_door0002.png");
		coffee_shop_town_door0002_png.scaleX = 0.4427888795842937;
		coffee_shop_town_door0002_png.scaleY = 0.4172271332049616;
		coffee_shop_town_door0002_png.visible = false;

		// coffee_shop_table_bottom_right_bean_bag_png
		const coffee_shop_table_bottom_right_bean_bag_png = this.add.image(1211, 741, "coffeeshop", "coffee_shop_table_bottom_right_bean_bag.png");

		// coffee_shop_roof_wood_png
		const coffee_shop_roof_wood_png = this.add.image(868, 44, "coffeeshop", "coffee_shop_roof_wood.png");
		coffee_shop_roof_wood_png.scaleX = 0.9873874435762898;
		coffee_shop_roof_wood_png.scaleY = 1.0884217875118019;

		// coffee_shop_ceiling_light_1_png
		const coffee_shop_ceiling_light_1_png = this.add.image(843, 125, "coffeeshop", "coffee_shop_ceiling_light_1.png");
		coffee_shop_ceiling_light_1_png.scaleX = 0.40965332646092995;
		coffee_shop_ceiling_light_1_png.scaleY = 0.29263982330856864;

		// coffee_shop_ceiling_light_2_png
		const coffee_shop_ceiling_light_2_png = this.add.image(865, 137, "coffeeshop", "coffee_shop_ceiling_light_2.png");
		coffee_shop_ceiling_light_2_png.scaleX = 0.6270462661189421;
		coffee_shop_ceiling_light_2_png.scaleY = 0.40290027820983376;

		// coffee_shop_ceiling_light_3_png
		const coffee_shop_ceiling_light_3_png = this.add.image(890, 152, "coffeeshop", "coffee_shop_ceiling_light_3.png");
		coffee_shop_ceiling_light_3_png.scaleX = 0.7949687980371808;
		coffee_shop_ceiling_light_3_png.scaleY = 0.5508795757377113;

		// coffee_shop_bean_counter_trigger_png
		const coffee_shop_bean_counter_trigger_png = this.physics.add.sprite(1406, 819, "coffeeshop", "coffee_shop_bean_counter_trigger.png");
		coffee_shop_bean_counter_trigger_png.scaleX = 1.1038682652888037;
		coffee_shop_bean_counter_trigger_png.scaleY = 0.9408848886876826;
		coffee_shop_bean_counter_trigger_png.alpha = 0;
		coffee_shop_bean_counter_trigger_png.alphaTopLeft = 0;
		coffee_shop_bean_counter_trigger_png.alphaTopRight = 0;
		coffee_shop_bean_counter_trigger_png.alphaBottomLeft = 0;
		coffee_shop_bean_counter_trigger_png.alphaBottomRight = 0;
		coffee_shop_bean_counter_trigger_png.body.setSize(236, 320, false);

		// coffee_shop_cpt_trigger_png
		const coffee_shop_cpt_trigger_png = this.physics.add.sprite(1302, 425, "coffeeshop", "coffee_shop_cpt_trigger.png");
		coffee_shop_cpt_trigger_png.scaleX = 1.0564886487082594;
		coffee_shop_cpt_trigger_png.scaleY = 0.8470186735817627;
		coffee_shop_cpt_trigger_png.alpha = 0;
		coffee_shop_cpt_trigger_png.alphaTopLeft = 0;
		coffee_shop_cpt_trigger_png.alphaTopRight = 0;
		coffee_shop_cpt_trigger_png.alphaBottomLeft = 0;
		coffee_shop_cpt_trigger_png.alphaBottomRight = 0;
		coffee_shop_cpt_trigger_png.body.setSize(186, 384, false);

		// coffee_shop_town_trigger_png
		const coffee_shop_town_trigger_png = this.physics.add.sprite(709, 223, "coffeeshop", "coffee_shop_town_trigger.png");
		coffee_shop_town_trigger_png.scaleX = 1.272657333207253;
		coffee_shop_town_trigger_png.scaleY = 1.5652063556919114;
		coffee_shop_town_trigger_png.angle = 90;
		coffee_shop_town_trigger_png.alpha = 0.001;
		coffee_shop_town_trigger_png.alphaTopLeft = 0.001;
		coffee_shop_town_trigger_png.alphaTopRight = 0.001;
		coffee_shop_town_trigger_png.alphaBottomLeft = 0.001;
		coffee_shop_town_trigger_png.alphaBottomRight = 0.001;
		coffee_shop_town_trigger_png.body.setSize(172, 96, false);

		// coffee_shop_walking_trigger_png
		const coffee_shop_walking_trigger_png = this.physics.add.sprite(740, 484, "coffeeshop", "coffee_shop_walking_trigger.png");
		coffee_shop_walking_trigger_png.alpha = 0;
		coffee_shop_walking_trigger_png.alphaTopLeft = 0;
		coffee_shop_walking_trigger_png.alphaTopRight = 0;
		coffee_shop_walking_trigger_png.alphaBottomLeft = 0;
		coffee_shop_walking_trigger_png.alphaBottomRight = 0;
		coffee_shop_walking_trigger_png.body.setSize(1612, 973, false);

		// coffee_shop_chair_bottom_left_red_arm_png
		const coffee_shop_chair_bottom_left_red_arm_png = this.add.image(664, 840, "coffeeshop", "coffee_shop_chair_bottom_left_red_arm.png");
		coffee_shop_chair_bottom_left_red_arm_png.scaleX = 1.092230943817713;

		// coffee_shop_walking_trigger_png_1
		const coffee_shop_walking_trigger_png_1 = this.physics.add.sprite(678, 415, "coffeeshop_walking_trigger");
		coffee_shop_walking_trigger_png_1.alpha = 0.001;
		coffee_shop_walking_trigger_png_1.alphaTopLeft = 0.001;
		coffee_shop_walking_trigger_png_1.alphaTopRight = 0.001;
		coffee_shop_walking_trigger_png_1.alphaBottomLeft = 0.001;
		coffee_shop_walking_trigger_png_1.alphaBottomRight = 0.001;
		coffee_shop_walking_trigger_png_1.body.setSize(1612, 973, false);
		this.collisionMap = this.createCollisionMap(this, 678, 415, "coffeeshop_walking_trigger", null);

		// Setting triggers starts here
		this.triggers.push([coffee_shop_walking_trigger_png_1, () => {
			onWalkingTrigger(this);
		}]);

		this.triggers.push([coffee_shop_cpt_trigger_png, () => {
			onJoinRoomTrigger(SCENE_BOOK_ROOM);
		}]);

		this.triggers.push([coffee_shop_town_trigger_png, () => {
			onJoinRoomTrigger(SCENE_ROOM_TOWN);
		}]);
		// Setting triggers ends here

        // Creating animations starts here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "coffee_shop_bean_counter_game_animation",
            "phaserAnimationKey": "coffee_shop_bean_counter_game_animation_play",
            "textureKey": "coffeeshop",
            "framePrefix": "coffee_shop_bean_counter_gamme0001",
            "frames": Array.from({ length: 35 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "coffee_shop_smoothie_smmash_animation",
            "phaserAnimationKey": "coffee_shop_smoothie_smmash_animation_play",
            "textureKey": "coffeeshop",
            "framePrefix": "coffee_shop_smooth_smash",
            "frames": Array.from({ length: 60 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "coffee_shop_top_cash_register_animation",
            "phaserAnimationKey": "coffee_shop_top_cash_register_animation_play",
            "textureKey": "coffeeshop",
            "framePrefix": "coffee_shop_right_side_cash_register",
            "frames": Array.from({ length: 53 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "coffee_shop_bottom_cash_register_animation",
            "phaserAnimationKey": "coffee_shop_bottom_cash_register_animation_play",
            "textureKey": "coffeeshop",
            "framePrefix": "coffee_shop_smoothie_cash_register",
            "frames": Array.from({ length: 39 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });
        // Creating animations ends here

        // Setting all interactives sprites starts here
        coffee_shop_town_door0001_png.setInteractive({ useHandCursor: true });
        coffee_shop_right_side_cash_register0001_png.setInteractive({ useHandCursor: true });
        coffee_shop_bean_counter_gamme0001_png.setInteractive({ useHandCursor: true });
        coffee_shop_smoothie_cash_register0001_png.setInteractive({ useHandCursor: true });
        coffee_shop_cpt_door_light_png.setInteractive({ useHandCursor: true });
        coffee_shop_town_door0002_png.setInteractive({ useHandCursor: true });
        coffee_shop_smoothie_smash_animation_trigger0002_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        coffee_shop_town_door0001_png.on("pointerover", () => {
            coffee_shop_town_door0001_png.visible = false;
            coffee_shop_town_door0002_png.visible = true;
            this.audioManager.play(COFFEE_SHOP_TOWN_DOOR_OPEN);
        });

        coffee_shop_town_door0002_png.on("pointerout", () => {
            coffee_shop_town_door0001_png.visible = true;
            coffee_shop_town_door0002_png.visible = false;
            this.audioManager.play(COFFEE_SHOP_TOWN_DOOR_CLOSE);
        });

        coffee_shop_cpt_door_light_png.on("pointerover", () => {
            coffee_shop_cpt_door_light_png.alpha = 1;
            coffee_shop_cpt_door_light_png.alphaTopLeft = 1;
            coffee_shop_cpt_door_light_png.alphaTopRight = 1;
            coffee_shop_cpt_door_light_png.alphaBottomLeft = 1;
            coffee_shop_cpt_door_light_png.alphaBottomRight = 1;
            this.audioManager.play(COFFEE_SHOP_CPT_LIGHT_ON);
        });

        coffee_shop_cpt_door_light_png.on("pointerout", () => {
            coffee_shop_cpt_door_light_png.alpha = 0.001;
            coffee_shop_cpt_door_light_png.alphaTopLeft = 0.001;
            coffee_shop_cpt_door_light_png.alphaTopRight = 0.001;
            coffee_shop_cpt_door_light_png.alphaBottomLeft = 0.001;
            coffee_shop_cpt_door_light_png.alphaBottomRight = 0.001;
            this.audioManager.play(COFFEE_SHOP_CPT_LIGHT_OFF);
        });

        coffee_shop_bean_counter_gamme0001_png.on("pointerover", () => {
            coffee_shop_bean_counter_gamme0001_png.play("coffee_shop_bean_counter_game_animation_play");
            this.audioManager.play(COFFEE_SHOP_BEAN_COUNTER_HOVER);
        });

        coffee_shop_bean_counter_gamme0001_png.on("pointerout", () => {
            coffee_shop_bean_counter_gamme0001_png.stop();
            coffee_shop_bean_counter_gamme0001_png.setFrame("coffee_shop_bean_counter_gamme00010001.png");
            this.audioManager.stop(COFFEE_SHOP_BEAN_COUNTER_HOVER);
        });

        coffee_shop_smoothie_smash_animation_trigger0002_png.on("pointerover", () => {
            coffee_shop_smoothie_smash_animation_trigger0002_png.alpha = 1;
            coffee_shop_smoothie_smash_animation_trigger0002_png.alphaTopLeft = 1;
            coffee_shop_smoothie_smash_animation_trigger0002_png.alphaTopRight = 1;
            coffee_shop_smoothie_smash_animation_trigger0002_png.alphaBottomLeft = 1;
            coffee_shop_smoothie_smash_animation_trigger0002_png.alphaBottomRight = 1;
            coffee_shop_smooth_smash0001_png.play("coffee_shop_smoothie_smmash_animation_play");
            this.audioManager.play(COFFEE_SHOP_SMOOTHIE_SMASH_HOVER);
        });

        coffee_shop_smoothie_smash_animation_trigger0002_png.on("pointerout", () => {
            coffee_shop_smoothie_smash_animation_trigger0002_png.alpha = 0.001;
            coffee_shop_smoothie_smash_animation_trigger0002_png.alphaTopLeft = 0.001;
            coffee_shop_smoothie_smash_animation_trigger0002_png.alphaTopRight = 0.001;
            coffee_shop_smoothie_smash_animation_trigger0002_png.alphaBottomLeft = 0.001;
            coffee_shop_smoothie_smash_animation_trigger0002_png.alphaBottomRight = 0.001;
            coffee_shop_smooth_smash0001_png.stop();
            this.audioManager.stop(COFFEE_SHOP_SMOOTHIE_SMASH_HOVER);
        });

        coffee_shop_right_side_cash_register0001_png.on("pointerover", () => {
            coffee_shop_right_side_cash_register0001_png.play("coffee_shop_top_cash_register_animation_play");
            this.audioManager.play(COFFEE_SHOP_TOP_CASH_REGISTER);
        });

        coffee_shop_right_side_cash_register0001_png.on("pointerout", () => {
            coffee_shop_right_side_cash_register0001_png.stop();
            coffee_shop_right_side_cash_register0001_png.setFrame("coffee_shop_right_side_cash_register0001.png");
            this.audioManager.stop(COFFEE_SHOP_TOP_CASH_REGISTER);
        });

        coffee_shop_smoothie_cash_register0001_png.on("pointerover", () => {
            coffee_shop_smoothie_cash_register0001_png.play("coffee_shop_bottom_cash_register_animation_play");
            this.audioManager.play(COFFEE_SHOP_BOTTOM_CASH_REGISTER);
        });

        coffee_shop_smoothie_cash_register0001_png.on("pointerout", () => {
            coffee_shop_smoothie_cash_register0001_png.stop();
            coffee_shop_smoothie_cash_register0001_png.setFrame("coffee_shop_smoothie_cash_register0001.png");
            this.audioManager.stop(COFFEE_SHOP_BOTTOM_CASH_REGISTER);
        });
        // All interactive events end here

		super.createContent(this);
    }

	update() {
		super.update();
	}
}