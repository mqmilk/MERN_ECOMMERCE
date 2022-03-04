const mongoose = require('mongoose');

const Product = require('./product');
const User = require('./user');

const orderSchema = new mongoose.Schema({
    cart: [
        {
            quantity: String,
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: Product,
            }
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
    },
    total: Number,
    created: {
        type: Date,
        default: Date.now,
    }
});

const Order = new mongoose.model('Order', orderSchema);
module.exports = Order;