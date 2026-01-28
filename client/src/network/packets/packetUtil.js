import { ClientPenguin } from "../../game/penguin/clientPenguin";
import { getSceneManager } from "../../main";

// creates a packet to send to the server
export function createPacket(name, data) {
    if(typeof name != 'string') {
        console.log("Invalid type provided for packet name");
        return;
    }

    if(typeof data != 'object') {
        console.log("Invalid type provided for packet data");
        return;
    }

    const clientPenguin = ClientPenguin.getClient();
    const username = clientPenguin.getUsername();
    const id = clientPenguin.getId();
    const token = clientPenguin.getToken();
    
    data["penguin"] = { "username": username, "id": id }
    data["token"] = token;
    data["currentRoom"] = getSceneManager().getCurrentScene().scene.key;

    return JSON.stringify({ name, data });
}

export function parsePacket(packet) {
    if(typeof packet != 'string') {
        console.log("Invalid packet type. Cannot parse packet");
        return;
    }

    try {
        return JSON.parse(packet);
    } catch (error) {
        console.log(error)
        return;
    }
}