import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { BERRY_MALL_CHEST_CLOSE, BERRY_MALL_CHEST_OPEN, BERRY_MALL_PLAZA_DOOR_CLOSE, BERRY_MALL_PLAZA_DOOR_OPEN, BERRY_MALL_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_BERRY_MALL, SCENE_ROOM_PLAZA } from "../../../sceneNames";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

export class BerryMallScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_BERRY_MALL);
    }

    init(data) {
        super.init(data);

        // Globals
        this.assetPath = "assets/world/rooms/berrymall/";
        this.textureKey = "berrymall";
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": this.textureKey,
            "paths": [`${this.assetPath}${this.textureKey}-pack.json`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "berry_mall_walking_trigger",
            "paths": [`${this.assetPath}berry_mall_walking_trigger.png`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": BERRY_MALL_ROOM_MUSIC,
            "paths": [`${this.assetPath}${BERRY_MALL_ROOM_MUSIC}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": BERRY_MALL_PLAZA_DOOR_OPEN,
            "paths": [`${this.assetPath}${BERRY_MALL_PLAZA_DOOR_OPEN}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": BERRY_MALL_PLAZA_DOOR_CLOSE,
            "paths": [`${this.assetPath}${BERRY_MALL_PLAZA_DOOR_CLOSE}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": BERRY_MALL_CHEST_OPEN,
            "paths": [`${this.assetPath}${BERRY_MALL_CHEST_OPEN}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": BERRY_MALL_CHEST_CLOSE,
            "paths": [`${this.assetPath}${BERRY_MALL_CHEST_CLOSE}.mp3`]
        });
    }

    createContent() {
		// berry_mall_background_png
		const berry_mall_background_png = this.add.image(763, 474, "berrymall", "berry_mall_background.png");

		// berry_mall_bottom_right_shop_coffee_table_png
		const berry_mall_bottom_right_shop_coffee_table_png = this.add.image(1455, 568, "berrymall", "berry_mall_bottom_right_shop_coffee_table.png");
		berry_mall_bottom_right_shop_coffee_table_png.scaleX = 1.2865112622265786;

		// berry_mall_looking_left_chair_png
		const berry_mall_looking_left_chair_png = this.add.image(927, 764, "berrymall", "berry_mall_looking_left_chair.png");

		// berry_mall_table_1_png
		const berry_mall_table_1_png = this.add.image(1005, 783, "berrymall", "berry_mall_table_1.png");

		// berry_mall_top_left_looking_chair_bottom_png
		const berry_mall_top_left_looking_chair_bottom_png = this.add.image(1061, 855, "berrymall", "berry_mall_top_left_looking_chair_bottom.png");

		// berry_mall_top_left_looking_chair_top_png
		const berry_mall_top_left_looking_chair_top_png = this.add.image(1073, 858, "berrymall", "berry_mall_top_left_looking_chair_top.png");

		// berry_mall_looking_left_chair_png_1
		const berry_mall_looking_left_chair_png_1 = this.add.image(1168, 772, "berrymall", "berry_mall_looking_left_chair.png");

		// berry_mall_table_2_png
		const berry_mall_table_2_png = this.add.image(1258, 802, "berrymall", "berry_mall_table_2.png");

		// berry_mall_top_left_looking_chair_bottom_png_1
		const berry_mall_top_left_looking_chair_bottom_png_1 = this.add.image(1217, 870, "berrymall", "berry_mall_top_left_looking_chair_bottom.png");
		berry_mall_top_left_looking_chair_bottom_png_1.flipX = true;

		// berry_mall_top_left_looking_chair_top_png_1
		const berry_mall_top_left_looking_chair_top_png_1 = this.add.image(1205, 870, "berrymall", "berry_mall_top_left_looking_chair_top.png");
		berry_mall_top_left_looking_chair_top_png_1.flipX = true;

		// berry_mall_top_left_looking_chair_bottom_png_2
		const berry_mall_top_left_looking_chair_bottom_png_2 = this.add.image(1331, 856, "berrymall", "berry_mall_top_left_looking_chair_bottom.png");

		// berry_mall_top_left_looking_chair_top_png_2
		const berry_mall_top_left_looking_chair_top_png_2 = this.add.image(1347, 853, "berrymall", "berry_mall_top_left_looking_chair_top.png");

		// berry_mall_top_left_looking_chair_top_png_3
		const berry_mall_top_left_looking_chair_top_png_3 = this.add.image(1435, 646, "berrymall", "berry_mall_top_left_looking_chair_top.png");

		// berry_mall_top_left_looking_chair_bottom_png_3
		const berry_mall_top_left_looking_chair_bottom_png_3 = this.add.image(1449, 681, "berrymall", "berry_mall_top_left_looking_chair_bottom.png");

		// berry_mall_far_right_chair_bottom_png
		const berry_mall_far_right_chair_bottom_png = this.add.image(1418, 764, "berrymall", "berry_mall_far_right_chair_bottom.png");

		// berry_mall_table_3_png
		const berry_mall_table_3_png = this.add.image(1501, 725, "berrymall", "berry_mall_table_3.png");

		// berry_mall_far_right_chair_top_png
		const berry_mall_far_right_chair_top_png = this.add.image(1394, 757, "berrymall", "berry_mall_far_right_chair_top.png");

		// berry_mall_bottom_right_shop_smalL_desk_png
		const berry_mall_bottom_right_shop_smalL_desk_png = this.add.image(1231, 624, "berrymall", "berry_mall_bottom_right_shop_smalL_desk.png");

		// berry_mall_bottom_right_shop_bigger_food_desk_png
		const berry_mall_bottom_right_shop_bigger_food_desk_png = this.add.image(1338, 614, "berrymall", "berry_mall_bottom_right_shop_bigger_food_desk.png");

		// berry_mall_plaza_door_closed_png
		const berry_mall_plaza_door_closed_png = this.add.image(236, 575, "berrymall", "berry_mall_plaza_door_closed.png");

		// berry_mall_plaza_door_opened_png
		const berry_mall_plaza_door_opened_png = this.add.image(227, 581, "berrymall", "berry_mall_plaza_door_opened.png");
		berry_mall_plaza_door_opened_png.scaleY = 1.0649184306793793;
		berry_mall_plaza_door_opened_png.visible = false;

		// berry_mall_plaza_door_right_stand_png
		const berry_mall_plaza_door_right_stand_png = this.add.image(397, 541, "berrymall", "berry_mall_plaza_door_right_stand.png");

		// berry_mall_green_penguin_stand_png
		const berry_mall_green_penguin_stand_png = this.add.image(22, 276, "berrymall", "berry_mall_green_penguin_stand.png");

		// berry_mall_top_left_stand_png
		const berry_mall_top_left_stand_png = this.add.image(-37, 221, "berrymall", "berry_mall_top_left_stand.png");

		// berry_mall_top_floor_clothes_stand_png
		const berry_mall_top_floor_clothes_stand_png = this.add.image(70, 410, "berrymall", "berry_mall_top_floor_clothes_stand.png");

		// berry_mall_plaza_door_left_stand_png
		const berry_mall_plaza_door_left_stand_png = this.add.image(128, 646, "berrymall", "berry_mall_plaza_door_left_stand.png");

		// berry_mall_fish_stand_png
		const berry_mall_fish_stand_png = this.add.image(775, 238, "berrymall", "berry_mall_fish_stand.png");

		// berry_mall_top_wall_left_bottom_png
		const berry_mall_top_wall_left_bottom_png = this.add.image(172, 520, "berrymall", "berry_mall_top_wall_left_bottom.png");

		// berry_mall_top_wall_left_top_png
		const berry_mall_top_wall_left_top_png = this.add.image(483, 367, "berrymall", "berry_mall_top_wall_left_top.png");

		// berry_mall_left_escalator_left_side_png
		const berry_mall_left_escalator_left_side_png = this.add.image(543, 509, "berrymall", "berry_mall_left_escalator_left_side.png");
		berry_mall_left_escalator_left_side_png.flipX = true;

		// berry_mall_bottom_right_pole_png
		const berry_mall_bottom_right_pole_png = this.add.image(1143, 531, "berrymall", "berry_mall_bottom_right_pole.png");

		// berry_mall_left_escalator_first_step0001_png
		const berry_mall_left_escalator_first_step0001_png = this.add.sprite(600, 386, "berrymall", "berry_mall_left_escalator_first_step0001.png");
		berry_mall_left_escalator_first_step0001_png.flipX = true;

		// berry_mall_top_wall_right_bottom_png
		const berry_mall_top_wall_right_bottom_png = this.add.image(1370, 518, "berrymall", "berry_mall_top_wall_right_bottom.png");

		// berry_mall_top_wall_right_top_png
		const berry_mall_top_wall_right_top_png = this.add.image(1059, 365, "berrymall", "berry_mall_top_wall_right_top.png");

		// berry_mall_right_escalator_right_side_png
		const berry_mall_right_escalator_right_side_png = this.add.image(995, 507, "berrymall", "berry_mall_right_escalator_right_side.png");

		// berry_mall_right_escalator_first_step0001_png
		const berry_mall_right_escalator_first_step0001_png = this.add.sprite(936, 387, "berrymall", "berry_mall_right_escalator_first_step0001.png");

		// berry_mall_left_escalator_second_step0001_png
		const berry_mall_left_escalator_second_step0001_png = this.add.sprite(601, 426, "berrymall", "berry_mall_left_escalator_second_step0001.png");
		berry_mall_left_escalator_second_step0001_png.flipX = true;

		// berry_mall_left_escalator_third_step0001_png
		const berry_mall_left_escalator_third_step0001_png = this.add.sprite(586, 494, "berrymall", "berry_mall_left_escalator_third_step0001.png");
		berry_mall_left_escalator_third_step0001_png.flipX = true;

		// berry_mall_left_escalator_fourth_step0001_png
		const berry_mall_left_escalator_fourth_step0001_png = this.add.sprite(571, 563, "berrymall", "berry_mall_left_escalator_fourth_step0001.png");
		berry_mall_left_escalator_fourth_step0001_png.flipX = true;

		// berry_mall_left_escalator_fifth_step0001_png_1
		const berry_mall_left_escalator_fifth_step0001_png_1 = this.add.sprite(557, 625, "berrymall", "berry_mall_left_escalator_fifth_step0001.png");
		berry_mall_left_escalator_fifth_step0001_png_1.flipX = true;

		// berry_mall_left_escalator_right_side_png
		const berry_mall_left_escalator_right_side_png = this.add.image(642, 507, "berrymall", "berry_mall_left_escalator_right_side.png");
		berry_mall_left_escalator_right_side_png.flipX = true;

		// berry_mall_right_escalator_second_floor0001_png
		const berry_mall_right_escalator_second_floor0001_png = this.add.sprite(939, 427, "berrymall", "berry_mall_right_escalator_second_floor0001.png");

		// berry_mall_right_escalator_third_floor0001_png
		const berry_mall_right_escalator_third_floor0001_png = this.add.sprite(953, 497, "berrymall", "berry_mall_right_escalator_third_floor0001.png");

		// berry_mall_right_escalator_fourth_floor0001_png
		const berry_mall_right_escalator_fourth_floor0001_png = this.add.sprite(984, 626, "berrymall", "berry_mall_right_escalator_fourth_floor0001.png");

		// berry_mall_right_escalator_first_floor0001_png
		const berry_mall_right_escalator_first_floor0001_png = this.add.sprite(968, 564, "berrymall", "berry_mall_right_escalator_first_floor0001.png");

		// berry_mall_right_escalator_left_side_png
		const berry_mall_right_escalator_left_side_png = this.add.image(903, 507, "berrymall", "berry_mall_right_escalator_left_side.png");

		// berry_mall_actual_water_fountain_png
		const berry_mall_actual_water_fountain_png = this.add.image(773, 561, "berrymall", "berry_mall_actual_water_fountain.png");
		berry_mall_actual_water_fountain_png.scaleX = 0.9682407632033543;

		// berry_mall_water_fountain0001_png
		const berry_mall_water_fountain0001_png = this.add.sprite(765, 552, "berrymall", "berry_mall_water_fountain0001.png");

		// berry_mall_top_left_pole_png
		const berry_mall_top_left_pole_png = this.add.image(467, 187, "berrymall", "berry_mall_top_left_pole.png");

		// berry_mall_red_cash_register_pole_png
		const berry_mall_red_cash_register_pole_png = this.add.image(311, 181, "berrymall", "berry_mall_red_cash_register_pole.png");

		// berry_mall_red_cash_register_png
		const berry_mall_red_cash_register_png = this.add.image(257, 293, "berrymall", "berry_mall_red_cash_register.png");

		// berry_mall_purple_clothes_sign_png
		const berry_mall_purple_clothes_sign_png = this.add.image(281, 87, "berrymall", "berry_mall_purple_clothes_sign.png");

		// berry_mall_top_right_pole_png
		const berry_mall_top_right_pole_png = this.add.image(1078, 187, "berrymall", "berry_mall_top_right_pole.png");

		// berry_mall_top_icons_png
		const berry_mall_top_icons_png = this.add.image(771, 257, "berrymall", "berry_mall_top_icons.png");

		// berry_mall_bottom_floor_circle_png
		const berry_mall_bottom_floor_circle_png = this.add.image(773, 364, "berrymall", "berry_mall_bottom_floor_circle.png");

		// berry_mall_anvils_and_more_text0001_png
		const berry_mall_anvils_and_more_text0001_png = this.add.image(531, 112, "berrymall", "berry_mall_anvils_and_more_text0001.png");

		// berry_mall_fragile_things_text0001_png
		const berry_mall_fragile_things_text0001_png = this.add.image(1039, 111, "berrymall", "berry_mall_fragile_things_text0001.png");

		// berry_mall_pole_next_to_costumes_trunk_png
		const berry_mall_pole_next_to_costumes_trunk_png = this.add.image(1229, 179, "berrymall", "berry_mall_pole_next_to_costumes_trunk.png");

		// berry_mall_costumes_trunk0001_png
		const berry_mall_costumes_trunk0001_png = this.add.image(1331, 302, "berrymall", "berry_mall_costumes_trunk0001.png");

		// berry_mall_two_puffle_icons_png
		const berry_mall_two_puffle_icons_png = this.add.image(1263, 77, "berrymall", "berry_mall_two_puffle_icons.png");

		// berry_mall_costumes_trunk0002_png
		const berry_mall_costumes_trunk0002_png = this.add.image(1331, 302, "berrymall", "berry_mall_costumes_trunk0002.png");
		berry_mall_costumes_trunk0002_png.visible = false;

		// berry_mall_top_right_back_pole_png
		const berry_mall_top_right_back_pole_png = this.add.image(1548, 204, "berrymall", "berry_mall_top_right_back_pole.png");

		// berry_mall_penguin_w_clothes_png
		const berry_mall_penguin_w_clothes_png = this.add.image(1464, 334, "berrymall", "berry_mall_penguin_w_clothes.png");

		// berry_mall_bottom_left_clothes_rack_png
		const berry_mall_bottom_left_clothes_rack_png = this.add.image(59, 907, "berrymall", "berry_mall_bottom_left_clothes_rack.png");
		berry_mall_bottom_left_clothes_rack_png.scaleX = 0.6582088023360082;
		berry_mall_bottom_left_clothes_rack_png.scaleY = 0.7008025279290343;

		// berry_mall_bottom_left_table_png
		const berry_mall_bottom_left_table_png = this.add.image(20, 700, "berrymall", "berry_mall_bottom_left_table.png");

		// berry_mall_bottom_left_table_content_png
		const berry_mall_bottom_left_table_content_png = this.add.image(29, 682, "berrymall", "berry_mall_bottom_left_table_content.png");

		// berry_mall_costume_trunks_hover_trigger
		const berry_mall_costume_trunks_hover_trigger = this.add.rectangle(1326, 310, 128, 128);
		berry_mall_costume_trunks_hover_trigger.scaleX = 0.8946400782617894;
		berry_mall_costume_trunks_hover_trigger.scaleY = 0.8471475189007722;
		berry_mall_costume_trunks_hover_trigger.alpha = 0.001;
		berry_mall_costume_trunks_hover_trigger.isFilled = true;

		// berry_mall_plaza_door_hover_trigger_png
		const berry_mall_plaza_door_hover_trigger_png = this.add.image(231, 574, "berrymall", "berry_mall_plaza_trigger.png");
		berry_mall_plaza_door_hover_trigger_png.scaleX = 0.9529666019787154;
		berry_mall_plaza_door_hover_trigger_png.scaleY = 0.7876131487730552;
		berry_mall_plaza_door_hover_trigger_png.alpha = 0.001;
		berry_mall_plaza_door_hover_trigger_png.alphaTopLeft = 0.001;
		berry_mall_plaza_door_hover_trigger_png.alphaTopRight = 0.001;
		berry_mall_plaza_door_hover_trigger_png.alphaBottomLeft = 0.001;
		berry_mall_plaza_door_hover_trigger_png.alphaBottomRight = 0.001;

        // berry_mall_walking_trigger_png
		const berry_mall_walking_trigger_png = this.physics.add.sprite(761, 481, "berry_mall_walking_trigger");
		berry_mall_walking_trigger_png.alpha = 0.001;
		berry_mall_walking_trigger_png.alphaTopLeft = 0.001;
		berry_mall_walking_trigger_png.alphaTopRight = 0.001;
		berry_mall_walking_trigger_png.alphaBottomLeft = 0.001;
		berry_mall_walking_trigger_png.alphaBottomRight = 0.001;
		berry_mall_walking_trigger_png.body.setSize(1520, 960, false);
        this.collisionMap = this.createCollisionMap(this, 761, 481, "berry_mall_walking_trigger");

		// berry_mall_plaza_trigger_png
		const berry_mall_plaza_trigger_png = this.physics.add.sprite(226, 602, "berrymall", "berry_mall_plaza_trigger.png");
		berry_mall_plaza_trigger_png.scaleX = 0.6783849239360802;
		berry_mall_plaza_trigger_png.scaleY = 0.5574969267340029;
		berry_mall_plaza_trigger_png.alpha = 0.001;
		berry_mall_plaza_trigger_png.alphaTopLeft = 0.001;
		berry_mall_plaza_trigger_png.alphaTopRight = 0.001;
		berry_mall_plaza_trigger_png.alphaBottomLeft = 0.001;
		berry_mall_plaza_trigger_png.alphaBottomRight = 0.001;
		berry_mall_plaza_trigger_png.body.setSize(200, 300, false);

        // Setting triggers starts here
        this.triggers.push([berry_mall_walking_trigger_png, () => {
            onWalkingTrigger(this);
        }]);

        this.triggers.push([berry_mall_plaza_trigger_png, () => {
            onJoinRoomTrigger(SCENE_ROOM_PLAZA);
        }]);
        // Setting triggers ends here

        // Creating animations starts here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "berry_mall_left_escalator_step_one_animation",
            "phaserAnimationKey": "berry_mall_left_escalator_step_one_animation_play",
            "textureKey": this.textureKey,
            "framePrefix": "berry_mall_left_escalator_first_step",
            "frames": Array.from({ length: 30 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "berry_mall_left_escalator_step_two_animation",
            "phaserAnimationKey": "berry_mall_left_escalator_step_two_animation_play",
            "textureKey": this.textureKey,
            "framePrefix": "berry_mall_left_escalator_second_step",
            "frames": Array.from({ length: 30 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "berry_mall_left_escalator_step_third_animation",
            "phaserAnimationKey": "berry_mall_left_escalator_step_third_animation_play",
            "textureKey": this.textureKey,
            "framePrefix": "berry_mall_left_escalator_third_step",
            "frames": Array.from({ length: 30 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "berry_mall_left_escalator_step_fourth_animation",
            "phaserAnimationKey": "berry_mall_left_escalator_step_fourth_animation_play",
            "textureKey": this.textureKey,
            "framePrefix": "berry_mall_left_escalator_fourth_step",
            "frames": Array.from({ length: 30 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "berry_mall_left_escalator_step_fifth_animation",
            "phaserAnimationKey": "berry_mall_left_escalator_step_fifth_animation_play",
            "textureKey": this.textureKey,
            "framePrefix": "berry_mall_left_escalator_fifth_step",
            "frames": Array.from({ length: 30 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "berry_mall_right_escalator_step_one_animation",
            "phaserAnimationKey": "berry_mall_right_escalator_step_one_animation_play",
            "textureKey": this.textureKey,
            "framePrefix": "berry_mall_right_escalator_first_step",
            "frames": Array.from({ length: 30 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "berry_mall_right_escalator_step_two_animation",
            "phaserAnimationKey": "berry_mall_right_escalator_step_two_animation_play",
            "textureKey": this.textureKey,
            "framePrefix": "berry_mall_right_escalator_second_floor",
            "frames": Array.from({ length: 30 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "berry_mall_right_escalator_step_third_animation",
            "phaserAnimationKey": "berry_mall_right_escalator_step_third_animation_play",
            "textureKey": this.textureKey,
            "framePrefix": "berry_mall_right_escalator_third_floor",
            "frames": Array.from({ length: 30 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "berry_mall_right_escalator_step_fourth_animation",
            "phaserAnimationKey": "berry_mall_right_escalator_step_fourth_animation_play",
            "textureKey": this.textureKey,
            "framePrefix": "berry_mall_right_escalator_fourth_floor",
            "frames": Array.from({ length: 30 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "berry_mall_right_escalator_step_fifth_animation",
            "phaserAnimationKey": "berry_mall_right_escalator_step_fifth_animation_play",
            "textureKey": this.textureKey,
            "framePrefix": "berry_mall_right_escalator_first_floor",
            "frames": Array.from({ length: 30 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        berry_mall_left_escalator_first_step0001_png.play("berry_mall_left_escalator_step_one_animation_play");
        berry_mall_left_escalator_second_step0001_png.play("berry_mall_left_escalator_step_two_animation_play");
        berry_mall_left_escalator_third_step0001_png.play("berry_mall_left_escalator_step_third_animation_play");
        berry_mall_left_escalator_fourth_step0001_png.play("berry_mall_left_escalator_step_fourth_animation_play");
        berry_mall_left_escalator_fifth_step0001_png_1.play("berry_mall_left_escalator_step_fifth_animation_play");
        berry_mall_right_escalator_first_step0001_png.play("berry_mall_right_escalator_step_one_animation_play");
        berry_mall_right_escalator_second_floor0001_png.play("berry_mall_right_escalator_step_two_animation_play");
        berry_mall_right_escalator_third_floor0001_png.play("berry_mall_right_escalator_step_third_animation_play");
        berry_mall_right_escalator_fourth_floor0001_png.play("berry_mall_right_escalator_step_fourth_animation_play");
        berry_mall_right_escalator_first_floor0001_png.play("berry_mall_right_escalator_step_fifth_animation_play");
        // Creating animations ends here

        // Setting all interactives sprites starts here
        berry_mall_costume_trunks_hover_trigger.setInteractive({ useHandCursor: true });
        berry_mall_plaza_door_hover_trigger_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events starts here
        berry_mall_costume_trunks_hover_trigger.on("pointerover", () => {
            berry_mall_costumes_trunk0001_png.visible = false;
            berry_mall_costumes_trunk0002_png.visible = true;
            this.audioManager.play(BERRY_MALL_CHEST_OPEN);
        });

        berry_mall_costume_trunks_hover_trigger.on("pointerout", () => {
            berry_mall_costumes_trunk0001_png.visible = true;
            berry_mall_costumes_trunk0002_png.visible = false;
            this.audioManager.play(BERRY_MALL_CHEST_CLOSE);
        });

        berry_mall_plaza_door_hover_trigger_png.on("pointerover", () => {
            berry_mall_plaza_door_closed_png.visible = false;
            berry_mall_plaza_door_opened_png.visible = true;
            this.audioManager.play(BERRY_MALL_PLAZA_DOOR_OPEN);
        });

        berry_mall_plaza_door_hover_trigger_png.on("pointerout", () => {
            berry_mall_plaza_door_closed_png.visible = true;
            berry_mall_plaza_door_opened_png.visible = false;
            this.audioManager.play(BERRY_MALL_PLAZA_DOOR_CLOSE);
        });
        // All interactive events ends here

        this.audioManager.play(BERRY_MALL_ROOM_MUSIC);
        super.createContent(this);
    }

    update() {
        super.update();
    }
}