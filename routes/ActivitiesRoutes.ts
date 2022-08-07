import { Request, Response, Router } from "express";
import ActivitiesController from "../controllers/ActivitiesController";

const routes = Router();
const PATH = "/activities";
const activitiesController = new ActivitiesController();

routes.get(`${PATH}/:id`, (req: Request, res: Response) =>
	activitiesController.getById(req, res)
);

routes.get(`${PATH}`, (req: Request, res: Response) =>
	activitiesController.get(req, res)
);

routes.post(`${PATH}`, (req: Request, res: Response) =>
	activitiesController.create(req, res)
);

routes.delete(`${PATH}/:id`, (req: Request, res: Response) =>
	activitiesController.delete(req, res)
);

export const ActivitiesRoutes = routes;
