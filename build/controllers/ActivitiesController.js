"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Activities_1 = require("../app/entity/Activities");
const Http_1 = require("../app/enum/Http");
const AppError_1 = require("../app/models/AppError");
const HttpResponse_1 = __importDefault(require("../app/models/HttpResponse"));
const db_1 = __importDefault(require("../config/db"));
class ActivitiesController {
    constructor() {
        this.activitesRepository = db_1.default.getRepository(Activities_1.Activities);
    }
    get(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let httpResponse;
            const data = yield this.activitesRepository.find();
            if (data.length === 0) {
                throw new AppError_1.AppError({
                    httpCode: Http_1.HttpCode.NOT_FOUND,
                    message: Http_1.HttpMessage.NOT_FOUND,
                });
            }
            httpResponse = new HttpResponse_1.default({ status: Http_1.HttpMessage.OK, result: data });
            return res.status(Http_1.HttpCode.OK).json(httpResponse.response());
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let httpResponse;
            const { id } = req.params;
            const data = yield this.activitesRepository.findBy({ id: Number(id) });
            if (data.length === 0) {
                throw new AppError_1.AppError({
                    httpCode: Http_1.HttpCode.NOT_FOUND,
                    message: Http_1.HttpMessage.NOT_FOUND,
                });
            }
            httpResponse = new HttpResponse_1.default({ status: Http_1.HttpMessage.OK, result: data });
            return res.status(Http_1.HttpCode.OK).json(httpResponse.response());
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            try {
                this.activity = req.body;
                response = yield this.activitesRepository.save(this.activity);
            }
            catch (err) {
                console.log(err);
            }
            return res.json(response);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            try {
                const { id } = req.params;
                response = yield this.activitesRepository.delete({ id: Number(id) });
            }
            catch (err) {
                return res.status(404).json({ message: "No encontrado" });
            }
            return res.json(response);
        });
    }
}
exports.default = ActivitiesController;
