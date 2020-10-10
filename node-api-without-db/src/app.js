const express = require('express');
const customerRouter = require('./route/route.customer');

const app = express();

app.use(express.json());

app.use('/api', customerRouter);
app.use('/', (req, res) => {
    console.log('Request received.... ');
    res.json(`Hello ${req.body.name}`);
});



app.listen(8080, () => {
    console.log('Server is listening on port 8080......');
});

module.exports = app;