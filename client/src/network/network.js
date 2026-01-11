import { Client } from '@stomp/stompjs';
import { NetworkManager } from './networkManager';
import { getSceneManager } from '../main';

let client = null;
let clientManager = null;

export async function connect() {
    const sceneManager = getSceneManager();
    sceneManager.add({
        "sceneKey": "LoadingScene",
        "scene": null,
        "autoStart": false,
    });

    sceneManager.start("LoadingScene", { "text": "Connecting to websocket", });

    client = new Client({
        brokerURL: 'ws://localhost:8080/ws',
        reconnectDelay: 5000,
    });

    clientManager = new NetworkManager(client);
    clientManager.activate();
}

export function getManager() {
    if(clientManager == null) {
        console.log('The client manager hasnt been setup yet.');
        return null;
    }

    return clientManager;
}