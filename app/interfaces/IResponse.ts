import { HttpMessage } from "../enum/Http";

export default interface IResponse {
	transaction?: string;
	status: HttpMessage;
	result: [] | {};
}
