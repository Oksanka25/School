// 1. Boilerplate
const express = require("express");
const app = express();
const PORT = 3000;

// 2. Requiring and Initializing
require('./config/db.connection');
const methodOverride = require('method-override');
require("dotenv").config();
//getting the MongoDB connection
require('./config/db.connection.js');

const Log = require("./models/Log");



// 2.1 Middleware - executes for every request 
// defines the view engine
app.set("view engine", "jsx");

// Creates link to JSX
app.engine("jsx", require("express-react-views").createEngine());

// instantiates MethodOverride for CRUD actions
app.use(methodOverride("_method"))

// to Parse req.body
// body-parser middleware -> intercept the data from our post request; it takes all of the data content and creates an object - req.params 
// request body -> data - parsed by the middleware
app.use(express.urlencoded({ extended: false }))

// establishes Middleware Process
app.use((req, res, next) => {
    console.log('I am here for the routes ')
    next()
})

// express.static helps express find where certain files are located
app.use(express.static('public'))

// app.use(express.static("styles"));


// ROUTES

// "new" route - GET request - serve form for creating a new log item
app.get('/logs/new', (req, res) => {
    res.render('New')
})

// "create" route - POST requests -> request body (new log data)
app.post('/logs', (req, res) => {
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    Log.create(req.body, (err, createdLog) => {
        console.log((err));
    })
    res.redirect('/logs')
})

// Index route -  GET all logs route
app.get('/logs', (req, res) => {
    Log.find({}, (err, allLogs) => {
        console.log(err);
        res.render('Index', {
            logs: allLogs
        })
    })
})

// "show" route - GET request - displays details about one product 

app.get('/logs/:id', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        console.log((err));
        if (!err) {
            res.render("Show", { log: foundLog })
        } else {
            res.send({ msd: err.message })
        }
    })
});

//Logs "edit" route - GET request - display an edit form for one log

app.get('/logs/:id/edit', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        console.log((err));
        if (!err) {
            res.render("Edit", { log: foundLog })
        } else {
            res.send({ msd: err.message })
        }
    })
});

// Logs "update" route - PUT request - updates the Logs array and redirects to show route
app.put("/logs/:id", (req, res) => {
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog) => {
        console.log(err)
        console.log(updatedLog);
        res.redirect(`/logs/${req.params.id}`);
    });
});





// Logs "destroy" route - DELETE request - removes data from Log database and redirects to index route

app.delete('/logs/:id', (req, res) => {
    Log.findByIdAndRemove(req.params.id, (err, data) => {
        console.log((err));
    })
    res.redirect('/logs')
})




// 1. Boilerplate
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))