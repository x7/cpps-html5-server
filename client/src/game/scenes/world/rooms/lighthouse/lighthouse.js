import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { LIGHT_HOUSE_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_BEACH, SCENE_ROOM_BEACON, SCENE_ROOM_LIGHT_HOUSE } from "../../../sceneNames";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

// TODO: Get instruments thing in the right side buy shit idk

export class LighthouseScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_LIGHT_HOUSE);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "lighthouse",
            "paths": ["assets/world/rooms/lighthouse/lighthouse-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "lighthouse_walk_trigger",
            "paths": ["assets/world/rooms/lighthouse/lighthouse_walk_trigger.png"]
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
		const lighthouse_main_png = this.add.image(736, 477, "lighthouse", "lighthouse_main.png");
		lighthouse_main_png.scaleX = 1.0122724296121048;
		lighthouse_main_png.scaleY = 1.004719070172936;

		// lighthouse_door0001_png
		const lighthouse_door0001_png = this.add.image(441, 393, "lighthouse", "lighthouse_door0001.png");
		lighthouse_door0001_png.scaleX = 1.0123228536815267;
		lighthouse_door0001_png.scaleY = 0.9497739975226398;

		// lighthouse_door0002_png
		const lighthouse_door0002_png = this.add.image(441, 393, "lighthouse", "lighthouse_door0002.png");
		lighthouse_door0002_png.scaleX = 1.0123228536815267;
		lighthouse_door0002_png.scaleY = 0.9497739975226398;
		lighthouse_door0002_png.visible = false;

		// lighthouse_red_wire_png
		const lighthouse_red_wire_png = this.add.image(308, 668, "lighthouse", "lighthouse_red_wire.png");
		lighthouse_red_wire_png.scaleY = 1.2751482540891277;

		// lighthouse_piano_png
		const lighthouse_piano_png = this.add.image(382, 679, "lighthouse", "lighthouse_piano.png");
		lighthouse_piano_png.scaleX = 0.9447548408044311;
		lighthouse_piano_png.scaleY = 1.0019885367791712;

		// lighthouse_drum_set0001_png
		const lighthouse_drum_set0001_png = this.add.image(132, 483, "lighthouse", "lighthouse_drum_set0001.png");
		lighthouse_drum_set0001_png.scaleX = 1.0122841574614623;
		lighthouse_drum_set0001_png.scaleY = 1.0696757292107817;

		// lighthouse_microphone_png
		const lighthouse_microphone_png = this.add.image(285, 604, "lighthouse", "lighthouse_microphone.png");
		lighthouse_microphone_png.scaleX = 1.2114080623886512;
		lighthouse_microphone_png.scaleY = 1.1159220850569462;

		// lighthouse_to_top_button0001_png
		const lighthouse_to_top_button0001_png = this.add.sprite(261, 47, "lighthouse", "lighthouse_to_top_button0001.png");
		lighthouse_to_top_button0001_png.scaleX = 0.895507275124449;
		lighthouse_to_top_button0001_png.scaleY = 0.9516802664034422;

		// lighthouse_triple_speaker0001_png
		const lighthouse_triple_speaker0001_png = this.add.sprite(87, 285, "lighthouse", "lighthouse_triple_speaker0001.png");
		lighthouse_triple_speaker0001_png.scaleX = 0.9406407201155282;
		lighthouse_triple_speaker0001_png.scaleY = 0.9496401957669167;

		// lighthouuse_speakers_two0001_png
		const lighthouuse_speakers_two0001_png = this.add.sprite(311, 328, "lighthouse", "lighthouuse_speakers_two0001.png");
		lighthouuse_speakers_two0001_png.scaleX = 0.9483214413382748;
		lighthouuse_speakers_two0001_png.scaleY = 1.085726330819191;

		// lighthouse_speaker_bottom_left0001_png
		const lighthouse_speaker_bottom_left0001_png = this.add.sprite(-36, 876, "lighthouse", "lighthouse_speaker_bottom_left0001.png");
		lighthouse_speaker_bottom_left0001_png.scaleX = 1.0956752128740803;
		lighthouse_speaker_bottom_left0001_png.scaleY = 0.8931601546038402;

		// lighthouse_railing_png
		const lighthouse_railing_png = this.add.image(629, 281, "lighthouse", "lighthouse_railing.png");
		lighthouse_railing_png.scaleX = 1.034993369028122;
		lighthouse_railing_png.scaleY = 0.9954235555746943;

		// lighthouse_chair_png
		const lighthouse_chair_png = this.add.image(948, 759, "lighthouse", "lighthouse_chair.png");
		lighthouse_chair_png.scaleX = 1.1527432731207259;
		lighthouse_chair_png.scaleY = 0.9498489136627083;

		// lighthouse_chair_png_2
		const lighthouse_chair_png_2 = this.add.image(726, 657, "lighthouse", "lighthouse_chair.png");
		lighthouse_chair_png_2.scaleX = 1.1527432731207259;
		lighthouse_chair_png_2.scaleY = 0.9498489136627083;

		// lighthouse_chair_set_png
		const lighthouse_chair_set_png = this.add.image(902, 857, "lighthouse", "lighthouse_chair_set.png");
		lighthouse_chair_set_png.scaleX = 1.056518334817072;
		lighthouse_chair_set_png.scaleY = 1.2648569124896123;

		// lighthouse_chair_no_seat_png
		const lighthouse_chair_no_seat_png = this.add.image(913, 857, "lighthouse", "lighthouse_chair_no_seat.png");
		lighthouse_chair_no_seat_png.scaleX = 1.1527432731207259;
		lighthouse_chair_no_seat_png.scaleY = 0.9498489136627083;

		// lighthouse_chair_set_png_1
		const lighthouse_chair_set_png_1 = this.add.image(624, 858, "lighthouse", "lighthouse_chair_set.png");
		lighthouse_chair_set_png_1.scaleX = 1.1537720494112926;
		lighthouse_chair_set_png_1.scaleY = 1.2224283720995313;

		// lighthouse_chair_set_png_2
		const lighthouse_chair_set_png_2 = this.add.image(689, 764, "lighthouse", "lighthouse_chair_set.png");

		// lighthouse_chair_no_seat_png_1
		const lighthouse_chair_no_seat_png_1 = this.add.image(697, 763, "lighthouse", "lighthouse_chair_no_seat.png");
		lighthouse_chair_no_seat_png_1.scaleX = 1.1527432731207259;
		lighthouse_chair_no_seat_png_1.scaleY = 0.9498489136627083;

		// lighthouse_chair_no_seat_png_2
		const lighthouse_chair_no_seat_png_2 = this.add.image(632, 861, "lighthouse", "lighthouse_chair_no_seat.png");
		lighthouse_chair_no_seat_png_2.scaleX = 1.1527432731207259;
		lighthouse_chair_no_seat_png_2.scaleY = 0.9498489136627083;
		lighthouse_chair_no_seat_png_2.angle = 10;

		// lighthouse_chair_png_3
		const lighthouse_chair_png_3 = this.add.image(922, 673, "lighthouse", "lighthouse_chair.png");
		lighthouse_chair_png_3.scaleX = 1.1527432731207259;
		lighthouse_chair_png_3.scaleY = 0.9498489136627083;

		// lighthouse_beach_trigger
		const lighthouse_beach_trigger = this.add.ellipse(425, 434, 128, 128);
		lighthouse_beach_trigger.scaleX = 0.9278195632706359;
		lighthouse_beach_trigger.scaleY = 0.4481710604790386;
		lighthouse_beach_trigger.alpha = 0.001;
		lighthouse_beach_trigger.isFilled = true;

		// lighthouse_beacon_trigger
		const lighthouse_beacon_trigger = this.add.ellipse(229, 183, 128, 128);
		lighthouse_beacon_trigger.scaleX = 0.9278195632706359;
		lighthouse_beacon_trigger.scaleY = 0.8705255332931107;
		lighthouse_beacon_trigger.alpha = 0.001;
		lighthouse_beacon_trigger.isFilled = true;

		// lighthouse_walk_trigger
        const lighthouse_walk_trigger = this.physics.add.sprite(770, 316, "lighthouse_walk_trigger");
		lighthouse_walk_trigger.scaleX = 1.0260972554174463;
		lighthouse_walk_trigger.scaleY = 1.0956461013829624;
		lighthouse_walk_trigger.alpha = 0.001;
		lighthouse_walk_trigger.alphaTopLeft = 0.001;
		lighthouse_walk_trigger.alphaTopRight = 0.001;
		lighthouse_walk_trigger.alphaBottomLeft = 0.001;
		lighthouse_walk_trigger.alphaBottomRight = 0.001;
		lighthouse_walk_trigger.body.setSize(1520, 960, false);
        this.collisionMap = this.createCollisionMap(this, 747, 320, "lighthouse_walk_trigger");

        // Setting arcade physics sprites starts here
		this.physics.add.existing(lighthouse_beach_trigger);
		this.physics.add.existing(lighthouse_beacon_trigger);
		// Setting arcade physics sprites ends here

        // Setting triggers starts here
        this.triggers.push([lighthouse_walk_trigger, () => {
            onWalkingTrigger(this);
        }]);

        this.triggers.push([lighthouse_beacon_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_BEACON);
        }]);

        this.triggers.push([lighthouse_beach_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_BEACH);
        }]);
        // Setting triggers ends here

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
            onJoinRoomTrigger(SCENE_ROOM_BEACON);
        });
        // All interactive events end here

        // this.audioManager.play(LIGHT_HOUSE_ROOM_MUSIC);
        super.createContent(this);
    }

    update() {
        super.update();
    }
}