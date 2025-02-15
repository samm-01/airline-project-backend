const router = require('express').Router();
const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares')

console.log("inside airplane routes : ");

// /api/v1/city POST request
router.post('/',
    CityMiddlewares.validateCreateRequest,
    CityController.createCity
);

module.exports = router;