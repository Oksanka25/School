// 1. Boilerplate
const express = require("express");
const app = express();
const PORT = 3000;

// 2. Requiring and Initializing
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require("dotenv").config()


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

mongoose.connect(process.env.MONGO_URI
);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});











// 1. Boilerplate
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))