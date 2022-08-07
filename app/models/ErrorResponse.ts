import { HttpMessage, HttpCode } from "../enum/Http";
import IErrorRepsponse from "../interfaces/IErrorResponse";

export default class ErrorResponse implements IErrorRepsponse {
	message: HttpMessage | string;
	httpCode: HttpCode;

	constructor(message: HttpMessage, httpCode: HttpCode) {
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
