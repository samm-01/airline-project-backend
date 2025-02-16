const { StatusCodes } = require('http-status-codes');
const { CityService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /cities
 * req-body {name : 'Mumbai'}
 */
async function createCity(req, res) {
    try {
        console.log("Inside city Controller : ", req.body);
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

/**
 * GET : /cities
 */
async function getCities(req, res) {
    try {
        const cities = await CityService.getAllCities();
        SuccessResponse.data = cities;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        // ErrorResponse.message = 'Something went wrong while fetching cities';
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * GET : /cities/:id
 */
async function getCityById(req, res) {
    try {
        const city = await CityService.getCityById(req.params.id);
        SuccessResponse.data = city;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        // ErrorResponse.message = `Something went wrong while fetching city with id ${req.params.id}`;
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * PUT : /cities/:id
 * req-body {name : 'New City Name'}
 */
async function updateCity(req, res) {
    try {
        const city = await CityService.updateCity(req.params.id, {
            name: req.body.name
        });
        SuccessResponse.data = city;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {

        // ErrorResponse.message = `Something went wrong while updating city with id ${req.params.id}`;
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}


/**
 * DELETE : /cities/:id
 */
async function deleteCity(req, res) {
    try {
        const city = await CityService.deleteCity(req.params.id);
        SuccessResponse.data = city;
        return res.status(StatusCodes.NO_CONTENT).json(SuccessResponse);
    } catch (error) {
        // ErrorResponse.message = `Something went wrong while deleting city with id ${req.params.id}`;
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createCity,
    getCities,
    getCityById,
    updateCity,
    deleteCity
}
