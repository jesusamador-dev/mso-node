export enum HttpMessage {
	OK = "Ok",
	NO_CONTENT = "204",
	BAD_REQUEST = "400",
	UNAUTHORIZED = "No está autorizado para leer esta información",
	NOT_FOUND = "Recurso no encontrado",
	INTERNAL_SERVER_ERROR = "Error interno, favor de intentar más tarde",
}

export enum HttpCode {
	OK = 200,
	NO_CONTENT = 204,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	NOT_FOUND = 404,
	INTERNAL_SERVER_ERROR = 500,
}
