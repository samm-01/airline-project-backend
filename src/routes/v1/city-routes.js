const router = require('express').Router();
const { CityController } = require('../../controllers');

console.log("inside airplane routes : ");

// /api/v1/city POST request
router.post('/',
    // AirplaneMiddlewares.validateCreateRequest,
    CityController.createCity
);

module.exports = router;