require('dotenv').config()
//console.log(process.env)


const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors');

const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

//require routes
const categoryRoutes = require('./routes/category.js');
const productRoutes = require('./routes/product.js');
const userRoutes = require('./routes/user.js');
const paymentRoutes = require('./routes/payment.js');
const orderRoutes = require('./routes/order.js');

//load models
const User = require('./models/user.js');

const dbUrl = process.env.DB_URL
mongoose.connect(dbUrl,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then(d => {
    console.log('CONNECT TO MONGODB');
})
.catch(err => {
    console.log('ERROR TO CONNECT TO MONGODB');
    console.log(err);
});

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const secret = process.env.SECRET
app.use(session({
    name: 'mern',
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        //secure: true, //not working for our localhost website, but for http, should included
        expires: Date.now() + 1000 * 60 * 60 *24 * 7,
        maxAge: 1000 * 60 * 60 *24 * 7,
    },
    store: MongoStore.create({
        mongoUrl: dbUrl,
        touchAfter: 24 * 3600 // time period in seconds
      })
}));

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromHeader("authorization");
opts.secretOrKey = secret;
passport.use(
    new JwtStrategy(opts, (payload, done) => {
    User.findById(payload.id)
      .then(user => {
        if (user) {
            //console.log(user)
          return done(null, user);
        }
        //console.log('none')
        return done(null, false);
      })
      .catch(err => {
        return done(err, false);
      });
  })
);


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




//routes
app.use('/shop', categoryRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/payment', paymentRoutes);
app.use('/order', orderRoutes);

app.get('/', (req, res) => {
    res.send('home');
})

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`CONNECTION ON PORT ${port}`);
});