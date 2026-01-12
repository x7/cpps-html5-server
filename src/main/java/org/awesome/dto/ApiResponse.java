package org.awesome.dto;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ApiResponse<T> {
    public boolean success;
    public String reason;
    public T data;
    public HttpStatus httpStatus;

    public static <T> ApiResponse<T> success(T data, HttpStatus httpStatus) {
        ApiResponse<T> res = new ApiResponse<>();
        res.success = true;
        res.data = data;
        res.httpStatus = httpStatus;
        return res;
    }

    public static <T> ApiResponse<T> error(String reason, HttpStatus httpStatus) {
        ApiResponse<T> res = new ApiResponse<>();
        res.success = false;
        res.reason = reason;
        res.httpStatus = httpStatus;
        return res;
    }
}
