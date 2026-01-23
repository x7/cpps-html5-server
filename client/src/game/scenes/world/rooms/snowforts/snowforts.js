import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { BaseScene } from "../../../base/baseScene";
import { getClockTowerDay, getClockTowerTime } from "./snowfortsHelper";
import { createAnimation } from "../../../../../animations/animations";

export class SnowFortsScene extends BaseScene {
    constructor() {
        super("SnowFortsScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
    }

    preloadContent() {
        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.PACK,
            name: "snowforts",
            paths: ["assets/world/rooms/snowforts/snowforts-pack.json"]
        });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.BITMAP_FONT,
            name: "StopwatchItalic",
            paths: ["assets/fonts/StopwatchItalic.png", "assets/fonts/StopwatchItalic.xml"]
        })

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.BITMAP_FONT,
            name: "CCComicCrazyW00BoldItalic",
            paths: ["assets/fonts/CCComicCrazyW00BoldItalic.png", "assets/fonts/CCComicCrazyW00BoldItalic.xml"]
        })
    }

    createContent() {
		// snowforts_mountains_background_png
		const snowforts_mountains_background_png = this.add.image(625, 59, "snowforts", "snowforts_mountains_background.png");
		snowforts_mountains_background_png.scaleX = 0.8625695707939331;
		snowforts_mountains_background_png.scaleY = 0.8525225154867759;

		// snowforts_base_layout_png
		const snowforts_base_layout_png = this.add.image(615, 404, "snowforts", "snowforts_base_layout.png");
		snowforts_base_layout_png.scaleX = 0.8345295556424566;
		snowforts_base_layout_png.scaleY = 0.7670248165715211;

		// snowforts_clock_tower_behind_wheel_png
		const snowforts_clock_tower_behind_wheel_png = this.add.image(1086, 110, "snowforts", "snowforts_clock_tower_behind_wheel.png");
		snowforts_clock_tower_behind_wheel_png.scaleX = 0.41932795057113115;
		snowforts_clock_tower_behind_wheel_png.scaleY = 0.3872200778767116;

		this.add.image(831, 129, "snowforts", "snowforts_clock_tower_left_wheel.png");

		// snowforts_clock_tower_png
		const snowforts_clock_tower_png = this.add.image(986, 154, "snowforts", "snowforts_clock_tower.png");
		snowforts_clock_tower_png.scaleX = 0.8267280917504921;
		snowforts_clock_tower_png.scaleY = 0.795937771726575;

		// snowforts_club_penguin_text0001_png
		const snowforts_club_penguin_text0001_png = this.add.image(914, 58, "snowforts", "snowforts_club_penguin_text0001.png");
		snowforts_club_penguin_text0001_png.scaleX = 0.3604739097190109;
		snowforts_club_penguin_text0001_png.scaleY = 0.3655748237560937;

		// snowforts_target0001_png
		const snowforts_target0001_png = this.add.image(1080, 144, "snowforts", "snowforts_target0001.png");
		snowforts_target0001_png.scaleX = 0.36483753754471415;
		snowforts_target0001_png.scaleY = 0.32543040057907496;

		// snowforts_orange_flag_castle_png
		const snowforts_orange_flag_castle_png = this.add.image(405, 482, "snowforts", "snowforts_orange_flag_castle.png");
		snowforts_orange_flag_castle_png.scaleX = 0.8700798471954918;
		snowforts_orange_flag_castle_png.scaleY = 0.7550859934580525;

		// snowforts_orange_flag_castle_extra_top_png
		const snowforts_orange_flag_castle_extra_top_png = this.add.image(731, 507, "snowforts", "snowforts_orange_flag_castle_extra_top.png");
		snowforts_orange_flag_castle_extra_top_png.scaleX = 0.6762058727916477;
		snowforts_orange_flag_castle_extra_top_png.scaleY = 0.8690250021140393;

		// snowforts_orange_flag_castle_extra_png
		const snowforts_orange_flag_castle_extra_png = this.add.image(643, 526, "snowforts", "snowforts_orange_flag_castle_extra.png");
		snowforts_orange_flag_castle_extra_png.scaleX = 0.8121815103210849;
		snowforts_orange_flag_castle_extra_png.scaleY = 0.7791187751177684;

		// snowforts_orange_flag_castle_flag0001_png
		const snowforts_orange_flag_castle_flag0001_png = this.add.sprite(364, 354, "snowforts", "snowforts_orange_flag_castle_flag0001.png");

		// snowforts_black_flag_castle_png
		const snowforts_black_flag_castle_png = this.add.image(702, 328, "snowforts", "snowforts_black_flag_castle.png");
		snowforts_black_flag_castle_png.scaleX = 0.82518142868452;
		snowforts_black_flag_castle_png.scaleY = 0.7370834384596294;

		// snowforts_top_castle_part_2_png
		const snowforts_top_castle_part_2_png = this.add.image(998, 408, "snowforts", "snowforts_top_castle_part_2.png");
		snowforts_top_castle_part_2_png.scaleX = 0.8178618717636402;
		snowforts_top_castle_part_2_png.scaleY = 0.7372902515718576;

		// snowforts_top_castle_part_png
		const snowforts_top_castle_part_png = this.add.image(882, 332, "snowforts", "snowforts_top_castle_part.png");
		snowforts_top_castle_part_png.scaleX = 0.7984092457518683;
		snowforts_top_castle_part_png.scaleY = 0.7614916247458905;

		// snowforts_top_castle_part_3_png
		const snowforts_top_castle_part_3_png = this.add.image(890, 389, "snowforts", "snowforts_top_castle_part_3.png");
		snowforts_top_castle_part_3_png.scaleX = 0.8318858598048896;
		snowforts_top_castle_part_3_png.scaleY = 0.711716824579167;

		// snowforts_black_flag_castle_yay0001_png
		const snowforts_black_flag_castle_yay0001_png = this.add.sprite(649, 260, "snowforts", "snowforts_black_flag_castle_yay0001.png");
		snowforts_black_flag_castle_yay0001_png.tintTopLeft = 3019846;
		snowforts_black_flag_castle_yay0001_png.tintTopRight = 3019846;
		snowforts_black_flag_castle_yay0001_png.tintBottomLeft = 3019846;
		snowforts_black_flag_castle_yay0001_png.tintBottomRight = 3019846;

		// snowforts_penguin_snowman_png
		const snowforts_penguin_snowman_png = this.add.image(1144, 525, "snowforts", "snowforts_penguin_snowman.png");
		snowforts_penguin_snowman_png.scaleX = 0.822616135391244;
		snowforts_penguin_snowman_png.scaleY = 0.8260016416756066;

		// snowforts_clock_tower_time_text
		this.snowforts_clock_tower_time_text = this.add.bitmapText(870, 92, "StopwatchItalic", "2:41");
		this.snowforts_clock_tower_time_text.scaleX = 0.563927106950759;
		this.snowforts_clock_tower_time_text.scaleY = 0.8422377528008754;
		this.snowforts_clock_tower_time_text.text = "2:41";
		this.snowforts_clock_tower_time_text.fontSize = 72;

		// snowforts_clock_tower_merdiem_text
		const snowforts_clock_tower_merdiem_text = this.add.bitmapText(943, 104, "StopwatchItalic", "PM");
		snowforts_clock_tower_merdiem_text.scaleX = 0.5124173260810112;
		snowforts_clock_tower_merdiem_text.scaleY = 0.4267693989021566;
		snowforts_clock_tower_merdiem_text.text = "PM";
		snowforts_clock_tower_merdiem_text.fontSize = 72;

		// snowforts_clock_tower_day_text
		this.snowforts_clock_tower_day_text = this.add.bitmapText(887, 172, "CCComicCrazyW00BoldItalic", "MONDAY");
		this.snowforts_clock_tower_day_text.scaleX = 0.17525744459590964;
		this.snowforts_clock_tower_day_text.scaleY = 0.1393435149486837;
		this.snowforts_clock_tower_day_text.angle = 5;
		this.snowforts_clock_tower_day_text.text = "MONDAY";
		this.snowforts_clock_tower_day_text.fontSize = 60;

		// snowforts_clock_tower_right_wheel_png
		const snowforts_clock_tower_right_wheel_png = this.add.image(1035, 116, "snowforts", "snowforts_clock_tower_right_wheel.png");
		snowforts_clock_tower_right_wheel_png.scaleX = 1.1237276449526208;
		snowforts_clock_tower_right_wheel_png.scaleY = 0.729075625421279;

		// Animations start here
		createAnimation({
			scene: this,
			logicalAnimationKey: "snowforts_bottom_flag",
			phaserAnimationKey: "snowforts_bottom_flag_play",
			textureKey: "snowforts",
			framePrefix: "snowforts_orange_flag_castle_flag",
			frames: ["0001", "0002", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "0010", "0011", "0012", "0013", "0014", "0015", "0016"],
			framesExtension: ".png",
			frameRate: 24,
			repeat: -1
		});

		createAnimation({
			scene: this,
			logicalAnimationKey: "snowforts_top_flag",
			phaserAnimationKey: "snowforts_top_flag_play",
			textureKey: "snowforts",
			framePrefix: "snowforts_black_flag_castle_yay",
			frames: ["0001", "0002", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "0010", "0011", "0012", "0013", "0014", "0015", "0016"],
			framesExtension: ".png",
			frameRate: 24,
			repeat: -1
		});

		snowforts_orange_flag_castle_flag0001_png.play("snowforts_bottom_flag_play");
		snowforts_black_flag_castle_yay0001_png.play("snowforts_top_flag_play");
		// Animations end here
    }

	update() {
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