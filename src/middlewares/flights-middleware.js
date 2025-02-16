const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-errors');

function validateCreateRequest(req, res, next) {
    if (!req.body.flightNumber) {
        ErrorResponse.message = 'Flight creation failed';
        ErrorResponse.error = new AppError(['Flight number not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.airplaneId) {
        ErrorResponse.message = 'Flight creation failed';
        ErrorResponse.error = new AppError(['Airplane ID not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.departureAirportId) {
        ErrorResponse.message = 'Flight creation failed';
        ErrorResponse.error = new AppError(['Departure Airport ID not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.arrivalAirportId) {
        ErrorResponse.message = 'Flight creation failed';
        ErrorResponse.error = new AppError(['Arrival Airport ID not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.arrivalTime) {
        ErrorResponse.message = 'Flight creation failed';
        ErrorResponse.error = new AppError(['Arrival time not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.departureTime) {
        ErrorResponse.message = 'Flight creation failed';
        ErrorResponse.error = new AppError(['Departure time not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.price) {
        ErrorResponse.message = 'Flight creation failed';
        ErrorResponse.error = new AppError(['Price not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    // if (!req.body.boardingGate) {
    //     ErrorResponse.message = 'Flight creation failed';
    //     ErrorResponse.error = new AppError(['Boarding gate not found in the incoming request'], StatusCodes.BAD_REQUEST);
    //     return res
    //         .status(StatusCodes.BAD_REQUEST)
    //         .json(ErrorResponse);
    // }
    if (!req.body.totalSeats) {
        ErrorResponse.message = 'Flight creation failed';
        ErrorResponse.error = new AppError(['Total seats not found in the incoming request'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }


    next()
}

// function validateUpdateRequest(req, res, next) {
//     if (!req.body.name) {
//         ErrorResponse.message = 'City update failed';
//         ErrorResponse.error = new AppError(['City name not found in the incoming request'], StatusCodes.BAD_REQUEST);
//         return res
//             .status(StatusCodes.BAD_REQUEST)
//             .json(ErrorResponse);
//     }
//     next()
// }

module.exports = {
    validateCreateRequest,
    // validateUpdateRequest,
};
