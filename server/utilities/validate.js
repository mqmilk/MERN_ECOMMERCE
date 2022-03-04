const express = require('express');
const passport = require('passport');

module.exports.isAuthenticated = passport.authenticate('jwt', { session: false });

module.exports.isAuthorized = (...roles) => (req, res, next) => {
    if(!roles.includes(req.user.role)){
        return res.status(403).send(`Role: ${req.user.role} is not allowed to make this request`);
    }else{
        return next();
    }
}