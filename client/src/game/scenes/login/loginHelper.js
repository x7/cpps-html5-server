import { connect, getManager } from "../../../network/network.js";
import { CLIENT_CONNECTION_DISCONNECTED } from "../../../network/topics.js";
import { ClientPenguin } from "../../penguin/clientPenguin.js";
import { displayError } from "../error/errorHelper";
import { LOGIN_NO_USERNAME_PROVIDED, LOGIN_NO_PASSWORD_PROVIDED, LOGIN_INVALID_USERNAME_LENGTH, LOGIN_INVALID_PASSWORD_LENGTH, FAILED_TO_CONNECT_TO_SERVER } from "../error/errorTypes";
import { displayLoading, removeLoading } from '../loading/loadingHelper.js';
import { SCENE_LOGIN, SCENE_SERVER_SELECTION } from "../sceneNames.js";

export async function login({ username, password, scene }) {
    const validUsername = validateUsername(username);
    if(validUsername != true) {
        displayError(validUsername);
        return;
    }

    const validPassword = validatePassword(password);
    if(validPassword != true) {
        displayError(validPassword);
        return;
    }

    hideDomElements(this);
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

        const response = await request.json();

        console.log(response)
        if(request.status !== 200) {
            removeLoading({
                "currentScene": SCENE_LOGIN,
                "goToScene": null,
                "goToSceneText": null,
                "callback": () => {
                    displayError(response.errorReason);
                }
            });
            return;
        }

        console.log(response);
        const token = response.data.access_token;
        const refreshToken = response.data.refresh_token;
        const expirationDate = response.data.expire_data;

        await connect(username);

        const networkManager = getManager();
        const connection = networkManager.getClient();
        const penguinClient = ClientPenguin.createClient(username, connection);
        networkManager.subscribe(CLIENT_CONNECTION_DISCONNECTED);
        penguinClient.setToken(token);
        penguinClient.setRefreshToken(refreshToken);
        penguinClient.setTokenExpireDate(expirationDate);

        removeLoading({
            "currentScene": SCENE_LOGIN,
            "goToScene": SCENE_SERVER_SELECTION,
            "goToSceneText": "Loading Server Selection",
            "callback": null
        });

    } catch (error) {
        console.log(error.errorReason)
        removeLoading({
            "currentScene": SCENE_LOGIN,
            "goToScene": null,
            "goToSceneText": null,
            "callback": () => {
                displayError(error.errorReason);
            }
        });
    }
}

function validateUsername(username) {
    if(username == null || username == "") {
        return LOGIN_NO_USERNAME_PROVIDED;
    }

    return true;
}

function validatePassword(password) {
    if(password == null || password == "") {
        return LOGIN_NO_PASSWORD_PROVIDED;
    }

    return true;
}

export function hideDomElements(scene) {
    if(scene == null || scene.scene.key !== SCENE_LOGIN) {
        return;
    }

    scene.game.domContainer.style.display = 'none';
}

export function enableRememberMeBoxes(scene) {
    if(scene == null || scene.scene.key !== SCENE_LOGIN) {
        return;
    }

    if(!scene.login_remember_me_computer_checkbox_ticked.visible) {
        scene.login_remember_me_computer_checkbox_ticked.visible = true;
    }

    if(!scene.login_remember_password_checkbox_ticked.visible) {
        scene.login_remember_password_checkbox_ticked.visible = true;
    }
}