import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { BaseScene } from "../../../base/baseScene";

export class ForestScene extends BaseScene {
    constructor() {
        super("ForestScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
    }

    preloadContent() {
        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.PACK,
            name: "beacon",
            paths: ["assets/world/rooms/forest/forest-pack.json"]
        });
    }

    createContent() {
        // forest_main_floor_png
		const forest_main_floor_png = this.add.image(663, 327, "forest", "forest_main_floor.png");
		forest_main_floor_png.scaleX = 0.7571163646948258;
		forest_main_floor_png.scaleY = 0.7464231551355724;

		// forest_stairs_to_cove_png
		this.add.image(1041, 583, "forest", "forest_stairs_to_cove.png");

		// forest_bottom_left_png
		const forest_bottom_left_png = this.add.image(418, 503, "forest", "forest_bottom_left.png");
		forest_bottom_left_png.scaleX = 0.7673415480503551;
		forest_bottom_left_png.scaleY = 0.7467488690997617;

		// forest_cave_entrance_png
		const forest_cave_entrance_png = this.add.image(895, 151, "forest", "forest_cave_entrance.png");
		forest_cave_entrance_png.scaleX = 0.8089714148222181;
		forest_cave_entrance_png.scaleY = 0.8053663120630394;

		// forest_middle_right_png
		const forest_middle_right_png = this.add.image(751, 384, "forest", "forest_middle_right.png");
		forest_middle_right_png.scaleX = 0.8240388976422763;
		forest_middle_right_png.scaleY = 0.8128754941015374;

		// forest_double_middle_tree_png
		const forest_double_middle_tree_png = this.add.image(534, 406, "forest", "forest_double_middle_tree.png");
		forest_double_middle_tree_png.scaleX = 0.7885145301713943;
		forest_double_middle_tree_png.scaleY = 0.7745561885816865;
    }
}