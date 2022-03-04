const express = require('express');
const router = express.Router();

//load models
const Product = require('../models/product');


router.get('/', async (req, res, next) => {
    const products = await Product.find({});
    //res.send(product);
    res.status(200).json({
        products,
      });
})

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    //res.send(product);
    res.status(200).json({
        product,
      });
})

router.get('/search/:name', async (req, res, next) => {
  const { name } = req.params;
  const products = await Product.find({
    name: {
      '$regex': name,
      '$options': 'si'
    }
  });
  res.status(200).json({
    products,
  });
})


module.exports = router;