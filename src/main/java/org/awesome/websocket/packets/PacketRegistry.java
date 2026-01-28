package org.awesome.websocket.packets;

import org.awesome.websocket.packets.player.MovementPacket;
import org.awesome.websocket.packets.player.PlayAnimationPacket;
import org.awesome.websocket.packets.player.StopAnimationPacket;
import org.awesome.websocket.packets.world.JoinRoomPacket;
import org.awesome.websocket.packets.world.LeaveRoomPacket;
import org.awesome.websocket.packets.world.PlayerChatPacket;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.user.SimpUserRegistry;

import java.util.HashMap;
import java.util.Map;

public class PacketRegistry {
    private static final Map<String, PacketHandler> registeredPackets = new HashMap<>();
    private static boolean arePacketsRegistered = false;

    public static void getPacketResponse(String packetName, Map<String, Object> packet, SimpMessagingTemplate simpMessagingTemplate, SimpUserRegistry userRegistry) {
        if(!arePacketsRegistered) {
            registerPackets();
        }

        if(!registeredPackets.containsKey(packetName)) {
            System.out.println("PACKET FAILED " + packetName);
            return;
        }

        System.out.println(packetName);
        registeredPackets.get(packetName).handle(packet, simpMessagingTemplate);
    }

    public static void registerPackets() {
        registeredPackets.put(PacketTypes.JOIN_ROOM.getPacketName(), new JoinRoomPacket());
        registeredPackets.put(PacketTypes.LEAVE_ROOM.getPacketName(), new LeaveRoomPacket());
        registeredPackets.put(PacketTypes.MOVEMENT.getPacketName(), new MovementPacket());
        registeredPackets.put(PacketTypes.PLAYER_CHAT.getPacketName(), new PlayerChatPacket());
        registeredPackets.put(PacketTypes.PLAY_ANIMATION.getPacketName(), new PlayAnimationPacket());
        registeredPackets.put(PacketTypes.STOP_ANIMATION.getPacketName(), new StopAnimationPacket());
        arePacketsRegistered = true;
    }
}
