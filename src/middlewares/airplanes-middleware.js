const { StatusCodes } = require('http-status-codes');
function validateCreateRequest(req, res, next) {
    if (!req.body.modelNumber) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({
                success: false,
                message: 'Airplane creation failed',
                data: {},
                error: { explanation: "Model number not found in the incoming request" }
            });
    }
    next()
}

module.exports = { validateCreateRequest }