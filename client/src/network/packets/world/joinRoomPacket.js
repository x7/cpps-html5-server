import { ClientPenguin } from "../../../game/penguin/clientPenguin";
import ServerPenguin from "../../../game/penguin/serverPenguin";
import { roomManager } from "../../../game/rooms/roomManager";
import { removeLoading } from "../../../game/scenes/loading/loadingHelper";
import { SCENE_ROOM_TOWN, SCENE_SERVER_SELECTION } from "../../../game/scenes/sceneNames";
import { getManager } from "../../network.js";
import { SERVER_VERIFY_PACKET } from "../../topics.js";
import { PACKET_JOIN_ROOM, PACKET_LEAVE_ROOM } from "../../types/packetTypes.js";
import { parsePacket } from "../packetUtil.js";
import eventEmitter from "../../../util/eventEmitter.js";
import { getSceneManager } from "../../../main.js";

export function receiveJoinRoomPacket(response) {
    console.log("received packet")
    const packet = parsePacket(response.body);
    if(!packet) {
        console.log("cant parse packet");
        return;
    }
    
    if(!packet.success) {
        console.log("error joining room");
        return;
    }

    console.log(`Join room: ${JSON.stringify(packet)}`)
    const roomData = packet.data;
    const roomName = roomData.room;
    const roomDisplayName = roomData.roomDisplayName;
    const roomX = roomData.x;
    const roomY = roomData.y;
    const players = roomData.users;
    const username = roomData.penguin.username;
    const penguin = ClientPenguin.getClient();

    roomManager.setRoom(roomName);
    const room = roomManager.getRoom();

    console.log(roomName)

    removeLoading({
        currentScene: SCENE_SERVER_SELECTION,
        goToScene: roomName,
        goToSceneText: `Joining ${roomDisplayName}`,
        goToSceneData: { "players": players },
        callback: null
    });

    room.addPlayer(penguin, roomX, roomY, true, room.getRoomName());

    eventEmitter.on("scene-spawn-player-event", (scene) => {
        const client = ClientPenguin.getClient();
        client.createPenguin(scene, roomX, roomY);
        
        if(players.length > 0) {
            for(const player of players) {
                const serverPenguin = new ServerPenguin(player.username);
                room.addPlayer(serverPenguin, player.x, player.y, false, room.getRoomName());
            }
        }
    });
}

export function sendJoinRoomPacket(roomId) {
    const networkManager = getManager();
    const data = { "packet_type": PACKET_JOIN_ROOM, "room_id": roomId };
    networkManager.send(SERVER_VERIFY_PACKET, data);
    networkManager.send(SERVER_VERIFY_PACKET, { "packet_type": PACKET_LEAVE_ROOM, "room_id": getSceneManager().getCurrentScene().scene.key });
}