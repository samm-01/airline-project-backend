const express = require('express');
const app = express();
const { Port, PORT } = require('./config');
const { homeController, aboutController } = require('./controllers');
const apiRoutes = require('./routes');

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});