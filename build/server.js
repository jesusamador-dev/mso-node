"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor(port, routes) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.generateRoutes(routes);
        this.configuration();
    }
    configuration() {
        this.app.use(express_1.default.json());
    }
    generateRoutes(routesGroup) {
        routesGroup.forEach(routes => {
            this.app.use('/api/v1', routes);
        });
    }
    start() {
        this.app.listen(this.port, () => console.log("Servidor listo!"));
    }
}
exports.default = Server;
