import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { SKI_HILL_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { RoomScene } from "../RoomScene";

// TODO: add missing animations

export class SkihillScene extends RoomScene {
    constructor() {
        super("SkiHillScene");
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
		const skihill_sky_png = this.add.image(711, 139, "skihill", "skihill_sky.png");
		skihill_sky_png.scaleX = 0.9955363415032087;
		skihill_sky_png.scaleY = 1.1620353373740027;

		// skihill_background_png
		const skihill_background_png = this.add.image(-175, 119, "skihill", "skihill_background.png");
		skihill_background_png.scaleX = 0.9752745429207709;
		skihill_background_png.scaleY = 1.1241444579320303;
		skihill_background_png.setOrigin(0, 0);

		// skihill_line_two_png
		const skihill_line_two_png = this.add.image(937, 98, "skihill", "skihill_line_two.png");
		skihill_line_two_png.scaleX = 0.8657394748027144;
		skihill_line_two_png.scaleY = 0.9414447230969358;

		// ski_hill_queue_png
		const ski_hill_queue_png = this.add.image(1127, 360, "skihill", "ski_hill_queue.png");
		ski_hill_queue_png.scaleX = 1.0074168964558892;
		ski_hill_queue_png.scaleY = 1.0250146731755228;

		// skihill_line_png_1
		const skihill_line_png_1 = this.add.image(1075, 181, "skihill", "skihill_line.png");
		skihill_line_png_1.scaleX = 0.7745135539894845;
		skihill_line_png_1.scaleY = 0.5934581978882644;
		skihill_line_png_1.angle = 13;
		skihill_line_png_1.visible = false;

		// ski_hill_main_png
		const ski_hill_main_png = this.add.image(727, 558, "skihill", "ski_hill_main.png");
		ski_hill_main_png.scaleX = 0.928777877299569;
		ski_hill_main_png.scaleY = 1.002693317923844;

		// skihill_shack_behind_png
		const skihill_shack_behind_png = this.add.image(975, 256, "skihill", "skihill_shack_behind.png");
		skihill_shack_behind_png.scaleX = 1.3182027428683138;
		skihill_shack_behind_png.scaleY = 1.1584834604689804;

		// skihill_line_png
		const skihill_line_png = this.add.image(895, 131, "skihill", "skihill_line.png");
		skihill_line_png.scaleX = 0.7421606576365563;
		skihill_line_png.scaleY = 0.8363259454246562;

		// skihill_shack_png
		const skihill_shack_png = this.add.image(1033, 207, "skihill", "skihill_shack.png");
		skihill_shack_png.scaleX = 1.1515277188926207;
		skihill_shack_png.scaleY = 0.9641788909843253;

		// skihill_top_part_png
		const skihill_top_part_png = this.add.image(574, 214, "skihill", "skihill_top_part.png");
		skihill_top_part_png.scaleX = 0.9391392757482948;
		skihill_top_part_png.scaleY = 0.924923754215114;

		// skihill_green_paper0001_png
		const skihill_green_paper0001_png = this.add.image(456, 181, "skihill", "skihill_green_paper0001.png");
		skihill_green_paper0001_png.scaleX = 0.6345773750833913;
		skihill_green_paper0001_png.scaleY = 0.8472977713749209;

		// skihill_green_arrow_png
		const skihill_green_arrow_png = this.add.image(944, 648, "skihill", "skihill_green_arrow.png");
		skihill_green_arrow_png.scaleX = 0.863641354695569;
		skihill_green_arrow_png.scaleY = 0.9002086603203987;

		// skihill_green_arrow_snow_png
		const skihill_green_arrow_snow_png = this.add.image(1138, 544, "skihill", "skihill_green_arrow_snow.png");
		skihill_green_arrow_snow_png.scaleX = 0.9708151311967932;
		skihill_green_arrow_snow_png.scaleY = 1.044165333757181;

		// skihill_blue_arrow_snow_png
		const skihill_blue_arrow_snow_png = this.add.image(464, 585, "skihill", "skihill_blue_arrow_snow.png");
		skihill_blue_arrow_snow_png.scaleX = 0.9171864584957394;
		skihill_blue_arrow_snow_png.scaleY = 0.9802705469423592;

		this.audioManager.play(SKI_HILL_ROOM_MUSIC);
    }
}