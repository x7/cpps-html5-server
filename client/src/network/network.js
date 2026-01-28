import { Client } from '@stomp/stompjs';
import { NetworkManager } from './networkManager';
import eventEmitter from '../util/eventEmitter';

let client = null;
let clientManager = null;

export async function connect(username) {
    return new Promise((resolve, reject) => {
        client = new Client({
            brokerURL: 'ws://localhost:8080/ws',
            reconnectDelay: 0,
            connectHeaders: {
                "username": username
            }
        });

        clientManager = new NetworkManager(client);
        clientManager.activate();

        eventEmitter.on("websocket_connected", () => {
            resolve();
        });

        eventEmitter.on("websocket_failed", () => {
            reject();
        }); 
    });
}

export function getManager() {
    if(clientManager == null) {
        console.log('The client manager hasnt been setup yet.');
        return null;
    }

    return clientManager;
}