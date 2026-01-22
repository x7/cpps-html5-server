import packetRegistry from "./packetRegistry";
import * as packets from '../topics.js'

// Packets below this
import { receiveJoinRoomPacket } from "./world/joinRoomPacket.js";
import { receiveMovementPacket} from "./penguin/movementPacket.js";
import { receiveAddPlayerPacket } from "./world/addPlayerPacket.js";
import { chat } from "./world/chat.js";
import { receivePlayAnimationPacket } from "./penguin/playAnimationPacket.js";
import { receiveStopAnimationPacket } from "./penguin/stopAnimationPacket.js";
import { disconnect } from "./test/disconnect.js";
import { clientDisconnected } from "./test/clientDisconnect.js";

// Handles registering all packet events
export function registerPackets() {
    packetRegistry.addPacket(packets.CLIENT_TEST, receiveJoinRoomPacket);
    packetRegistry.addPacket(packets.CLIENT_MOVE_TOPIC, receiveMovementPacket);
    packetRegistry.addPacket(packets.CLIENT_ADD_PLAYER, receiveAddPlayerPacket);
    packetRegistry.addPacket(packets.CLIENT_CHAT, chat);
    packetRegistry.addPacket(packets.CLIENT_PLAY_ANIMATION, receivePlayAnimationPacket);
    packetRegistry.addPacket(packets.CLIENT_STOP_ANIMATION, receiveStopAnimationPacket);
    packetRegistry.addPacket(packets.CLIENT_DISCONNECT, disconnect);
    packetRegistry.addPacket(packets.CLIENT_CONNECTION_DISCONNECTED, clientDisconnected)
}