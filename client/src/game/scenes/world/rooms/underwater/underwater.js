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
		const underwater_background_png = this.add.image(774, 90, "underwater", "underwater_background.png");
		underwater_background_png.scaleX = 1.1846812866425471;

		// underwater_main_png
		const underwater_main_png = this.add.image(-15, -5, "underwater", "underwater_main.png");
		underwater_main_png.scaleY = 1.0842976459461426;
		underwater_main_png.setOrigin(0, 0);

		// underwater_part_one_png
		const underwater_part_one_png = this.add.image(1301, 594, "underwater", "underwater_part_one.png");
		underwater_part_one_png.scaleX = 1.028760009714981;
		underwater_part_one_png.scaleY = 1.0122955304314076;

		// underwater_part_two_png
		const underwater_part_two_png = this.add.image(1435, 593, "underwater", "underwater_part_two.png");
		underwater_part_two_png.scaleX = 1.1985520363064837;
		underwater_part_two_png.scaleY = 1.1767734337114932;

		// underwater_clam_png
		const underwater_clam_png = this.add.image(635, 765, "underwater", "underwater_clam.png");
		underwater_clam_png.scaleX = 0.9515163713895719;
		underwater_clam_png.scaleY = 0.9096901654685811;

		// underwater_anvil_png
		this.add.image(1396, 730, "underwater", "underwater_anvil.png");

		// underwater_bottom_png
		const underwater_bottom_png = this.add.image(719, 453, "underwater", "underwater_bottom.png");
		underwater_bottom_png.scaleX = 1.0159250541673708;
		underwater_bottom_png.scaleY = 0.999086513007565;

		// underwater_bottom_left_side_png
		const underwater_bottom_left_side_png = this.add.image(165, 551, "underwater", "underwater_bottom_left_side.png");
		underwater_bottom_left_side_png.scaleX = 1.243965655910139;
		underwater_bottom_left_side_png.scaleY = 1.222918477067548;

		// underwater_left_side_png
		const underwater_left_side_png = this.add.image(401, 548, "underwater", "underwater_left_side.png");
		underwater_left_side_png.scaleX = 1.078849191444283;
		underwater_left_side_png.scaleY = 0.8803468490862291;

		// underwater_wheel_png
		const underwater_wheel_png = this.add.image(307, 529, "underwater", "underwater_wheel.png");
		underwater_wheel_png.scaleX = 0.8534497015134862;
		underwater_wheel_png.scaleY = 0.8461806348486637;
		underwater_wheel_png.visible = false;

		// underwater_see_weed_png
		const underwater_see_weed_png = this.add.image(93, 643, "underwater", "underwater_see_weed.png");
		underwater_see_weed_png.scaleX = 1.20588730120474;
		underwater_see_weed_png.scaleY = 1.375422161351825;

		// underwater_tower_png
		const underwater_tower_png = this.add.image(1146, 383, "underwater", "underwater_tower.png");
		underwater_tower_png.scaleX = 0.9569899407974465;
		underwater_tower_png.scaleY = 0.9458374915757124;

		// underwater_sea_weed_png
		const underwater_sea_weed_png = this.add.image(1483, 399, "underwater", "underwater_sea_weed.png");
		underwater_sea_weed_png.scaleX = 1.1658561707958939;
		underwater_sea_weed_png.scaleY = 1.1781489240984027;

		this.audioManager.play(UNDERWATER_ROOM_MUSIC);
    }
}