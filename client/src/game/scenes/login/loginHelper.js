import { displayError } from "../error/errorHelper";
import { LOGIN_NO_USERNAME_PROVIDED, LOGIN_NO_PASSWORD_PROVIDED, LOGIN_INVALID_USERNAME_LENGTH, LOGIN_INVALID_PASSWORD_LENGTH, FAILED_TO_CONNECT_TO_SERVER } from "../error/errorTypes";
import { displayLoading, removeLoading } from '../loading/loadingHelper.js';
import { SCENE_LOGIN, SCENE_SERVER_SELECTION } from "../sceneNames.js";

export async function login(username, password) {
    const validUsername = validateUsername(username);
    if(validUsername != true) {
        alert("hi")
        displayError(validUsername);
        return;
    }

    const validPassword = validatePassword(password);
    if(validPassword != true) {
        alert("hi1")
        displayError(validPassword);
        return;
    }

    displayLoading(SCENE_LOGIN, `Logging in as ${username}`);

    try {
        const request = await fetch("http://localhost:8080/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        });

        if(request.status === 200) {
            removeLoading({
                "currentScene": SCENE_LOGIN,
                "goToScene": SCENE_SERVER_SELECTION,
                "goToSceneText": "Loading Server Selection",
                "callback": null
            });
            return;
        }

        removeLoading({
            "currentScene": SCENE_LOGIN,
            "goToScene": null,
            "goToSceneText": null,
            "callback": () => {
                displayError(FAILED_TO_CONNECT_TO_SERVER);
            }
        });
    } catch (error) {
        removeLoading({
            "currentScene": SCENE_LOGIN,
            "goToScene": null,
            "goToSceneText": null,
            "callback": () => {
                displayError(FAILED_TO_CONNECT_TO_SERVER);
            }
        });
    }
}

function validateUsername(username) {
    if(username == null || username == "") {
        return LOGIN_NO_USERNAME_PROVIDED;
    }

    if(username.length < 4 || username.length > 16) {
        return LOGIN_INVALID_USERNAME_LENGTH;
    }

    return true;
}

function validatePassword(password) {
    if(password == null || password == "") {
        return LOGIN_NO_PASSWORD_PROVIDED;
    }

    if(password.length < 8 || password.length > 128) {
        return LOGIN_INVALID_PASSWORD_LENGTH;
    }

    return true;
}

export function hideDomElements(scene) {
    if(scene == null || scene.scene.key !== 'LoginScene') {
        return;
    }

    scene.game.domContainer.style.display = 'none';
}

export function enableRememberMeBoxes(scene) {
    if(scene == null || scene.scene.key !== 'LoginScene') {
        return;
    }

    if(!scene.login_remember_me_computer_checkbox_ticked.visible) {
        scene.login_remember_me_computer_checkbox_ticked.visible = true;
    }

    if(!scene.login_remember_password_checkbox_ticked.visible) {
        scene.login_remember_password_checkbox_ticked.visible = true;
    }
}