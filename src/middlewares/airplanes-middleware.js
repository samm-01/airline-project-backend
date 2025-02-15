const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-errors');
function validateCreateRequest(req, res, next) {
    if (!req.body.modelNumber) {
        ErrorResponse.message = 'Airplane creation failed';
        ErrorResponse.error = new AppError(['Model number not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    next()
}

function validateUpdateRequest(req, res, next) {
    if (!req.body.modelNumber && !req.body.capacity) {
        ErrorResponse.message = 'Airplane update failed';
        ErrorResponse.error = new AppError(['Model number or capacity not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    next()
}


module.exports = {
    validateCreateRequest,
    validateUpdateRequest
}