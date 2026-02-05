import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { PUFFLE_HOTEL_SPA_ELEVATOR_CLOSE, PUFFLE_HOTEL_SPA_ELEVATOR_OPEN, PUFFLE_HOTEL_SPA_ROOM_MUSIC, PUFFLE_HOTEL_SPA_TREADMILL_START } from "../../../../audio/audioConstants";
import { SCENE_ROOM_PUFFLE_HOTEL_SPA } from "../../../sceneNames";
import { RoomScene } from "../RoomScene";

export class PuffleHotelSpa extends RoomScene {
    constructor() {
        super(SCENE_ROOM_PUFFLE_HOTEL_SPA);
    }

    init(data) {
        super.init(data);

        // Globals
        this.assetPath = "assets/world/rooms/pufflehotelspa/";
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "pufflehotelspa",
            "paths": [`${this.assetPath}/pufflehotelspa-pack.json`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_HOTEL_SPA_ROOM_MUSIC,
            "paths": [`${this.assetPath}/${PUFFLE_HOTEL_SPA_ROOM_MUSIC}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_HOTEL_SPA_ELEVATOR_OPEN,
            "paths": [`${this.assetPath}/${PUFFLE_HOTEL_SPA_ELEVATOR_OPEN}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_HOTEL_SPA_ELEVATOR_CLOSE,
            "paths": [`${this.assetPath}/${PUFFLE_HOTEL_SPA_ELEVATOR_CLOSE}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_HOTEL_SPA_TREADMILL_START,
            "paths": [`${this.assetPath}/${PUFFLE_HOTEL_SPA_TREADMILL_START}.mp3`]
        });
    }

    createContent() {
        // puffle_hotel_spa_main_background_png
		const puffle_hotel_spa_main_background_png = this.add.image(807, 500, "pufflehotelspa", "puffle_hotel_spa_main_background.png");

		// puffle_hotel_spa_middle_top_wall_png
		const puffle_hotel_spa_middle_top_wall_png = this.add.image(931, 639, "pufflehotelspa", "puffle_hotel_spa_middle_top_wall.png");

		// puffle_hotel_spa_left_speaker0001_png
		const puffle_hotel_spa_left_speaker0001_png = this.add.sprite(240, 184, "pufflehotelspa", "puffle_hotel_spa_left_speaker0001.png");
		puffle_hotel_spa_left_speaker0001_png.scaleX = 0.8742657513706324;
		puffle_hotel_spa_left_speaker0001_png.scaleY = 0.9083009472471015;

		// puffle_hotel_spa_left_speaker0001_png_1
		const puffle_hotel_spa_left_speaker0001_png_1 = this.add.sprite(616, 184, "pufflehotelspa", "puffle_hotel_spa_left_speaker0001.png");
		puffle_hotel_spa_left_speaker0001_png_1.scaleX = 0.8742657513706324;
		puffle_hotel_spa_left_speaker0001_png_1.scaleY = 0.9083009472471015;
		puffle_hotel_spa_left_speaker0001_png_1.flipX = true;

		// puffle_hotel_spa_purple_jar_png
		const puffle_hotel_spa_purple_jar_png = this.add.image(1217, 283, "pufflehotelspa", "puffle_hotel_spa_purple_jar.png");

		// puffle_hotel_spa_blue_jar_png
		const puffle_hotel_spa_blue_jar_png = this.add.image(1333, 275, "pufflehotelspa", "puffle_hotel_spa_blue_jar.png");

		// puffle_hotel_spa_mirror_lghts_png
		const puffle_hotel_spa_mirror_lghts_png = this.add.image(1121, 204, "pufflehotelspa", "puffle_hotel_spa_mirror_lghts.png");

		// puffle_hotel_spa_mirror_lghts_png_1
		const puffle_hotel_spa_mirror_lghts_png_1 = this.add.image(1280, 204, "pufflehotelspa", "puffle_hotel_spa_mirror_lghts.png");

		// puffle_hotel_spa_hair_dresser_chair_one
		const puffle_hotel_spa_hair_dresser_chair_one = this.add.image(1118, 372, "pufflehotelspa", "puffle_hotel_spa_hair_dresser_chair.png");

		// puffle_hotel_spa_hair_dresser_chair_two
		const puffle_hotel_spa_hair_dresser_chair_two = this.add.image(1303, 375, "pufflehotelspa", "puffle_hotel_spa_hair_dresser_chair_right.png");

		// puffle_hotel_spa_bouncy_ball_exercise_two
		const puffle_hotel_spa_bouncy_ball_exercise_two = this.add.image(417, 591, "pufflehotelspa", "puffle_hotel_spa_bouncy_ball_exercise.png");

		// puffle_hotel_spa_bouncy_ball_exercise_three
		const puffle_hotel_spa_bouncy_ball_exercise_three = this.add.image(588, 510, "pufflehotelspa", "puffle_hotel_spa_bouncy_ball_exercise.png");

		// puffle_hotel_spa_bouncy_ball_exercise_one
		const puffle_hotel_spa_bouncy_ball_exercise_one = this.add.image(314, 507, "pufflehotelspa", "puffle_hotel_spa_bouncy_ball_exercise.png");

		// puffle_hotel_spa_small_water_bottle_png
		const puffle_hotel_spa_small_water_bottle_png = this.add.image(405, 500, "pufflehotelspa", "puffle_hotel_spa_small_water_bottle.png");

		// puffle_hotel_spa_white_drink_png
		const puffle_hotel_spa_white_drink_png = this.add.image(266, 355, "pufflehotelspa", "puffle_hotel_spa_white_drink.png");

		// puffle_hotel_spa_other_drink_png
		const puffle_hotel_spa_other_drink_png = this.add.image(311, 371, "pufflehotelspa", "puffle_hotel_spa_other_drink.png");

		// puffle_hotel_spa_small_weights_png
		const puffle_hotel_spa_small_weights_png = this.add.image(349, 377, "pufflehotelspa", "puffle_hotel_spa_small_weights.png");
		puffle_hotel_spa_small_weights_png.flipX = true;

		// puffle_hotel_spa_bouncy_ball_exercise_four
		const puffle_hotel_spa_bouncy_ball_exercise_four = this.add.image(467, 374, "pufflehotelspa", "puffle_hotel_spa_bouncy_ball_exercise.png");

		// puffle_hotel_spa_golden_elevator_door0001_png
		const puffle_hotel_spa_golden_elevator_door0001_png = this.add.sprite(82, 315, "pufflehotelspa", "puffle_hotel_spa_golden_elevator_door0001.png");

		// puffle_hotel_spa_golden_elevator_overlay_png
		const puffle_hotel_spa_golden_elevator_overlay_png = this.add.image(74, 328, "pufflehotelspa", "puffle_hotel_spa_golden_elevator_overlay.png");

		// puffle_hotel_spa_top_of_golden_elevator_png
		const puffle_hotel_spa_top_of_golden_elevator_png = this.add.image(48, 96, "pufflehotelspa", "puffle_hotel_spa_top_of_golden_elevator.png");

		// puffle_hotel_spa_red_weights_png
		const puffle_hotel_spa_red_weights_png = this.add.image(834, 857, "pufflehotelspa", "puffle_hotel_spa_red_weights.png");

		// puffle_hotel_spa_red_weights_png_1
		const puffle_hotel_spa_red_weights_png_1 = this.add.image(870, 887, "pufflehotelspa", "puffle_hotel_spa_red_weights.png");

		// puffle_hotel_spa_small_green_chair_top_png
		const puffle_hotel_spa_small_green_chair_top_png = this.add.image(804, 393, "pufflehotelspa", "puffle_hotel_spa_small_green_chair_top.png");

		// puffle_hotel_spa_top_wall_2_png
		const puffle_hotel_spa_top_wall_2_png = this.add.image(704, 252, "pufflehotelspa", "puffle_hotel_spa_top_wall_2.png");

		// puffle_hotel_spa_top_wall_1_png
		const puffle_hotel_spa_top_wall_1_png = this.add.image(904, 252, "pufflehotelspa", "puffle_hotel_spa_top_wall_1.png");

		// puffle_hotel_spa_hair_on_floor_png
		const puffle_hotel_spa_hair_on_floor_png = this.add.image(1226, 463, "pufflehotelspa", "puffle_hotel_spa_hair_on_floor.png");

		// puffle_hotel_spa_blue_hairdresser_chair_one
		const puffle_hotel_spa_blue_hairdresser_chair_one = this.add.image(1077, 702, "pufflehotelspa", "puffle_hotel_spa_blue_hairdresser_chair.png");
		puffle_hotel_spa_blue_hairdresser_chair_one.scaleX = 1.1444150530865131;
		puffle_hotel_spa_blue_hairdresser_chair_one.scaleY = 1.1570830199570095;

		// puffle_hotel_spa_iron_bar_png
		const puffle_hotel_spa_iron_bar_png = this.add.image(317, 666, "pufflehotelspa", "puffle_hotel_spa_iron_bar.png");

		// puffle_hotel_spa_right_middle_window_png
		const puffle_hotel_spa_right_middle_window_png = this.add.image(1418, 297, "pufflehotelspa", "puffle_hotel_spa_right_middle_window.png");

		// puffle_hotel_spa_smaller_weight_png_1
		const puffle_hotel_spa_smaller_weight_png_1 = this.add.image(29, 671, "pufflehotelspa", "puffle_hotel_spa_smaller_weight.png");
		puffle_hotel_spa_smaller_weight_png_1.scaleX = 0.7135240537234349;
		puffle_hotel_spa_smaller_weight_png_1.scaleY = 0.7904441158620445;
		puffle_hotel_spa_smaller_weight_png_1.flipX = true;

		// puffle_hotel_spa_bottom_right_supplies_png
		const puffle_hotel_spa_bottom_right_supplies_png = this.add.image(1573, 725, "pufflehotelspa", "puffle_hotel_spa_bottom_right_supplies.png");

		// puffle_hotel_spa_punching_bag_png
		const puffle_hotel_spa_punching_bag_png = this.add.image(20, 703, "pufflehotelspa", "puffle_hotel_spa_punching_bag.png");

		// puffle_hotel_spa_bottom_png
		const puffle_hotel_spa_bottom_png = this.add.image(875, 885, "pufflehotelspa", "puffle_hotel_spa_bottom.png");

		// puffle_hotel_spa_treadmill_floor_one
		const puffle_hotel_spa_treadmill_floor_one = this.add.image(271, 756, "pufflehotelspa", "puffle_hotel_spa_treadmill_floor0001.png");

		// puffle_hotel_spa_treadmill_one
		const puffle_hotel_spa_treadmill_one = this.add.image(257, 705, "pufflehotelspa", "puffle_hotel_spa_treadmill.png");

		// puffle_hotel_spa_white_drink_png_1
		const puffle_hotel_spa_white_drink_png_1 = this.add.image(341, 803, "pufflehotelspa", "puffle_hotel_spa_white_drink.png");

		// puffle_hotel_spa_treadmill_floor_two
		const puffle_hotel_spa_treadmill_floor_two = this.add.image(528, 755, "pufflehotelspa", "puffle_hotel_spa_treadmill_floor0001.png");

		// puffle_hotel_spa_treadmill_two
		const puffle_hotel_spa_treadmill_two = this.add.image(513, 703, "pufflehotelspa", "puffle_hotel_spa_treadmill.png");

		// puffle_hotel_spa_bubbles_png
		const puffle_hotel_spa_bubbles_png = this.add.image(1260, 665, "pufflehotelspa", "puffle_hotel_spa_bubbles.png");

		// puffle_hotel_spa_blue_hairdresser_chair_two
		const puffle_hotel_spa_blue_hairdresser_chair_two = this.add.image(1357, 705, "pufflehotelspa", "puffle_hotel_spa_right_blue_hairdressr.png");
		puffle_hotel_spa_blue_hairdresser_chair_two.flipX = true;

		// puffle_hotel_spa_blue_hairdresser_right_arm0001_png
		const puffle_hotel_spa_blue_hairdresser_right_arm0001_png = this.add.image(1432, 744, "pufflehotelspa", "puffle_hotel_spa_blue_hairdresser_right_arm0001.png");

		// puffle_hotel_spa_smaller_weight_png
		const puffle_hotel_spa_smaller_weight_png = this.add.image(721, 903, "pufflehotelspa", "puffle_hotel_spa_smaller_weight.png");
		puffle_hotel_spa_smaller_weight_png.scaleX = 0.5809608659715038;
		puffle_hotel_spa_smaller_weight_png.scaleY = 0.5513425451851808;
		puffle_hotel_spa_smaller_weight_png.angle = 15;

		// puffle_hotel_spa_golden_elevator_trigger
		const puffle_hotel_spa_golden_elevator_trigger = this.add.rectangle(103, 316, 128, 128);
		puffle_hotel_spa_golden_elevator_trigger.scaleY = 2.151578807117364;
		puffle_hotel_spa_golden_elevator_trigger.alpha = 0.001;
		puffle_hotel_spa_golden_elevator_trigger.isFilled = true;

        // Creating animations starts here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "puffle_hotel_spa_speaker_animation",
            "phaserAnimationKey": "puffle_hotel_spa_speaker_animation_play",
            "textureKey": "pufflehotelspa",
            "framePrefix": "puffle_hotel_spa_left_speaker",
            "frames": Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "puffle_hotel_spa_golden_elevator_open_animation",
            "phaserAnimationKey": "puffle_hotel_spa_golden_elevator_open_animation_play",
            "textureKey": "pufflehotelspa",
            "framePrefix": "puffle_hotel_spa_golden_elevator_door",
            "frames": Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "puffle_hotel_spa_golden_elevator_close_animation",
            "phaserAnimationKey": "puffle_hotel_spa_golden_elevator_close_animation_play",
            "textureKey": "pufflehotelspa",
            "framePrefix": "puffle_hotel_spa_golden_elevator_door",
            "frames": Array.from({ length: 9 }, (_, i) => String(i + 12).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        puffle_hotel_spa_left_speaker0001_png.play("puffle_hotel_spa_speaker_animation_play");
        puffle_hotel_spa_left_speaker0001_png_1.play("puffle_hotel_spa_speaker_animation_play");
        // Creating animations ends here

        // Setting all interactives sprites starts here
        puffle_hotel_spa_golden_elevator_trigger.setInteractive({ useHandCursor: true });
        puffle_hotel_spa_bouncy_ball_exercise_one.setInteractive({ useHandCursor: true });
        puffle_hotel_spa_bouncy_ball_exercise_two.setInteractive({ useHandCursor: true });
        puffle_hotel_spa_bouncy_ball_exercise_three.setInteractive({ useHandCursor: true });
        puffle_hotel_spa_bouncy_ball_exercise_four.setInteractive({ useHandCursor: true });
        puffle_hotel_spa_treadmill_one.setInteractive({ useHandCursor: true });
        puffle_hotel_spa_treadmill_two.setInteractive({ useHandCursor: true });
        puffle_hotel_spa_blue_hairdresser_chair_one.setInteractive({ useHandCursor: true });
        puffle_hotel_spa_blue_hairdresser_chair_two.setInteractive({ useHandCursor: true });
        puffle_hotel_spa_hair_dresser_chair_one.setInteractive({ useHandCursor: true });
        puffle_hotel_spa_hair_dresser_chair_two.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events starts here
        puffle_hotel_spa_golden_elevator_trigger.on("pointerover", () => {
            puffle_hotel_spa_golden_elevator_door0001_png.play("puffle_hotel_spa_golden_elevator_open_animation_play");
            this.audioManager.play(PUFFLE_HOTEL_SPA_ELEVATOR_OPEN);
        });

        puffle_hotel_spa_golden_elevator_trigger.on("pointerout", () => {
            puffle_hotel_spa_golden_elevator_door0001_png.play("puffle_hotel_spa_golden_elevator_close_animation_play");
            this.audioManager.play(PUFFLE_HOTEL_SPA_ELEVATOR_CLOSE);
        });

        this.audioManager.play(PUFFLE_HOTEL_SPA_ROOM_MUSIC);
        // All interactive events ends here
    }
}