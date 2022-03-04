const mongoose = require('mongoose');

const Product = require('./product.js')

const categorySchema = new mongoose.Schema({
    title: String,
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Product,
        }
    ],
});

//delete related data after delete the original campground
categorySchema.post("findOneAndDelete", async function(category) {
    if(category.products.length) {
        const product = await Product.deleteMany({_id: {$in: category.products}});
        //console.log(res);
    }
});
const Category = new mongoose.model('Category', categorySchema);

module.exports = Category;