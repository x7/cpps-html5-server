import { ASSET_TYPES } from "../../../../../assets/assetTypes";
import { DOJO_WATER_ROOM_MUSIC } from "../../../../../audio/audioConstants";
import { RoomScene } from "../../RoomScene";

export class WaterDojoScene extends RoomScene {
    constructor() {
        super("WaterDojoScene");
    }

    init(data) {
		super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "waterdojo",
            "paths": ["assets/world/rooms/dojo/waterdojo/waterdojo-pack.json"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": DOJO_WATER_ROOM_MUSIC,
            "paths": ["assets/world/rooms/dojo/waterdojo/waterdojo_music.json"]
        });
    }

    createContent() {
        // symbol_15_png
		this.add.image(760, 476, "waterdojo", "Symbol 15.png");

		// symbol_19_png
		const symbol_19_png = this.add.image(770, 391, "waterdojo", "Symbol 19.png");
		symbol_19_png.scaleY = 1.0165939426692008;

		// symbol_376_png
		const symbol_376_png = this.add.image(764, 820, "waterdojo", "Symbol 376.png");
		symbol_376_png.scaleX = 0.9744731782369881;
		symbol_376_png.scaleY = 1.089361842946281;

		// water_dojo_rocks_w_water_png
		this.add.image(753, 171, "waterdojo", "water_dojo_rocks_w_water.png");

		// symbol_24_png
		const symbol_24_png = this.add.image(772, 339, "waterdojo", "Symbol 24.png");
		symbol_24_png.scaleX = 1.0041472389598989;

		// water_dojo_penguin_statues_png
		const water_dojo_penguin_statues_png = this.add.image(767, 207, "waterdojo", "water_dojo_penguin_statues.png");
		water_dojo_penguin_statues_png.scaleX = 0.9944911058676074;
		water_dojo_penguin_statues_png.scaleY = 1.036787922803329;

		// water_dojo_flower_pot_png
		const water_dojo_flower_pot_png = this.add.image(905, 279, "waterdojo", "water_dojo_flower_pot.png");
		water_dojo_flower_pot_png.scaleX = 0.04066676763067865;
		water_dojo_flower_pot_png.scaleY = 0.054391482825654966;

		// water_dojo_sensi_stand_png
		const water_dojo_sensi_stand_png = this.add.image(762, 224, "waterdojo", "water_dojo_sensi_stand.png");
		water_dojo_sensi_stand_png.scaleX = 0.9731246328825461;
		water_dojo_sensi_stand_png.scaleY = 0.8855573315084602;

		// water_dojo_sensi_pilloow_png
		const water_dojo_sensi_pilloow_png = this.add.image(763, 286, "waterdojo", "water_dojo_sensi_pilloow.png");
		water_dojo_sensi_pilloow_png.scaleX = 0.9066475725724868;
		water_dojo_sensi_pilloow_png.scaleY = 0.91694787770455;

		this.audioManager.play(DOJO_WATER_ROOM_MUSIC);
    }
}