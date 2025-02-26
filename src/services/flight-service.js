const { StatusCodes } = require('http-status-codes')
const { Op } = require('sequelize');
const { FlightRepository } = require('../repositories');
const AppError = require('../utils/errors/app-errors');
const { comparetime } = require('../utils/helpers/datetime-helpers');

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        console.log("inside flight service : ", data);

        const flight = await flightRepository.create(data);
        if (comparetime(data.arrivalTime, data.departureTime)) {
            return flight;
        }
        else {
            console.log("Arrival time should be after departure time.");
            throw new AppError('Arrival time should be after departure time.', StatusCodes.BAD_REQUEST)
        }
    } catch (error) {
        console.log("Got Error", error.name);

        if (error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError('Cannot create a new flight object.', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


async function getAllFlights(query) {
    let customFilter = {};
    let sortFilter = [];
    const endingTripTime = " 23:59:00"
    // trips = MUM-DEL
    if (query.trips) {
        [departureAirportId, arrivalAirportId] = query.trips.split("-");
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
        console.log(departureAirportId, arrivalAirportId);
        // TODO : add a check departure not equal to arrival id
    }
    if (query.price) {
        [minPrice, maxPrice] = query.price.split("-");
        customFilter.price = {
            [Op.between]: [minPrice, ((maxPrice == undefined) ? 20000 : maxPrice)]
        }
    }
    if (query.travellers) {
        customFilter.totalSeats = {
            [Op.gte]: query.travellers
        }
    }
    if (query.departureTime) {
        customFilter.departureTime = {
            [Op.between]: [query.departureTime, query.departureTime + endingTripTime]
        }
    }
    if (query.sort) {
        const params = query.sort.split(",");
        sortFilter = params.map((param) => param.split('_'));
        // sortFilter = [sortFilters];

    }
    // console.log("Sort Filter Applied:", sortFilter);

    try {
        console.log("Custom Filter : ", customFilter);
        const flights = await flightRepository.getAllFlights(customFilter, sortFilter);
        return flights;

    }
    catch (error) {
        throw new AppError('Cannot fetch all the flights.', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


module.exports = {
    createFlight,
    getAllFlights
}