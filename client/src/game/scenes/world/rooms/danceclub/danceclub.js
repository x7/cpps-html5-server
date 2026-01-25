import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { DANCE_CLUB_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { BaseScene } from "../../../base/baseScene";

export class DanceclubScene extends BaseScene {
    constructor() {
        super("DanceclubScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
        this.audioManager = this.getAudioManager();
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "danceclub",
            "paths": ["assets/world/rooms/danceclub/danceclub-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": DANCE_CLUB_ROOM_MUSIC,
            "paths": ["assets/world/rooms/danceclub/danceclub_music.mp3"]
        });
    }

    createContent() {
        // danceclub_dance_floor0001_png
		const danceclub_dance_floor0001_png = this.add.sprite(577, 723, "danceclub", "danceclub_dance_floor0001.png");
		danceclub_dance_floor0001_png.scaleX = 0.7808491730657305;
		danceclub_dance_floor0001_png.scaleY = 0.8081338770557172;

		// danceclub_main_background_png
		const danceclub_main_background_png = this.add.image(616, 390, "danceclub", "danceclub_main_background.png");
		danceclub_main_background_png.scaleX = 0.7853708974074973;
		danceclub_main_background_png.scaleY = 0.7924951382145382;

		// danceclub_upstairs_door0001_png
		const danceclub_upstairs_door0001_png = this.add.image(1094, 268, "danceclub", "danceclub_upstairs_door0001.png");
		danceclub_upstairs_door0001_png.scaleX = 0.768370331790812;
		danceclub_upstairs_door0001_png.scaleY = 0.7990971692356373;

		// danceclub_railing_right_side_png
		const danceclub_railing_right_side_png = this.add.image(347, 262, "danceclub", "danceclub_railing_right_side.png");
		danceclub_railing_right_side_png.scaleX = 0.8477412582937142;
		danceclub_railing_right_side_png.scaleY = 0.8548200219946321;

		// danceclub_left_bottom_speaker_bpx_png
		const danceclub_left_bottom_speaker_bpx_png = this.add.image(288, 285, "danceclub", "danceclub_left_bottom_speaker_bpx.png");
		danceclub_left_bottom_speaker_bpx_png.scaleX = 0.74458258257099;
		danceclub_left_bottom_speaker_bpx_png.scaleY = 0.7358683880765934;

		// danceclub_left_side_top_railing_png
		this.add.image(246, 349, "danceclub", "danceclub_left_side_top_railing.png");

		// danceclub_railing_right_side_png_1
		const danceclub_railing_right_side_png_1 = this.add.image(779, 268, "danceclub", "danceclub_railing_right_side.png");
		danceclub_railing_right_side_png_1.scaleX = 0.8477412582937142;
		danceclub_railing_right_side_png_1.scaleY = 0.8548200219946321;
		danceclub_railing_right_side_png_1.flipX = true;

		// danceclub_unground_entrance0001_png
		const danceclub_unground_entrance0001_png = this.add.image(842, 265, "danceclub", "danceclub_unground_entrance0001.png");
		danceclub_unground_entrance0001_png.scaleX = 0.8201017487678772;
		danceclub_unground_entrance0001_png.scaleY = 0.8108660152854972;

		// danceclub_unground_entrance0002_png
		const danceclub_unground_entrance0002_png = this.add.image(823, 270, "danceclub", "danceclub_unground_entrance0002.png");
		danceclub_unground_entrance0002_png.scaleX = 0.8201017487678772;
		danceclub_unground_entrance0002_png.scaleY = 0.8108660152854972;
		danceclub_unground_entrance0002_png.visible = false;

		// danceclub_sound_studio_png
		const danceclub_sound_studio_png = this.add.image(570, 324, "danceclub", "danceclub_sound_studio.png");
		danceclub_sound_studio_png.scaleX = 0.7820694503549172;
		danceclub_sound_studio_png.scaleY = 0.7249639165366389;

		// danceclub_sound_studio_small_floor_png
		const danceclub_sound_studio_small_floor_png = this.add.image(571, 299, "danceclub", "danceclub_sound_studio_small_floor.png");
		danceclub_sound_studio_small_floor_png.scaleX = 0.8840706100815396;
		danceclub_sound_studio_small_floor_png.scaleY = 0.8473000665484134;

		// danceclub_sound_studio_top_png
		const danceclub_sound_studio_top_png = this.add.image(567, 294, "danceclub", "danceclub_sound_studio_top.png");
		danceclub_sound_studio_top_png.scaleX = 0.7814118373909569;
		danceclub_sound_studio_top_png.scaleY = 0.9216226273650396;

		// danceclub_green_puffle0001_png
		const danceclub_green_puffle0001_png = this.add.sprite(855, 164, "danceclub", "danceclub_green_puffle0001.png");
		danceclub_green_puffle0001_png.scaleX = 0.8133355298335223;
		danceclub_green_puffle0001_png.scaleY = 0.8200074984789738;

		// danceclub_dance_contest_signup_table_png
		const danceclub_dance_contest_signup_table_png = this.add.image(930, 349, "danceclub", "danceclub_dance_contest_signup_table.png");
		danceclub_dance_contest_signup_table_png.scaleX = 0.8033882629387311;
		danceclub_dance_contest_signup_table_png.scaleY = 0.6935069297995489;

		// danceclub_bottom_left_couch_png
		const danceclub_bottom_left_couch_png = this.add.image(113, 603, "danceclub", "danceclub_bottom_left_couch.png");
		danceclub_bottom_left_couch_png.scaleX = 0.9196766555915186;
		danceclub_bottom_left_couch_png.scaleY = 0.8532815128618215;

		// danceclub_dance_contest_signup_png
		const danceclub_dance_contest_signup_png = this.add.image(963, 252, "danceclub", "danceclub_dance_contest_signup.png");
		danceclub_dance_contest_signup_png.scaleX = 0.8307294990280105;
		danceclub_dance_contest_signup_png.scaleY = 0.7564726407096254;
		danceclub_dance_contest_signup_png.angle = -5;

		// danceclub_bottom_right_speaker0001_png
		const danceclub_bottom_right_speaker0001_png = this.add.sprite(832, 273, "danceclub", "danceclub_bottom_right_speaker0001.png");
		danceclub_bottom_right_speaker0001_png.scaleX = 0.788227851571086;
		danceclub_bottom_right_speaker0001_png.scaleY = 0.7328334657805443;

		// danceclub_left_bottom_speaker0001_png
		const danceclub_left_bottom_speaker0001_png = this.add.sprite(296, 291, "danceclub", "danceclub_left_bottom_speaker0001.png");
		danceclub_left_bottom_speaker0001_png.scaleX = 0.7146985800749458;
		danceclub_left_bottom_speaker0001_png.scaleY = 0.698752414577191;

		// danceclub_left_bottom_speaker0001_png_1
		const danceclub_left_bottom_speaker0001_png_1 = this.add.sprite(255, 62, "danceclub", "danceclub_left_bottom_speaker0001.png");
		danceclub_left_bottom_speaker0001_png_1.scaleX = 0.573994024016248;
		danceclub_left_bottom_speaker0001_png_1.scaleY = 0.5626009278874076;

		// danceclub_upstairs_door0002_png
		const danceclub_upstairs_door0002_png = this.add.image(1100, 269, "danceclub", "danceclub_upstairs_door0002.png");
		danceclub_upstairs_door0002_png.scaleX = 0.7167272266852993;
		danceclub_upstairs_door0002_png.scaleY = 0.798033968642066;

		// danceclub_upstairs_entrance_png
		const danceclub_upstairs_entrance_png = this.add.image(1057, 199, "danceclub", "danceclub_upstairs_entrance.png");
		danceclub_upstairs_entrance_png.scaleX = 0.7167272266852993;
		danceclub_upstairs_entrance_png.scaleY = 0.7608869358457979;

		// danceclub_contest_signup_paper_pencils0001_png
		const danceclub_contest_signup_paper_pencils0001_png = this.add.sprite(922, 323, "danceclub", "danceclub_contest_signup_paper_pencils0001.png");
		danceclub_contest_signup_paper_pencils0001_png.scaleX = 0.6355054911678092;
		danceclub_contest_signup_paper_pencils0001_png.scaleY = 0.5722917913908123;

		// danceclub_right_side_railing_png
		const danceclub_right_side_railing_png = this.add.image(953, 395, "danceclub", "danceclub_right_side_railing.png");
		danceclub_right_side_railing_png.scaleX = 1.0023430426575806;
		danceclub_right_side_railing_png.scaleY = 0.8099631340552891;

		// danceclub_bottom_right_speaker0001_png_1
		const danceclub_bottom_right_speaker0001_png_1 = this.add.sprite(876, 51, "danceclub", "danceclub_bottom_right_speaker0001.png");
		danceclub_bottom_right_speaker0001_png_1.scaleX = 0.4551570301098177;
		danceclub_bottom_right_speaker0001_png_1.scaleY = 0.49349854327660236;

        // Animations start here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "danceclub_green_puffle_dance_animation",
            "phaserAnimationKey": "danceclub_green_puffle_dance_animation_play",
            "textureKey": "danceclub",
            "framePrefix": "danceclub_green_puffle",
            "frames": Array.from({ length: 99 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "danceclub_bottom_right_speaker_animation",
            "phaserAnimationKey": "danceclub_bottom_right_speaker_animation_play",
            "textureKey": "danceclub",
            "framePrefix": "danceclub_bottom_right_speaker",
            "frames": Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "danceclub_bottom_left_speaker_animation",
            "phaserAnimationKey": "danceclub_bottom_left_speaker_animation_play",
            "textureKey": "danceclub",
            "framePrefix": "danceclub_left_bottom_speaker",
            "frames": Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "danceclub_dance_floor_animation",
            "phaserAnimationKey": "danceclub_dance_floor_animation_play",
            "textureKey": "danceclub",
            "framePrefix": "danceclub_dance_floor",
            "frames": Array.from({ length: 36 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "danceclub_dance_contest_signup_animation",
            "phaserAnimationKey": "danceclub_dance_contest_signup_animation_play",
            "textureKey": "danceclub",
            "framePrefix": "danceclub_contest_signup_paper_pencils",
            "frames": Array.from({ length: 55 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        danceclub_green_puffle0001_png.play("danceclub_green_puffle_dance_animation_play");
        danceclub_bottom_right_speaker0001_png.play("danceclub_bottom_right_speaker_animation_play");
        danceclub_left_bottom_speaker0001_png.play("danceclub_bottom_left_speaker_animation_play");
        danceclub_dance_floor0001_png.play("danceclub_dance_floor_animation_play");
        danceclub_left_bottom_speaker0001_png_1.play("danceclub_bottom_left_speaker_animation_play");
        danceclub_bottom_right_speaker0001_png_1.play("danceclub_bottom_right_speaker_animation_play");
        // Animations end here

        // Setting all interactives sprites starts here
        danceclub_upstairs_door0001_png.setInteractive({ useHandCursor: true });
        danceclub_upstairs_door0002_png.setInteractive({ useHandCursor: true });
        danceclub_dance_contest_signup_png.setInteractive({ useHandCursor: true });
        danceclub_unground_entrance0001_png.setInteractive({ useHandCursor: true });
        danceclub_unground_entrance0002_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        danceclub_upstairs_door0001_png.on("pointerover", () => {
            danceclub_upstairs_door0001_png.visible = false;
            danceclub_upstairs_door0002_png.visible = true;
        });

        danceclub_upstairs_door0002_png.on("pointerout", () => {
            danceclub_upstairs_door0001_png.visible = true;
            danceclub_upstairs_door0002_png.visible = false;
        });

        danceclub_dance_contest_signup_png.on("pointerover", () => {
            danceclub_contest_signup_paper_pencils0001_png.play("danceclub_dance_contest_signup_animation_play");
        });

        danceclub_dance_contest_signup_png.on("pointerout", () => {
            danceclub_contest_signup_paper_pencils0001_png.stop("danceclub_dance_contest_signup_animation_play");
        });

        danceclub_unground_entrance0001_png.on("pointerover", () => {
            danceclub_unground_entrance0001_png.visible = false;
            danceclub_bottom_right_speaker0001_png.visible = false;
            danceclub_unground_entrance0002_png.visible = true;
            danceclub_bottom_right_speaker0001_png.stop("danceclub_bottom_right_speaker_animation_play");
        });

        danceclub_unground_entrance0002_png.on("pointerout", () => {
            danceclub_unground_entrance0001_png.visible = true;
            danceclub_bottom_right_speaker0001_png.visible = true;
            danceclub_unground_entrance0002_png.visible = false;
            danceclub_bottom_right_speaker0001_png.play("danceclub_bottom_right_speaker_animation_play");
        });
        // All interactive events end here

        this.audioManager.play(DANCE_CLUB_ROOM_MUSIC);
    }
}