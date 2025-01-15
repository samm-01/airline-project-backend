const router = require('express').Router();
const { AirplaneController } = require('../../controllers');

console.log("inside airplane routes : ");

// /api/v1/airplane POST request
router.post('/', AirplaneController.createAirplane);

module.exports = router;