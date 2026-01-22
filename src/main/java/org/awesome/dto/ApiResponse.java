package org.awesome.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.awesome.enums.ApiResponseType;
import org.springframework.http.HttpStatus;

import java.util.List;
import java.util.Map;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResponse {
    private final ApiResponseType apiResponseType;
    private final Map<String, Object> data;
    private final String errorReason;
    private final int statusCode;
    private final String statusText;

    public ApiResponse(Map<String, Object> data, HttpStatus statusCode) {
        this.apiResponseType = ApiResponseType.SUCCESS;
        this.data = data;
        this.errorReason = null;
        this.statusCode = statusCode.value();
        this.statusText = statusCode.getReasonPhrase();
    }

    public ApiResponse(String reason, HttpStatus statusCode) {
        this.apiResponseType = ApiResponseType.ERROR;
        this.data = null;
        this.errorReason = reason;
        this.statusCode = statusCode.value();
        this.statusText = statusCode.getReasonPhrase();
    }

    public ApiResponseType getApiResponseType() {
        return this.apiResponseType;
    }

    public Map<String, Object> getData() {
        return this.data;
    }

    public String getErrorReason() {
        return this.errorReason;
    }

    public int getStatusCode() {
        return this.statusCode;
    }

    public String getStatusText() {
        return statusText;
    }
}