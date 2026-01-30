import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { DANCE_CLUB_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_DANCE_CLUB } from "../../../sceneNames";
import { RoomScene } from "../RoomScene";

export class DanceclubScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_DANCE_CLUB);
    }

    init(data) {
        super.init(data);

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
		const danceclub_dance_floor0001_png = this.add.sprite(709, 885, "danceclub", "danceclub_dance_floor0001.png");
		danceclub_dance_floor0001_png.scaleX = 0.9009585112642639;
		danceclub_dance_floor0001_png.scaleY = 0.9698731025407039;

		// danceclub_town_door0001_png
		const danceclub_town_door0001_png = this.add.image(210, 366, "danceclub", "danceclub_town_door0001.png");
		danceclub_town_door0001_png.scaleX = 0.8747037961197944;
		danceclub_town_door0001_png.scaleY = 1.0390493591352845;

		// danceclub_main_background_png
		const danceclub_main_background_png = this.add.image(-50, -107, "danceclub", "danceclub_main_background.png");
		danceclub_main_background_png.scaleX = 0.9053063850229959;
		danceclub_main_background_png.scaleY = 0.9787574859418197;
		danceclub_main_background_png.setOrigin(0, 0);

		// danceclub_upstairs_door0001_png
		const danceclub_upstairs_door0001_png = this.add.image(1094, 268, "danceclub", "danceclub_upstairs_door0001.png");
		danceclub_upstairs_door0001_png.scaleX = 0.768370331790812;
		danceclub_upstairs_door0001_png.scaleY = 0.7990971692356373;
		danceclub_upstairs_door0001_png.visible = false;

		// danceclub_railing_right_side_png
		const danceclub_railing_right_side_png = this.add.image(441, 331, "danceclub", "danceclub_railing_right_side.png");
		danceclub_railing_right_side_png.scaleX = 1.0942252769353578;
		danceclub_railing_right_side_png.scaleY = 0.9987322042779724;

		// danceclub_left_bottom_speaker_bpx_png
		const danceclub_left_bottom_speaker_bpx_png = this.add.image(373, 342, "danceclub", "danceclub_left_bottom_speaker_bpx.png");
		danceclub_left_bottom_speaker_bpx_png.scaleX = 0.9771959652850684;
		danceclub_left_bottom_speaker_bpx_png.scaleY = 0.9843933266277761;

		// danceclub_left_side_top_railing_png
		const danceclub_left_side_top_railing_png = this.add.image(246, 349, "danceclub", "danceclub_left_side_top_railing.png");
		danceclub_left_side_top_railing_png.visible = false;

		// danceclub_railing_right_side_png_1
		const danceclub_railing_right_side_png_1 = this.add.image(779, 268, "danceclub", "danceclub_railing_right_side.png");
		danceclub_railing_right_side_png_1.scaleX = 0.8477412582937142;
		danceclub_railing_right_side_png_1.scaleY = 0.8548200219946321;
		danceclub_railing_right_side_png_1.flipX = true;
		danceclub_railing_right_side_png_1.visible = false;

		// danceclub_unground_entrance0001_png
		const danceclub_unground_entrance0001_png = this.add.image(1004, 317, "danceclub", "danceclub_unground_entrance0001.png");
		danceclub_unground_entrance0001_png.scaleX = 0.9447800622134415;
		danceclub_unground_entrance0001_png.scaleY = 1.0142906247448638;

		// danceclub_unground_entrance0002_png
		const danceclub_unground_entrance0002_png = this.add.image(823, 270, "danceclub", "danceclub_unground_entrance0002.png");
		danceclub_unground_entrance0002_png.scaleX = 0.8201017487678772;
		danceclub_unground_entrance0002_png.scaleY = 0.8108660152854972;
		danceclub_unground_entrance0002_png.visible = false;

		// danceclub_sound_studio_png
		const danceclub_sound_studio_png = this.add.image(696, 394, "danceclub", "danceclub_sound_studio.png");
		danceclub_sound_studio_png.scaleX = 0.9310852366825809;
		danceclub_sound_studio_png.scaleY = 0.911569501272237;

		// danceclub_sound_studio_small_floor_png
		const danceclub_sound_studio_small_floor_png = this.add.image(693, 366, "danceclub", "danceclub_sound_studio_small_floor.png");
		danceclub_sound_studio_small_floor_png.scaleX = 1.0535443209387254;
		danceclub_sound_studio_small_floor_png.scaleY = 1.1947952522846803;

		// danceclub_sound_studio_top_png
		const danceclub_sound_studio_top_png = this.add.image(691, 357, "danceclub", "danceclub_sound_studio_top.png");
		danceclub_sound_studio_top_png.scaleX = 0.9428957415427648;
		danceclub_sound_studio_top_png.scaleY = 0.9561268857597519;

		// danceclub_green_puffle0001_png
		const danceclub_green_puffle0001_png = this.add.sprite(1011, 196, "danceclub", "danceclub_green_puffle0001.png");
		danceclub_green_puffle0001_png.scaleX = 1.0004423251731371;
		danceclub_green_puffle0001_png.scaleY = 0.9821093951253981;

		// danceclub_dance_contest_signup_table_png
		const danceclub_dance_contest_signup_table_png = this.add.image(1103, 433, "danceclub", "danceclub_dance_contest_signup_table.png");
		danceclub_dance_contest_signup_table_png.scaleX = 0.8971162675328774;
		danceclub_dance_contest_signup_table_png.scaleY = 1.1084367974640368;

		// danceclub_bottom_left_couch_png
		const danceclub_bottom_left_couch_png = this.add.image(174, 760, "danceclub", "danceclub_bottom_left_couch.png");
		danceclub_bottom_left_couch_png.scaleX = 1.0217538402979924;
		danceclub_bottom_left_couch_png.scaleY = 1.0883350846943038;

		// danceclub_dance_contest_signup_png
		const danceclub_dance_contest_signup_png = this.add.image(1134, 275, "danceclub", "danceclub_dance_contest_signup.png");
		danceclub_dance_contest_signup_png.scaleX = 1.1258415271136748;
		danceclub_dance_contest_signup_png.scaleY = 1.1157181485820509;
		danceclub_dance_contest_signup_png.angle = -5;

		// danceclub_bottom_right_speaker0001_png
		const danceclub_bottom_right_speaker0001_png = this.add.sprite(993, 325, "danceclub", "danceclub_bottom_right_speaker0001.png");
		danceclub_bottom_right_speaker0001_png.scaleX = 1.1420120944242962;
		danceclub_bottom_right_speaker0001_png.scaleY = 0.9813609972235328;

		// danceclub_left_bottom_speaker0001_png
		const danceclub_left_bottom_speaker0001_png = this.add.sprite(383, 349, "danceclub", "danceclub_left_bottom_speaker0001.png");
		danceclub_left_bottom_speaker0001_png.scaleX = 1.0053695544648633;
		danceclub_left_bottom_speaker0001_png.scaleY = 0.938941908833967;

		// danceclub_left_bottom_speaker0001_png_1
		const danceclub_left_bottom_speaker0001_png_1 = this.add.sprite(255, 62, "danceclub", "danceclub_left_bottom_speaker0001.png");
		danceclub_left_bottom_speaker0001_png_1.scaleX = 0.573994024016248;
		danceclub_left_bottom_speaker0001_png_1.scaleY = 0.5626009278874076;
		danceclub_left_bottom_speaker0001_png_1.visible = false;

		// danceclub_upstairs_door0002_png
		const danceclub_upstairs_door0002_png = this.add.image(1301, 325, "danceclub", "danceclub_upstairs_door0002.png");
		danceclub_upstairs_door0002_png.scaleX = 0.8829717390252741;
		danceclub_upstairs_door0002_png.scaleY = 1.006040199697122;

		// danceclub_upstairs_entrance_png
		const danceclub_upstairs_entrance_png = this.add.image(1249, 240, "danceclub", "danceclub_upstairs_entrance.png");
		danceclub_upstairs_entrance_png.scaleX = 0.8726917390649486;
		danceclub_upstairs_entrance_png.scaleY = 1.0247854494728579;

		// danceclub_contest_signup_paper_pencils0001_png
		const danceclub_contest_signup_paper_pencils0001_png = this.add.sprite(1084, 384, "danceclub", "danceclub_contest_signup_paper_pencils0001.png");
		danceclub_contest_signup_paper_pencils0001_png.scaleX = 0.9360987075088671;
		danceclub_contest_signup_paper_pencils0001_png.scaleY = 0.9361858602713252;

		// danceclub_right_side_railing_png
		const danceclub_right_side_railing_png = this.add.image(1124, 492, "danceclub", "danceclub_right_side_railing.png");
		danceclub_right_side_railing_png.scaleX = 1.0023430426575806;
		danceclub_right_side_railing_png.scaleY = 0.8099631340552891;

		// danceclub_bottom_right_speaker0001_png_1
		const danceclub_bottom_right_speaker0001_png_1 = this.add.sprite(876, 51, "danceclub", "danceclub_bottom_right_speaker0001.png");
		danceclub_bottom_right_speaker0001_png_1.scaleX = 0.4551570301098177;
		danceclub_bottom_right_speaker0001_png_1.scaleY = 0.49349854327660236;
		danceclub_bottom_right_speaker0001_png_1.visible = false;

		// danceclub_lights_png
		const danceclub_lights_png = this.add.image(726, 353, "danceclub", "danceclub_lights.png");
		danceclub_lights_png.scaleX = 0.896281530343336;
		danceclub_lights_png.scaleY = 1.5862322997171228;

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
        super.createContent(this);
    }

    update() {
        super.update();
    }
}