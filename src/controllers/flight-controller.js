const { StatusCodes } = require('http-status-codes');
const { FlightService } = require('../services');
const { error } = require('winston');
const { SuccessResponse, ErrorResponse } = require('../utils/common');



/**
 * POST : /flights
 * req-body : {
 * flightNumber: UK 808, 
 * airplaneId: a380 ,
 * departureAirportId : 12,
 * arrivalAirportId : 11,
 * arrivalTime : '11:10:00',
 * departureTime : '9:10:00',
 * price : 2000, 
 * boardingGate : 12A
 * totalSeats: 120
 * }
 */

async function createFlight(req, res) {
    try {
        console.log("Inside flight Controller : ", req.body);
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats,
        });
        SuccessResponse.data = flight;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        console.log(error);

        ErrorResponse.message = 'Something went wrong with creating flight';
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * GET : /flights
 */

async function getFlights(req, res) {
    try {
        const flights = await FlightService.getFlights();
        SuccessResponse.data = flights;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = 'Something went wrong while fetching flights';
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * GET : /flights/:id
 */

async function getFlight(req, res) {

}
/**
 * PUT : /flights/:id
 * req-body : {
 * flightNumber: UK 808, 
 * airplaneId: a380 ,
 * departureAirportId : 12,
 * arrivalAirportId : 11,
 * arrivalTime : '11:10:00',
 * departureTime : '9:10:00',
 * price : 2000,
 * boardingGate : 12A
 * totalSeats: 120
 **/

async function updateFlight(req, res) {


}

async function getAllFlights(req, res) {
    // Filter by trips, departure and arrival airports
    // const { trips, departureAirportId, arrivalAirportId } = req.query;
    try {
        console.log("Inside getAllFlights : ", req.query);
        const flights = await FlightService.getAllFlights(req.query);
        SuccessResponse.data = flights;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = 'Something went wrong while fetching flights';
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}


module.exports = {
    createFlight,
    getFlights,
    getFlight,
    updateFlight,
    getAllFlights
}