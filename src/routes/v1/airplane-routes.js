const router = require('express').Router();
const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares')

console.log("inside airplane routes : ");

// /api/v1/airplane POST request
router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane
);

// /api/v1/airplanes GET request
router.get('/',
    AirplaneController.getAirplanes
);

// /api/v1/airplanes/:id GET request
router.get('/:id',
    AirplaneController.getAirplane
);

// /api/v1/airplanes/:id DELETE request
router.delete('/:id',
    AirplaneController.destroyAirplane,
);

// /api/v1/airplanes/:id PUT request
router.put('/:id',
    AirplaneMiddlewares.validateUpdateRequest,
    AirplaneController.updateAirplane
);

// /api/v1/airplanes/info GET request

module.exports = router;