import { Request, Response, Router } from "express";
import passport from "passport";
import ActivitiesController from "../controllers/ActivitiesController";

const routes = Router();
const PATH = "/activities";
const activitiesController = new ActivitiesController();

routes.get(`${PATH}/:id`, passport.authenticate('jwt', { session: false, failureRedirect: '/login' }), (req: Request, res: Response) =>
	activitiesController.getById(req, res)
);

routes.get(`${PATH}`, passport.authenticate('jwt', { session: false, failureRedirect: '/login' }), (req: Request, res: Response) =>
	activitiesController.get(req, res)
);

routes.post(`${PATH}`, passport.authenticate('jwt', { session: false, failureRedirect: '/login' }), (req: Request, res: Response) =>
	activitiesController.create(req, res)
);

routes.delete(`${PATH}/:id`, passport.authenticate('jwt', { session: false, failureRedirect: '/login' }), (req: Request, res: Response) =>
	activitiesController.delete(req, res)
);

export const ActivitiesRoutes = routes;
