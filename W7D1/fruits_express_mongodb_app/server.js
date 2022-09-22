const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

//exporting data = Model
const fruits = require("./models/fruits")
const Fruit = require("./models/Fruit")


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


//... and then farther down the file
mongoose.connect(process.env.MONGO_URI
);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

// Routes
// 1. Index - GET
app.get('/fruits', (req, res) => {
    Fruit.find({}, (error, allFruits) => {
        res.render('fruits/Index', {
            fruits: allFruits
        });
    });
});

// 3. create a new route
// put this above your Show route
app.get('/fruits/new', (req, res) => {
    res.render('New');
});

// Create Route Create data in MongoDB

app.post('/fruits/', (req, res) => {
    if (req.body.readyToEat === 'on') { //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit) => {
        res.redirect('/fruits');
    });
});


// 2. add show route
// Show - GET
// app.get('/fruits/:indexOfFruitsArray', (req, res) => {
//     res.render('Show', { //second param must be an object
//         fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
//     });
//     // res.send(fruits[req.params.indexOfFruitsArray]); // this was before the react view
// });

app.get('/fruits/:id', (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
        res.render('fruits/Show', {
            fruit: foundFruit
        });
    });
});

app.listen(3000, () => {
    console.log('listening');
});