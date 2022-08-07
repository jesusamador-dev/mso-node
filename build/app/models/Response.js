"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpResponse {
    constructor(args) {
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
exports.default = HttpResponse;
