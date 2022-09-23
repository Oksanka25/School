// Starting an app
const express = require("express");
const app = express();
const PORT = 3000;

// Requiring and Initializing
require('./config/db.connection');
const methodOverride = require('method-override');
require("dotenv").config();
//getting the MongoDB connection
require('./config/db.connection.js');




app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))