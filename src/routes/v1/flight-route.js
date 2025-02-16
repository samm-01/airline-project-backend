const router = require('express').Router();
const { FlightController } = require('../../controllers');
const { FlightMiddlewares } = require('../../middlewares')

console.log("inside flight routes : ");

// api/v1/flights POST request
router.post('/',
    FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight
);


// api/v1/flights GET request
router.get('/',
    FlightController.getFlights
);

module.exports = router;
