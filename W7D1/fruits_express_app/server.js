const express = require('express');
const app = express();

//exporting data = Model
const fruits = require("./models/fruits")

// Middleware
// 5. It runs in the middle of the request response cycle
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({ extended: false }));

//Views/ configurations here
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Routes
// 1. Index - GET
app.get('/fruits', (req, res) => {
    res.render('Index', { allFruits: fruits });
    // res.send(fruits); // this was before the react view
});

// 3.put this above your Show route
// new
app.get('/fruits/new', (req, res) => {
    res.render('New');
});

// 4. Create a post route
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