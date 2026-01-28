import { ClientPenguin } from "../../../game/penguin/clientPenguin";
import MovementManager from "../../../game/penguin/movementManager";
import { roomManager } from "../../../game/rooms/roomManager";
import { SceneManager } from "../../../game/scenes/sceneManager";
import { getSceneManager } from "../../../main";
import { getManager } from "../../network";
import { SERVER_VERIFY_PACKET } from "../../topics";
import { PACKET_PLAYER_MOVEMENT } from "../../types/packetTypes";

export function receiveMovementPacket(response) {
    const packet = JSON.parse(response.body);
    const x = packet.x;
    const y = packet.y;
    const pose = packet.pose;
    const penguin = packet.penguin;
    const username = penguin.username;
    const id = penguin.id;
    
    const clientPenguin = ClientPenguin.getClient();
    if(username === clientPenguin.getUsername()) {
        return;
    }

    let room = roomManager.getRoom();
    if(room == null) {
        roomManager.setRoom("town");
        room = roomManager.getRoom();
    }

    const player = room.getPlayerByUsername(username);
    if(player == null) {
        console.log("Player did not exist cannot send movement packet");
        return;
    }

    console.log(`RECEIVED MOVEMENT PACKET TO GO TO X: ${x} Y: ${y}`)

    const scene = getSceneManager().getCurrentScene();
    console.log(scene)
    console.log("======")
    scene.movementManager.moveTo(player, pose, x, y)
}

export function sendMovementPacket(x, y, pose) {
    const networkManager = getManager();
    const data = { "packet_type": PACKET_PLAYER_MOVEMENT, "x": x, "y": y, "pose": pose };
    networkManager.send(SERVER_VERIFY_PACKET, data);
}