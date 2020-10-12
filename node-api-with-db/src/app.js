const express = require('express');
const customerRouter = require('./route/customer.route');
const dbConfig = require('./config/db.config');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Successfully connected to database.');
}).catch(err => {
    console.error('Could not connect to the database.', err);
    process.exit();
});

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