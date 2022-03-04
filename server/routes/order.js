const express = require('express');
const router = express.Router();

const { isAuthenticated } = require('../utilities/validate');

const Order = require('../models/order');
const Product = require('../models/product')

router.post('/add', isAuthenticated, async (req, res, next) => {
    try {
        const { cart, total } = req.body;
        const user = req.user.id;
        const created = Date.now();

        const order = new Order({ cart, total, user, created });
        await order.save();
        res.status(200).json({
            success: true,
            order
        });
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        });
    }
})

router.get('/', isAuthenticated, async (req, res, next) => {
    try {
        const id = req.user.id;
        const order = await Order.find({id}).sort({created:-1})
        .populate({
            path: 'cart._id',
            model: 'Product'
       }) 
       .populate('user')
        res.status(200).json({
            success: true,
            order
        });
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        });
    }
})



module.exports = router;