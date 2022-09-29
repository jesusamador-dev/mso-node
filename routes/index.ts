import "express-async-errors";
import { Router, NextFunction, Response, Request } from "express";
import { ErrorHandler } from "../app/middlewares";
import { ActivitiesRoutes } from "./ActivitiesRoutes";
import { AuthRoutes } from "./AuthRoutes";
import { PointsRoutes } from "./PointsRoutes";

const router = Router();
const errorHandler = new ErrorHandler();

router.use(ActivitiesRoutes);
router.use(AuthRoutes);
router.use(PointsRoutes);

router.use((err: Error, _req: Request, _res: Response, next: NextFunction) => {
	console.log("Error encountered:", err.message || err);
	next(err);
});
router.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
	errorHandler.handleError(err, res);
});

export default router;
