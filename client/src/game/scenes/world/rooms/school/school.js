import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { SCHOOL_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { BaseScene } from "../../../base/baseScene";

export class SchoolScene extends BaseScene {
    constructor() {
        super("SchoolScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
        this.audioManager = this.getAudioManager();
    }

    preloadContent() {
        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.PACK,
            name: "school",
            paths: ["assets/world/rooms/school/school-pack.json"]
        });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: SCHOOL_ROOM_MUSIC,
            paths: ["assets/world/rooms/school/school_music.json"]
        });
    }

    createContent() {
        // school_main_floor_png
		const school_main_floor_png = this.add.image(644, 375, "school", "school_main_floor.png");
		school_main_floor_png.scaleX = 0.8080015961490784;
		school_main_floor_png.scaleY = 0.781182351353765;

        this.audioManager.play(SCHOOL_ROOM_MUSIC);
    }
}