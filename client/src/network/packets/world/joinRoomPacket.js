import { ClientPenguin } from "../../../game/penguin/clientPenguin";
import ServerPenguin from "../../../game/penguin/serverPenguin";
import { roomManager } from "../../../game/rooms/roomManager";
import { removeLoading } from "../../../game/scenes/loading/loadingHelper";
import { SCENE_ROOM_TOWN, SCENE_SERVER_SELECTION } from "../../../game/scenes/sceneNames";
import { getManager } from "../../network.js";
import { SERVER_VERIFY_PACKET } from "../../topics.js";
import { PACKET_JOIN_ROOM } from "../../types/packetTypes.js";
import { parsePacket } from "../packetUtil.js";

export function receiveJoinRoomPacket(response) {
    const packet = parsePacket(response.body);
    if(!packet) {
        console.log("cant parse packet");
        return;
    }
    
    if(!packet.success) {
        console.log("error joining room");
        return;
    }

    console.log(`Join room: ${packet}`)
    const roomData = packet.data;
    const roomX = roomData.x;
    const roomY = roomData.y;
    const players = roomData.users;
    const username = roomData.penguin.username;
    const penguin = ClientPenguin.getClient();


    let room = roomManager.getRoom();
    if(room == null) {
        roomManager.setRoom("town");
        room = roomManager.getRoom();
    }

    room.addPlayer(penguin, roomX, roomY, true);

    if(players.length > 0) {
        for(const player of players) {
            const serverPenguin = new ServerPenguin(player.username);
            room.addPlayer(serverPenguin, player.x, player.y, false);
        }
    }

    // load scene and spawn player
    setTimeout(() => {
        removeLoading({
            currentScene: SCENE_SERVER_SELECTION,
            goToScene: SCENE_ROOM_TOWN,
            goToSceneText: "Loading Town",
            goToSceneData: { "players": players },
            callback: null
        });
    }, 500);
}

export function sendJoinRoomPacket(roomId) {
    const networkManager = getManager();
    const data = { "packet_type": PACKET_JOIN_ROOM, "room_id": roomId };
    networkManager.send(SERVER_VERIFY_PACKET, data);
}