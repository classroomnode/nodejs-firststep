const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String
},{
    timestamps: true
});

module.exports = mongoose.model('Customer', CustomerSchema);