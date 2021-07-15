const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../swagger.json');
const artistRouter = require('./routes/artist');
const albumRouter = require('./routes/album');

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use('/artist', artistRouter);
app.use('/album', albumRouter);

module.exports = app;