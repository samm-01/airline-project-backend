const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-errors');
function validateCreateRequest(req, res, next) {
    if (!req.body.name) {
        ErrorResponse.message = 'Something went wrong with creating city';  // Update the message
        ErrorResponse.error = new AppError(['City name not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    next()
}


function validateUpdateRequest(req, res, next) {
    // console.log("Incoming Request Body:", req.body);
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
    validateUpdateRequest
}