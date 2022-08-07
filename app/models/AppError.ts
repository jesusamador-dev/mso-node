import { HttpCode, HttpMessage } from "../enum/Http";
import IError from "../interfaces/IError";

export class AppError extends Error implements IError {
	public readonly name: string;
	public readonly httpCode: HttpCode;
	public readonly message!: HttpMessage;
	public readonly isOperational: boolean = true;

	constructor(args: IError) {
		super();
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
