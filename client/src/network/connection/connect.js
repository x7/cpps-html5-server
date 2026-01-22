import packetRegistry from "../packets/packetRegistry";
import { getManager } from "../network";
import eventEmitter from "../../util/eventEmitter";

export function onConnect(client) {
    console.log('Client is connected');
    const clientManager = getManager();

    console.log('Now registering all packets...');  
    const packets = packetRegistry.getAllPackets();

    if(packets.size == 0) {
        console.log('No packets found to register.');
        return;
    }

    console.log('Finished registering all packets');
    eventEmitter.emit("websocket_connected");
}