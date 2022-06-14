"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Activity_1 = require("../app/entity/Activity");
const db_1 = __importDefault(require("../config/db"));
class ActivitiesController {
    constructor() {
        this.activitesRepository = db_1.default.getRepository(Activity_1.Activities);
    }
    getById(_req, res) {
        let response;
        try {
            response = this.activitesRepository.findBy({ id: 1 });
            console.log("Holaaaaaaaaaaaaa!");
        }
        catch (err) {
            console.log(err);
        }
        return res.send(response);
    }
}
exports.default = ActivitiesController;
