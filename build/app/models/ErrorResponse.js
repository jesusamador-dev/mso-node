"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorResponse {
    constructor(message, httpCode) {
        this.message = message;
        this.httpCode = httpCode;
    }
    response() {
        return {
            message: this.message,
            httpCode: this.httpCode,
        };
    }
}
exports.default = ErrorResponse;
