package org.awesome.websocket.packets;

import org.springframework.messaging.simp.SimpMessagingTemplate;

import java.util.Map;

public interface PacketHandler {
    void handle(Map<String, Object> packet, SimpMessagingTemplate messagingTemplate);
}
