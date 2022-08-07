import { HttpCode, HttpMessage } from "../enum/Http";

export default interface IErrorRepsponse {
	message: HttpMessage | string;
	httpCode: HttpCode;
}
