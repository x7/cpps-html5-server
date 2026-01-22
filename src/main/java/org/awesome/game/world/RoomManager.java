package org.awesome.game.world;

import java.util.HashMap;
import java.util.Map;

public class RoomManager {
    private static final Map<String, Room> rooms = new HashMap<>();

    public static void addRoom(String roomName, int maxPlayers) {
        if(rooms.containsKey(roomName)) {
            return;
        }

        Room room = new Room(roomName, maxPlayers);
        rooms.put(roomName, room);
    }

    public static Room getRoom(String roomName) {
        if(!rooms.containsKey(roomName)) {
            return null;
        }

        return rooms.get(roomName);
    }

    public static Room getRoomByPlayerUsername(String username) {
        if(rooms.isEmpty()) {
            return null;
        }

        Room room = null;
        for(Room room1 : rooms.values()) {
            if(room1.getPlayerByUsername(username) == null) {
                continue;
            }

            room = room1;
        }

        return room;
    }

    public static Map<String, Room> getAllRooms() {
        return rooms;
    }
}