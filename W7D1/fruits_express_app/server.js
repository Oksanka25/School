const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

//exporting data = Model
const fruits = require("./models/fruits")
const fruit = require("./models/Fruit")


// Middleware
// 5. It runs in the middle of the request response cycle
app.use((req, res, next) => {
    // console.log('I run for all routes');
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

app.use(express.urlencoded({ extended: false }));
// The express.urlencoded method checks to see if the request’s headers include a Content-Type of application/x-www-form-urlencoded. 

//Views/ configurations here
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// });

//... and then farther down the file
mongoose.connect(process.env.MONGO_URI,
    // { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

// Routes
// 1. Index - GET
app.get('/fruits', (req, res) => {
    res.render('Index', { allFruits: fruits });
    // res.send(fruits); // this was before the react view
});

// 3. create a new route
// put this above your Show route
app.get('/fruits/new', (req, res) => {
    res.render('New');
});

// 4. Create a post route
// Since the form in the step 3 tells the browser to create a POST request to /fruits, we’ll need to set up a route handler for this kind of request. 
app.post('/fruits', (req, res) => {
    if (req.body.readyToEat === 'on') { //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    fruits.push(req.body);
    console.log(fruits);
    // res.send('data received'); // this first to check if the route is working
    res.redirect('/fruits'); //send the user back to /fruits
});


// 2. add show route
// Show - GET
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.render('Show', { //second param must be an object
        fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
    // res.send(fruits[req.params.indexOfFruitsArray]); // this was before the react view
});

app.listen(3000, () => {
    console.log('listening');
});