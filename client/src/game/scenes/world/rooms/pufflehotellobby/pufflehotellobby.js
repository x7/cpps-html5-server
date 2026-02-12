import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { PUFFLE_HOTEL_LOBBY_ELEVATOR_CLOSE, PUFFLE_HOTEL_LOBBY_ELEVATOR_OPEN, PUFFLE_HOTEL_LOBBY_PET_DOOR_CLOSE, PUFFLE_HOTEL_LOBBY_PET_DOOR_OPEN, PUFFLE_HOTEL_LOBBY_PLAZA_DOOR_CLOSE, PUFFLE_HOTEL_LOBBY_PLAZA_DOOR_OPEN, PUFFLE_HOTEL_LOBBY_RAINBOW_PUFFLE_CHECKBOARD, PUFFLE_HOTEL_LOBBY_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_PET_SHOP, SCENE_ROOM_PLAZA, SCENE_ROOM_PUFFLE_HOTEL_LOBBY } from "../../../sceneNames";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

export class PuffleHotelLobby extends RoomScene {
    constructor() {
        super(SCENE_ROOM_PUFFLE_HOTEL_LOBBY);
    }

    init(data) {
        super.init(data);

        // Globals
        this.assetPath = "assets/world/rooms/pufflehotellobby/";
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "pufflehotellobby",
            "paths": [`${this.assetPath}pufflehotellobby-pack.json`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "puffle_hotel_lobby_walking_trigger",
            "paths": [`${this.assetPath}puffle_hotel_lobby_walking_trigger.png`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_HOTEL_LOBBY_ROOM_MUSIC,
            "paths": [`${this.assetPath}${PUFFLE_HOTEL_LOBBY_ROOM_MUSIC}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_HOTEL_LOBBY_ELEVATOR_OPEN,
            "paths": [`${this.assetPath}${PUFFLE_HOTEL_LOBBY_ELEVATOR_OPEN}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_HOTEL_LOBBY_ELEVATOR_CLOSE,
            "paths": [`${this.assetPath}${PUFFLE_HOTEL_LOBBY_ELEVATOR_CLOSE}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_HOTEL_LOBBY_PET_DOOR_OPEN,
            "paths": [`${this.assetPath}${PUFFLE_HOTEL_LOBBY_PET_DOOR_OPEN}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_HOTEL_LOBBY_PET_DOOR_CLOSE,
            "paths": [`${this.assetPath}${PUFFLE_HOTEL_LOBBY_PET_DOOR_CLOSE}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_HOTEL_LOBBY_PLAZA_DOOR_OPEN,
            "paths": [`${this.assetPath}${PUFFLE_HOTEL_LOBBY_PLAZA_DOOR_OPEN}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_HOTEL_LOBBY_PLAZA_DOOR_CLOSE,
            "paths": [`${this.assetPath}${PUFFLE_HOTEL_LOBBY_PLAZA_DOOR_CLOSE}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_HOTEL_LOBBY_RAINBOW_PUFFLE_CHECKBOARD,
            "paths": [`${this.assetPath}${PUFFLE_HOTEL_LOBBY_RAINBOW_PUFFLE_CHECKBOARD}.mp3`]
        });
    }

    createContent() {
		// puffle_hotel_lobby_main_background_png
		const puffle_hotel_lobby_main_background_png = this.add.image(-75, 60, "pufflehotellobby", "puffle_hotel_lobby_main_background.png");
		puffle_hotel_lobby_main_background_png.setOrigin(0, 0);

		// puffle_hotel_lobby_plaza_door0001_png
		const puffle_hotel_lobby_plaza_door0001_png = this.add.image(806, 171, "pufflehotellobby", "puffle_hotel_lobby_plaza_door0001.png");

		// puffle_hotel_lobby_plaza_door0002_png
		const puffle_hotel_lobby_plaza_door0002_png = this.add.image(806, 175, "pufflehotellobby", "puffle_hotel_lobby_plaza_door0002.png");
		puffle_hotel_lobby_plaza_door0002_png.visible = false;

		// puffle_hotel_yay_png
		const puffle_hotel_yay_png = this.add.image(817, 455, "pufflehotellobby", "puffle_hotel_yay.png");

		// puffle_hotel_lobby_left_railing_1_png
		const puffle_hotel_lobby_left_railing_1_png = this.add.image(375, 605, "pufflehotellobby", "puffle_hotel_lobby_left_railing_1.png");

		// puffle_hotel_lobby_blue_wall_png
		const puffle_hotel_lobby_blue_wall_png = this.add.image(192, 677, "pufflehotellobby", "puffle_hotel_lobby_blue_wall.png");

		// puffle_hotel_lobby_left_railing_2_png
		const puffle_hotel_lobby_left_railing_2_png = this.add.image(425, 635, "pufflehotellobby", "puffle_hotel_lobby_left_railing_2.png");

		// puffle_hotel_lobby_left_railing_3_png
		const puffle_hotel_lobby_left_railing_3_png = this.add.image(468, 679, "pufflehotellobby", "puffle_hotel_lobby_left_railing_3.png");

		// puffle_hotel_lobby_smoothie_sign_png
		const puffle_hotel_lobby_smoothie_sign_png = this.add.image(231, 574, "pufflehotellobby", "puffle_hotel_lobby_smoothie_sign.png");

		// puffle_hotel_lobby_chair_and_seat_png_1
		const puffle_hotel_lobby_chair_and_seat_png_1 = this.add.image(322, 635, "pufflehotellobby", "puffle_hotel_lobby_chair_and_seat.png");

		// puffle_hotel_lobby_puffle_feeding_table_png
		const puffle_hotel_lobby_puffle_feeding_table_png = this.add.image(343, 703, "pufflehotellobby", "puffle_hotel_lobby_puffle_feeding_table.png");

		// puffle_hotel_lobby_bottom_blue_couch_png
		const puffle_hotel_lobby_bottom_blue_couch_png = this.add.image(814, 827, "pufflehotellobby", "puffle_hotel_lobby_bottom_blue_couch.png");

		// puffle_hotel_lobby_chair_and_seat_png
		const puffle_hotel_lobby_chair_and_seat_png = this.add.image(398, 758, "pufflehotellobby", "puffle_hotel_lobby_chair_and_seat.png");

		// puffle_hotel_lobby_reception_green_wall_png
		const puffle_hotel_lobby_reception_green_wall_png = this.add.image(577, 229, "pufflehotellobby", "puffle_hotel_lobby_reception_green_wall.png");

		// puffle_hotel_lobby_reception_side_png
		const puffle_hotel_lobby_reception_side_png = this.add.image(289, 215, "pufflehotellobby", "puffle_hotel_lobby_reception_side.png");

		// puffle_hotel_lobby_golden_elevator_door0001_png
		const puffle_hotel_lobby_golden_elevator_door0001_png = this.add.sprite(86, 397, "pufflehotellobby", "puffle_hotel_lobby_golden_elevator_door0001.png");

		// puffle_hotel_lobby_elevator_overlay_png
		const puffle_hotel_lobby_elevator_overlay_png = this.add.image(94, 339, "pufflehotellobby", "puffle_hotel_lobby_elevator_overlay.png");

		// puffle_hotel_lobby_plaza_door_left_tree_png
		const puffle_hotel_lobby_plaza_door_left_tree_png = this.add.image(691, 226, "pufflehotellobby", "puffle_hotel_lobby_plaza_door_left_tree.png");

		// puffle_hotel_lobby_big_door_stand_png
		const puffle_hotel_lobby_big_door_stand_png = this.add.image(631, 188, "pufflehotellobby", "puffle_hotel_lobby_big_door_stand.png");
		puffle_hotel_lobby_big_door_stand_png.flipX = true;

		// puffle_hotel_lobby_bottom_left_desk_png
		const puffle_hotel_lobby_bottom_left_desk_png = this.add.image(73, 641, "pufflehotellobby", "puffle_hotel_lobby_bottom_left_desk.png");

		// puffle_hotel_lobby_top_right_wall_png
		const puffle_hotel_lobby_top_right_wall_png = this.add.image(1202, 110, "pufflehotellobby", "puffle_hotel_lobby_top_right_wall.png");

		// puffle_hotel_lobby_puffle_feeding_table_png_1
		const puffle_hotel_lobby_puffle_feeding_table_png_1 = this.add.image(407, 836, "pufflehotellobby", "puffle_hotel_lobby_puffle_feeding_table.png");

		// puffle_hotel_lobby_food_basket_png
		const puffle_hotel_lobby_food_basket_png = this.add.image(96, 812, "pufflehotellobby", "puffle_hotel_lobby_food_basket.png");

		// puffle_hotel_lobby_right_railing_5_png
		const puffle_hotel_lobby_right_railing_5_png = this.add.image(1054, 770, "pufflehotellobby", "puffle_hotel_lobby_right_railing_5.png");
		puffle_hotel_lobby_right_railing_5_png.scaleX = 0.9412596167226123;

		// puffle_hotel_lobby_left_railing_5_png
		const puffle_hotel_lobby_left_railing_5_png = this.add.image(550, 771, "pufflehotellobby", "puffle_hotel_lobby_left_railing_5.png");
		puffle_hotel_lobby_left_railing_5_png.scaleX = 0.9460042900017891;

		// puffle_hotel_lobby_two_fruits_png
		const puffle_hotel_lobby_two_fruits_png = this.add.image(65, 880, "pufflehotellobby", "puffle_hotel_lobby_two_fruits.png");

		// puffle_hotel_lobby_orange_png
		const puffle_hotel_lobby_orange_png = this.add.image(75, 915, "pufflehotellobby", "puffle_hotel_lobby_orange.png");

		// puffle_hotel_lobby_bottom_part_png
		const puffle_hotel_lobby_bottom_part_png = this.add.image(775, 476, "pufflehotellobby", "puffle_hotel_lobby_bottom_part.png");

		// puffle_hotel_lobby_main_railing_png
		const puffle_hotel_lobby_main_railing_png = this.add.image(819, 567, "pufflehotellobby", "puffle_hotel_lobby_main_railing.png");
		puffle_hotel_lobby_main_railing_png.scaleX = 0.993568938151241;

		// puffle_hotel_lobby_big_rainbow_puffle_png
		const puffle_hotel_lobby_big_rainbow_puffle_png = this.add.image(806, 511, "pufflehotellobby", "puffle_hotel_lobby_big_rainbow_puffle.png");

		// puffle_hotel_lobby_water0001_png
		const puffle_hotel_lobby_water0001_png = this.add.sprite(917, 545, "pufflehotellobby", "puffle_hotel_lobby_water0002.png");

		// puffle_hotel_lobby_main_board0001_png
		const puffle_hotel_lobby_main_board0001_png = this.add.sprite(820, 557, "pufflehotellobby", "puffle_hotel_lobby_main_board0001.png");

		// puffle_hotel_lobby_plaza_door_right_tree_png
		const puffle_hotel_lobby_plaza_door_right_tree_png = this.add.image(917, 218, "pufflehotellobby", "puffle_hotel_lobby_plaza_door_right_tree.png");

		// puffle_hotel_lobby_top_right_right_wall_png
		const puffle_hotel_lobby_top_right_right_wall_png = this.add.image(1293, 239, "pufflehotellobby", "puffle_hotel_lobby_top_right_right_wall.png");

		// puffle_hotel_lobby_coat_check_side_png
		const puffle_hotel_lobby_coat_check_side_png = this.add.image(1324, 267, "pufflehotellobby", "puffle_hotel_lobby_coat_check_side.png");

		// puffle_hotel_lobby_big_door_stand_png_1
		const puffle_hotel_lobby_big_door_stand_png_1 = this.add.image(981, 187, "pufflehotellobby", "puffle_hotel_lobby_big_door_stand.png");

		// puffle_hotel_lobby_reception_white_ceiling_lights_png
		const puffle_hotel_lobby_reception_white_ceiling_lights_png = this.add.image(803, 48, "pufflehotellobby", "puffle_hotel_lobby_reception_white_ceiling_lights.png");

		// puffle_hotel_lobby_puffle_sleep_bed_png
		const puffle_hotel_lobby_puffle_sleep_bed_png = this.add.image(1407, 677, "pufflehotellobby", "puffle_hotel_lobby_puffle_sleep_bed.png");

		// puffle_hotel_lobby_puffle_sleep_bed_png_1
		const puffle_hotel_lobby_puffle_sleep_bed_png_1 = this.add.image(1265, 799, "pufflehotellobby", "puffle_hotel_lobby_puffle_sleep_bed.png");

		// puffle_hotel_lobby_bottom_right_lamp_png
		const puffle_hotel_lobby_bottom_right_lamp_png = this.add.image(1524, 830, "pufflehotellobby", "puffle_hotel_lobby_bottom_right_lamp.png");

		// puffle_hotel_lobby_pet_shop_wall_png
		const puffle_hotel_lobby_pet_shop_wall_png = this.add.image(1463, 343, "pufflehotellobby", "puffle_hotel_lobby_pet_shop_wall.png");

		// puffle_hotel_lobby_pet_shop_door0001_png
		const puffle_hotel_lobby_pet_shop_door0001_png = this.add.image(1478, 354, "pufflehotellobby", "puffle_hotel_lobby_pet_shop_door0001.png");
		puffle_hotel_lobby_pet_shop_door0001_png.scaleX = 1.176535091326748;

		// puffle_hotel_lobby_reception_chair_png
		const puffle_hotel_lobby_reception_chair_png = this.add.image(432, 292, "pufflehotellobby", "puffle_hotel_lobby_reception_chair.png");

		// puffle_hotel_lobby_pet_shop_door0002_png
		const puffle_hotel_lobby_pet_shop_door0002_png = this.add.image(1478, 354, "pufflehotellobby", "puffle_hotel_lobby_pet_shop_door0002.png");
		puffle_hotel_lobby_pet_shop_door0002_png.scaleX = 1.176535091326748;
		puffle_hotel_lobby_pet_shop_door0002_png.visible = false;

		// puffle_hotel_lobby_pet_shop_top0001_png
		const puffle_hotel_lobby_pet_shop_top0001_png = this.add.image(1469, 283, "pufflehotellobby", "puffle_hotel_lobby_pet_shop_top0001.png");

		// puffle_hotel_lobby_reception_main_desk_png
		const puffle_hotel_lobby_reception_main_desk_png = this.add.image(462, 303, "pufflehotellobby", "puffle_hotel_lobby_reception_main_desk.png");

		// puffle_hotel_lobby_reception_text_1_png
		const puffle_hotel_lobby_reception_text_1_png = this.add.image(430, 122, "pufflehotellobby", "puffle_hotel_lobby_reception_text_1.png");

		// puffle_hotel_lobby_coat_check_text_1_png
		const puffle_hotel_lobby_coat_check_text_1_png = this.add.image(1215, 102, "pufflehotellobby", "puffle_hotel_lobby_coat_check_text_1.png");

		// puffle_hotel_lobby_right_railing_4_png
		const puffle_hotel_lobby_right_railing_4_png = this.add.image(1085, 722, "pufflehotellobby", "puffle_hotel_lobby_right_railing_4.png");

		// puffle_hotel_lobby_right_railing_3_png
		const puffle_hotel_lobby_right_railing_3_png = this.add.image(1138, 675, "pufflehotellobby", "puffle_hotel_lobby_right_railing_3.png");
		puffle_hotel_lobby_right_railing_3_png.scaleX = 1.0137832374566458;

		// puffle_hotel_lobby_right_railing_1_png
		const puffle_hotel_lobby_right_railing_1_png = this.add.image(1238, 585, "pufflehotellobby", "puffle_hotel_lobby_right_railing_1.png");

		// puffle_hotel_lobby_right_railing_2_png
		const puffle_hotel_lobby_right_railing_2_png = this.add.image(1196, 632, "pufflehotellobby", "puffle_hotel_lobby_right_railing_2.png");

		// puffle_hotel_lobby_left_railing_4_png
		const puffle_hotel_lobby_left_railing_4_png = this.add.image(520, 690, "pufflehotellobby", "puffle_hotel_lobby_left_railing_4.png");

		// puffle_hotel_lobby_plaza_door0004_png
		const puffle_hotel_lobby_plaza_door0004_png = this.add.image(793, 182, "pufflehotellobby", "puffle_hotel_lobby_plaza_door0004.png");
		puffle_hotel_lobby_plaza_door0004_png.scaleX = 0.831937056344833;
		puffle_hotel_lobby_plaza_door0004_png.scaleY = 0.9421165945728577;
		puffle_hotel_lobby_plaza_door0004_png.alpha = 0.001;
		puffle_hotel_lobby_plaza_door0004_png.alphaTopLeft = 0.001;
		puffle_hotel_lobby_plaza_door0004_png.alphaTopRight = 0.001;
		puffle_hotel_lobby_plaza_door0004_png.alphaBottomLeft = 0.001;
		puffle_hotel_lobby_plaza_door0004_png.alphaBottomRight = 0.001;

		// puffle_hotel_lobby_pet_shop_door0004_png
		const puffle_hotel_lobby_pet_shop_door0004_png = this.add.image(1475, 358, "pufflehotellobby", "puffle_hotel_lobby_pet_shop_door0004.png");
		puffle_hotel_lobby_pet_shop_door0004_png.alpha = 0.001;
		puffle_hotel_lobby_pet_shop_door0004_png.alphaTopLeft = 0.001;
		puffle_hotel_lobby_pet_shop_door0004_png.alphaTopRight = 0.001;
		puffle_hotel_lobby_pet_shop_door0004_png.alphaBottomLeft = 0.001;
		puffle_hotel_lobby_pet_shop_door0004_png.alphaBottomRight = 0.001;

		// puffle_hotel_lobby_flower_pot_png
		const puffle_hotel_lobby_flower_pot_png = this.add.image(1503, 496, "pufflehotellobby", "puffle_hotel_lobby_flower_pot.png");

		// puffle_hotel_lobby_rainbow_puffle_board_trigger
		const puffle_hotel_lobby_rainbow_puffle_board_trigger = this.add.rectangle(831, 641, 128, 128);
		puffle_hotel_lobby_rainbow_puffle_board_trigger.scaleX = 2.440359818120461;
		puffle_hotel_lobby_rainbow_puffle_board_trigger.scaleY = 1.4777099719068905;
		puffle_hotel_lobby_rainbow_puffle_board_trigger.alpha = 0.001;
		puffle_hotel_lobby_rainbow_puffle_board_trigger.isFilled = true;

		// puffle_hotel_lobby_elevator_trigger
		const puffle_hotel_lobby_elevator_trigger = this.add.image(101, 399, "pufflehotellobby", "puffle_hotel_lobby_elevator_trigger0004.png");
		puffle_hotel_lobby_elevator_trigger.scaleX = 0.6165470998082216;
		puffle_hotel_lobby_elevator_trigger.scaleY = 0.8936289817942629;
		puffle_hotel_lobby_elevator_trigger.alpha = 0.001;
		puffle_hotel_lobby_elevator_trigger.alphaTopLeft = 0.001;
		puffle_hotel_lobby_elevator_trigger.alphaTopRight = 0.001;
		puffle_hotel_lobby_elevator_trigger.alphaBottomLeft = 0.001;
		puffle_hotel_lobby_elevator_trigger.alphaBottomRight = 0.001;

        // puffle_hotel_lobby_walking_trigger
		const puffle_hotel_lobby_walking_trigger = this.physics.add.sprite(801, 477, "puffle_hotel_lobby_walking_trigger");
		puffle_hotel_lobby_walking_trigger.alpha = 0.001;
		puffle_hotel_lobby_walking_trigger.alphaTopLeft = 0.001;
		puffle_hotel_lobby_walking_trigger.alphaTopRight = 0.001;
		puffle_hotel_lobby_walking_trigger.alphaBottomLeft = 0.001;
		puffle_hotel_lobby_walking_trigger.alphaBottomRight = 0.001;
		puffle_hotel_lobby_walking_trigger.body.setSize(1710, 960, false);
        this.collisionMap = this.createCollisionMap(this, 801, 477, "puffle_hotel_lobby_walking_trigger");

		// puffle_hotel_lobby_plaza_trigger_png
		const puffle_hotel_lobby_plaza_trigger_png = this.physics.add.sprite(806, 273, "pufflehotellobby", "puffle_hotel_lobby_plaza_trigger.png");
		puffle_hotel_lobby_plaza_trigger_png.alpha = 0.001;
		puffle_hotel_lobby_plaza_trigger_png.alphaTopLeft = 0.001;
		puffle_hotel_lobby_plaza_trigger_png.alphaTopRight = 0.001;
		puffle_hotel_lobby_plaza_trigger_png.alphaBottomLeft = 0.001;
		puffle_hotel_lobby_plaza_trigger_png.alphaBottomRight = 0.001;
		puffle_hotel_lobby_plaza_trigger_png.body.setSize(200, 29, false);

		// puffle_hotel_lobby_pet_shop_trigger
		const puffle_hotel_lobby_pet_shop_trigger = this.physics.add.sprite(1501, 422, "pufflehotellobby", "puffle_hotel_lobby_pet_shop_trigger.png");
		puffle_hotel_lobby_pet_shop_trigger.alpha = 0.001;
		puffle_hotel_lobby_pet_shop_trigger.alphaTopLeft = 0.001;
		puffle_hotel_lobby_pet_shop_trigger.alphaTopRight = 0.001;
		puffle_hotel_lobby_pet_shop_trigger.alphaBottomLeft = 0.001;
		puffle_hotel_lobby_pet_shop_trigger.alphaBottomRight = 0.001;
		puffle_hotel_lobby_pet_shop_trigger.body.setSize(162, 73, false);

        // Setting triggers starts here
        this.triggers.push([puffle_hotel_lobby_walking_trigger, () => {
            onWalkingTrigger(this);
        }]);

        this.triggers.push([puffle_hotel_lobby_pet_shop_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_PET_SHOP);
        }]);

        this.triggers.push([puffle_hotel_lobby_plaza_trigger_png, () => {
            onJoinRoomTrigger(SCENE_ROOM_PLAZA);
        }]);
        // Setting triggers ends here

        // Creating animations starts here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "puffle_hotel_lobby_rainbow_puffle_water_animation",
            "phaserAnimationKey": "puffle_hotel_lobby_rainbow_puffle_water_animation_play",
            "textureKey": "pufflehotellobby",
            "framePrefix": "puffle_hotel_lobby_water",
            "frames": Array.from({ length: 11 }, (_, i) => String(i + 2).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "puffle_hotel_lobby_rainbow_puffle_board_animation",
            "phaserAnimationKey": "puffle_hotel_lobby_rainbow_puffle_board_animation_play",
            "textureKey": "pufflehotellobby",
            "framePrefix": "puffle_hotel_lobby_main_board",
            "frames": Array.from({ length: 30 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "puffle_hotel_lobby_golden_elevator_open_animation",
            "phaserAnimationKey": "puffle_hotel_lobby_golden_elevator_open_animation_play",
            "textureKey": "pufflehotellobby",
            "framePrefix": "puffle_hotel_lobby_golden_elevator_door",
            "frames": Array.from({ length: 28 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "puffle_hotel_lobby_golden_elevator_close_animation",
            "phaserAnimationKey": "puffle_hotel_lobby_golden_elevator_close_animation_play",
            "textureKey": "pufflehotellobby",
            "framePrefix": "puffle_hotel_lobby_golden_elevator_door",
            "frames": Array.from({ length: 14 }, (_, i) => String(i + 28).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        puffle_hotel_lobby_water0001_png.play("puffle_hotel_lobby_rainbow_puffle_water_animation_play");
        // Creating animations ends here

        // Setting all interactives sprites starts here
        puffle_hotel_lobby_puffle_sleep_bed_png_1.setInteractive({ useHandCursor: true });
        puffle_hotel_lobby_puffle_sleep_bed_png.setInteractive({ useHandCursor: true });
        puffle_hotel_lobby_puffle_feeding_table_png.setInteractive({ useHandCursor: true });
        puffle_hotel_lobby_puffle_feeding_table_png_1.setInteractive({ useHandCursor: true });
        puffle_hotel_lobby_plaza_door0004_png.setInteractive({ useHandCursor: true });
        puffle_hotel_lobby_pet_shop_door0004_png.setInteractive({ useHandCursor: true });
        puffle_hotel_lobby_rainbow_puffle_board_trigger.setInteractive({ useHandCursor: true });
        puffle_hotel_lobby_elevator_trigger.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events starts here
        puffle_hotel_lobby_plaza_door0004_png.on("pointerover", () => {
            puffle_hotel_lobby_plaza_door0001_png.visible = false;
            puffle_hotel_lobby_plaza_door0002_png.visible = true;
            this.audioManager.play(PUFFLE_HOTEL_LOBBY_PLAZA_DOOR_OPEN);
        });

        puffle_hotel_lobby_plaza_door0004_png.on("pointerout", () => {
            puffle_hotel_lobby_plaza_door0001_png.visible = true;
            puffle_hotel_lobby_plaza_door0002_png.visible = false;
            this.audioManager.play(PUFFLE_HOTEL_LOBBY_PLAZA_DOOR_CLOSE);
        });

        puffle_hotel_lobby_pet_shop_door0004_png.on("pointerover", () => {
            puffle_hotel_lobby_pet_shop_door0001_png.visible = false;
            puffle_hotel_lobby_pet_shop_door0002_png.visible = true;
            this.audioManager.play(PUFFLE_HOTEL_LOBBY_PET_DOOR_OPEN);
        });

        puffle_hotel_lobby_pet_shop_door0004_png.on("pointerout", () => {
            puffle_hotel_lobby_pet_shop_door0001_png.visible = true;
            puffle_hotel_lobby_pet_shop_door0002_png.visible = false;
            this.audioManager.play(PUFFLE_HOTEL_LOBBY_PET_DOOR_CLOSE);
        });
        
        puffle_hotel_lobby_rainbow_puffle_board_trigger.on("pointerover", () => {
            puffle_hotel_lobby_main_board0001_png.play("puffle_hotel_lobby_rainbow_puffle_board_animation_play");
            this.audioManager.play(PUFFLE_HOTEL_LOBBY_RAINBOW_PUFFLE_CHECKBOARD);
        });

        puffle_hotel_lobby_rainbow_puffle_board_trigger.on("pointerout", () => {
            puffle_hotel_lobby_main_board0001_png.stop();
            puffle_hotel_lobby_main_board0001_png.setFrame("puffle_hotel_lobby_main_board0001.png");
        });

        puffle_hotel_lobby_elevator_trigger.on("pointerover", () => {
            puffle_hotel_lobby_golden_elevator_door0001_png.play("puffle_hotel_lobby_golden_elevator_open_animation_play");
            this.audioManager.play(PUFFLE_HOTEL_LOBBY_ELEVATOR_OPEN);
        });

        puffle_hotel_lobby_elevator_trigger.on("pointerout", () => {
            puffle_hotel_lobby_golden_elevator_door0001_png.stop();
            puffle_hotel_lobby_golden_elevator_door0001_png.play("puffle_hotel_lobby_golden_elevator_close_animation_play");
            this.audioManager.play(PUFFLE_HOTEL_LOBBY_ELEVATOR_CLOSE);
        });
        // All interactive events ends here

        this.audioManager.play(PUFFLE_HOTEL_LOBBY_ROOM_MUSIC);
        super.createContent(this);
    }

    update() {
        super.update();
    }
}