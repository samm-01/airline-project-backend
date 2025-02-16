const express = require('express');
const app = express();
const { ServerConfig, Logger } = require('./config');
const { homeController, aboutController } = require('./controllers');
const apiRoutes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);


app.listen(ServerConfig.PORT, async () => {
    console.log(`Server started on port ${ServerConfig.PORT}`);
    Logger.info(" Server started", "root", {});

    // const { City, Airport } = require('./models');
    // const bengaluru = await City.findByPk(12, { include: { model: Airport } });
    // console.log(bengaluru);
    // const airport = await Airport.create({ name: 'Kemp Airport', code: 'KMP', cityId: 12 });
    // const dbpairport = await bengaluru.createAirport({ name: 'Huballi Airport', code: 'HBL' });
    // console.log(dbpairport);
    // const airportsInBlr = await bengaluru.getAirports();
    // console.log(airportsInBlr);
    // const hbairport = await Airport.findByPk(8);
    // console.log(hbairport);
    // await bengaluru.removeAirports(hbairport);
    // await City.destroy({
    //     where: {
    //         id: 12
    //     }
    // });


});

