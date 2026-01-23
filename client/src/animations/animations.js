import { getGameManager, getSceneManager } from "../main";

const animationKeys = {};

/*
    scene - scene you are creating it in
    logicalAnimationKey -
    phaserAnimationKey - The key that will you play it by (snowforts_flag_play)
    textureKey - key of the json pack its in (snowforts)
    framePrefix - prefix of the animation pngs (snowforts_orange_flag_castle_flag)
    frames - list of frames [ { } ]
    frame_ranges - if the animation uses ; in it
    frame_ranges_start - start of it
    frame_ranges_end - end of it
    framerate - fps u want
    repeat - if u want it to repeat (-1 for infinite)
*/
export function createAnimation({
    scene,
    logicalAnimationKey,
    phaserAnimationKey,
    textureKey,
    framePrefix,
    frames,
    framesExtension = null,
    frame_ranges = false,
    frame_ranges_start = 0,
    frame_ranges_end = 0,
    frameRate,
    repeat
}) {
    const sceneManager = getSceneManager();
    if(sceneManager.get(scene.sys.settings.key) == null) {
        return;
    }

    if(frame_ranges) {
        const frameNumber = frames[0];
        frames = [];

        for(let i = frame_ranges_start; i < frame_ranges_end + 1; i++) {
            frames.push(`${frameNumber};${i}`);
        }
    }

    frames = frames.map((number) => {
        let frame = { "key": textureKey, frame: `${framePrefix}${number}` };
        if(framesExtension) {
            frame.frame = `${frame.frame}${framesExtension}`;
        }

        return frame;
    });

    scene.anims.create({
        key: phaserAnimationKey,
        frames: frames,
        frameRate: frameRate,
        repeat: repeat
    });

    const doesExist = animationExist(phaserAnimationKey);
    if(!doesExist) {
        console.log('Failed to create animation with key ' + phaserAnimationKey);
        return;
    }

    if(animationKeys[logicalAnimationKey] == undefined) {
        animationKeys[logicalAnimationKey] = [phaserAnimationKey];
        return;
    }

    const newAnimationFrames = [...animationKeys[logicalAnimationKey], ...[phaserAnimationKey]];
    animationKeys[logicalAnimationKey] = newAnimationFrames;
    console.log('added')
}

export function animationExist(key) {
    const game = getGameManager().getGame();
    return game.anims.get(key) == undefined ? false : true;
}

export function getAnimation(key) {
    return animationKeys[key];
}