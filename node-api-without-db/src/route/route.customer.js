const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.json('Get all customer.');
});

router.post('/', function (req, res) {
    res.json('Saved the customer.');
})

router.put('/:id', function (req, res) {
    res.json(`Updated customer ${req.params.id}`);
});

router.delete('/:id', function (req, res) {
    res.json(`Deleted customer ${req.params.id}`);
});



module.exports = router;