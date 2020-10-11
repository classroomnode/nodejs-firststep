const express = require('express');
const customerRouter = require('./route/route.customer');
const dbConfig = require('./config/db.config');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
mongoose.Promise = global.Promise;

app.use('/api', customerRouter);
app.use('/', (req, res) => {
    console.log('Request received.... ');
    res.json(`Hello ${req.body.name}`);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}......`);
});

module.exports = app;