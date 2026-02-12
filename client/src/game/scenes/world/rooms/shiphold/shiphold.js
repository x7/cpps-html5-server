import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { SCENE_ROOM_PIRATE_SHIP, SCENE_ROOM_SHIP_HOLD } from "../../../sceneNames";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
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

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "ship_hold_walking_trigger",
            "paths": ["assets/world/rooms/shiphold/ship_hold_walking_trigger.png"]
        });
    }

    createContent() {
        // ship_hold_background_png
		const ship_hold_background_png = this.add.image(-11, -29, "shiphold", "ship_hold_background.png");
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
		const ship_hold_bottom_boxes_png = this.add.image(523, 716, "shiphold", "ship_hold_bottom_boxes.png");
		ship_hold_bottom_boxes_png.scaleX = 1.2058432441216635;

		// ship_hold_small_box_png
		const ship_hold_small_box_png = this.add.image(831, 487, "shiphold", "ship_hold_small_box.png");

		// ship_hold_captain_treasures_text0001_png
		const ship_hold_captain_treasures_text0001_png = this.add.image(1376, 198, "shiphold", "ship_hold_captain_treasures_text0001.png");

		// ship_hold_captain_quarters_trigger
		const ship_hold_captain_quarters_trigger = this.add.image(1316, 514, "shiphold", "ship_hold_captain_quarters_trigger.png");
		ship_hold_captain_quarters_trigger.alpha = 0.001;
		ship_hold_captain_quarters_trigger.alphaTopLeft = 0.001;
		ship_hold_captain_quarters_trigger.alphaTopRight = 0.001;
		ship_hold_captain_quarters_trigger.alphaBottomLeft = 0.001;
		ship_hold_captain_quarters_trigger.alphaBottomRight = 0.001;

		// ship_hold_walking_trigger_png
		const ship_hold_walking_trigger_png = this.physics.add.sprite(760, 413, "ship_hold_walking_trigger");
		ship_hold_walking_trigger_png.alpha = 0.001;
		ship_hold_walking_trigger_png.alphaTopLeft = 0.001;
		ship_hold_walking_trigger_png.alphaTopRight = 0.001;
		ship_hold_walking_trigger_png.alphaBottomLeft = 0.001;
		ship_hold_walking_trigger_png.alphaBottomRight = 0.001;
		ship_hold_walking_trigger_png.body.setSize(1520, 837, false);
        this.collisionMap = this.createCollisionMap(this, 760, 413, "ship_hold_walking_trigger");

		// ship_hold_pirate_ship_trigger
		const ship_hold_pirate_ship_trigger = this.physics.add.sprite(1386, 799, "shiphold", "ship_hold_upstairs_trigger.png");
		ship_hold_pirate_ship_trigger.alpha = 0.001;
		ship_hold_pirate_ship_trigger.alphaTopLeft = 0.001;
		ship_hold_pirate_ship_trigger.alphaTopRight = 0.001;
		ship_hold_pirate_ship_trigger.alphaBottomLeft = 0.001;
		ship_hold_pirate_ship_trigger.alphaBottomRight = 0.001;
		ship_hold_pirate_ship_trigger.body.setSize(246, 289, false);

        // Setting triggers starts here
        this.triggers.push([ship_hold_walking_trigger_png, () => {
            onWalkingTrigger(this);
        }]);

        this.triggers.push([ship_hold_pirate_ship_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_PIRATE_SHIP);
        }]);

        // this.triggers.push([ship_hold_captain_quarters_trigger, () => {
        //     // onJoinRoomTrigger();
        // }]);
        // Setting triggers ends here

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

        super.createContent(this);
    }

    update() {
        super.update();
    }
}