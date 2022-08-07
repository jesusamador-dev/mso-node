import bodyParser from "body-parser";
import express, { Express, Router } from "express";

class Server {
	private app: Express = express();
	private port: number;

	constructor(port: number, router: Router) {
		this.port = port;
		this.configuration();
		this.generateRoutes(router);
	}

	private configuration() {
		this.app.use(bodyParser.json());
	}

	private generateRoutes(router: Router) {
		this.app.use("/api/v1", router);
	}

	public start() {
		this.app.listen(this.port, () => console.log("Servidor listo!"));
	}
}

export default Server;
