const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

const getCustomer = require('../customer');
const getCustomerId = require('../customer_id');
const getRestaurantId = require('../restaurant_id');
const getChef = require('../chef');
const getWaiter = require('../waiter');
const getCashier = require('../cashier');
const getManager = require('../manager');

router.post('/customer', (req, res) => {
    getCustomer(req,res)
    .then(customer => {
        res.json(customer);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to login' });
    })
})

router.get('/customer/:customer_id', (req, res) => {
    getCustomerId(req,res)
    .then(restaurant => {
        res.json(restaurant);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get restaurant' });
    })
})

router.get('/customer/:customer_id/restaurant/:restaurant_id', (req, res) => {
    getRestaurantId(req,res)
    .then(menu => {
        res.json(menu);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get restaurant' });
    })
})
    

router.get('/chef', (req, res) => {
    getChef(req,res)
    .then(chef => {
        res.json(chef);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to login' });
    })
})

router.get('/waiter', (req, res) => {
    getWaiter(req,res)
    .then(waiter => {
        res.json(waiter);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to login' });
    })
})

router.get('/cashier', (req, res) => {
    getCashier(req,res)
    .then(cashier => {
        res.json(cashier);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to login' });
    })
})

router.get('/manager', (req, res) => {
    getManager(req,res)
    .then(manager => {
        res.json(manager);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to login' });
    })
})


module.exports = router;