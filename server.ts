import express, { Express, Router } from 'express';

class Server {
  private app: Express = express();
  private port: number;

  constructor(port: number, routes: Array<Router>) {
    this.port = port;
    this.generateRoutes(routes);
    this.configuration()
  }

  private configuration() {
    this.app.use(express.json());
  }

  private generateRoutes(routesGroup: Array<Router>) {
    routesGroup.forEach(routes => {
      this.app.use('/api/v1', routes);
    });
  }

  public start() {
    this.app.listen(this.port, () => console.log("Servidor listo!"));
  }
}


export default Server;