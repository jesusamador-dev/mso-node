import { Response } from "express";
import { HttpCode } from "../enum/Http";
import { AppError } from "../models/AppError";
import ErrorResponse from "../models/ErrorResponse";

class ErrorHandler {
	public handleError(error: Error | AppError, response?: Response): void {
		if (this.isTrustedError(error) && response) {
			this.handleTrustedError(error as AppError, response);
		} else {
			this.handleUntrustedError(error, response);
		}
	}

	public isTrustedError(error: Error): boolean {
		if (error instanceof AppError) {
			return error.isOperational;
		}
		return false;
	}

	private handleTrustedError(error: AppError, response: Response): void {
		const errorResponse = new ErrorResponse(error.message, error.httpCode);
		response.status(error.httpCode).json(errorResponse.response());
	}

	private handleUntrustedError(
		error: Error | AppError,
		response?: Response
	): void {
		if (response) {
			response
				.status(HttpCode.INTERNAL_SERVER_ERROR)
				.json({ message: "Internal server error" });
		}

		console.log("Application encountered an untrusted error.");
		console.log(error);
	}
}

export const errorHandler = new ErrorHandler();
