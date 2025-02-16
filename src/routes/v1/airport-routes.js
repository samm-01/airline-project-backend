const router = require('express').Router();
const { AirportController } = require('../../controllers');
const { AirportMiddlewares } = require('../../middlewares')

console.log("inside airport routes : ");

// api/v1/airport POST request
router.post('/',
    AirportMiddlewares.validateCreateRequest,
    AirportController.createAirport
);

// api/v1/airports GET request
router.get('/',
    AirportController.getAirports
);

// api/v1/airplanes/:id GET request
router.get('/:id',
    AirportController.getAirport
);

// api/v1/airplanes/:id DELETE request
router.delete('/:id',
    AirportController.destroyAirport,
);

// api/v1/airplanes/:id PUT request
router.put('/:id',
    AirportController.updateAirport
);

// api/v1/airplanes/info GET request

module.exports = router;
