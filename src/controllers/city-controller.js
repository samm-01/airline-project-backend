const { StatusCodes } = require('http-status-codes');
const { CityService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /cities
 * req-body {name : 'Mumbai'}
 */
async function createCity(req, res) {
    try {
        console.log("Inside Controller : ", req.body);
        const city = await CityService.createCity({
            name: req.body.name
        });
        SuccessResponse.data = city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        // ErrorResponse.message = 'Something went wrong with creating city';
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createCity
}
