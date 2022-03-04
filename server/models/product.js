const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    imageUrl: [String],
    price: Number,
    description: String,
});

const Product = new mongoose.model('Product', productSchema);
module.exports = Product;