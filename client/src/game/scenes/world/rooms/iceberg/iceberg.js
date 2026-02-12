import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { ICE_BERG_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_ICE_BERG } from "../../../sceneNames";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

export class IcebergScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_ICE_BERG);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "iceberg",
            "paths": ["assets/world/rooms/iceberg/iceberg-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "iceberg_walking_trigger",
            "paths": ["assets/world/rooms/iceberg/iceberg_walking_trigger.png"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": ICE_BERG_ROOM_MUSIC,
            "paths": ["assets/world/rooms/iceberg/iceberg_music.json"]
        });
    }

    createContent() {
        // iceberg_main_png
		const iceberg_main_png = this.add.image(-10, 0, "iceberg", "iceberg_main.png");
		iceberg_main_png.setOrigin(0, 0);

		// iceberg_aqua_grabber0001_png
		const iceberg_aqua_grabber0001_png = this.add.sprite(1241, 365, "iceberg", "iceberg_aqua_grabber0001.png");
		iceberg_aqua_grabber0001_png.scaleX = 0.8992307752135668;
		iceberg_aqua_grabber0001_png.scaleY = 0.8910482709811908;

		// iceberg_walking_trigger
		const iceberg_walking_trigger = this.physics.add.sprite(759, 475, "iceberg_walking_trigger");
		iceberg_walking_trigger.alpha = 0.001;
		iceberg_walking_trigger.alphaTopLeft = 0.001;
		iceberg_walking_trigger.alphaTopRight = 0.001;
		iceberg_walking_trigger.alphaBottomLeft = 0.001;
		iceberg_walking_trigger.alphaBottomRight = 0.001;
		iceberg_walking_trigger.body.setSize(1520, 960, false);
        this.collisionMap = this.createCollisionMap(this, 759, 475, "iceberg_walking_trigger");

        // Setting triggers starts here
        this.triggers.push([iceberg_walking_trigger, () => {
            onWalkingTrigger(this);
        }]);
        // Setting triggers ends here

        // Animations start here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "iceberg_aqua_grabber_idle_animation",
            "phaserAnimationKey": "iceberg_aqua_grabber_idle_animation_play",
            "textureKey": "iceberg",
            "framePrefix": "iceberg_aqua_grabber",
            "frames": Array.from({ length: 81 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "iceberg_aqua_grabber_open_animation",
            "phaserAnimationKey": "iceberg_aqua_grabber_open_animation_play",
            "textureKey": "iceberg",
            "framePrefix": "iceberg_aqua_grabber",
            "frames": Array.from({ length: 268 }, (_, i) => String(i + 82).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "iceberg_aqua_grabber_close_animation",
            "phaserAnimationKey": "iceberg_aqua_grabber_close_animation_play",
            "textureKey": "iceberg",
            "framePrefix": "iceberg_aqua_grabber",
            "frames": Array.from({ length: 151 }, (_, i) => String(i + 350).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        iceberg_aqua_grabber0001_png.play("iceberg_aqua_grabber_idle_animation_play");
        // Animations end here

        // Setting all interactives sprites starts here
        iceberg_aqua_grabber0001_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        iceberg_aqua_grabber0001_png.on("pointerover", () => {
            iceberg_aqua_grabber0001_png.play("iceberg_aqua_grabber_open_animation_play");
        }); 

        iceberg_aqua_grabber0001_png.on("pointerout", () => {
            iceberg_aqua_grabber0001_png.stop("iceberg_aqua_grabber_open_animation_play");
            iceberg_aqua_grabber0001_png.play("iceberg_aqua_grabber_close_animation_play");
        });
        // All interactive events end here

        this.audioManager.play(ICE_BERG_ROOM_MUSIC);
        super.createContent(this);
    }

    update() {
        super.update();
    }
}