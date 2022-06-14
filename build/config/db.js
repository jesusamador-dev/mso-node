"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const config_1 = __importDefault(require("./config"));
const { DB_USER, DB_PASS, DB_HOST, DB_NAME, DB_PORT } = config_1.default;
const appDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    synchronize: true,
    logging: true,
    entities: ['./app/entity/*.js']
});
appDataSource.initialize().then((_res) => {
    // here you can start to work with your database
})
    .catch((error) => console.log(error));
exports.default = appDataSource;
