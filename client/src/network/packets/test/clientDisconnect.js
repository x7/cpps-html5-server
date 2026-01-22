import { getManager } from "../../network";

export function clientDisconnected(response) {
        console.log("retardddd")
    getManager().deactive();
    alert("You been discoonnected")
}