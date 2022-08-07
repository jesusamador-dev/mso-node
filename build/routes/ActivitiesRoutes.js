"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivitiesRoutes = void 0;
const express_1 = require("express");
const ActivitiesController_1 = __importDefault(require("../controllers/ActivitiesController"));
const routes = (0, express_1.Router)();
const PATH = "/activities";
const activitiesController = new ActivitiesController_1.default();
routes.get(`${PATH}/:id`, (req, res) => activitiesController.getById(req, res));
routes.get(`${PATH}`, (req, res) => activitiesController.get(req, res));
routes.post(`${PATH}`, (req, res) => activitiesController.create(req, res));
routes.delete(`${PATH}/:id`, (req, res) => activitiesController.delete(req, res));
exports.ActivitiesRoutes = routes;
