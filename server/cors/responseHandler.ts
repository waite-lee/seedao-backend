import { Response } from 'express';

/**
 * 4XX status code related to client side error
 * 5XX status code related to server side error
 */
const SERVER_ERROR_CODE = 501;
const PARAMS_MISSING_CODE = 502;
const SUCCESS_CODE = 201;
const SUCCESS_MESSAGE = 'OK';

function successResponse(status: number, data: object): object {
	return {
		status,
		message: SUCCESS_MESSAGE,
		data
	};
}

function success(res: Response, ret: object = {}): void {
	res
		.status(SUCCESS_CODE)
		.send(successResponse(SUCCESS_CODE, ret));
}

function errorDataResponse(status: number, errMessage: string, data: object): object {
	return {
		status,
		message: errMessage,
		data
	};
}

function errorResponse(status: number, errMessage: string): object {
	return {
		status,
		message: errMessage
	};
}

function serverError(res: Response): void {
	res
	.status(SERVER_ERROR_CODE)
	.send(errorResponse(SERVER_ERROR_CODE, 'Server Error'));
}

function parameterMissingError(res: Response): void {
	res
	.status(PARAMS_MISSING_CODE)
	.send(errorResponse(PARAMS_MISSING_CODE, 'Parameter Missing Error'));
}

export default {
	serverError,
	parameterMissingError,
	errorDataResponse,
	successResponse,
	success,
};