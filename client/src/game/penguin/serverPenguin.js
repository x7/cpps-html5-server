import { Penguin } from "./penguin";

/*
    This is the server version (other clients) in the world
*/
export default class ServerPenguin extends Penguin {
    constructor(username) {
        super(username);
    }
}