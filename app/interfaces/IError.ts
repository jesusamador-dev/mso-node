import { HttpCode, HttpMessage } from "../enum/Http";

export default interface IError {
	name?: string;
	httpCode: HttpCode;
	message: HttpMessage;
	isOperational?: boolean;
}
