package org.awesome.routes.account.login;

import org.awesome.dto.ApiResponse;
import org.awesome.dto.PenguinData;
import org.awesome.database.operations.PenguinOperations;
import org.awesome.util.JwtUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class LoginController {
    @PostMapping("/api/login")
    public ResponseEntity<?> login(@RequestBody Map<String, Object> body) {
        String username = (String) body.get("username");
        String password = (String) body.get("password");

        PenguinData penguinData = PenguinOperations.getPenguinByUsername(username);
        if(penguinData == null) {
            ApiResponse apiResponse = new ApiResponse("No penguin found with this username", HttpStatus.BAD_REQUEST);
            return ResponseEntity.badRequest().body(apiResponse);
        }

        if(!username.equalsIgnoreCase(penguinData.getUsername()) || !penguinData.getPassword().equals(password)) {
            ApiResponse apiResponse = new ApiResponse("Invalid login provided", HttpStatus.BAD_REQUEST);
            return ResponseEntity.badRequest().body(apiResponse);
        }

        // Generate JWT
        int userId = penguinData.getId();
        System.out.println("Creating web token for USER: " + username);
        Map<String, String> jwtToken = JwtUtil.createJwt(username, userId);

        Map<String, Object> apiData = new HashMap<>();
        apiData.put("access_token", jwtToken.get("accessToken"));
        apiData.put("refresh_token", jwtToken.get("refreshToken"));
        apiData.put("expire_date", jwtToken.get("expire_date"));

        ApiResponse apiResponse = new ApiResponse(apiData, HttpStatus.OK);
        return ResponseEntity.ok().body(apiResponse);
    }
}
