import { HttpMessage } from "../enum/Http";
import IResponse from "../interfaces/IResponse";

export default class HttpResponse implements IResponse {
	transaction: string;
	status: HttpMessage;
	result: [] | {};

	constructor(args: IResponse) {
		this.transaction = String(Date.now());
		this.status = args.status;
		this.result = args.result;
	}

	response() {
		return {
			transaction: this.transaction,
			status: this.status,
			result: this.result,
		};
	}
}
