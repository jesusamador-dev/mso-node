"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpCode = exports.HttpMessage = void 0;
var HttpMessage;
(function (HttpMessage) {
    HttpMessage["OK"] = "Ok";
    HttpMessage["NO_CONTENT"] = "204";
    HttpMessage["BAD_REQUEST"] = "400";
    HttpMessage["UNAUTHORIZED"] = "No est\u00E1 autorizado para leer esta informaci\u00F3n";
    HttpMessage["NOT_FOUND"] = "Recurso no encontrado";
    HttpMessage["INTERNAL_SERVER_ERROR"] = "Error interno, favor de intentar m\u00E1s tarde";
})(HttpMessage = exports.HttpMessage || (exports.HttpMessage = {}));
var HttpCode;
(function (HttpCode) {
    HttpCode[HttpCode["OK"] = 200] = "OK";
    HttpCode[HttpCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpCode[HttpCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpCode[HttpCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpCode[HttpCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpCode[HttpCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpCode = exports.HttpCode || (exports.HttpCode = {}));
