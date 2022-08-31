import { Request, Response, Router } from "express";
import PointsController from "../controllers/PointsController";

const routes = Router();
const PATH = "/activities";
const pointsController = new PointsController();

routes.get(`${PATH}/:id`, (req: Request, res: Response) =>
	pointsController.getById(req, res)
);

routes.get(`${PATH}`, (req: Request, res: Response) =>
	pointsController.get(req, res)
);

routes.post(`${PATH}`, (req: Request, res: Response) =>
	pointsController.create(req, res)
);

routes.delete(`${PATH}/:id`, (req: Request, res: Response) =>
	pointsController.delete(req, res)
);

export const ActivitiesRoutes = routes;
