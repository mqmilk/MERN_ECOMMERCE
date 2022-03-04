const express = require('express');
const router = express.Router();

//load models
const Category = require('../models/category');

router.get('/', async (req, res, next) => {
    const categories = await Category.find({})
            .populate('products');
    //res.send(categories);
    res.status(200).json({
        categories,
      });
})

router.get('/:title', async (req, res, next) => {
    const { title } = req.params;
    const category = await Category.find({title: title})
            .populate('products');
    //res.send(category);
    res.status(200).json({
        category,
      });
})



module.exports = router;