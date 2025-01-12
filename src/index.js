const express = require('express');
const app = express();
const { ServerConfig, Logger } = require('./config');
const { homeController, aboutController } = require('./controllers');
const apiRoutes = require('./routes');

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server started on port ${ServerConfig.PORT}`);
    Logger.info(" Server started", "root", {});
});