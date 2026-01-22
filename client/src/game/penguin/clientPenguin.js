import { Penguin } from "./penguin";

/*
    This is the local penguin class
*/
export class ClientPenguin extends Penguin {
    constructor(username, connection) {
        super(username, connection);

        if(this.client != null) {
            return; // client already created
        }

        this.client = this;

        // JWT Token
        this.token = null;
        this.refreshToken = null;
        this.tokenExpire = null;
    }

    getPose(mouseX, mouseY) {
        const sideLookThresholdX = 50;
        const sideLookThresholdY = 50;

        if(mouseY > (this.getY() + sideLookThresholdY)) {
            if(mouseX > (this.getX() + sideLookThresholdX)) {
                return "bottom_right";
            }

            if(mouseX < (this.getX() - sideLookThresholdX)) {
                return "bottom_left";
            }

            return "down";
        }

        if(mouseY < (this.getY() - sideLookThresholdY)) {
            if(mouseX > (this.getX() + sideLookThresholdX)) {
                return "top_right";
            }

            if(mouseX < (this.getX() - sideLookThresholdX)) {
                return "top_left";
            }

            return "up";
        }

        if(mouseX < (this.getX() - sideLookThresholdX) && mouseY < (this.getY() + sideLookThresholdY) && mouseY > (this.getY() - sideLookThresholdY)) {
            return "left";
        }

        if(mouseX > (this.getX() + sideLookThresholdX) && mouseY < (this.getY() + sideLookThresholdY) && mouseY > (this.getY() - sideLookThresholdY)) {
            return "right";
        }

        return "unknown_pose";
    }

    setToken(token) {
        this.token = token;
    }

    getToken() {
        return this.token;
    }

    setRefreshToken(refreshToken) {
        this.refreshToken = refreshToken;
    }

    getRefreshToken() {
        return this.refreshToken;
    }

    setTokenExpireDate(expireDate) {
        this.tokenExpire = expireDate;
    }

    getTokenExpireDate() {
        return this.tokenExpire;
    }

    static getClient() {
        return this.client;
    }

    static createClient(username, connection) {
        if(this.client != null) {
            return;
        }

        this.client = new ClientPenguin(username, connection);
        return this.client;
    }
}