import { Request, Response, Router } from "express";
import ActivitiesController from "../controllers/ActivitiesController";

const routes = Router();
const activitiesController = new ActivitiesController;

routes.get('/', (req: Request, res: Response) => activitiesController.getById(req, res));
routes.use('/activities', routes);

export const ActivitiesRoutes = routes;