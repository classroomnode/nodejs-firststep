const Customer = require('../models/customer.model');

exports.findAll = (req, res) => {
    Customer
    .find()
    .then(customers => {
        res.send(customers);
    }).catch(err => {
       console.error('Error: ', err);
       res.status(500).send({
           message: err.message || 'Error while retrieving customers list.'
       }); 
    });
}

exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: 'Send request body.'
        });
    }
    console.log(`Create customer with`, req.body);

    const customer = new Customer(req.body);
    customer.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        console.error('Error: ', err);
       res.status(500).send({
           message: err.message || 'Error while saving customer.'
       }); 
    })
}

exports.findOne = (req, res) => {
    Customer.findById(req.params.id)
    .then(cust => {
        if(!cust) {
            return res.status(404).send({
                message: `Customer not found with ID: ${req.params.id}`
            });
        }
        res.send(cust);
    }).catch(err => {
        console.error('Error: ', err);
        res.status(500).send({
            message: err.message || 'Error while retrieving customer.'
        }); 
     });
}

exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: 'Send request body.'
        });
    }
    console.log(`Update customer ${req.params.id} with`, req.body);

    Customer.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(cust => {
        if(!cust) {
            return res.status(404).send({
                message: `Customer not found with ID: ${req.params.id}`
            });
        }
        res.send(cust);
    }).catch(err => {
        console.error('Error: ', err);
        res.status(500).send({
            message: err.message || 'Error while updating customer.'
        }); 
     });
}

exports.delete = (req, res) => {
    Customer.findByIdAndRemove(req.params.id)
    .then(cust => {
        if(!cust) {
            return res.status(404).send({
                message: `Customer not found with ID: ${req.params.id}`
            });
        }
        res.send({message: 'Customer deleted successfully.'});
    }).catch(err => {
        console.error('Error: ', err);
        res.status(500).send({
            message: err.message || 'Error while deleting customer.'
        }); 
     });
}