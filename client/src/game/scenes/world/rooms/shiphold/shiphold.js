import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { SCENE_ROOM_SHIP_HOLD } from "../../../sceneNames";
import { RoomScene } from "../RoomScene";

// TODO: Add music

export class ShipHoldScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_SHIP_HOLD);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "shiphold",
            "paths": ["assets/world/rooms/shiphold/shiphold-pack.json"]
        });
    }

    createContent() {
		// ship_hold_background_png
		const ship_hold_background_png = this.add.image(-7, -20, "shiphold", "ship_hold_background.png");
		ship_hold_background_png.setOrigin(0, 0);

		// ship_hold_table_png
		const ship_hold_table_png = this.add.image(322, 581, "shiphold", "ship_hold_table.png");

		// ship_hold_captain_quarters_door0001_png
		const ship_hold_captain_quarters_door0001_png = this.add.image(1331, 419, "shiphold", "ship_hold_captain_quarters_door0001.png");

		// ship_hold_captain_quarters_door0002_png
		const ship_hold_captain_quarters_door0002_png = this.add.image(1331, 419, "shiphold", "ship_hold_captain_quarters_door0002.png");
		ship_hold_captain_quarters_door0002_png.visible = false;

		// ship_hold_captain_quarters_door0004_png
		const ship_hold_captain_quarters_door0004_png = this.add.image(1336, 422, "shiphold", "ship_hold_captain_quarters_door0004.png");
		ship_hold_captain_quarters_door0004_png.scaleX = 0.7702133974982479;
		ship_hold_captain_quarters_door0004_png.scaleY = 0.9464469591316824;
		ship_hold_captain_quarters_door0004_png.alpha = 0.001;
		ship_hold_captain_quarters_door0004_png.alphaTopLeft = 0.001;
		ship_hold_captain_quarters_door0004_png.alphaTopRight = 0.001;
		ship_hold_captain_quarters_door0004_png.alphaBottomLeft = 0.001;
		ship_hold_captain_quarters_door0004_png.alphaBottomRight = 0.001;

		// ship_hold_stairs_png
		const ship_hold_stairs_png = this.add.image(1375, 562, "shiphold", "ship_hold_stairs.png");

		// ship_hold_bottom_boxes_png
		const ship_hold_bottom_boxes_png = this.add.image(672, 723, "shiphold", "ship_hold_bottom_boxes.png");

		// ship_hold_small_box_png
		const ship_hold_small_box_png = this.add.image(831, 487, "shiphold", "ship_hold_small_box.png");

		// ship_hold_captain_treasures_text0001_png
		const ship_hold_captain_treasures_text0001_png = this.add.image(1376, 198, "shiphold", "ship_hold_captain_treasures_text0001.png");

        // Setting all interactives sprites starts here
        ship_hold_captain_quarters_door0004_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        ship_hold_captain_quarters_door0004_png.on("pointerover", () => {
            ship_hold_captain_quarters_door0001_png.visible = false;
            ship_hold_captain_quarters_door0002_png.visible = true;
        });

        ship_hold_captain_quarters_door0004_png.on("pointerout", () => {
            ship_hold_captain_quarters_door0001_png.visible = true;
            ship_hold_captain_quarters_door0002_png.visible = false;
        });
        // All interactive events ends here
    }
}