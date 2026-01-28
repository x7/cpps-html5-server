package org.awesome.game.world;

import com.fasterxml.jackson.databind.JsonNode;
import org.awesome.util.JsonUtil;
import org.awesome.util.file.FileHelper;
import org.springframework.boot.jackson.autoconfigure.JacksonProperties;

import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

public class RoomManager {
    private static final Path roomConfig = Path.of("").toAbsolutePath().resolve("src", "main", "java", "org", "awesome", "game", "data", "rooms.json");
    private static JsonNode roomConfigCache = null;
    private static final Map<String, Room> rooms = new HashMap<>();

    public static void addRoom(String roomName) {
        if(rooms.containsKey(roomName)) {
            return;
        }

        // Read room config
        if(roomConfigCache == null) {
            if(!FileHelper.doesFileExist(roomConfig)) {
                System.out.println("Rooms config does not exist. Cannot create rooms");
                return;
            }

            roomConfigCache = JsonUtil.readJsonFile(roomConfig);
        }

        JsonNode roomData = roomConfigCache.get(roomName);
        if(roomData == null) {
            System.out.println("The room " + roomName + " does not exist in the config cannot create room");
            return;
        }

        String displayName = roomData.get("display_name").asText();
        boolean available = roomData.get("available").asBoolean();
        int maxPlayers = roomData.get("max_players").asInt();
        int spawnX = roomData.get("spawn_x").asInt();
        int spawnY = roomData.get("spawn_y").asInt();

        Room room = new Room(roomName, displayName, available, maxPlayers, spawnX, spawnY);
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