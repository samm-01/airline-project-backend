const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');
const { error } = require('winston');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 *  POST : /airplanes
 * req-body {modelNumber : 'airBus320', capacity : 150}
 */


async function createAirplane(req, res) {
    try {
        console.log("Inside Controller : ", req.body);
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        // ErrorResponse.message = 'Something went wrong with creating airplane';
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createAirplane
}