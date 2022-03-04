const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');


//load models
const User = require('../models/user.js');

const secret = process.env.SECRET 
const tokenLife = process.env.TOKENLIFE

router.post('/register', async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ email, username });
        const regUser = await User.register(user, password);
        const payload = {id: regUser.id};
        
        const token = jwt.sign(payload, secret, { expiresIn: tokenLife });
        res.status(200).json({
            success: true,
            token: `${token}`,
            user: {
                id: regUser.id,
                username: regUser.username,
                email: regUser.email,
                role: regUser.role,
            }
        });
    } catch (err) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        });
    }
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/' }), async (req, res, next) => {
    const user = req.user;
    const payload = {id: user.id};  
    //console.log(payload)      
    const token = jwt.sign(payload, secret, { expiresIn: tokenLife });
    res.status(200).json({
        success: true,
        token: `${token}`,
        user: {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
        }
    });
});

module.exports = router;