import { getManager } from "./network";

// All network listeners here
import { onConnect } from "./connection/connect";
import { onDisconnect } from "./connection/disconnect";
import { onStompError } from "./connection/error";
import { onWebsocketClose } from "./connection/websocketClose";
import { onWebsocketError } from "./connection/websocketError";

export function registerAllNetworkListeners() {
    const client = getManager().getClient();

    client.onConnect = onConnect;
    client.onDisconnect = onDisconnect;
    client.onStompError = onStompError;
    client.onWebSocketClose = onWebsocketClose;
    client.onWebSocketError = onWebsocketError;
}