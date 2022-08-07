"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const server_1 = __importDefault(require("./server"));
const config_1 = __importDefault(require("./config/config"));
const index_1 = __importDefault(require("./routes/index"));
const server = new server_1.default(config_1.default.PORT, index_1.default);
server.start();
