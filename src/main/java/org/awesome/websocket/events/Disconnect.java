package org.awesome.websocket.events;

import org.awesome.game.world.Room;
import org.awesome.game.world.RoomManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectedEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Component
public class Disconnect {
    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @EventListener
    public void onWebsocketDisconnect(SessionDisconnectEvent event) {
        String sessionId = event.getSessionId();
        Map<String, String> session = Connect.getConnectionBySessionId(sessionId);

        if(session == null) {
            System.out.println("No connection found to remove");
            return;
        }

        Connect.deleteSession(sessionId);
        Map.Entry<String, String> firstEntry = session.entrySet().iterator().next();
        Map<String, Object> a = new HashMap<>();
        a.put("username", firstEntry.getKey());

        Room room = RoomManager.getRoomByPlayerUsername(firstEntry.getKey());
        if(room != null) {
            room.removePlayer(room.getPlayerByUsername(firstEntry.getKey()));
        }

        messagingTemplate.convertAndSend("/client/disconnect", Optional.of(a));
    }
}
