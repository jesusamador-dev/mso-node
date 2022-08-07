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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersActivities1655592815084 = void 0;
const typeorm_1 = require("typeorm");
class UsersActivities1655592815084 {
    constructor() {
        this.name = "UsersActivities1655592815084";
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield queryRunner.hasTable("points"))
                return;
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "points",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "user_id",
                        type: "int",
                        length: "32",
                    },
                    {
                        name: "activity_id",
                        type: "varchar",
                        length: "500",
                    },
                    {
                        name: "points",
                        type: "int",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                ],
            }), true);
            yield queryRunner.createForeignKey("points", new typeorm_1.TableForeignKey({
                columnNames: ["user_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "qr1bd_users",
            }));
            yield queryRunner.createForeignKey("points", new typeorm_1.TableForeignKey({
                columnNames: ["activity_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "activities",
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("points");
        });
    }
}
exports.UsersActivities1655592815084 = UsersActivities1655592815084;
