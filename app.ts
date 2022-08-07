import "reflect-metadata";
import Server from "./server";
import config from "./config/config";
import router from "./routes/index";

const server = new Server(config.PORT, router);

server.start();
