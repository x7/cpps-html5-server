import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { UNDERWATER_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { BaseScene } from "../../../base/baseScene";

export class UnderwaterScene extends BaseScene {
    constructor() {
        super("UnderwaterScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
		this.audioManager = this.getAudioManager();
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "underwater",
            "paths": ["assets/world/rooms/underwater/underwater-pack.json"]
        });

		this.assetManager.load({
			"scene": this,
			"type": ASSET_TYPES.AUDIO,
			"name": UNDERWATER_ROOM_MUSIC,
			"paths": ["assets/world/rooms/underwater/underwater_music.mp3"]
		});
    }

    createContent() {
		// underwater_background_png
		const underwater_background_png = this.add.image(663, 42, "underwater", "underwater_background.png");
		underwater_background_png.scaleX = 0.8708603656776539;

		// underwater_main_png
		const underwater_main_png = this.add.image(678, 378, "underwater", "underwater_main.png");
		underwater_main_png.scaleX = 0.8837361766501796;
		underwater_main_png.scaleY = 0.8545468573414777;

		// underwater_part_one_png
		const underwater_part_one_png = this.add.image(1123, 480, "underwater", "underwater_part_one.png");
		underwater_part_one_png.scaleX = 0.8599863024515473;
		underwater_part_one_png.scaleY = 0.7456160943596788;

		// underwater_part_two_png
		const underwater_part_two_png = this.add.image(1241, 485, "underwater", "underwater_part_two.png");
		underwater_part_two_png.scaleX = 0.8871983127919294;
		underwater_part_two_png.scaleY = 0.8482881108112429;

		// underwater_clam_png
		this.add.image(548, 596, "underwater", "underwater_clam.png");

		// underwater_anvil_png
		this.add.image(1220, 594, "underwater", "underwater_anvil.png");

		// underwater_bottom_png
		const underwater_bottom_png = this.add.image(621, 352, "underwater", "underwater_bottom.png");
		underwater_bottom_png.scaleX = 0.8754902109052602;
		underwater_bottom_png.scaleY = 0.7564621858373869;

		// underwater_bottom_left_side_png
		const underwater_bottom_left_side_png = this.add.image(129, 471, "underwater", "underwater_bottom_left_side.png");
		underwater_bottom_left_side_png.scaleX = 0.9048267340371698;
		underwater_bottom_left_side_png.scaleY = 0.8145645323655083;

		// underwater_left_side_png
		const underwater_left_side_png = this.add.image(317, 476, "underwater", "underwater_left_side.png");
		underwater_left_side_png.scaleX = 0.6227358214390828;
		underwater_left_side_png.scaleY = 0.6747690504279497;

		// underwater_wheel_png
		this.add.image(331, 557, "underwater", "underwater_wheel.png");

		// underwater_see_weed_png
		this.add.image(77, 475, "underwater", "underwater_see_weed.png");

		// underwater_tower_png
		const underwater_tower_png = this.add.image(973, 255, "underwater", "underwater_tower.png");
		underwater_tower_png.scaleX = 0.7969662647985319;
		underwater_tower_png.scaleY = 0.7598861050614494;

		// underwater_sea_weed_png
		this.add.image(1236, 335, "underwater", "underwater_sea_weed.png");

		this.audioManager.play(UNDERWATER_ROOM_MUSIC);
    }
}