import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { LOUNGE_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_DANCE_CLUB, SCENE_ROOM_LOUNGE } from "../../../sceneNames";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

export class LoungeScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_LOUNGE);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "lounge",
            "paths": ["assets/world/rooms/lounge/lounge-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "lounge_walk_trigger",
            "paths": ["assets/world/rooms/lounge/lounge_walking_trigger.png"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": LOUNGE_ROOM_MUSIC,
            "paths": ["assets/world/rooms/lounge/lounge_room_music.mp3"]
        });
    }

    createContent() {
		// lounge_dance_floor0001_png
		const lounge_dance_floor0001_png = this.add.sprite(819, 952, "lounge", "lounge_dance_floor0001.png");
		lounge_dance_floor0001_png.scaleX = 0.6028137299756102;
		lounge_dance_floor0001_png.scaleY = 0.5039178802983882;

		// lounge_dance_floor_fourth_penguin0001_png_1
		const lounge_dance_floor_fourth_penguin0001_png_1 = this.add.sprite(744, 766, "lounge", "lounge_dance_floor_fourth_penguin0001.png");

		// lounge_dance_floor_first_penguin0001_png
		const lounge_dance_floor_first_penguin0001_png = this.add.sprite(689, 781, "lounge", "lounge_dance_floor_first_penguin0001.png");

		// lounge_dance_floor_second_penguin0001_png
		const lounge_dance_floor_second_penguin0001_png = this.add.sprite(708, 837, "lounge", "lounge_dance_floor_second_penguin0001.png");

		// lounge_dance_floor_fourth_penguin0001_png
		const lounge_dance_floor_fourth_penguin0001_png = this.add.sprite(789, 801, "lounge", "lounge_dance_floor_fourth_penguin0001.png");

		// lounge_dance_floor_sixth_penguin0001_png
		const lounge_dance_floor_sixth_penguin0001_png = this.add.sprite(830, 836, "lounge", "lounge_dance_floor_sixth_penguin0001.png");

		// lounge_dance_floor_fifth_top_penguin0001_png
		const lounge_dance_floor_fifth_top_penguin0001_png = this.add.sprite(836, 779, "lounge", "lounge_dance_floor_fifth_top_penguin0001.png");

		// lounge_main_background_png
		const lounge_main_background_png = this.add.image(-10, -10, "lounge", "lounge_main_background.png");
		lounge_main_background_png.setOrigin(0, 0);

		// lounge_left_table_top_chair_png
		const lounge_left_table_top_chair_png = this.add.image(348, 703, "lounge", "lounge_left_table_top_chair.png");

		// lounge_left_table_left_chair_png
		const lounge_left_table_left_chair_png = this.add.image(169, 767, "lounge", "lounge_left_table_left_chair.png");

		// lounge_left_table_png
		const lounge_left_table_png = this.add.image(284, 785, "lounge", "lounge_left_table.png");

		// lounge_bits_bolts_not_hovered0001_png
		const lounge_bits_bolts_not_hovered0001_png = this.add.sprite(250, 392, "lounge", "lounge_bits_bolts_not_hovered0001.png");

		// lounge_bits_bolt_hovered_png
		const lounge_bits_bolt_hovered_png = this.add.image(250, 392, "lounge", "lounge_bits_bolt_hovered.png");
		lounge_bits_bolt_hovered_png.visible = false;

		// lounge_red_machine_png
		const lounge_red_machine_png = this.add.image(378, 302, "lounge", "lounge_red_machine.png");

		// lounge_bits_bolts_png
		const lounge_bits_bolts_png = this.add.image(246, 406, "lounge", "lounge_bits_bolts.png");

		// lounge_drink_machine0001_png
		const lounge_drink_machine0001_png = this.add.image(112, 538, "lounge", "lounge_drink_machine0001.png");

		// lounge_trash_can_png
		const lounge_trash_can_png = this.add.image(57, 661, "lounge", "lounge_trash_can.png");

		// lounge_bits_bolts_seat_png
		const lounge_bits_bolts_seat_png = this.add.image(322, 518, "lounge", "lounge_bits_bolts_seat.png");

		// lounge_hit_the_target_railing_png
		const lounge_hit_the_target_railing_png = this.add.image(781, 429, "lounge", "lounge_hit_the_target_railing.png");

		// lounge_exit_trigger_png
		const lounge_exit_trigger_png = this.physics.add.sprite(1434, 745, "lounge", "lounge_exit_trigger.png");
		lounge_exit_trigger_png.alpha = 0.001;
		lounge_exit_trigger_png.alphaTopLeft = 0.001;
		lounge_exit_trigger_png.alphaTopRight = 0.001;
		lounge_exit_trigger_png.alphaBottomLeft = 0.001;
		lounge_exit_trigger_png.alphaBottomRight = 0.001;
		lounge_exit_trigger_png.body.setSize(225, 284, false);

		// lounge_exit_railing_png
		const lounge_exit_railing_png = this.add.image(1414, 728, "lounge", "lounge_exit_railing.png");

		// lounge_hit_the_target_top_board_background_png
		const lounge_hit_the_target_top_board_background_png = this.add.image(781, 75, "lounge", "lounge_hit_the_target_top_board_background.png");

		// lounge_hit_the_target_top_left_left0001_png
		const lounge_hit_the_target_top_left_left0001_png = this.add.sprite(601, 123, "lounge", "lounge_hit_the_target_top_left_left0001.png");

		// lounge_hit_the_target_top_right_left0001_png
		const lounge_hit_the_target_top_right_left0001_png = this.add.sprite(929, 123, "lounge", "lounge_hit_the_target_top_right_left0001.png");

		// lounge_hit_the_target_top_left_right0001_png
		const lounge_hit_the_target_top_left_right0001_png = this.add.sprite(624, 123, "lounge", "lounge_hit_the_target_top_left_right0001.png");

		// lounge_hit_the_target_top_board_png
		const lounge_hit_the_target_top_board_png = this.add.image(777, 75, "lounge", "lounge_hit_the_target_top_board.png");

		// lounge_hit_the_target_top_board_text0001_png
		const lounge_hit_the_target_top_board_text0001_png = this.add.image(782, 76, "lounge", "lounge_hit_the_target_top_board_text0001.png");

		// lounge_roof_lights_png
		const lounge_roof_lights_png = this.add.image(478, 46, "lounge", "lounge_roof_lights.png");

		// lounge_roof_lights_png_1
		const lounge_roof_lights_png_1 = this.add.image(1075, 46, "lounge", "lounge_roof_lights.png");
		lounge_roof_lights_png_1.flipX = true;

		// lounge_top_right_speaker_box_png
		const lounge_top_right_speaker_box_png = this.add.image(1255, 73, "lounge", "lounge_top_right_speaker_box.png");

		// lounge_top_right_speaker_top_music_thing0001_png
		const lounge_top_right_speaker_top_music_thing0001_png = this.add.sprite(1232, 66, "lounge", "lounge_top_right_speaker_top_music_thing0001.png");

		// lounge_top_right_speaker_bottom_music_thing0001_png
		const lounge_top_right_speaker_bottom_music_thing0001_png = this.add.sprite(1235, 111, "lounge", "lounge_top_right_speaker_bottom_music_thing0001.png");

		// lounge_top_left_speaker_box_png_1
		const lounge_top_left_speaker_box_png_1 = this.add.image(300, 73, "lounge", "lounge_top_right_speaker_box.png");
		lounge_top_left_speaker_box_png_1.flipX = true;

		// lounge_top_left_speaker_top_music_thing0001_png_1
		const lounge_top_left_speaker_top_music_thing0001_png_1 = this.add.sprite(323, 60, "lounge", "lounge_top_right_speaker_top_music_thing0001.png");
		lounge_top_left_speaker_top_music_thing0001_png_1.flipX = true;

		// lounge_thin_ice_not_hovered0001_png
		const lounge_thin_ice_not_hovered0001_png = this.add.sprite(1185, 274, "lounge", "lounge_thin_ice_not_hovered0001.png");
		lounge_thin_ice_not_hovered0001_png.scaleX = 0.9875712855344743;
		lounge_thin_ice_not_hovered0001_png.scaleY = 1.1389826113132286;
		lounge_thin_ice_not_hovered0001_png.angle = 20;

		// lounge_thin_ice_hovered_png
		const lounge_thin_ice_hovered_png = this.add.image(1185, 274, "lounge", "lounge_thin_ice_hovered.png");
		lounge_thin_ice_hovered_png.scaleX = 0.9875712855344743;
		lounge_thin_ice_hovered_png.scaleY = 1.1389826113132286;
		lounge_thin_ice_hovered_png.angle = 20;
		lounge_thin_ice_hovered_png.visible = false;

		// lounge_top_left_speaker_bottom_music_thing0001_png_1
		const lounge_top_left_speaker_bottom_music_thing0001_png_1 = this.add.sprite(320, 106, "lounge", "lounge_top_right_speaker_bottom_music_thing0001.png");
		lounge_top_left_speaker_bottom_music_thing0001_png_1.flipX = true;

		// lounge_thin_ice_png
		const lounge_thin_ice_png = this.add.image(1186, 300, "lounge", "lounge_thin_ice.png");

		// lounge_thin_ice_seat_png
		const lounge_thin_ice_seat_png = this.add.image(1110, 409, "lounge", "lounge_thin_ice_seat.png");

		// lounge_astro_barrier_not_hovered0001_png
		const lounge_astro_barrier_not_hovered0001_png = this.add.sprite(1259, 368, "lounge", "lounge_astro_barrier_not_hovered0001.png");
		lounge_astro_barrier_not_hovered0001_png.scaleX = 1.0232004594384525;
		lounge_astro_barrier_not_hovered0001_png.scaleY = 0.7834881484926217;

		// lounge_astro_barrier_hovered_png
		const lounge_astro_barrier_hovered_png = this.add.image(1259, 368, "lounge", "lounge_astro_barrier_hovered.png");
		lounge_astro_barrier_hovered_png.scaleX = 1.0232004594384525;
		lounge_astro_barrier_hovered_png.scaleY = 0.7834881484926217;
		lounge_astro_barrier_hovered_png.visible = false;

		// lounge_astro_barrier_png
		const lounge_astro_barrier_png = this.add.image(1266, 397, "lounge", "lounge_astro_barrier.png");

		// lounge_astro_barrier_seat_png
		const lounge_astro_barrier_seat_png = this.add.image(1194, 493, "lounge", "lounge_astro_barrier_seat.png");

		// lounge_thin_ice_trigger_png
		const lounge_thin_ice_trigger_png = this.physics.add.sprite(1130, 351, "lounge", "lounge_thin_ice_trigger.png");
		lounge_thin_ice_trigger_png.alpha = 0.001;
		lounge_thin_ice_trigger_png.alphaTopLeft = 0.001;
		lounge_thin_ice_trigger_png.alphaTopRight = 0.001;
		lounge_thin_ice_trigger_png.alphaBottomLeft = 0.001;
		lounge_thin_ice_trigger_png.alphaBottomRight = 0.001;
		lounge_thin_ice_trigger_png.body.setSize(142, 133, false);

		// lounge_astro_barrier_trigger_png
		const lounge_astro_barrier_trigger_png = this.physics.add.sprite(1235, 430, "lounge", "lounge_astro_barrier_trigger.png");
		lounge_astro_barrier_trigger_png.alpha = 0.001;
		lounge_astro_barrier_trigger_png.alphaTopLeft = 0.001;
		lounge_astro_barrier_trigger_png.alphaTopRight = 0.001;
		lounge_astro_barrier_trigger_png.alphaBottomLeft = 0.001;
		lounge_astro_barrier_trigger_png.alphaBottomRight = 0.001;
		lounge_astro_barrier_trigger_png.body.setSize(152, 147, false);

		// lounge_bits_bolt_trigger_png
		const lounge_bits_bolt_trigger_png = this.physics.add.sprite(286, 441, "lounge", "lounge_bits_bolt_trigger.png");
		lounge_bits_bolt_trigger_png.alpha = 0.001;
		lounge_bits_bolt_trigger_png.alphaTopLeft = 0.001;
		lounge_bits_bolt_trigger_png.alphaTopRight = 0.001;
		lounge_bits_bolt_trigger_png.alphaBottomLeft = 0.001;
		lounge_bits_bolt_trigger_png.alphaBottomRight = 0.001;
		lounge_bits_bolt_trigger_png.body.setSize(152, 154, false);

		// lounge_hit_the_target_top_left_middle0001_png
		const lounge_hit_the_target_top_left_middle0001_png = this.add.sprite(614, 123, "lounge", "lounge_hit_the_target_top_left_middle0001.png");

		// lounge_hit_the_target_top_right_right0001_png
		const lounge_hit_the_target_top_right_right0001_png = this.add.sprite(952, 123, "lounge", "lounge_hit_the_target_top_right_right0001.png");

		// lounge_hit_the_target_top_right_middle0001_png
		const lounge_hit_the_target_top_right_middle0001_png = this.add.sprite(940, 123, "lounge", "lounge_hit_the_target_top_right_middle0001.png");

		// lounge_bits_bolt_text_center_png
		const lounge_bits_bolt_text_center_png = this.add.image(287, 327, "lounge", "lounge_bits_bolt_text_center.png");

		// lounge_bits_bolt_text_left_side_png
		const lounge_bits_bolt_text_left_side_png = this.add.image(189, 330, "lounge", "lounge_bits_bolt_text_left_side.png");

		// lounge_thin_ice_text0001_png
		const lounge_thin_ice_text0001_png = this.add.image(1156, 216, "lounge", "lounge_thin_ice_text0001.png");

		// lounge_astro_barrier_text_png
		const lounge_astro_barrier_text_png = this.add.image(1264, 312, "lounge", "lounge_astro_barrier_text.png");

		// lounge_left_table_left_chair_png_1
		const lounge_left_table_left_chair_png_1 = this.add.image(1365, 772, "lounge", "lounge_left_table_left_chair.png");
		lounge_left_table_left_chair_png_1.flipX = true;

		// lounge_left_table_top_chair_png_1
		const lounge_left_table_top_chair_png_1 = this.add.image(1197, 717, "lounge", "lounge_left_table_top_chair.png");
		lounge_left_table_top_chair_png_1.flipX = true;

		// lounge_right_table_png
		const lounge_right_table_png = this.add.image(1261, 791, "lounge", "lounge_right_table.png");

		// lounge_left_table_bottom_chair_seat_png
		const lounge_left_table_bottom_chair_seat_png = this.add.image(104, 509, "lounge", "lounge_left_table_bottom_chair_seat.png");
		lounge_left_table_bottom_chair_seat_png.scaleX = 1.0571382854883349;
		lounge_left_table_bottom_chair_seat_png.scaleY = 0.9160522133006443;

		// lounge_left_table_bottom_chair_stand_png
		const lounge_left_table_bottom_chair_stand_png = this.add.image(159, 902, "lounge", "lounge_left_table_bottom_chair_stand.png");

		// lounge_left_table_right_chair_seat_png
		const lounge_left_table_right_chair_seat_png = this.add.image(212, 452, "lounge", "lounge_left_table_right_chair_seat.png");

		// lounge_left_table_right_chair_stand_png
		const lounge_left_table_right_chair_stand_png = this.add.image(417, 850, "lounge", "lounge_left_table_right_chair_stand.png");

		// lounge_right_table_left_chair_seat_png
		const lounge_right_table_left_chair_seat_png = this.add.image(609, 462, "lounge", "lounge_right_table_left_chair_seat.png");

		// lounge_right_table_left_chair_stand_png
		const lounge_right_table_left_chair_stand_png = this.add.image(1118, 863, "lounge", "lounge_right_table_left_chair_stand.png");

		// lounge_right_table_bottom_chair_seat_png
		const lounge_right_table_bottom_chair_seat_png = this.add.image(715, 477, "lounge", "lounge_right_table_bottom_chair_seat.png");

		// lounge_right_table_bottom_chair_stand_png
		const lounge_right_table_bottom_chair_stand_png = this.add.image(1379, 900, "lounge", "lounge_right_table_bottom_chair_stand.png");

		// lounge_walking_trigger_png_1
		const lounge_walking_trigger_png_1 = this.physics.add.sprite(762, 382, "lounge_walk_trigger");
		lounge_walking_trigger_png_1.scaleX = 1.0214264858570925;
		lounge_walking_trigger_png_1.scaleY = 1.4591998114303781;
		lounge_walking_trigger_png_1.alpha = 0.001;
		lounge_walking_trigger_png_1.alphaTopLeft = 0.001;
		lounge_walking_trigger_png_1.alphaTopRight = 0.001;
		lounge_walking_trigger_png_1.alphaBottomLeft = 0.001;
		lounge_walking_trigger_png_1.alphaBottomRight = 0.001;
		lounge_walking_trigger_png_1.body.setSize(1523, 806, false);
        this.collisionMap = this.createCollisionMap(this, 762, 382, "lounge_walk_trigger");

        // Setting triggers starts here
        this.triggers.push([lounge_walking_trigger_png_1, () => {
            onWalkingTrigger(this);
        }]);
        
        this.triggers.push([lounge_exit_trigger_png, () => {
            onJoinRoomTrigger(SCENE_ROOM_DANCE_CLUB);
        }]);
        // Setting triggers ends here

        // Creating animations starts here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lounge_top_speaker_top_animation",
            "phaserAnimationKey": "lounge_top_speaker_top_animation_play",
            "textureKey": "lounge",
            "framePrefix": "lounge_top_right_speaker_top_music_thing",
            "frames": Array.from({ length: 10 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lounge_top_speaker_bottom_animation",
            "phaserAnimationKey": "lounge_top_speaker_bottom_animation_play",
            "textureKey": "lounge",
            "framePrefix": "lounge_top_right_speaker_bottom_music_thing",
            "frames": Array.from({ length: 10 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });
        
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lounge_dance_floor_animation",
            "phaserAnimationKey": "lounge_dance_floor_animation_play",
            "textureKey": "lounge",
            "framePrefix": "lounge_dance_floor",
            "frames": Array.from({ length: 60 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 40,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lounge_dance_floor_first_penguin_animation",
            "phaserAnimationKey": "lounge_dance_floor_first_penguin_animation_play",
            "textureKey": "lounge",
            "framePrefix": "lounge_dance_floor_first_penguin",
            "frames": Array.from({ length: 194 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lounge_dance_floor_second_penguin_animation",
            "phaserAnimationKey": "lounge_dance_floor_second_penguin_animation_play",
            "textureKey": "lounge",
            "framePrefix": "lounge_dance_floor_second_penguin",
            "frames": Array.from({ length: 194 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lounge_dance_floor_fourth_penguin_animation",
            "phaserAnimationKey": "lounge_dance_floor_fourth_penguin_animation_play",
            "textureKey": "lounge",
            "framePrefix": "lounge_dance_floor_fourth_penguin",
            "frames": Array.from({ length: 194 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lounge_dance_floor_fifth_top_penguin_animation",
            "phaserAnimationKey": "lounge_dance_floor_fifth_top_penguin_animation_play",
            "textureKey": "lounge",
            "framePrefix": "lounge_dance_floor_fifth_top_penguin",
            "frames": Array.from({ length: 194 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lounge_dance_floor_sixth_penguin_animation",
            "phaserAnimationKey": "lounge_dance_floor_sixth_penguin_animation_play",
            "textureKey": "lounge",
            "framePrefix": "lounge_dance_floor_sixth_penguin",
            "frames": Array.from({ length: 194 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lounge_hit_the_target_top_left_left_bulb_animation",
            "phaserAnimationKey": "lounge_hit_the_target_top_left_left_bulb_animation_play",
            "textureKey": "lounge",
            "framePrefix": "lounge_hit_the_target_top_left_left",
            "frames": Array.from({ length: 11 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lounge_hit_the_target_top_left_middle_bulb_animation",
            "phaserAnimationKey": "lounge_hit_the_target_top_left_middle_bulb_animation_play",
            "textureKey": "lounge",
            "framePrefix": "lounge_hit_the_target_top_left_middle",
            "frames": Array.from({ length: 11 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lounge_hit_the_target_top_left_right_bulb_animation",
            "phaserAnimationKey": "lounge_hit_the_target_top_left_right_bulb_animation_play",
            "textureKey": "lounge",
            "framePrefix": "lounge_hit_the_target_top_left_right",
            "frames": Array.from({ length: 11 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lounge_hit_the_target_top_right_left_bulb_animation",
            "phaserAnimationKey": "lounge_hit_the_target_top_right_left_bulb_animation_play",
            "textureKey": "lounge",
            "framePrefix": "lounge_hit_the_target_top_right_left",
            "frames": Array.from({ length: 11 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lounge_hit_the_target_top_right_middle_bulb_animation",
            "phaserAnimationKey": "lounge_hit_the_target_top_right_middle_bulb_animation_play",
            "textureKey": "lounge",
            "framePrefix": "lounge_hit_the_target_top_right_middle",
            "frames": Array.from({ length: 11 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lounge_hit_the_target_top_right_right_bulb_animation",
            "phaserAnimationKey": "lounge_hit_the_target_top_right_right_bulb_animation_play",
            "textureKey": "lounge",
            "framePrefix": "lounge_hit_the_target_top_right_right",
            "frames": Array.from({ length: 11 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lounge_astro_barrier_not_hovered_animation",
            "phaserAnimationKey": "lounge_astro_barrier_not_hovered_animation_play",
            "textureKey": "lounge",
            "framePrefix": "lounge_astro_barrier_not_hovered",
            "frames": Array.from({ length: 18 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lounge_thin_ice_not_hovered_animation",
            "phaserAnimationKey": "lounge_thin_ice_not_hovered_animation_play",
            "textureKey": "lounge",
            "framePrefix": "lounge_thin_ice_not_hovered",
            "frames": Array.from({ length: 15 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lounge_bits_bolts_not_hovered_animation",
            "phaserAnimationKey": "lounge_bits_bolts_not_hovered_animation_play",
            "textureKey": "lounge",
            "framePrefix": "lounge_bits_bolts_not_hovered",
            "frames": Array.from({ length: 17 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        lounge_top_right_speaker_top_music_thing0001_png.play("lounge_top_speaker_top_animation_play");
        lounge_top_left_speaker_top_music_thing0001_png_1.play("lounge_top_speaker_top_animation_play");
        lounge_top_right_speaker_bottom_music_thing0001_png.play("lounge_top_speaker_bottom_animation_play");
        lounge_top_left_speaker_bottom_music_thing0001_png_1.play("lounge_top_speaker_bottom_animation_play");
        lounge_dance_floor0001_png.play("lounge_dance_floor_animation_play");
        lounge_dance_floor_first_penguin0001_png.play("lounge_dance_floor_first_penguin_animation_play");
        lounge_dance_floor_second_penguin0001_png.play("lounge_dance_floor_second_penguin_animation_play");
        lounge_dance_floor_fourth_penguin0001_png_1.play("lounge_dance_floor_first_penguin_animation_play");
        lounge_dance_floor_fourth_penguin0001_png.play("lounge_dance_floor_fourth_penguin_animation_play");
        lounge_dance_floor_fifth_top_penguin0001_png.play("lounge_dance_floor_fifth_top_penguin_animation_play");
        lounge_dance_floor_sixth_penguin0001_png.play("lounge_dance_floor_sixth_penguin_animation_play");
        lounge_hit_the_target_top_left_left0001_png.play("lounge_hit_the_target_top_left_left_bulb_animation_play");
        lounge_hit_the_target_top_left_middle0001_png.play("lounge_hit_the_target_top_left_middle_bulb_animation_play");
        lounge_hit_the_target_top_left_right0001_png.play("lounge_hit_the_target_top_left_right_bulb_animation_play");
        lounge_hit_the_target_top_right_left0001_png.play("lounge_hit_the_target_top_right_left_bulb_animation_play");
        lounge_hit_the_target_top_right_middle0001_png.play("lounge_hit_the_target_top_right_middle_bulb_animation_play");
        lounge_hit_the_target_top_right_right0001_png.play("lounge_hit_the_target_top_right_right_bulb_animation_play");
        lounge_astro_barrier_not_hovered0001_png.play("lounge_astro_barrier_not_hovered_animation_play");
        lounge_thin_ice_not_hovered0001_png.play("lounge_thin_ice_not_hovered_animation_play");
        lounge_bits_bolts_not_hovered0001_png.play("lounge_bits_bolts_not_hovered_animation_play");
        // Creating animations ends here

        // Setting all interactives sprites starts here
        lounge_bits_bolts_not_hovered0001_png.setInteractive({ useHandCursor: true });
        lounge_bits_bolt_hovered_png.setInteractive({ useHandCursor: true });
        lounge_thin_ice_not_hovered0001_png.setInteractive({ useHandCursor: true });
        lounge_thin_ice_hovered_png.setInteractive({ useHandCursor: true });
        lounge_astro_barrier_not_hovered0001_png.setInteractive({ useHandCursor: true });
        lounge_astro_barrier_hovered_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        lounge_bits_bolts_not_hovered0001_png.on("pointerover", () => {
            lounge_bits_bolts_not_hovered0001_png.visible = false;
            lounge_bits_bolt_hovered_png.visible = true;
        });

        lounge_bits_bolt_hovered_png.on("pointerout", () => {
            lounge_bits_bolts_not_hovered0001_png.visible = true;
            lounge_bits_bolt_hovered_png.visible = false;
        });

        lounge_thin_ice_not_hovered0001_png.on("pointerover", () => {
            lounge_thin_ice_not_hovered0001_png.visible = false;
            lounge_thin_ice_hovered_png.visible = true;
        });

        lounge_thin_ice_hovered_png.on("pointerout", () => {
            lounge_thin_ice_not_hovered0001_png.visible = true;
            lounge_thin_ice_hovered_png.visible = false;
        });

        lounge_astro_barrier_not_hovered0001_png.on("pointerover", () => {
            lounge_astro_barrier_not_hovered0001_png.visible = false;
            lounge_astro_barrier_hovered_png.visible = true;
        });

        lounge_astro_barrier_hovered_png.on("pointerout", () => {
            lounge_astro_barrier_not_hovered0001_png.visible = true;
            lounge_astro_barrier_hovered_png.visible = false;
        });
        // All interactive events ends here

        this.audioManager.play(LOUNGE_ROOM_MUSIC);
        super.createContent(this);
    }

    update() {
        super.update();
    }
}