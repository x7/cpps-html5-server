import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { SCHOOL_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_SCHOOL } from "../../../sceneNames";
import { RoomScene } from "../RoomScene";

// TODO: Add hover doors

export class SchoolScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_SCHOOL);
    }

    init(data) {
        super.init(data);

        // Globals
        this.assetPath = "assets/world/rooms/school/";
        this.textureKey = "school";
    }

    preloadContent() {
        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.PACK,
            name: this.textureKey,
            paths: [`${this.assetPath}/${this.textureKey}-pack.json`]
        });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: SCHOOL_ROOM_MUSIC,
            paths: [`${this.assetPath}/school_music.mp3`]
        });
    }

    createContent() {
        // school_kitchen_floor0001_png
		const school_kitchen_floor0001_png = this.add.image(1149, 474, "school", "school_kitchen_floor0001.png");

		// school_background_png
		const school_background_png = this.add.image(759, 471, "school", "school_background.png");

		// school_kitchen_lights_png
		const school_kitchen_lights_png = this.add.image(1129, 281, "school", "school_kitchen_lights.png");

		// school_stairs_png
		const school_stairs_png = this.add.image(905, 305, "school", "school_stairs.png");

		// school_learning_top_left_table_png
		const school_learning_top_left_table_png = this.add.image(383, 371, "school", "school_learning_top_left_table.png");

		// school_table_png
		const school_table_png = this.add.image(1247, 275, "school", "school_table.png");

		// school_food_table_png
		const school_food_table_png = this.add.image(1328, 329, "school", "school_food_table.png");

		// school_chair_bottom_png
		const school_chair_bottom_png = this.add.image(431, 450, "school", "school_chair_bottom.png");

		// school_chair_top_2_png_4
		const school_chair_top_2_png_4 = this.add.image(403, 413, "school", "school_chair_top.png");
		school_chair_top_2_png_4.scaleY = 0.761178041547726;

		// school_chair_bottom_png_1
		const school_chair_bottom_png_1 = this.add.image(385, 566, "school", "school_chair_bottom.png");

		// school_chair_bottom_2_png_4
		const school_chair_bottom_2_png_4 = this.add.image(317, 434, "school", "school_chair_bottom_2.png");

		// school_chair_top_2_png_3
		const school_chair_top_2_png_3 = this.add.image(306, 419, "school", "school_chair_top.png");

		// school_learning_bottom_left_table_png
		const school_learning_bottom_left_table_png = this.add.image(333, 498, "school", "school_learning_bottom_left_table.png");

		// school_chair_top_2_png_5
		const school_chair_top_2_png_5 = this.add.image(365, 536, "school", "school_chair_top.png");

		// school_chair_bottom_2_png
		const school_chair_bottom_2_png = this.add.image(248, 565, "school", "school_chair_bottom.png");

		// school_go_team_pictures0001_png
		const school_go_team_pictures0001_png = this.add.image(1158, 188, "school", "school_go_team_pictures0001.png");

		// school_go_team_banner0001_png
		const school_go_team_banner0001_png = this.add.image(1159, 115, "school", "school_go_team_banner0001.png");

		// school_go_team_text0001_png
		const school_go_team_text0001_png = this.add.image(1164, 116, "school", "school_go_team_text0001.png");

		// school_food_bar_icon_stand_png
		const school_food_bar_icon_stand_png = this.add.image(1356, 130, "school", "school_food_bar_icon_stand.png");

		// school_doors_png
		const school_doors_png = this.add.image(768, 421, "school", "school_doors.png");

		// school_door_right_side_png
		const school_door_right_side_png = this.add.image(1481, 611, "school", "school_door.png");

		// school_door_left_side_png
		const school_door_left_side_png = this.add.image(56, 614, "school", "school_door.png");
		school_door_left_side_png.flipX = true;

		// school_lockers_png
		const school_lockers_png = this.add.image(762, 482, "school", "school_lockers.png");

		// school_learning_chalk0001_png
		const school_learning_chalk0001_png = this.add.image(516, 184, "school", "school_learning_chalk0001.png");

		// school_learning_professor_chair_png
		const school_learning_professor_chair_png = this.add.image(715, 285, "school", "school_learning_professor_chair.png");

		// school_learning_professor_table_png
		const school_learning_professor_table_png = this.add.image(654, 320, "school", "school_learning_professor_table.png");

		// school_learning_top_right_table_png
		const school_learning_top_right_table_png = this.add.image(675, 395, "school", "school_learning_top_right_table.png");

		// school_chair_bottom_2_png_3
		const school_chair_bottom_2_png_3 = this.add.image(624, 456, "school", "school_chair_bottom_2.png");

		// school_chair_bottom_1_png
		const school_chair_bottom_1_png = this.add.image(721, 436, "school", "school_chair_bottom_1.png");

		// school_chair_top_2_png_2
		const school_chair_top_2_png_2 = this.add.image(623, 434, "school", "school_chair_top_2.png");

		// school_chair_top_1_png
		const school_chair_top_1_png = this.add.image(732, 428, "school", "school_chair_top_1.png");

		// school_learning_bottom_right_table_png
		const school_learning_bottom_right_table_png = this.add.image(669, 501, "school", "school_learning_bottom_right_table.png");

		// school_chair_bottom_2_png_1
		const school_chair_bottom_2_png_1 = this.add.image(622, 563, "school", "school_chair_bottom_2.png");

		// school_chair_bottom_2_png_2
		const school_chair_bottom_2_png_2 = this.add.image(742, 560, "school", "school_chair_bottom_2.png");

		// school_chair_top_2_png
		const school_chair_top_2_png = this.add.image(620, 540, "school", "school_chair_top_2.png");

		// school_chair_top_2_png_1
		const school_chair_top_2_png_1 = this.add.image(740, 540, "school", "school_chair_top_2.png");

		// school_kitchen_microphone_png
		const school_kitchen_microphone_png = this.add.image(1085, 269, "school", "school_kitchen_microphone.png");

		// school_middle_bar_png
		const school_middle_bar_png = this.add.image(734, 348, "school", "school_middle_bar.png");

		// school_middle_wall_green_sticker0001_png
		const school_middle_wall_green_sticker0001_png = this.add.image(851, 332, "school", "school_middle_wall_green_sticker0001.png");
		school_middle_wall_green_sticker0001_png.scaleX = 1.0654006292954405;
		school_middle_wall_green_sticker0001_png.scaleY = 1.037046066714487;

		// school_middle_wall_picture0001_png
		const school_middle_wall_picture0001_png = this.add.image(850, 429, "school", "school_middle_wall_picture0001.png");

		// school_kitchen_chair_1_png
		const school_kitchen_chair_1_png = this.add.image(1189, 366, "school", "school_kitchen_chair_1.png");

		// school_kitchen_chair_1_png_1
		const school_kitchen_chair_1_png_1 = this.add.image(1302, 500, "school", "school_kitchen_chair_1.png");

		// school_kitchen_chair_1_png_2
		const school_kitchen_chair_1_png_2 = this.add.image(987, 354, "school", "school_kitchen_chair_1.png");
		school_kitchen_chair_1_png_2.flipX = true;

		// school_kitchen_top_table_png
		const school_kitchen_top_table_png = this.add.image(1082, 396, "school", "school_kitchen_top_table.png");

		// school_kitchen_bottom_table_png
		const school_kitchen_bottom_table_png = this.add.image(1196, 542, "school", "school_kitchen_bottom_table.png");

		// school_kitchen_chair_bottom_2_png
		const school_kitchen_chair_bottom_2_png = this.add.image(1045, 580, "school", "school_kitchen_chair_bottom_2.png");

		// school_kitchen_chair_top_2_png
		const school_kitchen_chair_top_2_png = this.add.image(1021, 534, "school", "school_kitchen_chair_top_2.png");

		// school_food_bar_icon0001_png
		const school_food_bar_icon0001_png = this.add.image(1347, 158, "school", "school_food_bar_icon0001.png");

        this.audioManager.play(SCHOOL_ROOM_MUSIC);
    }
}