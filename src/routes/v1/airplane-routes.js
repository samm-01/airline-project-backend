const router = require('express').Router();
const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares')

console.log("inside airplane routes : ");

// /api/v1/airplane POST request
router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane
);

module.exports = router;