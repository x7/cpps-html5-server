import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { ICE_BERG_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { BaseScene } from "../../../base/baseScene";

export class IcebergScene extends BaseScene {
    constructor() {
        super("IceBergScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
        this.audioManager = this.getAudioManager();
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
		const iceberg_aqua_grabber0001_png = this.add.sprite(1235, 339, "iceberg", "iceberg_aqua_grabber0001.png");
		iceberg_aqua_grabber0001_png.scaleX = 0.8992307752135668;
		iceberg_aqua_grabber0001_png.scaleY = 0.8910482709811908;

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
    }
}