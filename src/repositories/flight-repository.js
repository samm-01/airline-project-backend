const crudRepository = require('./crud-repository');
const { Flight } = require('../models');

class FlightRepository extends crudRepository {
    constructor() {
        super(Flight);

    }
    // async getAllFlights(filter) {
    //     console.log("Filter applied:", JSON.stringify(filter)); // Debugging


    //     const response = await Flight.findAll({
    //         where: filter
    //     })
    //     console.log("Flights found:", response.length); // Debugging

    //     return response;

    // }

    async getAllFlights(filter, sortFilter) {
        console.log("Filter applied:", filter);

        const response = await Flight.findAll({
            attributes: [  // ✅ Only fetch existing columns
                'id', 'flightNumber', 'airplaneId', 'departureAirportId',
                'arrivalAirportId', 'arrivalTime', 'departureTime', 'price',
                'boardingGate', 'totalSeats', 'createdAt', 'updatedAt'
            ],
            where: filter,
            order: sortFilter
        });

        console.log("Flights found:", response.length);
        return response;
    }


}

module.exports = FlightRepository;