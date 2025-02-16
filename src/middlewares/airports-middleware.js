const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-errors');

function validateCreateRequest(req, res, next) {
    if (!req.body.name) {
        ErrorResponse.message = 'Airport creation failed';
        ErrorResponse.error = new AppError(['City name not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.code) {
        ErrorResponse.message = 'City creation failed';
        ErrorResponse.error = new AppError(['Code not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.cityId) {
        ErrorResponse.message = 'City creation failed';
        ErrorResponse.error = new AppError(['City Id not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    next()
}

function validateUpdateRequest(req, res, next) {
    if (!req.body.name) {
        ErrorResponse.message = 'City update failed';
        ErrorResponse.error = new AppError(['City name not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    next()
}

module.exports = {
    validateCreateRequest,
    validateUpdateRequest,
};
