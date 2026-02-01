import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { PET_SHOP_PLAZA_DOOR_CLOSE, PET_SHOP_PLAZA_DOOR_OPEN, PET_SHOP_PUFFLE_HOTEL_DOOR_CLOSE, PET_SHOP_PUFFLE_HOTEL_DOOR_OPEN, PET_SHOP_PUFFLE_PARK_DOOR_CLOSE, PET_SHOP_PUFFLE_PARK_DOOR_OPEN, PET_SHOP_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_PET_SHOP } from "../../../sceneNames";
import { RoomScene } from "../RoomScene";

// TODO: Fix the puffle adopt animations pretty sure i did the wrong ones xd
// TODO: Add lights to puffle berry machine
// TODO: Add lights to adopt me puffle shelter
// TODO: Pretty sure im missing some underground puffle animations (walking around ones)
// TODO: Add glass thing above puffle scape ball

export class PetShopScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_PET_SHOP);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "cavemine",
            "paths": ["assets/world/rooms/petshop/petshop-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PET_SHOP_ROOM_MUSIC,
            "paths": ["assets/world/rooms/petshop/pet_shop_room_music.mp3"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PET_SHOP_PLAZA_DOOR_OPEN,
            "paths": ["assets/world/rooms/petshop/pet_shop_plaza_door_open.mp3"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PET_SHOP_PLAZA_DOOR_CLOSE,
            "paths": ["assets/world/rooms/petshop/pet_shop_plaza_door_close.mp3"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PET_SHOP_PUFFLE_HOTEL_DOOR_OPEN,
            "paths": ["assets/world/rooms/petshop/pet_shop_puffle_hotel_door_open.mp3"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PET_SHOP_PUFFLE_HOTEL_DOOR_CLOSE,
            "paths": ["assets/world/rooms/petshop/pet_shop_puffle_hotel_door_close.mp3"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PET_SHOP_PUFFLE_PARK_DOOR_OPEN,
            "paths": ["assets/world/rooms/petshop/pet_shop_puffle_park_door_open.mp3"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PET_SHOP_PUFFLE_PARK_DOOR_CLOSE,
            "paths": ["assets/world/rooms/petshop/pet_shop_puffle_park_door_close.mp3"]
        });
    }

    createContent() {
	// pet_shop_puffle_scape_bg_png
		const pet_shop_puffle_scape_bg_png = this.add.image(961, 179, "petshop", "pet_shop_puffle_scape_bg.png");

		// pet_shop_outside_backgrounds_png
		const pet_shop_outside_backgrounds_png = this.add.image(917, 312, "petshop", "pet_shop_outside_backgrounds.png");

		// pet_shop_puffle_launch_window0001_png
		const pet_shop_puffle_launch_window0001_png = this.add.sprite(1177, 161, "petshop", "pet_shop_puffle_launch_window0001.png");

		// pet_shop_puffle_launch_bg_png
		const pet_shop_puffle_launch_bg_png = this.add.image(1196, 281, "petshop", "pet_shop_puffle_launch_bg.png");

		// pet_shop_puffle_launch_machine0001_png
		const pet_shop_puffle_launch_machine0001_png = this.add.sprite(1217, 224, "petshop", "pet_shop_puffle_launch_machine0001.png");

		// pet_shop_pufflescape_ball0001_png
		const pet_shop_pufflescape_ball0001_png = this.add.sprite(971, 212, "petshop", "pet_shop_pufflescape_ball0001.png");

		// pet_shop_plaza_doore0001_png
		const pet_shop_plaza_doore0001_png = this.add.image(738, 186, "petshop", "pet_shop_plaza_doore0001.png");

		// pet_shop_plaza_doore0002_png
		const pet_shop_plaza_doore0002_png = this.add.image(738, 186, "petshop", "pet_shop_plaza_doore0002.png");
		pet_shop_plaza_doore0002_png.visible = false;

		// pet_shop_outer_layer_png
		const pet_shop_outer_layer_png = this.add.image(748, 475, "petshop", "pet_shop_outer_layer.png");

		// pet_shop_blue_puffle_top_left0001_png
		const pet_shop_blue_puffle_top_left0001_png = this.add.sprite(150, 141, "petshop", "pet_shop_blue_puffle_top_left0001.png");

		// pet_shop_puffle_park_door0001_png
		const pet_shop_puffle_park_door0001_png = this.add.image(1431, 339, "petshop", "pet_shop_puffle_park_door0001.png");

		// pet_shop_puffle_park_door0002_png
		const pet_shop_puffle_park_door0002_png = this.add.image(1431, 339, "petshop", "pet_shop_puffle_park_door0002.png");
		pet_shop_puffle_park_door0002_png.visible = false;

		// pet_shop_blue_puffle_top_middle_walking0001_png
		const pet_shop_blue_puffle_top_middle_walking0001_png = this.add.sprite(806, 8, "petshop", "pet_shop_blue_puffle_top_middle_walking0001.png");

		// pet_shop_background_png
		const pet_shop_background_png = this.add.image(748, 472, "petshop", "pet_shop_background.png");

		// pet_shop_puffle_berry_top0001_png
		const pet_shop_puffle_berry_top0001_png = this.add.image(546, 155, "petshop", "pet_shop_puffle_berry_top0001.png");
		pet_shop_puffle_berry_top0001_png.scaleY = 1.0541005123973575;

		// pet_shop_puffle_berry_bottom_png
		const pet_shop_puffle_berry_bottom_png = this.add.image(527, 377, "petshop", "pet_shop_puffle_berry_bottom.png");

		// pet_shop_puffle_berry_carpet_png
		const pet_shop_puffle_berry_carpet_png = this.add.image(571, 426, "petshop", "pet_shop_puffle_berry_carpet.png");

		// pet_shop_top_tunnels_png
		const pet_shop_top_tunnels_png = this.add.image(819, 194, "petshop", "pet_shop_top_tunnels.png");

		// pet_shop_blue_puffle_top_right_walk_through_tunnels0001_png
		const pet_shop_blue_puffle_top_right_walk_through_tunnels0001_png = this.add.sprite(1327, 42, "petshop", "pet_shop_blue_puffle_top_right_walk_through_tunnels0001.png");

		// pet_shop_right_side_tunnel_top_png
		const pet_shop_right_side_tunnel_top_png = this.add.image(607, 152, "petshop", "pet_shop_right_side_tunnel_top.png");
		pet_shop_right_side_tunnel_top_png.setOrigin(0.40616491162638574, 0.43224858613554384);

		// pet_shop_adopt_a_puffle_background_png
		const pet_shop_adopt_a_puffle_background_png = this.add.image(291, 326, "petshop", "pet_shop_adopt_a_puffle_background.png");

		// pet_shop_adopt_a_puffle_white_puffle0001_png
		const pet_shop_adopt_a_puffle_white_puffle0001_png = this.add.sprite(354, 252, "petshop", "pet_shop_adopt_a_puffle_white_puffle0001.png");

		// pet_shop_adopt_a_puffle_purple_puffle0001_png
		const pet_shop_adopt_a_puffle_purple_puffle0001_png = this.add.sprite(255, 236, "petshop", "pet_shop_adopt_a_puffle_purple_puffle0001.png");

		// pet_shop_puffle_berry_circle0001_png
		const pet_shop_puffle_berry_circle0001_png = this.add.image(477, 301, "petshop", "pet_shop_puffle_berry_circle0001.png");

		// pet_shop_adopt_a_puffle_border_png
		const pet_shop_adopt_a_puffle_border_png = this.add.image(209, 273, "petshop", "pet_shop_adopt_a_puffle_border.png");
		pet_shop_adopt_a_puffle_border_png.scaleX = 0.9623945408349526;
		pet_shop_adopt_a_puffle_border_png.scaleY = 0.9590495974049525;

		// pet_shop_adopt_a_puffle_top_wood_png
		const pet_shop_adopt_a_puffle_top_wood_png = this.add.image(320, 203, "petshop", "pet_shop_adopt_a_puffle_top_wood.png");
		pet_shop_adopt_a_puffle_top_wood_png.scaleX = 0.9816187031199654;
		pet_shop_adopt_a_puffle_top_wood_png.scaleY = 1.0151974798662593;

		// pet_shopo_puffle_hotel_entrace_backgrouond_png
		const pet_shopo_puffle_hotel_entrace_backgrouond_png = this.add.image(99, 552, "petshop", "pet_shopo_puffle_hotel_entrace_backgrouond.png");

		// pet_shop_puffle_hotel_door0001_png
		const pet_shop_puffle_hotel_door0001_png = this.add.image(14, 557, "petshop", "pet_shop_puffle_hotel_door0001.png");

		// pet_shop_puffle_hotel_door0002_png
		const pet_shop_puffle_hotel_door0002_png = this.add.image(11, 577, "petshop", "pet_shop_puffle_hotel_door0002.png");
		pet_shop_puffle_hotel_door0002_png.visible = false;

		// pet_shop_puffle_hotel_stand_entrance_png
		const pet_shop_puffle_hotel_stand_entrance_png = this.add.image(-4, 553, "petshop", "pet_shop_puffle_hotel_stand_entrance.png");

		// pet_shop_floor_wood_png
		const pet_shop_floor_wood_png = this.add.image(303, 441, "petshop", "pet_shop_floor_wood.png");

		// pet_shop_book0001_png
		const pet_shop_book0001_png = this.add.image(240, 483, "petshop", "pet_shop_book0001.png");

		// pet_shop_book0002_png
		const pet_shop_book0002_png = this.add.image(240, 483, "petshop", "pet_shop_book0002.png");

		// pet_shop_bottom_right_blue_stand_top_png
		const pet_shop_bottom_right_blue_stand_top_png = this.add.image(1328, 609, "petshop", "pet_shop_bottom_right_blue_stand_top.png");

		// pet_shop_bottom_right_blue_stand_png
		const pet_shop_bottom_right_blue_stand_png = this.add.image(1287, 834, "petshop", "pet_shop_bottom_right_blue_stand.png");

		// pet_shop_middle_carpet_png
		const pet_shop_middle_carpet_png = this.add.image(736, 672, "petshop", "pet_shop_middle_carpet.png");

		// pet_shop_pink_seat_png
		const pet_shop_pink_seat_png = this.add.image(303, 887, "petshop", "pet_shop_pink_seat.png");

		// pet_shop_bottom_png
		const pet_shop_bottom_png = this.add.image(725, 882, "petshop", "pet_shop_bottom.png");

		// pet_shop_red_puffle_carpet_png
		const pet_shop_red_puffle_carpet_png = this.add.image(738, 664, "petshop", "pet_shop_red_puffle_carpet.png");

		// pet_shop_skate_board_png
		const pet_shop_skate_board_png = this.add.image(920, 786, "petshop", "pet_shop_skate_board.png");

		// pet_shop_food_bowl_png
		const pet_shop_food_bowl_png = this.add.image(1000, 866, "petshop", "pet_shop_food_bowl.png");

		// pet_shop_bouncy_call_png
		const pet_shop_bouncy_call_png = this.add.image(446, 406, "petshop", "pet_shop_bouncy_call.png");

		// pet_shop_green_food_bowl_png
		const pet_shop_green_food_bowl_png = this.add.image(872, 399, "petshop", "pet_shop_green_food_bowl.png");

		// pet_shop_orange_food_bowl_png
		const pet_shop_orange_food_bowl_png = this.add.image(910, 438, "petshop", "pet_shop_orange_food_bowl.png");

		// pet_shop_green_truck_bottom_png
		const pet_shop_green_truck_bottom_png = this.add.image(1182, 514, "petshop", "pet_shop_green_truck_bottom.png");

		// pet_shop_green_truck_top_png
		const pet_shop_green_truck_top_png = this.add.image(1191, 444, "petshop", "pet_shop_green_truck_top.png");

		// pet_shop_pink_stand_png
		const pet_shop_pink_stand_png = this.add.image(522, 849, "petshop", "pet_shop_pink_stand.png");

		// pet_shop_painting_stuff_png
		const pet_shop_painting_stuff_png = this.add.image(257, 573, "petshop", "pet_shop_painting_stuff.png");

		// pet_shop_pink_roller_blades_png
		const pet_shop_pink_roller_blades_png = this.add.image(205, 649, "petshop", "pet_shop_pink_roller_blades.png");

		// pet_shop_puffle_hotel_stand_entrance_puffle_icon_png
		const pet_shop_puffle_hotel_stand_entrance_puffle_icon_png = this.add.image(53, 292, "petshop", "pet_shop_puffle_hotel_stand_entrance_puffle_icon.png");

		// pet_shop_adopt_a_puffle_text0001_png
		const pet_shop_adopt_a_puffle_text0001_png = this.add.image(296, 112, "petshop", "pet_shop_adopt_a_puffle_text0001.png");

		// pet_shop_pink_puffle_top_of_adopt_a_puffle0001_png
		const pet_shop_pink_puffle_top_of_adopt_a_puffle0001_png = this.add.sprite(243, 152, "petshop", "pet_shop_pink_puffle_top_of_adopt_a_puffle0001.png");

		// pet_shop_orange_puffle_top_of_adopt_a_puffle0001_png
		const pet_shop_orange_puffle_top_of_adopt_a_puffle0001_png = this.add.sprite(314, 138, "petshop", "pet_shop_orange_puffle_top_of_adopt_a_puffle0001.png");

		// pet_shop_black_puffle_top_of_adopt_a_puffle0001_png
		const pet_shop_black_puffle_top_of_adopt_a_puffle0001_png = this.add.sprite(390, 149, "petshop", "pet_shop_black_puffle_top_of_adopt_a_puffle0001.png");

		// pet_shop_top_left_disco_ball_png
		const pet_shop_top_left_disco_ball_png = this.add.image(49, 92, "petshop", "pet_shop_top_left_disco_ball.png");

		// pet_shop_top_left_disco_ball_handle_png
		const pet_shop_top_left_disco_ball_handle_png = this.add.image(43, -4, "petshop", "pet_shop_top_left_disco_ball_handle.png");

		// pet_shop_adopt_a_puffle_yellow_puffle0001_png
		const pet_shop_adopt_a_puffle_yellow_puffle0001_png = this.add.sprite(319, 295, "petshop", "pet_shop_adopt_a_puffle_yellow_puffle0001.png");

		// pet_shop_adopt_a_puffle_brown_puffle0001_png
		const pet_shop_adopt_a_puffle_brown_puffle0001_png = this.add.sprite(260, 292, "petshop", "pet_shop_adopt_a_puffle_brown_puffle0001.png");

		// pet_shop_adopt_a_puffle_green_puffle0001_png
		const pet_shop_adopt_a_puffle_green_puffle0001_png = this.add.sprite(207, 307, "petshop", "pet_shop_adopt_a_puffle_green_puffle0001.png");

		// pet_shop_adopt_a_puffle_red_puffle0001_png
		const pet_shop_adopt_a_puffle_red_puffle0001_png = this.add.sprite(361, 335, "petshop", "pet_shop_adopt_a_puffle_red_puffle0001.png");

		// pet_shop_adopt_a_puffle_orange_cat_puffle0001_png
		const pet_shop_adopt_a_puffle_orange_cat_puffle0001_png = this.add.sprite(317, 355, "petshop", "pet_shop_adopt_a_puffle_orange_cat_puffle0001.png");

		// pet_shop_adopt_a_puffle_blue_cat_puffle0001_png
		const pet_shop_adopt_a_puffle_blue_cat_puffle0001_png = this.add.sprite(259, 338, "petshop", "pet_shop_adopt_a_puffle_blue_cat_puffle0001.png");

		// pet_shop_adopt_a_puffle_blue_puffle0001_png
		const pet_shop_adopt_a_puffle_blue_puffle0001_png = this.add.sprite(214, 363, "petshop", "pet_shop_adopt_a_puffle_blue_puffle0001.png");

		// pet_shop_adopt_a_puffle_list_png
		const pet_shop_adopt_a_puffle_list_png = this.add.image(424, 305, "petshop", "pet_shop_adopt_a_puffle_list.png");

        // Creating animations starts here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pet_shop_adopt_a_puffle_black_puffle_animation",
            "phaserAnimationKey": "pet_shop_adopt_a_puffle_black_puffle_animation_play",
            "textureKey": "petshop",
            "framePrefix": "pet_shop_black_puffle_top_of_adopt_a_puffle",
            "frames": Array.from({ length: 67 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pet_shop_adopt_a_puffle_orange_puffle_animation",
            "phaserAnimationKey": "pet_shop_adopt_a_puffle_orange_puffle_animation_play",
            "textureKey": "petshop",
            "framePrefix": "pet_shop_orange_puffle_top_of_adopt_a_puffle",
            "frames": Array.from({ length: 22 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pet_shop_adopt_a_puffle_pink_puffle_animation",
            "phaserAnimationKey": "pet_shop_adopt_a_puffle_pink_puffle_animation_play",
            "textureKey": "petshop",
            "framePrefix": "pet_shop_pink_puffle_top_of_adopt_a_puffle",
            "frames": Array.from({ length: 22 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pet_shop_adopt_a_puffle_blue_puffle_animation",
            "phaserAnimationKey": "pet_shop_adopt_a_puffle_blue_puffle_animation_play",
            "textureKey": "petshop",
            "framePrefix": "pet_shop_adopt_a_puffle_blue_puffle",
            "frames": Array.from({ length: 22 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pet_shop_adopt_a_puffle_blue_cat_puffle_animation",
            "phaserAnimationKey": "pet_shop_adopt_a_puffle_blue_cat_puffle_animation_play",
            "textureKey": "petshop",
            "framePrefix": "pet_shop_adopt_a_puffle_blue_cat_puffle",
            "frames": Array.from({ length: 40 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pet_shop_adopt_a_puffle_orange_cat_puffle_animation",
            "phaserAnimationKey": "pet_shop_adopt_a_puffle_orange_cat_puffle_animation_play",
            "textureKey": "petshop",
            "framePrefix": "pet_shop_adopt_a_puffle_orange_cat_puffle",
            "frames": Array.from({ length: 40 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pet_shop_adopt_a_puffle_red_puffle_animation",
            "phaserAnimationKey": "pet_shop_adopt_a_puffle_red_puffle_animation_play",
            "textureKey": "petshop",
            "framePrefix": "pet_shop_adopt_a_puffle_red_puffle",
            "frames": Array.from({ length: 22 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pet_shop_adopt_a_puffle_yellow_puffle_animation",
            "phaserAnimationKey": "pet_shop_adopt_a_puffle_yellow_puffle_animation_play",
            "textureKey": "petshop",
            "framePrefix": "pet_shop_adopt_a_puffle_yellow_puffle",
            "frames": Array.from({ length: 22 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pet_shop_adopt_a_puffle_brown_puffle_animation",
            "phaserAnimationKey": "pet_shop_adopt_a_puffle_brown_puffle_animation_play",
            "textureKey": "petshop",
            "framePrefix": "pet_shop_adopt_a_puffle_brown_puffle",
            "frames": Array.from({ length: 22 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pet_shop_adopt_a_puffle_green_puffle_animation",
            "phaserAnimationKey": "pet_shop_adopt_a_puffle_green_puffle_animation_play",
            "textureKey": "petshop",
            "framePrefix": "pet_shop_adopt_a_puffle_green_puffle",
            "frames": Array.from({ length: 22 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pet_shop_adopt_a_puffle_purple_puffle_animation",
            "phaserAnimationKey": "pet_shop_adopt_a_puffle_purple_puffle_animation_play",
            "textureKey": "petshop",
            "framePrefix": "pet_shop_adopt_a_puffle_purple_puffle",
            "frames": Array.from({ length: 22 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pet_shop_adopt_a_puffle_white_puffle_animation",
            "phaserAnimationKey": "pet_shop_adopt_a_puffle_white_puffle_animation_play",
            "textureKey": "petshop",
            "framePrefix": "pet_shop_adopt_a_puffle_white_puffle",
            "frames": Array.from({ length: 67 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pet_shop_top_right_blue_puffle_walking_animation",
            "phaserAnimationKey": "pet_shop_top_right_blue_puffle_walking_animation_play",
            "textureKey": "petshop",
            "framePrefix": "pet_shop_blue_puffle_top_right_walk_through_tunnels",
            "frames": Array.from({ length: 195 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pet_shop_top_middle_blue_puffle_walking_animation",
            "phaserAnimationKey": "pet_shop_top_middle_blue_puffle_walking_animation_play",
            "textureKey": "petshop",
            "framePrefix": "pet_shop_blue_puffle_top_middle_walking",
            "frames": Array.from({ length: 215 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pet_shop_top_left_blue_puffle_walking_animation",
            "phaserAnimationKey": "pet_shop_top_left_blue_puffle_walking_animation_play",
            "textureKey": "petshop",
            "framePrefix": "pet_shop_blue_puffle_top_left",
            "frames": Array.from({ length: 240 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pet_shop_puffle_scape_ball_animation",
            "phaserAnimationKey": "pet_shop_puffle_scape_ball_animation_play",
            "textureKey": "petshop",
            "framePrefix": "pet_shop_pufflescape_ball",
            "frames": Array.from({ length: 70 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pet_shop_puffle_launch_machine_shooting_animation",
            "phaserAnimationKey": "pet_shop_puffle_launch_machine_shooting_animation_play",
            "textureKey": "petshop",
            "framePrefix": "pet_shop_puffle_launch_machine",
            "frames": Array.from({ length: 61 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pet_shop_puffle_launch_machine_shooting_open_window_animation",
            "phaserAnimationKey": "pet_shop_puffle_launch_machine_shooting_open_window_animation_play",
            "textureKey": "petshop",
            "framePrefix": "pet_shop_puffle_launch_window",
            "frames": Array.from({ length: 61 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        pet_shop_black_puffle_top_of_adopt_a_puffle0001_png.play("pet_shop_adopt_a_puffle_black_puffle_animation_play");
        pet_shop_orange_puffle_top_of_adopt_a_puffle0001_png.play("pet_shop_adopt_a_puffle_orange_puffle_animation_play");
        pet_shop_pink_puffle_top_of_adopt_a_puffle0001_png.play("pet_shop_adopt_a_puffle_pink_puffle_animation_play");
        pet_shop_adopt_a_puffle_blue_puffle0001_png.play("pet_shop_adopt_a_puffle_blue_puffle_animation_play");
        pet_shop_adopt_a_puffle_blue_cat_puffle0001_png.play("pet_shop_adopt_a_puffle_blue_cat_puffle_animation_play");
        pet_shop_adopt_a_puffle_orange_cat_puffle0001_png.play("pet_shop_adopt_a_puffle_orange_cat_puffle_animation_play");
        pet_shop_adopt_a_puffle_red_puffle0001_png.play("pet_shop_adopt_a_puffle_red_puffle_animation_play");
        pet_shop_adopt_a_puffle_yellow_puffle0001_png.play("pet_shop_adopt_a_puffle_yellow_puffle_animation_play");
        pet_shop_adopt_a_puffle_brown_puffle0001_png.play("pet_shop_adopt_a_puffle_brown_puffle_animation_play");
        pet_shop_adopt_a_puffle_green_puffle0001_png.play("pet_shop_adopt_a_puffle_green_puffle_animation_play");
        pet_shop_adopt_a_puffle_purple_puffle0001_png.play("pet_shop_adopt_a_puffle_purple_puffle_animation_play");
        pet_shop_adopt_a_puffle_white_puffle0001_png.play("pet_shop_adopt_a_puffle_white_puffle_animation_play");
        pet_shop_blue_puffle_top_right_walk_through_tunnels0001_png.play("pet_shop_top_right_blue_puffle_walking_animation_play");
        pet_shop_blue_puffle_top_middle_walking0001_png.play("pet_shop_top_middle_blue_puffle_walking_animation_play");
        pet_shop_blue_puffle_top_left0001_png.play("pet_shop_top_left_blue_puffle_walking_animation_play");
        // Creating animations ends here

        // Setting all interactives sprites starts here
        pet_shop_book0001_png.setInteractive({ useHandCursor: true });
        pet_shop_book0002_png.setInteractive({ useHandCursor: true });
        pet_shop_puffle_hotel_door0001_png.setInteractive({ useHandCursor: true });
        pet_shop_puffle_hotel_door0002_png.setInteractive({ useHandCursor: true });
        pet_shop_adopt_a_puffle_background_png.setInteractive({ useHandCursor: true });
        pet_shop_puffle_park_door0001_png.setInteractive({ useHandCursor: true });
        pet_shop_puffle_park_door0002_png.setInteractive({ useHandCursor: true });
        pet_shop_plaza_doore0001_png.setInteractive({ useHandCursor: true });
        pet_shop_plaza_doore0002_png.setInteractive({ useHandCursor: true });
        pet_shop_pufflescape_ball0001_png.setInteractive({ useHandCursor: true });
        pet_shop_puffle_launch_machine0001_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        pet_shop_book0001_png.on("pointerover", () => {
            pet_shop_book0001_png.visible = false;
            pet_shop_book0002_png.visible = true;
        });

        pet_shop_book0002_png.on("pointerout", () => {
            pet_shop_book0001_png.visible = true;
            pet_shop_book0002_png.visible = false;
        });

        pet_shop_book0002_png.on("pointerdown", () => {
            // fk knows what scene this is
            console.log("hiiiiii")
        });

        pet_shop_puffle_hotel_door0001_png.on("pointerover", () => {
            pet_shop_puffle_hotel_door0001_png.visible = false;
            pet_shop_puffle_hotel_door0002_png.visible = true;
            this.audioManager.play(PET_SHOP_PUFFLE_HOTEL_DOOR_OPEN);
        });

        pet_shop_puffle_hotel_door0002_png.on("pointerout", () => {
            pet_shop_puffle_hotel_door0001_png.visible = true;
            pet_shop_puffle_hotel_door0002_png.visible = false;
            this.audioManager.play(PET_SHOP_PUFFLE_HOTEL_DOOR_CLOSE);
        });

        pet_shop_plaza_doore0001_png.on("pointerover", () => {
            pet_shop_plaza_doore0001_png.visible = false;
            pet_shop_plaza_doore0002_png.visible = true;
            this.audioManager.play(PET_SHOP_PLAZA_DOOR_OPEN);
        });

        pet_shop_plaza_doore0002_png.on("pointerout", () => {
            pet_shop_plaza_doore0001_png.visible = true;
            pet_shop_plaza_doore0002_png.visible = false;
            this.audioManager.play(PET_SHOP_PLAZA_DOOR_CLOSE);
        });

        pet_shop_puffle_park_door0001_png.on("pointerover", () => {
            pet_shop_puffle_park_door0001_png.visible = false;
            pet_shop_puffle_park_door0002_png.visible = true;
            this.audioManager.play(PET_SHOP_PUFFLE_PARK_DOOR_OPEN);
        });

        pet_shop_puffle_park_door0002_png.on("pointerout", () => {
            pet_shop_puffle_park_door0001_png.visible = true;
            pet_shop_puffle_park_door0002_png.visible = false;
            this.audioManager.play(PET_SHOP_PUFFLE_PARK_DOOR_CLOSE);
        });

        pet_shop_pufflescape_ball0001_png.on("pointerover", () => {
            pet_shop_pufflescape_ball0001_png.play("pet_shop_puffle_scape_ball_animation_play");
        });

        pet_shop_pufflescape_ball0001_png.on("pointerout", () => {
            pet_shop_pufflescape_ball0001_png.stop();
            pet_shop_pufflescape_ball0001_png.setFrame("pet_shop_pufflescape_ball0001.png");
        });

        pet_shop_puffle_launch_machine0001_png.on("pointerover", () => {
            pet_shop_puffle_launch_machine0001_png.play("pet_shop_puffle_launch_machine_shooting_animation_play");
            pet_shop_puffle_launch_window0001_png.play("pet_shop_puffle_launch_machine_shooting_open_window_animation_play");
        });

        pet_shop_puffle_launch_machine0001_png.on("pointerout", () => {
            pet_shop_puffle_launch_machine0001_png.stop();
            pet_shop_puffle_launch_window0001_png.stop();
            pet_shop_puffle_launch_machine0001_png.setFrame("pet_shop_puffle_launch_machine0001.png");
            pet_shop_puffle_launch_window0001_png.setFrame("pet_shop_puffle_launch_window0001.png");
        });
        // All interactive events start here

        this.audioManager.play(PET_SHOP_ROOM_MUSIC);
    }
}