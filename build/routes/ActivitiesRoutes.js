"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivitiesRoutes = void 0;
const express_1 = require("express");
const ActivitiesController_1 = __importDefault(require("../controllers/ActivitiesController"));
const routes = (0, express_1.Router)();
const activitiesController = new ActivitiesController_1.default;
routes.get('/', (req, res) => activitiesController.getById(req, res));
routes.use('/activities', routes);
exports.ActivitiesRoutes = routes;
