const express = require('express');
const router = express.Router();
const stripe_key = process.env.STRIPE_SECRET_KEY
const stripe = require("stripe")(stripe_key);

const { isAuthenticated } = require('../utilities/validate');

router.post('/process', isAuthenticated, (req, res, next) => {
    //console.log(req.user)
    const myPayment = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
      };
    
      stripe.charges.create(myPayment, (stripeErr, stripeRes) => {
        if (stripeErr) {
          res.status(500).json({ error: stripeErr });
        } else {
          res.status(200).json({ 
              success: true,
              stripeRes,
            });
        }
      });
})
module.exports = router;