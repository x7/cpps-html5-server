import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { SCENE_ROOM_BOX_DIMENSION } from "../../../sceneNames";
import { RoomScene } from "../RoomScene";

export class BoxDimensionScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_BOX_DIMENSION);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "boxdimension",
            "paths": ["assets/world/rooms/boxdimension/boxdimension-pack.json"]
        });
    }

    createContent() {
        // box_dimension_purple_background_png
		const box_dimension_purple_background_png = this.add.image(757, 484, "boxdimension", "box_dimension_purple_background.png");

		// box_dimension_purple_clouds0007_png
		const box_dimension_purple_clouds0007_png = this.add.image(281, 159, "boxdimension", "box_dimension_purple_clouds0007.png");

		// box_dimension_under_lay_purple_background_png
		const box_dimension_under_lay_purple_background_png = this.add.image(776, 453, "boxdimension", "box_dimension_under_lay_purple_background.png");

		// box_dimension_floating_boxes0001_png
		const box_dimension_floating_boxes0001_png = this.add.sprite(507, 309, "boxdimension", "box_dimension_floating_boxes0001.png");

		// box_dimension_top_box_part_png
		const box_dimension_top_box_part_png = this.add.image(1214, 223, "boxdimension", "box_dimension_top_box_part.png");

		// box_dimension_main_boxes_png
		const box_dimension_main_boxes_png = this.add.image(793, 573, "boxdimension", "box_dimension_main_boxes.png");

		// box_dimension_top_right_box_png
		const box_dimension_top_right_box_png = this.add.image(1528, 386, "boxdimension", "box_dimension_top_right_box.png");

		// box_dimension_bottom_boxes_floating0001_png
		const box_dimension_bottom_boxes_floating0001_png = this.add.sprite(766, 822, "boxdimension", "box_dimension_bottom_boxes_floating0001.png");
    }
}