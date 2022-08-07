"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Points = void 0;
const typeorm_1 = require("typeorm");
const Activities_1 = require("./Activities");
const Users_1 = __importDefault(require("./Users"));
let Points = class Points {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Object)
], Points.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Users_1.default, {
        onDelete: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)({
        name: "user_id",
    }),
    __metadata("design:type", Object)
], Points.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Activities_1.Activities, {
        onDelete: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)({
        name: "activity_id",
    }),
    __metadata("design:type", Object)
], Points.prototype, "acitivityId", void 0);
__decorate([
    (0, typeorm_1.Column)("int"),
    __metadata("design:type", Object)
], Points.prototype, "points", void 0);
__decorate([
    (0, typeorm_1.Column)("int"),
    __metadata("design:type", Object)
], Points.prototype, "pointsHistoric", void 0);
Points = __decorate([
    (0, typeorm_1.Entity)()
], Points);
exports.Points = Points;
