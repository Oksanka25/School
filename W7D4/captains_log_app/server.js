// 1. Boilerplate
const express = require("express");
const app = express();
const PORT = 3000;

// 2. Requiring and Initializing
require('./config/db.connection');
const methodOverride = require('method-override');
require("dotenv").config();


// 2.1 Middleware
// defines the view engine
app.set("view engine", "jsx");
// Creates link to JSX
app.engine("jsx", require("express-react-views").createEngine());
// instantiates MethodOverride for CRUD actions
app.use(methodOverride("_method"))
// to Parse req.body
app.use(express.urlencoded({ extended: false }))
// establishes Middleware Process
app.use((req, res, next) => {
    console.log('I am here for there routes ')
    next()
})

//getting the connection
require('./config/db.connection.js');










// 1. Boilerplate
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))