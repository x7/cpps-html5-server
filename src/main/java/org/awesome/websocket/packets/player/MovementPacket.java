package org.awesome.websocket.packets.player;

import org.awesome.annotations.PacketInfo;
import org.awesome.annotations.RegisterPacket;
import org.awesome.dto.Player;
import org.awesome.game.world.RoomManager;
import org.awesome.websocket.packets.PacketHandler;
import org.awesome.websocket.packets.PacketTypes;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.user.SimpUserRegistry;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RegisterPacket
@PacketInfo(packetType = PacketTypes.MOVEMENT)
public class MovementPacket implements PacketHandler {
    @Override
    public void handle(Map<String, Object> packet, SimpMessagingTemplate messagingTemplate) {
        Map<String, Object> data = (Map<String, Object>) packet.get("data");
        String roomName = data.get("currentRoom").toString();
        double x = Double.valueOf(data.get("x").toString());
        double y = Double.valueOf(data.get("y").toString());
        String pose = data.get("pose").toString();
        Map<String, Object> penguinData = (Map<String, Object>) data.get("penguin");

        Player player = RoomManager.getRoom(roomName).getPlayerByUsername(penguinData.get("username").toString());
        player.setX(x);
        player.setY(y);
        System.out.println(player);

        Map<String, Object> returnData = new HashMap<>();
        returnData.put("x", x);
        returnData.put("y", y);
        returnData.put("pose", pose);
        returnData.put("penguin", penguinData);

        System.out.println("received packet");
        messagingTemplate.convertAndSend("/client/player_movement", Optional.of(returnData));
    }
}
