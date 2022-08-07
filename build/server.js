"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
class Server {
    constructor(port, router) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.configuration();
        this.generateRoutes(router);
    }
    configuration() {
        this.app.use(body_parser_1.default.json());
    }
    generateRoutes(router) {
        this.app.use("/api/v1", router);
    }
    start() {
        this.app.listen(this.port, () => console.log("Servidor listo!"));
    }
}
exports.default = Server;
