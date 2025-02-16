const { StatusCodes } = require('http-status-codes');
const { AirportService } = require('../services');
const { error } = require('winston');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /airports
 * req-body {name : 'Indira Gandhi International Airport', code : 'DEL', address : 'New Delhi'}
 */


async function createAirport(req, res) {
    try {
        console.log("Inside airport Controller : ", req.body);
        const airport = await AirportService.createAirport({
            name: req.body.name,
            cityId: req.body.cityId,
            code: req.body.code,
            address: req.body.address,
        });
        SuccessResponse.data = airport;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        console.log(error);

        ErrorResponse.message = 'Something went wrong with creating airplane';
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * GET : /airports
 */

async function getAirports(req, res) {
    try {
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        // ErrorResponse.message = 'Something went wrong while fetching airplanes';
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * GET : /airports/:id
 */

async function getAirport(req, res) {
    try {
        const airports = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        // ErrorResponse.message = 'Something went wrong while fetching airplane';
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}



/**
 * DELETE : /airports/:id
 */

async function destroyAirport(req, res) {
    try {
        const airport = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.NO_CONTENT).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * PUT : /airports/:id
 * req-body {name : 'New Indira Gandhi International Airport', code : 'DEL', address : 'New Delhi', cityId : 1}
 */

async function updateAirport(req, res) {
    try {
        const airport = await AirportService.updateAirport(req.params.id, req.body);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}