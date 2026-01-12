package org.awesome.routes.account.register;

import org.awesome.dto.ApiResponse;
import org.awesome.dto.PenguinData;
import org.awesome.database.operations.PenguinOperations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Map;

public class RegisterService {
    public static ApiResponse<?> registerHelper(Map<String, Object> body) {
        String username = (String) body.get("username");
        String password = (String) body.get("password");
        String email = (String) body.get("email");
        String penguinColor = (String) body.get("penguin_color");

        if(!validateUsername(username)) {
            return ApiResponse.error("Invalid username", HttpStatus.BAD_REQUEST);
        }

        if(!validatePassword(password)) {
            return ApiResponse.error("Password not stronger enough", HttpStatus.BAD_REQUEST);
        }

        if(!validateEmail(email)) {
            return ApiResponse.error("Invalid email", HttpStatus.BAD_REQUEST);
        }

        PenguinData penguinData = PenguinOperations.getPenguinByUsername(username);
        if(penguinData != null) {
            return ApiResponse.error("Penguin name already exist", HttpStatus.BAD_REQUEST);
        }

        boolean didCreatePenguin = PenguinOperations.createPenguin(username, password, email, penguinColor);
        if(!didCreatePenguin) {
            return ApiResponse.error("Failed to create penguin", HttpStatus.BAD_REQUEST);
        }

        return ApiResponse.success("Created account", HttpStatus.OK);
    }

    private static boolean validateUsername(String username) {
        String regex = "^[a-zA-Z0-9]{4,16}$";
        return username.matches(regex);
    }

    private static boolean validatePassword(String password) {
        String regex = "^(?=.*[A-Z])(?=.*\\d)(?=.*[^a-zA-Z0-9]).{8,}$";
        return password.matches(regex);
    }

    private static boolean validateEmail(String email) {
        String regex = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$";
        return email.matches(regex);
    }
}
