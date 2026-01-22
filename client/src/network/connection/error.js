export function onStompError() {
    eventEmitter.emit("websocket_failed");
}