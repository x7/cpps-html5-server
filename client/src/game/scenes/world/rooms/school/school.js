import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { BaseScene } from "../../../base/baseScene";

export class SchoolScene extends BaseScene {
    constructor() {
        super("SchoolScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
    }

    preloadContent() {
        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.PACK,
            name: "school",
            paths: ["assets/world/rooms/school/school-pack.json"]
        });
    }

    createContent() {
        // school_main_floor_png
		const school_main_floor_png = this.add.image(644, 375, "school", "school_main_floor.png");
		school_main_floor_png.scaleX = 0.8080015961490784;
		school_main_floor_png.scaleY = 0.781182351353765;
    }
}