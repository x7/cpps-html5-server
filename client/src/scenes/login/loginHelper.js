export async function login(username, password) {
    try {
        const request = await fetch("http://localhost:8080/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        });

        if(request.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error)
        alert("error")
    }
}

function validateUsername() {

}

function validatePassword() {

}

export function hideDomElements(scene) {
    if(scene == null || scene.scene.key !== 'LoginScene') {
        return;
    }

    scene.game.domContainer.style.display = 'none';
}

export function enableRememberMeBoxes(scene) {
    if(scene == null || scene.scene.key !== 'LoginScene') {
        return;
    }

    if(!scene.login_remember_me_computer_checkbox_ticked.visible) {
        scene.login_remember_me_computer_checkbox_ticked.visible = true;
    }

    if(!scene.login_remember_password_checkbox_ticked.visible) {
        scene.login_remember_password_checkbox_ticked.visible = true;
    }
}