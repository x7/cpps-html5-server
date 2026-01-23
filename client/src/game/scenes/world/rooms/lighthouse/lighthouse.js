import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { BaseScene } from "../../../base/baseScene";

// TODO: Get instruments thing in the right side buy shit idk

export class LighthouseScene extends BaseScene {
    constructor() {
        super("LighthouseScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
    }

    preloadContent() {
        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.PACK,
            name: "lighthouse",
            paths: ["assets/world/rooms/lighthouse/lighthouse-pack.json"]
        });
    }

    createContent() {
// lighthouse_main_png
		const lighthouse_main_png = this.add.image(629, 367, "lighthouse", "lighthouse_main.png");
		lighthouse_main_png.scaleX = 0.8398893808492912;
		lighthouse_main_png.scaleY = 0.7509587916341159;

		// lighthouse_door0001_png
		const lighthouse_door0001_png = this.add.image(389, 303, "lighthouse", "lighthouse_door0001.png");
		lighthouse_door0001_png.scaleX = 0.8298323558323687;
		lighthouse_door0001_png.scaleY = 0.7064284332060419;

		// lighthouse_door0002_png
		const lighthouse_door0002_png = this.add.image(389, 303, "lighthouse", "lighthouse_door0002.png");
		lighthouse_door0002_png.scaleX = 0.8298323558323687;
		lighthouse_door0002_png.scaleY = 0.7064284332060419;
		lighthouse_door0002_png.visible = false;

		// lighthouse_red_wire_png
		const lighthouse_red_wire_png = this.add.image(294, 520, "lighthouse", "lighthouse_red_wire.png");
		lighthouse_red_wire_png.scaleY = 1.2751482540891277;

		// lighthouse_piano_png
		const lighthouse_piano_png = this.add.image(342, 519, "lighthouse", "lighthouse_piano.png");
		lighthouse_piano_png.scaleX = 0.7030706293845683;
		lighthouse_piano_png.scaleY = 0.6970844785688601;

		// lighthouse_drum_set0001_png
		const lighthouse_drum_set0001_png = this.add.image(136, 377, "lighthouse", "lighthouse_drum_set0001.png");
		lighthouse_drum_set0001_png.scaleX = 0.9530734830914109;
		lighthouse_drum_set0001_png.scaleY = 0.9351516164858051;

		// lighthouse_microphone_png
		this.add.image(267, 457, "lighthouse", "lighthouse_microphone.png");

		// lighthouse_to_top_button0001_png
		const lighthouse_to_top_button0001_png = this.add.sprite(267, 49, "lighthouse", "lighthouse_to_top_button0001.png");
		lighthouse_to_top_button0001_png.scaleX = 0.799304120920083;
		lighthouse_to_top_button0001_png.scaleY = 0.7867404586658758;

		// lighthouse_triple_speaker0001_png
		const lighthouse_triple_speaker0001_png = this.add.sprite(103, 234, "lighthouse", "lighthouse_triple_speaker0001.png");
		lighthouse_triple_speaker0001_png.scaleX = 0.7564361264119751;
		lighthouse_triple_speaker0001_png.scaleY = 0.719944382246587;

		// lighthouuse_speakers_two0001_png
		const lighthouuse_speakers_two0001_png = this.add.sprite(278, 256, "lighthouse", "lighthouuse_speakers_two0001.png");
		lighthouuse_speakers_two0001_png.scaleX = 0.7941525713347208;
		lighthouuse_speakers_two0001_png.scaleY = 0.8023760218789995;

		// lighthouse_speaker_bottom_left0001_png
		const lighthouse_speaker_bottom_left0001_png = this.add.sprite(-3, 670, "lighthouse", "lighthouse_speaker_bottom_left0001.png");
		lighthouse_speaker_bottom_left0001_png.scaleX = 0.7537545589140004;
		lighthouse_speaker_bottom_left0001_png.scaleY = 0.7203110408014503;

		// lighthouse_railing_png
		const lighthouse_railing_png = this.add.image(547, 221, "lighthouse", "lighthouse_railing.png");
		lighthouse_railing_png.scaleX = 0.8492318098472128;
		lighthouse_railing_png.scaleY = 0.7540362589861832;

		// lighthouse_chair_png
		const lighthouse_chair_png = this.add.image(641, 498, "lighthouse", "lighthouse_chair.png");
		lighthouse_chair_png.scaleX = 0.923822959345538;
		lighthouse_chair_png.scaleY = 0.7699722120127134;

		// lighthouse_chair_png_1
		const lighthouse_chair_png_1 = this.add.image(804, 510, "lighthouse", "lighthouse_chair.png");
		lighthouse_chair_png_1.scaleX = 0.923822959345538;
		lighthouse_chair_png_1.scaleY = 0.7699722120127134;

		// lighthouse_chair_png_2
		const lighthouse_chair_png_2 = this.add.image(823, 572, "lighthouse", "lighthouse_chair.png");
		lighthouse_chair_png_2.scaleX = 0.923822959345538;
		lighthouse_chair_png_2.scaleY = 0.7699722120127134;

		// lighthouse_chair_set_png
		this.add.image(794, 643, "lighthouse", "lighthouse_chair_set.png");

		// lighthouse_chair_no_seat_png
		this.add.image(805, 644, "lighthouse", "lighthouse_chair_no_seat.png");

		// lighthouse_chair_set_png_1
		this.add.image(545, 648, "lighthouse", "lighthouse_chair_set.png");

		// lighthouse_chair_no_seat_png_1
		const lighthouse_chair_no_seat_png_1 = this.add.image(556, 646, "lighthouse", "lighthouse_chair_no_seat.png");
		lighthouse_chair_no_seat_png_1.angle = 20;

		// lighthouse_chair_set_png_2
		this.add.image(621, 574, "lighthouse", "lighthouse_chair_set.png");

		// lighthouse_chair_no_seat_png_2
		const lighthouse_chair_no_seat_png_2 = this.add.image(633, 573, "lighthouse", "lighthouse_chair_no_seat.png");
		lighthouse_chair_no_seat_png_2.scaleX = 0.7986076539063149;
		lighthouse_chair_no_seat_png_2.scaleY = 0.7620193195874517;

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
    }
}