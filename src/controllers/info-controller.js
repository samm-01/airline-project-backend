const info = (req, res) => {
    return res.json({
        success: true,
        message: 'Welcome to the API',
        data: {},
        error: {}
    })
}

module.exports = {
    info
}