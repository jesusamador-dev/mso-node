"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const Http_1 = require("../enum/Http");
const AppError_1 = require("../models/AppError");
const ErrorResponse_1 = __importDefault(require("../models/ErrorResponse"));
class ErrorHandler {
    handleError(error, response) {
        if (this.isTrustedError(error) && response) {
            this.handleTrustedError(error, response);
        }
        else {
            this.handleUntrustedError(error, response);
        }
    }
    isTrustedError(error) {
        if (error instanceof AppError_1.AppError) {
            return error.isOperational;
        }
        return false;
    }
    handleTrustedError(error, response) {
        const errorResponse = new ErrorResponse_1.default(error.message, error.httpCode);
        response.status(error.httpCode).json(errorResponse.response());
    }
    handleUntrustedError(error, response) {
        if (response) {
            response
                .status(Http_1.HttpCode.INTERNAL_SERVER_ERROR)
                .json({ message: "Internal server error" });
        }
        console.log("Application encountered an untrusted error.");
        console.log(error);
    }
}
exports.errorHandler = new ErrorHandler();
