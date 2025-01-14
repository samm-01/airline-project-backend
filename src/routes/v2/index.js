const express = require('express');

const router = express.Router();

router.get('/info', (req, res) => {
    return res.json({
        message: 'Coming from v2 API',
    })
})

module.exports = router;