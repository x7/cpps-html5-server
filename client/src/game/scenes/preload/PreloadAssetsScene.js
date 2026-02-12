import { createAnimation } from "../../../animations/animations.js";
import { BaseScene } from "../baseScene.js";
import { ASSET_TYPES } from "../../assets/assetTypes.js";
import { displayLoading, removeLoading } from "../loading/loadingHelper.js";
import * as SceneNames from "../sceneNames.js";

/*
    Responsible for preloading some assets like penguin body animations and data (jsons etc)
*/

export class PreloadAssetsScene extends BaseScene {
    constructor() {
        super(SceneNames.SCENE_PRELOAD_ASSETS);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
			"scene": this,
			"type": ASSET_TYPES.PACK,
			"name": "penguin-pack",
			"paths": ["assets/penguin/penguin-pack.json"]
		});

        this.assetManager.load({
			"scene": this,
			"type": ASSET_TYPES.PACK,
			"name": "snowball-pack",
			"paths": ["assets/world/snowball/snowball-pack.json"]
		});

        this.assetManager.load({
			"scene": this,
			"type": ASSET_TYPES.JSON,
			"name": "penguin-animations",
			"paths": ["src/animations/penguin.json"]
		});

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.JSON,
            "name": "error-json",
            "paths": ["src/game/gamedata/errors.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.JSON,
            "name": "audio-json",
            "paths": ["src/game/gamedata/audio.json"]
        });
    }

    createContent() {
        const penguinAnimations = this.cache.json.get("penguin-animations");

        for(const animation of Object.entries(penguinAnimations)) {
            const mainKey = animation[0];

            if(animation[1] == null) {
                return;
            }

            for(const animationInner of animation[1]) {
                createAnimation({
                    "scene": this,
                    "logicalAnimationKey": mainKey,
                    "phaserAnimationKey": animationInner.animation_key,
                    "textureKey": animationInner.parent_key,
                    "framePrefix": animationInner.frame_parent,
                    "frames": animationInner.frames,
                    "frame_ranges": animationInner.frame_ranges,
                    "frame_ranges_start": animationInner.frame_ranges_start,
                    "frame_ranges_end": animationInner.frame_ranges_end,
                    "frameRate": animationInner.frame_rate,
                    "repeat": animationInner.repeat
                });
            }
        }

        displayLoading(SceneNames.SCENE_PRELOAD_ASSETS, "Loading Assets");

        // Preload every single scene so its ready to be used for future use (saves loading time)
        for (const [key, value] of Object.entries(SceneNames)) {
            if(!key.toLowerCase().startsWith("scene") || !value.toLowerCase().endsWith("scene")) {
                continue;
            }

            this.sceneManager.add({
                "sceneKey": value,
                "scene": null,
                "autoStart": false
            });
        }

        // Then call a timed event to load the start screen scene
        this.removeLoading = this.time.addEvent({
            delay: 1000,
            callback: () => {
                removeLoading({
                    "currentScene": SceneNames.SCENE_PRELOAD_ASSETS,
                    "goToScene": SceneNames.SCENE_START_SCREEN,
                    "goToSceneText": "Loading Start",
                    "callback": null
                });
                this.time.removeEvent(this.removeLoading);
            }
        });
    }
}