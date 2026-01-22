package org.awesome.websocket.events;

import org.awesome.websocket.DisconnectWebsocket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.Message;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectedEvent;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class Connect {
    private static final Map<String, String> connections = new ConcurrentHashMap<>(); // Username > Session ID

    @Autowired
    private DisconnectWebsocket disconnectWebsocket;

    @EventListener
    public void onWebsocketConnect(SessionConnectedEvent event) {
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(event.getMessage());
        Message<?> connectMessage = (Message<?>) headerAccessor.getHeader("simpConnectMessage");
        StompHeaderAccessor connectHeaders = StompHeaderAccessor.wrap(connectMessage);
        Map<String, List<String>> nativeHeaders = (Map<String, List<String>>) connectHeaders.getHeader(StompHeaderAccessor.NATIVE_HEADERS);
        String username = nativeHeaders.get("username").toString().replace("[", "").replace("]", "");
        String sessionId = connectHeaders.getSessionId();

        if(connections.containsKey(username)) {
            disconnectWebsocket.kickSession(connections.get(username));
            deleteSession(username);
        }

        System.out.println(username + " has now connected to the server");
        connections.put(username, sessionId);
    }

    public static Map<String, String> getConnections() {
        return connections;
    }

    public static Map<String, String> getConnectionBySessionId(String sessionId) {
        Map<String, String> connections = getConnections();

        Map<String, String> returnEvent = new HashMap<>();
        for(Map.Entry<String, String> connection : connections.entrySet()) {
            String session = connection.getValue();

            if(!sessionId.equals(session)) {
                continue;
            }

            returnEvent.put(connection.getKey(), session);
            break;
        }

        if(returnEvent.isEmpty()) {
            return null;
        }

        return returnEvent;
    }

    public static void deleteSession(String username) {
        if(!connections.containsKey(username)) {
            return;
        }

        connections.remove(username);
    }
}