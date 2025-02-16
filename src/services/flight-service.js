const { StatusCodes } = require('http-status-codes')
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




module.exports = {
    createFlight,
}