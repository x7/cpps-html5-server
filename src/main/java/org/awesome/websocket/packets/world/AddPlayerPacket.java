package org.awesome.websocket.packets.world;

import org.awesome.annotations.PacketInfo;
import org.awesome.annotations.RegisterPacket;
import org.awesome.websocket.packets.PacketHandler;
import org.awesome.websocket.packets.PacketTypes;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

//@RegisterPacket
//@PacketInfo(packetType = PacketTypes.JOIN_ROOM)
public class AddPlayerPacket implements PacketHandler {
    @Override
    public void handle(Map<String, Object> packet, SimpMessagingTemplate messagingTemplate) {
        System.out.println("Received a player add event");
        Map<String, Object> data = (Map<String, Object>) packet.get("data");
        String username = data.get("username").toString();
        double x = (double) Integer.parseInt(data.get("x").toString());
        double y = (double) Integer.parseInt(data.get("y").toString());

        Map<String, Object> response = new HashMap<>();
        response.put("room", data.get("room"));

        response.put("username", username);
        response.put("x", x);
        response.put("y", y);

        messagingTemplate.convertAndSend("/client/add_player", Optional.of(response));
    }
}