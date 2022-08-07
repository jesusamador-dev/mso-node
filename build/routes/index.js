"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = require("express");
const ErrorHandler_1 = require("../app/middlewares/ErrorHandler");
const ActivitiesRoutes_1 = require("./ActivitiesRoutes");
const router = (0, express_1.Router)();
router.use(ActivitiesRoutes_1.ActivitiesRoutes);
router.use((err, _req, _res, next) => {
    console.log("Error encountered:", err.message || err);
    next(err);
});
router.use((err, _req, res, _next) => {
    ErrorHandler_1.errorHandler.handleError(err, res);
});
exports.default = router;
