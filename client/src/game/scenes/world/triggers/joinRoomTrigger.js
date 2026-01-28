import { getSceneManager } from "../../../../main";
import { sendJoinRoomPacket } from "../../../../network/packets/world/joinRoomPacket";
import { ClientPenguin } from "../../../penguin/clientPenguin";
import { displayLoading } from "../../loading/loadingHelper";

export function onJoinRoomTrigger(room) {
    const sceneManager = getSceneManager();
    displayLoading(sceneManager.getCurrentScene(), "Loading Room");
    sendJoinRoomPacket(room);
}