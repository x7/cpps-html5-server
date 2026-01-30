import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { getClockTowerDay, getClockTowerTime } from "./snowfortsHelper";
import { createAnimation } from "../../../../../animations/animations";
import { SNOW_FORTS_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_SNOW_FORTS } from "../../../sceneNames";
import { RoomScene } from "../RoomScene";

export class SnowFortsScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_SNOW_FORTS);
    }

    init(data) {
		super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "snowforts",
            "paths": ["assets/world/rooms/snowforts/snowforts-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.BITMAP_FONT,
            "name": "StopwatchItalic",
            "paths": ["assets/fonts/StopwatchItalic.png", "assets/fonts/StopwatchItalic.xml"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.BITMAP_FONT,
            "name": "CCComicCrazyW00BoldItalic",
            "paths": ["assets/fonts/CCComicCrazyW00BoldItalic.png", "assets/fonts/CCComicCrazyW00BoldItalic.xml"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": SNOW_FORTS_ROOM_MUSIC,
            "paths": ["assets/world/rooms/snowforts/snowforts_music.mp3"]
        });
    }

    createContent() {
		// snowforts_mountains_background_png
		const snowforts_mountains_background_png = this.add.image(752, 95, "snowforts", "snowforts_mountains_background.png");
		snowforts_mountains_background_png.scaleX = 1.0094598019066363;
		snowforts_mountains_background_png.scaleY = 1.0906664490934204;

		// snowforts_base_layout_png
		const snowforts_base_layout_png = this.add.image(-120, 100, "snowforts", "snowforts_base_layout.png");
		snowforts_base_layout_png.scaleX = 1.0028122138238849;
		snowforts_base_layout_png.scaleY = 1.027371769818459;
		snowforts_base_layout_png.setOrigin(0, 0);

		// snowforts_clock_tower_left_wheel_png
		this.add.image(1028, 186, "snowforts", "snowforts_clock_tower_left_wheel.png");

		// snowforts_clock_tower_behind_wheel_png
		const snowforts_clock_tower_behind_wheel_png = this.add.image(1334, 145, "snowforts", "snowforts_clock_tower_behind_wheel.png");
		snowforts_clock_tower_behind_wheel_png.scaleX = 0.41932795057113115;
		snowforts_clock_tower_behind_wheel_png.scaleY = 0.3872200778767116;

		// snowforts_clock_tower_png
		const snowforts_clock_tower_png = this.add.image(1217, 216, "snowforts", "snowforts_clock_tower.png");
		snowforts_clock_tower_png.scaleX = 0.9949623883620735;
		snowforts_clock_tower_png.scaleY = 1.0279521799189706;

		// snowforts_club_penguin_text0001_png
		const snowforts_club_penguin_text0001_png = this.add.image(1129, 92, "snowforts", "snowforts_club_penguin_text0001.png");
		snowforts_club_penguin_text0001_png.scaleX = 0.4048007663482456;
		snowforts_club_penguin_text0001_png.scaleY = 0.37686756871930693;

		// snowforts_orange_flag_castle_png
		const snowforts_orange_flag_castle_png = this.add.image(510, 681, "snowforts", "snowforts_orange_flag_castle.png");
		snowforts_orange_flag_castle_png.scaleX = 1.097938452421572;
		snowforts_orange_flag_castle_png.scaleY = 0.9310045719584917;

		// snowforts_orange_flag_castle_extra_top_png
		const snowforts_orange_flag_castle_extra_top_png = this.add.image(891, 717, "snowforts", "snowforts_orange_flag_castle_extra_top.png");
		snowforts_orange_flag_castle_extra_top_png.scaleX = 0.9118505893643049;
		snowforts_orange_flag_castle_extra_top_png.scaleY = 1.0415713100344148;

		// snowforts_orange_flag_castle_extra_png
		const snowforts_orange_flag_castle_extra_png = this.add.image(794, 738, "snowforts", "snowforts_orange_flag_castle_extra.png");
		snowforts_orange_flag_castle_extra_png.scaleX = 0.9475041077547985;
		snowforts_orange_flag_castle_extra_png.scaleY = 0.9638740639188381;

		// snowforts_orange_flag_castle_flag0001_png
		const snowforts_orange_flag_castle_flag0001_png = this.add.sprite(457, 519, "snowforts", "snowforts_orange_flag_castle_flag0001.png");
		snowforts_orange_flag_castle_flag0001_png.scaleX = 1.2059349820333343;
		snowforts_orange_flag_castle_flag0001_png.scaleY = 0.9335717620908558;

		// snowforts_black_flag_castle_png
		const snowforts_black_flag_castle_png = this.add.image(872, 453, "snowforts", "snowforts_black_flag_castle.png");
		snowforts_black_flag_castle_png.scaleX = 1.0334672908427156;
		snowforts_black_flag_castle_png.scaleY = 1.065319230187652;

		// snowforts_top_castle_part_2_png
		const snowforts_top_castle_part_2_png = this.add.image(1197, 569, "snowforts", "snowforts_top_castle_part_2.png");
		snowforts_top_castle_part_2_png.scaleX = 1.1615046490896928;
		snowforts_top_castle_part_2_png.scaleY = 0.9754063481405927;

		// snowforts_top_castle_part_png
		const snowforts_top_castle_part_png = this.add.image(1095, 461, "snowforts", "snowforts_top_castle_part.png");
		snowforts_top_castle_part_png.scaleX = 0.9043287423201432;
		snowforts_top_castle_part_png.scaleY = 0.7784732782316812;

		// snowforts_top_castle_part_3_png
		const snowforts_top_castle_part_3_png = this.add.image(1088, 540, "snowforts", "snowforts_top_castle_part_3.png");
		snowforts_top_castle_part_3_png.scaleX = 0.8318858598048896;
		snowforts_top_castle_part_3_png.scaleY = 1.0457212529053335;

		// snowforts_black_flag_castle_yay0001_png
		const snowforts_black_flag_castle_yay0001_png = this.add.sprite(812, 352, "snowforts", "snowforts_black_flag_castle_yay0001.png");
		snowforts_black_flag_castle_yay0001_png.scaleX = 1.0111115542210765;
		snowforts_black_flag_castle_yay0001_png.scaleY = 1.1842937128555389;
		snowforts_black_flag_castle_yay0001_png.tintTopLeft = 3019846;
		snowforts_black_flag_castle_yay0001_png.tintTopRight = 3019846;
		snowforts_black_flag_castle_yay0001_png.tintBottomLeft = 3019846;
		snowforts_black_flag_castle_yay0001_png.tintBottomRight = 3019846;

		// snowforts_penguin_snowman_png
		const snowforts_penguin_snowman_png = this.add.image(1420, 705, "snowforts", "snowforts_penguin_snowman.png");
		snowforts_penguin_snowman_png.scaleX = 1.0315319965949403;
		snowforts_penguin_snowman_png.scaleY = 1.1115703223916658;

		// snowforts_clock_tower_time_text
		const snowforts_clock_tower_time_text = this.add.bitmapText(1080, 146, "StopwatchItalic", "2:41");
		snowforts_clock_tower_time_text.scaleX = 0.6371418785460776;
		snowforts_clock_tower_time_text.scaleY = 0.9119000884813709;
		snowforts_clock_tower_time_text.text = "2:41";
		snowforts_clock_tower_time_text.fontSize = 72;

		// snowforts_clock_tower_merdiem_text
		const snowforts_clock_tower_merdiem_text = this.add.bitmapText(1158, 157, "StopwatchItalic", "PM");
		snowforts_clock_tower_merdiem_text.scaleX = 0.5124173260810112;
		snowforts_clock_tower_merdiem_text.scaleY = 0.4267693989021566;
		snowforts_clock_tower_merdiem_text.text = "PM";
		snowforts_clock_tower_merdiem_text.fontSize = 72;

		// snowforts_clock_tower_day_text
		const snowforts_clock_tower_day_text = this.add.bitmapText(1097, 239, "CCComicCrazyW00BoldItalic", "MONDAY");
		snowforts_clock_tower_day_text.scaleX = 0.2078008466727608;
		snowforts_clock_tower_day_text.scaleY = 0.21502043693235023;
		snowforts_clock_tower_day_text.angle = 5;
		snowforts_clock_tower_day_text.text = "MONDAY";
		snowforts_clock_tower_day_text.fontSize = 60;

		// snowforts_target0001_png
		const snowforts_target0001_png = this.add.image(1325, 205, "snowforts", "snowforts_target0001.png");
		snowforts_target0001_png.scaleX = 0.4140732771733937;
		snowforts_target0001_png.scaleY = 0.366244669626941;

		// snowforts_clock_tower_right_wheel_png
		const snowforts_clock_tower_right_wheel_png = this.add.image(1272, 166, "snowforts", "snowforts_clock_tower_right_wheel.png");
		snowforts_clock_tower_right_wheel_png.scaleX = 1.0055328425580643;
		snowforts_clock_tower_right_wheel_png.scaleY = 0.8598798810582612;

		// Setting instances start here
		this.snowforts_clock_tower_time_text = snowforts_clock_tower_time_text;
		this.snowforts_clock_tower_day_text = snowforts_clock_tower_day_text;
		// Setting instances end here

		// Animations start here
		createAnimation({
			"scene": this,
			"logicalAnimationKey": "snowforts_bottom_flag",
			"phaserAnimationKey": "snowforts_bottom_flag_play",
			"textureKey": "snowforts",
			"framePrefix": "snowforts_orange_flag_castle_flag",
			"frames": ["0001", "0002", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "0010", "0011", "0012", "0013", "0014", "0015", "0016"],
			"framesExtension": ".png",
			"frameRate": 24,
			"repeat": -1
		});

		createAnimation({
			"scene": this,
			"logicalAnimationKey": "snowforts_top_flag",
			"phaserAnimationKey": "snowforts_top_flag_play",
			"textureKey": "snowforts",
			"framePrefix": "snowforts_black_flag_castle_yay",
			"frames": ["0001", "0002", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "0010", "0011", "0012", "0013", "0014", "0015", "0016"],
			"framesExtension": ".png",
			"frameRate": 24,
			"repeat": -1
		});

		snowforts_orange_flag_castle_flag0001_png.play("snowforts_bottom_flag_play");
		snowforts_black_flag_castle_yay0001_png.play("snowforts_top_flag_play");
		// Animations end here

		this.audioManager.play(SNOW_FORTS_ROOM_MUSIC);
		super.createContent(this);
    }

	update() {
		super.update();

		const time = getClockTowerTime();
		if(time !== this.snowforts_clock_tower_time_text.text) {
			this.snowforts_clock_tower_time_text.text = time;
		}

		const day = getClockTowerDay();
		if(day !== this.snowforts_clock_tower_day_text.text) {
			this.snowforts_clock_tower_day_text.text = day.toUpperCase();
		}
	}
}