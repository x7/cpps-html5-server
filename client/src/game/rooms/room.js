import { getSceneManager } from "../../main";
import { getManager } from "../../network/network";
import { CLIENT_ADD_PLAYER, CLIENT_MOVE_TOPIC, CLIENT_TEST } from "../../network/topics";

export class Room {
    constructor(room) {
        this.room = room;
        this.scene = null;
        this.sceneManager = getSceneManager();
        this.players = [];
    }

    addPlayer(player, x, y, client, scene) {
        if(this.players.includes(player)) {
            console.log("This player already exist in this room");
            return;
        }

        this.players.push(player);

        const manager = getManager();
        if(client) {
            manager.subscribe(CLIENT_MOVE_TOPIC);
            manager.subscribe(CLIENT_ADD_PLAYER);
            manager.subscribe(CLIENT_MOVE_TOPIC);
            return;
        }

        const a = this.sceneManager.get(scene);
        player.createPenguin(a, x, y);
        console.log(`created player ${player}`)
        player.setX(x);
        player.setY(y);
    }

    removePlayer(player) {
        if(!this.players.includes(player)) {
            console.log(`doesnt include`)
            console.log(player)
            console.log(this.players)
            return;
        }

        const playerIndex = this.players.indexOf(player);
        this.players.splice(playerIndex, 1);
        player.deletePenguin();
    }

    getPlayerByUsername(username) {
        const filter = this.players.filter(player => player.username === username);
        if(filter.length === 0) {
            return;
        }

        return filter[0];
    }

    getRoomName() {
        return this.room;
    }
}