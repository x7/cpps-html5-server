import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { PUFFLE_HOTEL_ROOF_ELEVATOR_CLOSE, PUFFLE_HOTEL_ROOF_ELEVATOR_OPEN, PUFFLE_HOTEL_ROOF_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_PUFFLE_HOTEL_ROOF } from "../../../sceneNames";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

export class PuffleHotelRoof extends RoomScene {
    constructor() {
        super(SCENE_ROOM_PUFFLE_HOTEL_ROOF);
    }

    init(data) {
        super.init(data);

        // Globals
        this.assetPath = "assets/world/rooms/pufflehotelroof/";
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "pufflehotelroof",
            "paths": [`${this.assetPath}pufflehotelroof-pack.json`]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "puffle_hotel_roof_walking_trigger",
            "paths": [`${this.assetPath}puffle_hotel_roof_walking_trigger.png`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_HOTEL_ROOF_ROOM_MUSIC,
            "paths": [`${this.assetPath}${PUFFLE_HOTEL_ROOF_ROOM_MUSIC}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_HOTEL_ROOF_ELEVATOR_OPEN,
            "paths": [`${this.assetPath}${PUFFLE_HOTEL_ROOF_ELEVATOR_OPEN}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_HOTEL_ROOF_ELEVATOR_CLOSE,
            "paths": [`${this.assetPath}${PUFFLE_HOTEL_ROOF_ELEVATOR_CLOSE}.mp3`]
        });
    }

    createContent() {
        // puffle_hotel_roof_blue_sky_png
		const puffle_hotel_roof_blue_sky_png = this.add.image(725, 153, "pufflehotelroof", "puffle_hotel_roof_blue_sky.png");
		puffle_hotel_roof_blue_sky_png.scaleY = 1.2793311896823787;

		// puffle_hotel_roof_clouds_png
		const puffle_hotel_roof_clouds_png = this.add.image(794, 155, "pufflehotelroof", "puffle_hotel_roof_clouds.png");
		puffle_hotel_roof_clouds_png.scaleY = 0.901146283863851;

		// puffle_hotel_roof_water_png
		const puffle_hotel_roof_water_png = this.add.image(776, 308, "pufflehotelroof", "puffle_hotel_roof_water.png");

		// puffle_hotel_roof_main_background_png
		const puffle_hotel_roof_main_background_png = this.add.image(798, 477, "pufflehotelroof", "puffle_hotel_roof_main_background.png");

		// puffle_hotel_roof_diving_board_stands_png_1
		const puffle_hotel_roof_diving_board_stands_png_1 = this.add.image(785, 433, "pufflehotelroof", "puffle_hotel_roof_diving_board_stands.png");

		// puffle_hotel_roof_diving_board_png
		const puffle_hotel_roof_diving_board_png = this.add.image(786, 460, "pufflehotelroof", "puffle_hotel_roof_diving_board.png");

		// puffle_hotel_roof_diving_board_stands_png
		const puffle_hotel_roof_diving_board_stands_png = this.add.image(724, 472, "pufflehotelroof", "puffle_hotel_roof_diving_board_stands.png");

		// puffle_hotel_roof_top_ladder_png
		const puffle_hotel_roof_top_ladder_png = this.add.image(814, 549, "pufflehotelroof", "puffle_hotel_roof_top_ladder.png");

		// puffle_hotel_roof_bottom_ladder_png
		const puffle_hotel_roof_bottom_ladder_png = this.add.image(833, 555, "pufflehotelroof", "puffle_hotel_roof_bottom_ladder.png");

		// puffle_hotel_roof_puffle_launch_circle_colors0001_png
		const puffle_hotel_roof_puffle_launch_circle_colors0001_png = this.add.image(1454, 531, "pufflehotelroof", "puffle_hotel_roof_puffle_launch_circle_colors0001.png");

		// puffle_hotel_roof_disco_top0001_png
		const puffle_hotel_roof_disco_top0001_png = this.add.sprite(1259, 634, "pufflehotelroof", "puffle_hotel_roof_disco_top0001.png");

		// puffle_hotel_roof_disco0001_png
		const puffle_hotel_roof_disco0001_png = this.add.sprite(1291, 773, "pufflehotelroof", "puffle_hotel_roof_disco0001.png");

		// puffle_hotel_roof_sleeping_table_png_2
		const puffle_hotel_roof_sleeping_table_png_2 = this.add.image(764, 317, "pufflehotelroof", "puffle_hotel_roof_sleeping_table.png");
		puffle_hotel_roof_sleeping_table_png_2.flipX = true;

		// puffle_hotel_roof_white_railing_png
		const puffle_hotel_roof_white_railing_png = this.add.image(707, 343, "pufflehotelroof", "puffle_hotel_roof_white_railing.png");

		// puffle_hotel_roof_disco_bottom0001_png
		const puffle_hotel_roof_disco_bottom0001_png = this.add.sprite(1407, 777, "pufflehotelroof", "puffle_hotel_roof_disco_bottom0001.png");

		// puffle_hotel_roof_sleeping_chair0001_png
		const puffle_hotel_roof_sleeping_chair0001_png = this.add.image(1107, 274, "pufflehotelroof", "puffle_hotel_roof_sleeping_chair0001.png");
		puffle_hotel_roof_sleeping_chair0001_png.scaleX = 0.9643634554433094;
		puffle_hotel_roof_sleeping_chair0001_png.scaleY = 0.9409505258462277;

		// puffle_hotel_roof_sleeping_chair0002_png
		const puffle_hotel_roof_sleeping_chair0002_png = this.add.image(1113, 272, "pufflehotelroof", "puffle_hotel_roof_sleeping_chair0002.png");
		puffle_hotel_roof_sleeping_chair0002_png.visible = false;

		// puffle_hotel_roof_table_with_blankets_png
		const puffle_hotel_roof_table_with_blankets_png = this.add.image(1258, 389, "pufflehotelroof", "puffle_hotel_roof_table_with_blankets.png");

		// puffle_hotel_roof_blue_wall_w_towel_png
		const puffle_hotel_roof_blue_wall_w_towel_png = this.add.image(645, 550, "pufflehotelroof", "puffle_hotel_roof_blue_wall_w_towel.png");

		// puffle_hotel_roof_top_feeding_seats0001_png
		const puffle_hotel_roof_top_feeding_seats0001_png = this.add.image(283, 334, "pufflehotelroof", "puffle_hotel_roof_top_feeding_seats0001.png");

		// puffle_hotel_roof_top_feeding_seats0002_png
		const puffle_hotel_roof_top_feeding_seats0002_png = this.add.image(285, 336, "pufflehotelroof", "puffle_hotel_roof_top_feeding_seats0002.png");
		puffle_hotel_roof_top_feeding_seats0002_png.visible = false;

		// puffle_hotel_roof_top_feeding_seats0001_png_1
		const puffle_hotel_roof_top_feeding_seats0001_png_1 = this.add.image(444, 336, "pufflehotelroof", "puffle_hotel_roof_top_feeding_seats0001.png");

		// puffle_hotel_roof_top_feeding_seats0002_png_1
		const puffle_hotel_roof_top_feeding_seats0002_png_1 = this.add.image(441, 339, "pufflehotelroof", "puffle_hotel_roof_top_feeding_seats0002.png");
		puffle_hotel_roof_top_feeding_seats0002_png_1.visible = false;

		// puffle_hotel_roof_top_seats_table_png
		const puffle_hotel_roof_top_seats_table_png = this.add.image(391, 438, "pufflehotelroof", "puffle_hotel_roof_top_seats_table.png");

		// puffle_hotel_roof_inside_elevator0001_png
		const puffle_hotel_roof_inside_elevator0001_png = this.add.image(98, 448, "pufflehotelroof", "puffle_hotel_roof_inside_elevator0001.png");

		// puffle_hotel_roof_elevator_door0001_png
		const puffle_hotel_roof_elevator_door0001_png = this.add.sprite(91, 451, "pufflehotelroof", "puffle_hotel_roof_elevator_door0001.png");

		// puffle_hotel_roof_top_blue_png
		const puffle_hotel_roof_top_blue_png = this.add.image(380, 407, "pufflehotelroof", "puffle_hotel_roof_top_blue.png");

		// puffle_hotel_roof_elevator_outline_png
		const puffle_hotel_roof_elevator_outline_png = this.add.image(77, 460, "pufflehotelroof", "puffle_hotel_roof_elevator_outline.png");

		// puffle_hotel_roof_elevator_top_png
		const puffle_hotel_roof_elevator_top_png = this.add.image(69, 234, "pufflehotelroof", "puffle_hotel_roof_elevator_top.png");

		// puffle_hotel_roooof_left_cash_table_png
		const puffle_hotel_roooof_left_cash_table_png = this.add.image(174, 651, "pufflehotelroof", "puffle_hotel_roooof_left_cash_table.png");

		// puffle_hotel_roof_puffle_launch_hover_trigger_png
		const puffle_hotel_roof_puffle_launch_hover_trigger_png = this.add.image(1458, 445, "pufflehotelroof", "puffle_hotel_roof_sleeping_chair0004.png");
		puffle_hotel_roof_puffle_launch_hover_trigger_png.scaleY = 1.3210371626138384;
		puffle_hotel_roof_puffle_launch_hover_trigger_png.alpha = 0.001;
		puffle_hotel_roof_puffle_launch_hover_trigger_png.alphaTopLeft = 0.001;
		puffle_hotel_roof_puffle_launch_hover_trigger_png.alphaTopRight = 0.001;
		puffle_hotel_roof_puffle_launch_hover_trigger_png.alphaBottomLeft = 0.001;
		puffle_hotel_roof_puffle_launch_hover_trigger_png.alphaBottomRight = 0.001;

		// puffle_hotel_roof_bottom_blue_png
		const puffle_hotel_roof_bottom_blue_png = this.add.image(1575, 635, "pufflehotelroof", "puffle_hotel_roof_bottom_blue.png");

		// puffle_hotel_roof_bottom_seats_png
		const puffle_hotel_roof_bottom_seats_png = this.add.image(786, 864, "pufflehotelroof", "puffle_hotel_roof_bottom_seats.png");

		// puffle_hotel_roof_bottom_statues_png
		const puffle_hotel_roof_bottom_statues_png = this.add.image(754, 867, "pufflehotelroof", "puffle_hotel_roof_bottom_statues.png");

		// puffle_hotel_roof_bottom_seats_table_png
		const puffle_hotel_roof_bottom_seats_table_png = this.add.image(551, 776, "pufflehotelroof", "puffle_hotel_roof_bottom_seats_table.png");

		// puffle_hotel_roof_bottom_seats_table_png_1
		const puffle_hotel_roof_bottom_seats_table_png_1 = this.add.image(1016, 778, "pufflehotelroof", "puffle_hotel_roof_bottom_seats_table.png");

		// puffle_hotel_roof_puffle_eat_trigger_1_png
		const puffle_hotel_roof_puffle_eat_trigger_1_png = this.add.image(273, 373, "pufflehotelroof", "puffle_hotel_roof_puffle_eat_trigger_1.png");
		puffle_hotel_roof_puffle_eat_trigger_1_png.alpha = 0.001;
		puffle_hotel_roof_puffle_eat_trigger_1_png.alphaTopLeft = 0.001;
		puffle_hotel_roof_puffle_eat_trigger_1_png.alphaTopRight = 0.001;
		puffle_hotel_roof_puffle_eat_trigger_1_png.alphaBottomLeft = 0.001;
		puffle_hotel_roof_puffle_eat_trigger_1_png.alphaBottomRight = 0.001;

		// puffle_hotel_roof_puffle_eat_trigger_2_png
		const puffle_hotel_roof_puffle_eat_trigger_2_png = this.add.image(448, 372, "pufflehotelroof", "puffle_hotel_roof_puffle_eat_trigger_2.png");
		puffle_hotel_roof_puffle_eat_trigger_2_png.alpha = 0.001;
		puffle_hotel_roof_puffle_eat_trigger_2_png.alphaTopLeft = 0.001;
		puffle_hotel_roof_puffle_eat_trigger_2_png.alphaTopRight = 0.001;
		puffle_hotel_roof_puffle_eat_trigger_2_png.alphaBottomLeft = 0.001;
		puffle_hotel_roof_puffle_eat_trigger_2_png.alphaBottomRight = 0.001;

		// puffle_hotel_roof_sleeping_chair0002_png_1
		const puffle_hotel_roof_sleeping_chair0002_png_1 = this.add.image(1115, 274, "pufflehotelroof", "puffle_hotel_roof_sleeping_chair0002.png");
		puffle_hotel_roof_sleeping_chair0002_png_1.visible = false;

		// puffle_hotel_roof_sleeping_table_png_1
		const puffle_hotel_roof_sleeping_table_png_1 = this.add.image(1002, 315, "pufflehotelroof", "puffle_hotel_roof_sleeping_table.png");

		// puffle_hotel_roof_sleeping_chair_2_hover_trigger
		const puffle_hotel_roof_sleeping_chair_2_hover_trigger = this.add.ellipse(1115, 284, 128, 128);
		puffle_hotel_roof_sleeping_chair_2_hover_trigger.scaleX = 1.638775513788919;
		puffle_hotel_roof_sleeping_chair_2_hover_trigger.scaleY = 1.3795959425630644;
		puffle_hotel_roof_sleeping_chair_2_hover_trigger.alpha = 0.001;
		puffle_hotel_roof_sleeping_chair_2_hover_trigger.isFilled = true;

		// puffle_hotel_roof_lower_seats_png
		const puffle_hotel_roof_lower_seats_png = this.add.image(248, 266, "pufflehotelroof", "puffle_hotel_roof_lower_seats.png");
		puffle_hotel_roof_lower_seats_png.scaleX = 1.0317003304706158;

		// puffle_hotel_roof_sleeping_chair_one0001_png
		const puffle_hotel_roof_sleeping_chair_one0001_png = this.add.image(889, 274, "pufflehotelroof", "puffle_hotel_roof_sleeping_chair_one0001.png");

		// puffle_hotel_roof_sleeping_chair_one0002_png
		const puffle_hotel_roof_sleeping_chair_one0002_png = this.add.image(888, 274, "pufflehotelroof", "puffle_hotel_roof_sleeping_chair_one0002.png");
		puffle_hotel_roof_sleeping_chair_one0002_png.visible = false;

		// puffle_hotel_roof_puffle_launch_cannon0001_png
		const puffle_hotel_roof_puffle_launch_cannon0001_png = this.add.sprite(1287, 292, "pufflehotelroof", "puffle_hotel_roof_puffle_launch_cannon0001.png");

		// puffle_hotel_roof_sleeping_chair_1_hover_trigger_1
		const puffle_hotel_roof_sleeping_chair_1_hover_trigger_1 = this.add.ellipse(890, 283, 128, 128);
		puffle_hotel_roof_sleeping_chair_1_hover_trigger_1.scaleX = 1.638775513788919;
		puffle_hotel_roof_sleeping_chair_1_hover_trigger_1.scaleY = 1.3795959425630644;
		puffle_hotel_roof_sleeping_chair_1_hover_trigger_1.alpha = 0.001;
		puffle_hotel_roof_sleeping_chair_1_hover_trigger_1.isFilled = true;

		// puffle_hotel_roof_hungry_seats_hover_trigger_2
		const puffle_hotel_roof_hungry_seats_hover_trigger_2 = this.add.rectangle(449, 372, 128, 128);
		puffle_hotel_roof_hungry_seats_hover_trigger_2.scaleX = 1.4005322685929205;
		puffle_hotel_roof_hungry_seats_hover_trigger_2.scaleY = 0.3996331778813248;
		puffle_hotel_roof_hungry_seats_hover_trigger_2.alpha = 0.001;
		puffle_hotel_roof_hungry_seats_hover_trigger_2.isFilled = true;

		// puffle_hotel_roof_hungry_seats_hover_trigger_1
		const puffle_hotel_roof_hungry_seats_hover_trigger_1 = this.add.rectangle(264, 371, 128, 128);
		puffle_hotel_roof_hungry_seats_hover_trigger_1.scaleX = 1.4005322685929205;
		puffle_hotel_roof_hungry_seats_hover_trigger_1.scaleY = 0.3996331778813248;
		puffle_hotel_roof_hungry_seats_hover_trigger_1.alpha = 0.001;
		puffle_hotel_roof_hungry_seats_hover_trigger_1.isFilled = true;

		// puffle_hotel_roof_diving_board_hover_trigger
		const puffle_hotel_roof_diving_board_hover_trigger = this.add.rectangle(791, 457, 128, 128);
		puffle_hotel_roof_diving_board_hover_trigger.scaleX = 1.3900994994927207;
		puffle_hotel_roof_diving_board_hover_trigger.scaleY = 0.6758613908358202;
		puffle_hotel_roof_diving_board_hover_trigger.alpha = 0.001;
		puffle_hotel_roof_diving_board_hover_trigger.isFilled = true;

		// puffle_hotel_roof_dance_studio_hover_trigger
		const puffle_hotel_roof_dance_studio_hover_trigger = this.add.rectangle(1333, 676, 128, 128);
		puffle_hotel_roof_dance_studio_hover_trigger.scaleX = 2.0655982807061;
		puffle_hotel_roof_dance_studio_hover_trigger.scaleY = 1.8472627010956626;
		puffle_hotel_roof_dance_studio_hover_trigger.alpha = 0.001;
		puffle_hotel_roof_dance_studio_hover_trigger.isFilled = true;

        // puffle_hotel_roof_elevator_hover_trigger
		const puffle_hotel_roof_elevator_hover_trigger = this.add.rectangle(96, 441, 128, 128);
		puffle_hotel_roof_elevator_hover_trigger.scaleX = 1.3557067634622382;
		puffle_hotel_roof_elevator_hover_trigger.scaleY = 2.38858088250871;
		puffle_hotel_roof_elevator_hover_trigger.alpha = 0.001;
		puffle_hotel_roof_elevator_hover_trigger.isFilled = true;

        // puffle_hotel_roof_puffle_launch_cannon0150_png
		const puffle_hotel_roof_puffle_launch_cannon0150_png = this.add.image(1284, 301, "pufflehotelroof", "puffle_hotel_roof_puffle_launch_cannon0150.png");
		puffle_hotel_roof_puffle_launch_cannon0150_png.visible = false;

		// puffle_hotel_roof_walking_trigger_png
		const puffle_hotel_roof_walking_trigger_png = this.physics.add.sprite(806, 463, "puffle_hotel_roof_walking_trigger");
		puffle_hotel_roof_walking_trigger_png.alpha = 0.001;
		puffle_hotel_roof_walking_trigger_png.alphaTopLeft = 0.001;
		puffle_hotel_roof_walking_trigger_png.alphaTopRight = 0.001;
		puffle_hotel_roof_walking_trigger_png.alphaBottomLeft = 0.001;
		puffle_hotel_roof_walking_trigger_png.alphaBottomRight = 0.001;
		puffle_hotel_roof_walking_trigger_png.body.setSize(1600, 1040, false);
		this.collisionMap = this.createCollisionMap(this, 806, 463, "puffle_hotel_roof_walking_trigger");

		// Setting triggers starts here
		this.triggers.push([puffle_hotel_roof_walking_trigger_png, () => {
			onWalkingTrigger(this);
		}]);
		// Setting triggers ends here

        // Creating animations starts here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "puffle_hotel_roof_puffle_launch_cannon_animation",
            "phaserAnimationKey": "puffle_hotel_roof_puffle_launch_cannon_animation_play",
            "textureKey": "pufflehotelroof",
            "framePrefix": "puffle_hotel_roof_puffle_launch_cannon",
            "frames": Array.from({ length: 150 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "puffle_hotel_roof_golden_elevator_animation",
            "phaserAnimationKey": "puffle_hotel_roof_golden_elevator_animation_play",
            "textureKey": "pufflehotelroof",
            "framePrefix": "puffle_hotel_roof_elevator_door",
            "frames": Array.from({ length: 10 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "puffle_hotel_roof_golden_elevator_close_animation",
            "phaserAnimationKey": "puffle_hotel_roof_golden_elevator_close_animation_play",
            "textureKey": "pufflehotelroof",
            "framePrefix": "puffle_hotel_roof_elevator_door",
            "frames": Array.from({ length: 10 }, (_, i) => String(i + 10).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });
        // Creating animations ends here

        // Setting all interactives sprites starts here
        puffle_hotel_roof_puffle_launch_hover_trigger_png.setInteractive({ useHandCursor: true });
        puffle_hotel_roof_sleeping_chair_1_hover_trigger_1.setInteractive({ useHandCursor: true });
        puffle_hotel_roof_sleeping_chair_2_hover_trigger.setInteractive({ useHandCursor: true });
        puffle_hotel_roof_hungry_seats_hover_trigger_2.setInteractive({ useHandCursor: true });
        puffle_hotel_roof_hungry_seats_hover_trigger_1.setInteractive({ useHandCursor: true });
        puffle_hotel_roof_diving_board_hover_trigger.setInteractive({ useHandCursor: true });
        puffle_hotel_roof_dance_studio_hover_trigger.setInteractive({ useHandCursor: true });
        puffle_hotel_roof_elevator_hover_trigger.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events starts here
        puffle_hotel_roof_sleeping_chair_1_hover_trigger_1.on("pointerover", () => {
            puffle_hotel_roof_sleeping_chair_one0001_png.visible = false;
            puffle_hotel_roof_sleeping_chair_one0002_png.visible = true;
        });

        puffle_hotel_roof_sleeping_chair_1_hover_trigger_1.on("pointerout", () => {
            puffle_hotel_roof_sleeping_chair_one0001_png.visible = true;
            puffle_hotel_roof_sleeping_chair_one0002_png.visible = false;
        });

        puffle_hotel_roof_sleeping_chair_2_hover_trigger.on("pointerover", () => {
            puffle_hotel_roof_sleeping_chair0001_png.visible = false;
            puffle_hotel_roof_sleeping_chair0002_png.visible = true;
        });

        puffle_hotel_roof_sleeping_chair_2_hover_trigger.on("pointerout", () => {
            puffle_hotel_roof_sleeping_chair0001_png.visible = true;
            puffle_hotel_roof_sleeping_chair0002_png.visible = false;
        });

        puffle_hotel_roof_puffle_launch_hover_trigger_png.on("pointerover", () => {
            puffle_hotel_roof_puffle_launch_cannon0001_png.visible = false;
            puffle_hotel_roof_puffle_launch_cannon0150_png.visible = true;
        });

        puffle_hotel_roof_puffle_launch_hover_trigger_png.on("pointerout", () => {
            puffle_hotel_roof_puffle_launch_cannon0001_png.visible = true;
            puffle_hotel_roof_puffle_launch_cannon0150_png.visible = false;
        });

        puffle_hotel_roof_elevator_hover_trigger.on("pointerover", () => {
            puffle_hotel_roof_elevator_door0001_png.play("puffle_hotel_roof_golden_elevator_animation_play");
            this.audioManager.play(PUFFLE_HOTEL_ROOF_ELEVATOR_OPEN);
        }); 

        puffle_hotel_roof_elevator_hover_trigger.on("pointerout", () => {
            puffle_hotel_roof_elevator_door0001_png.play("puffle_hotel_roof_golden_elevator_close_animation_play");
            this.audioManager.play(PUFFLE_HOTEL_ROOF_ELEVATOR_CLOSE);
        }); 

        puffle_hotel_roof_hungry_seats_hover_trigger_1.on("pointerover", () => {
            puffle_hotel_roof_top_feeding_seats0001_png.visible = false;
            puffle_hotel_roof_top_feeding_seats0002_png.visible = true;
        });

        puffle_hotel_roof_hungry_seats_hover_trigger_1.on("pointerout", () => {
            puffle_hotel_roof_top_feeding_seats0001_png.visible = true;
            puffle_hotel_roof_top_feeding_seats0002_png.visible = false;
        }); 

        puffle_hotel_roof_hungry_seats_hover_trigger_2.on("pointerover", () => {
            puffle_hotel_roof_top_feeding_seats0001_png_1.visible = false;
            puffle_hotel_roof_top_feeding_seats0002_png_1.visible = true;
        });

        puffle_hotel_roof_hungry_seats_hover_trigger_2.on("pointerout", () => {
            puffle_hotel_roof_top_feeding_seats0001_png_1.visible = true;
            puffle_hotel_roof_top_feeding_seats0002_png_1.visible = false;
        });
        // All interactive events ends here

        this.audioManager.play(PUFFLE_HOTEL_ROOF_ROOM_MUSIC);
		super.createContent(this);
    }

	update() {
		super.update();
	}
}