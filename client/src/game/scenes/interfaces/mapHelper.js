export function switchMenu(scene, newMenu) {
    if(scene.currentMenu.length > 0) {
        for(const menu of scene.currentMenu) {
            menu.visible = false;
        }
    }

    if(scene.extraMenus.length > 0) {
        for(let i = 0; i < scene.extraMenus.length; i++) {
            const extraMenu = scene.extraMenus[i];

            for(const image of extraMenu) {
                image.visible = false;
            }
        }
    }

    for(const menu of newMenu) {
        menu.visible = true;
    }

    scene.currentMenu = newMenu;
}

export function exitMenu(scene, menu) {
    if(scene.extraMenus.length > 0) {
        for(let i = 0; i < scene.extraMenus.length; i++) {
            const extraMenu = scene.extraMenus[i];

            for(const image of extraMenu) {
                image.visible = false;
            }
        }
    }

    for(const image of menu) {
        image.visible = false;
    }
}