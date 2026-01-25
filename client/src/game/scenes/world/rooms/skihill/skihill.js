import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { SKI_HILL_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { BaseScene } from "../../../base/baseScene";

// TODO: add missing animations

export class SkihillScene extends BaseScene {
    constructor() {
        super("SkihillScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
		this.audioManager = this.getAudioManager();
    }

    preloadContent() {
        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.PACK,
            name: "skihill",
            paths: ["assets/world/rooms/skihill/skihill-pack.json"]
        });

		this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: SKI_HILL_ROOM_MUSIC,
            paths: ["assets/world/rooms/skihill/skihill_music.mp3"]
        });
    }

    createContent() {
		// skihill_sky_png
		const skihill_sky_png = this.add.image(640, 58, "skihill", "skihill_sky.png");
		skihill_sky_png.scaleX = 0.7527151893627061;

		// skihill_background_png
		const skihill_background_png = this.add.image(661, 427, "skihill", "skihill_background.png");
		skihill_background_png.scaleX = 0.8612321223839137;
		skihill_background_png.scaleY = 0.8656567001835681;

		// ski_hill_queue_png
		const ski_hill_queue_png = this.add.image(1139, 358, "skihill", "ski_hill_queue.png");
		ski_hill_queue_png.scaleX = 1.3597858873896147;
		ski_hill_queue_png.scaleY = 1.0043278721100586;

		// skihill_line_png_1
		const skihill_line_png_1 = this.add.image(1075, 181, "skihill", "skihill_line.png");
		skihill_line_png_1.scaleX = 0.7745135539894845;
		skihill_line_png_1.scaleY = 0.5934581978882644;
		skihill_line_png_1.angle = 13;

		// ski_hill_main_png
		const ski_hill_main_png = this.add.image(665, 439, "skihill", "ski_hill_main.png");
		ski_hill_main_png.scaleX = 0.8360181914732332;
		ski_hill_main_png.scaleY = 0.8485808693907207;

		// skihill_shack_behind_png
		this.add.image(906, 214, "skihill", "skihill_shack_behind.png");

		// skihill_line_two_png
		const skihill_line_two_png = this.add.image(826, 68, "skihill", "skihill_line_two.png");
		skihill_line_two_png.scaleX = 0.8657394748027144;
		skihill_line_two_png.scaleY = 0.9414447230969358;

		// skihill_line_png
		const skihill_line_png = this.add.image(792, 99, "skihill", "skihill_line.png");
		skihill_line_png.scaleX = 0.7421606576365563;
		skihill_line_png.scaleY = 0.8363259454246562;

		// skihill_shack_png
		const skihill_shack_png = this.add.image(942, 179, "skihill", "skihill_shack.png");
		skihill_shack_png.scaleX = 0.7431381503849253;
		skihill_shack_png.scaleY = 0.7040297945418124;

		// skihill_top_part_png
		const skihill_top_part_png = this.add.image(522, 161, "skihill", "skihill_top_part.png");
		skihill_top_part_png.scaleX = 0.7561052224681684;
		skihill_top_part_png.scaleY = 0.8113683823521645;

		// skihill_green_paper0001_png
		const skihill_green_paper0001_png = this.add.image(429, 133, "skihill", "skihill_green_paper0001.png");
		skihill_green_paper0001_png.scaleX = 0.5681750844040137;
		skihill_green_paper0001_png.scaleY = 0.6106997703811348;

		// skihill_green_arrow_png
		const skihill_green_arrow_png = this.add.image(855, 478, "skihill", "skihill_green_arrow.png");
		skihill_green_arrow_png.scaleX = 0.5547107830015992;
		skihill_green_arrow_png.scaleY = 0.5933581665407577;

		// skihill_green_arrow_snow_png
		const skihill_green_arrow_snow_png = this.add.image(1037, 436, "skihill", "skihill_green_arrow_snow.png");
		skihill_green_arrow_snow_png.scaleX = 0.7412449375057589;
		skihill_green_arrow_snow_png.scaleY = 0.8463264763521018;

		// skihill_blue_arrow_snow_png
		const skihill_blue_arrow_snow_png = this.add.image(422, 477, "skihill", "skihill_blue_arrow_snow.png");
		skihill_blue_arrow_snow_png.scaleX = 0.8124531843274214;
		skihill_blue_arrow_snow_png.scaleY = 0.8078284099990185;

		this.audioManager.play(SKI_HILL_ROOM_MUSIC);
    }
}