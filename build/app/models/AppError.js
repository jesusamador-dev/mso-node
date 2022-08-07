"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    constructor(args) {
        super();
        this.isOperational = true;
        this.message = args.message;
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = args.name || "Error";
        this.httpCode = args.httpCode;
        if (args.isOperational !== undefined) {
            this.isOperational = args.isOperational;
        }
        Error.captureStackTrace(this);
    }
}
exports.AppError = AppError;
