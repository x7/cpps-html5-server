import { Room } from "./room.js";

class RoomManager {
    constructor() {
        this.room = null;
    }

    setRoom(room) {
        this.room = new Room(room);
    }

    getRoom() {
        return this.room;
    }
}

export const roomManager = new RoomManager();