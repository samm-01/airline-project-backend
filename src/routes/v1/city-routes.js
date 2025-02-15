const router = require('express').Router();
const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares')

console.log("inside airplane routes : ");

// /api/v1/city POST request
router.post('/',
    CityMiddlewares.validateCreateRequest,
    CityController.createCity
);

// /api/v1/cities GET request
router.get('/', CityController.getCities);

// /api/v1/cities/:id GET request
router.get('/:id', CityController.getCityById);

// /api/v1/cities/:id PUT request
router.put('/:id',
    CityMiddlewares.validateUpdateRequest,
    CityController.updateCity
);

module.exports = router;


module.exports = router;