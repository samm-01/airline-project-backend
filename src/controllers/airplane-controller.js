const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');
const { error } = require('winston');

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
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Airplane created successfully',
            data: response,
            error: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Airplane creation failed',
            data: {},
            error: error
        });
    }
}

module.exports = {
    createAirplane
}