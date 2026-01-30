import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { LIGHT_HOUSE_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { RoomScene } from "../RoomScene";

// TODO: Get instruments thing in the right side buy shit idk

export class LighthouseScene extends RoomScene {
    constructor() {
        super("LightHouseScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
        this.audioManager = this.getAudioManager();
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "lighthouse",
            "paths": ["assets/world/rooms/lighthouse/lighthouse-pack.json"]
        });

        // this.assetManager.load({
        //     "scene": this,
        //     "type": ASSET_TYPES.AUDIO,
        //     "name": LIGHT_HOUSE_ROOM_MUSIC,
        //     "paths": ["assets/world/rooms/lighthouse/lighthouse_music.mp3"]
        // });
    }

    createContent() {
		// lighthouse_main_png
		const lighthouse_main_png = this.add.image(-50, -13, "lighthouse", "lighthouse_main.png");
		lighthouse_main_png.scaleX = 1.0092729375364675;
		lighthouse_main_png.scaleY = 1.004719070172936;
		lighthouse_main_png.setOrigin(0, 0);

		// lighthouse_door0001_png
		const lighthouse_door0001_png = this.add.image(469, 403, "lighthouse", "lighthouse_door0001.png");
		lighthouse_door0001_png.scaleX = 1.0123228536815267;
		lighthouse_door0001_png.scaleY = 0.9497739975226398;

		// lighthouse_door0002_png
		const lighthouse_door0002_png = this.add.image(469, 403, "lighthouse", "lighthouse_door0002.png");
		lighthouse_door0002_png.scaleX = 1.0123228536815267;
		lighthouse_door0002_png.scaleY = 0.9497739975226398;
		lighthouse_door0002_png.visible = false;

		// lighthouse_red_wire_png
		const lighthouse_red_wire_png = this.add.image(336, 678, "lighthouse", "lighthouse_red_wire.png");
		lighthouse_red_wire_png.scaleY = 1.2751482540891277;

		// lighthouse_piano_png
		const lighthouse_piano_png = this.add.image(410, 689, "lighthouse", "lighthouse_piano.png");
		lighthouse_piano_png.scaleX = 0.9447548408044311;
		lighthouse_piano_png.scaleY = 1.0019885367791712;

		// lighthouse_drum_set0001_png
		const lighthouse_drum_set0001_png = this.add.image(160, 493, "lighthouse", "lighthouse_drum_set0001.png");
		lighthouse_drum_set0001_png.scaleX = 1.0122841574614623;
		lighthouse_drum_set0001_png.scaleY = 1.0696757292107817;

		// lighthouse_microphone_png
		const lighthouse_microphone_png = this.add.image(313, 614, "lighthouse", "lighthouse_microphone.png");
		lighthouse_microphone_png.scaleX = 1.2114080623886512;
		lighthouse_microphone_png.scaleY = 1.1159220850569462;

		// lighthouse_to_top_button0001_png
		const lighthouse_to_top_button0001_png = this.add.image(289, 57, "lighthouse", "lighthouse_to_top_button0001.png");
		lighthouse_to_top_button0001_png.scaleX = 0.895507275124449;
		lighthouse_to_top_button0001_png.scaleY = 0.9516802664034422;

		// lighthouse_triple_speaker0001_png
		const lighthouse_triple_speaker0001_png = this.add.sprite(115, 295, "lighthouse", "lighthouse_triple_speaker0001.png");
		lighthouse_triple_speaker0001_png.scaleX = 0.9406407201155282;
		lighthouse_triple_speaker0001_png.scaleY = 0.9496401957669167;

		// lighthouuse_speakers_two0001_png
		const lighthouuse_speakers_two0001_png = this.add.sprite(339, 338, "lighthouse", "lighthouuse_speakers_two0001.png");
		lighthouuse_speakers_two0001_png.scaleX = 0.9483214413382748;
		lighthouuse_speakers_two0001_png.scaleY = 1.085726330819191;

		// lighthouse_speaker_bottom_left0001_png
		const lighthouse_speaker_bottom_left0001_png = this.add.sprite(-8, 886, "lighthouse", "lighthouse_speaker_bottom_left0001.png");
		lighthouse_speaker_bottom_left0001_png.scaleX = 1.0956752128740803;
		lighthouse_speaker_bottom_left0001_png.scaleY = 0.8931601546038402;

		// lighthouse_railing_png
		const lighthouse_railing_png = this.add.image(657, 291, "lighthouse", "lighthouse_railing.png");
		lighthouse_railing_png.scaleX = 1.034993369028122;
		lighthouse_railing_png.scaleY = 0.9954235555746943;

		// lighthouse_chair_png
		const lighthouse_chair_png = this.add.image(976, 769, "lighthouse", "lighthouse_chair.png");
		lighthouse_chair_png.scaleX = 1.1527432731207259;
		lighthouse_chair_png.scaleY = 0.9498489136627083;

		// lighthouse_chair_png_2
		const lighthouse_chair_png_2 = this.add.image(754, 667, "lighthouse", "lighthouse_chair.png");
		lighthouse_chair_png_2.scaleX = 1.1527432731207259;
		lighthouse_chair_png_2.scaleY = 0.9498489136627083;

		// lighthouse_chair_set_png
		const lighthouse_chair_set_png = this.add.image(930, 867, "lighthouse", "lighthouse_chair_set.png");
		lighthouse_chair_set_png.scaleX = 1.056518334817072;
		lighthouse_chair_set_png.scaleY = 1.2648569124896123;

		// lighthouse_chair_no_seat_png
		const lighthouse_chair_no_seat_png = this.add.image(941, 867, "lighthouse", "lighthouse_chair_no_seat.png");
		lighthouse_chair_no_seat_png.scaleX = 1.1527432731207259;
		lighthouse_chair_no_seat_png.scaleY = 0.9498489136627083;

		// lighthouse_chair_set_png_1
		const lighthouse_chair_set_png_1 = this.add.image(652, 868, "lighthouse", "lighthouse_chair_set.png");
		lighthouse_chair_set_png_1.scaleX = 1.1537720494112926;
		lighthouse_chair_set_png_1.scaleY = 1.2224283720995313;

		// lighthouse_chair_set_png_2
		this.add.image(717, 774, "lighthouse", "lighthouse_chair_set.png");

		// lighthouse_chair_no_seat_png_1
		const lighthouse_chair_no_seat_png_1 = this.add.image(725, 773, "lighthouse", "lighthouse_chair_no_seat.png");
		lighthouse_chair_no_seat_png_1.scaleX = 1.1527432731207259;
		lighthouse_chair_no_seat_png_1.scaleY = 0.9498489136627083;

		// lighthouse_chair_no_seat_png_2
		const lighthouse_chair_no_seat_png_2 = this.add.image(660, 871, "lighthouse", "lighthouse_chair_no_seat.png");
		lighthouse_chair_no_seat_png_2.scaleX = 1.1527432731207259;
		lighthouse_chair_no_seat_png_2.scaleY = 0.9498489136627083;
		lighthouse_chair_no_seat_png_2.angle = 10;

		// lighthouse_chair_png_3
		const lighthouse_chair_png_3 = this.add.image(950, 683, "lighthouse", "lighthouse_chair.png");
		lighthouse_chair_png_3.scaleX = 1.1527432731207259;
		lighthouse_chair_png_3.scaleY = 0.9498489136627083;

        // Animations start here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lighthouse_solo_speaker_animation",
            "phaserAnimationKey": "lighthouse_solo_speaker_animation_play",
            "textureKey": "lighthouse",
            "framePrefix": "lighthouuse_speakers_two",
            "frames": Array.from({ length: 10 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lighthouse_triple_speaker_animation",
            "phaserAnimationKey": "lighthouse_triple_speaker_animation_play",
            "textureKey": "lighthouse",
            "framePrefix": "lighthouse_triple_speaker",
            "frames": Array.from({ length: 10 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lighthouse_bottom_left_speaker_animation",
            "phaserAnimationKey": "lighthouse_bottom_left_speaker_animation_play",
            "textureKey": "lighthouse",
            "framePrefix": "lighthouse_speaker_bottom_left",
            "frames": Array.from({ length: 10 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "lighthouse_too_top_animation",
            "phaserAnimationKey": "lighthouse_too_top_animation_play",
            "textureKey": "lighthouse",
            "framePrefix": "lighthouse_to_top_button",
            "frames": Array.from({ length: 26 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        lighthouuse_speakers_two0001_png.play("lighthouse_solo_speaker_animation_play");
        lighthouse_speaker_bottom_left0001_png.play("lighthouse_bottom_left_speaker_animation_play");
        lighthouse_triple_speaker0001_png.play("lighthouse_triple_speaker_animation_play");
        // Animations end here

        // Setting all interactives sprites starts here
        lighthouse_to_top_button0001_png.setInteractive({ useHandCursor: true });
        lighthouse_door0001_png.setInteractive({ useHandCursor: true });
        lighthouse_door0002_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        lighthouse_door0001_png.on("pointerover", () => {
            lighthouse_door0001_png.visible = false;
            lighthouse_door0002_png.visible = true;
        });

        lighthouse_door0002_png.on("pointerout", () => {
            lighthouse_door0001_png.visible = true;
            lighthouse_door0002_png.visible = false;
        });

        lighthouse_to_top_button0001_png.on("pointerover", () => {
            lighthouse_to_top_button0001_png.play("lighthouse_too_top_animation_play");
        });

        lighthouse_to_top_button0001_png.on("pointerdown", () => {
            console.log("to beacon noob");
        });
        // All interactive events end here

        // this.audioManager.play(LIGHT_HOUSE_ROOM_MUSIC);
    }
}