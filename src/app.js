const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (_, res) => {
    res.status(200).json({ result: 'Hello world!' });
});

module.exports = app;