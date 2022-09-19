const express = require('express');
const app = express();

//exporting data = Model
const fruits = require("./models/fruits")

// Middleware


//Views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Routes
// Index - GET
app.get('/fruits', (req, res) => {
    res.render('Index', { allFruits: fruits });
    // res.send(fruits); // this was before the react view
});

//add show route
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