package org.awesome.routes.account.register;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Map;

@Controller
public class RegisterController {
//    @PostMapping("/api/register")
//    public ResponseEntity<?> register(@RequestBody Map<String, Object> body) throws JsonProcessingException {
//        String username = (String) body.get("username");
//        String password = (String) body.get("password");
//        String email = (String) body.get("email");
//        String penguinColor = (String) body.get("penguin_color");

//        if(username == null || password == null || email == null || penguinColor == null) {
//            ApiResponse<?> response = ApiResponse.error("Invalid Data", HttpStatus.BAD_REQUEST);
//            return ResponseEntity.status(response.httpStatus).body(response);
//        }
//
//        ApiResponse<?> response = RegisterService.registerHelper(body);
//        return ResponseEntity.status(response.httpStatus).body(response);
//    }
}
