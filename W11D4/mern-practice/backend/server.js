// IMPORT PATH
const path = require("path");

// IMPORT EXPRESS
const express = require("express");

// IMPORT MORGAN TO LOG REQUEST AND RESPONSE
const morgan = require("morgan");

// IMPORT FAVICON
const favicon = require("serve-favicon");

// IMPORT DOTENV MODULE TO CONNECT TO OUR CONFIGURATION FILE
const dotenv = require("dotenv");

// IMPORT MONGOOSE TO CONNECT TO OUR DATABASE
const mongoose = require("mongoose");

// IMPORT USER ROUTER
const userRouter = require("./routes/api/users");

// Connect to our config file
dotenv.config();

// Create a variable that represent our database

const DB = mongoose
    .connect(
        process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)
    )
    .then(() => {
        console.log("DB CONNECTION SUCCESSFUL!");
    });

// CREATE A VARIABLE TO HOLD OUR EXPRESS METHODS
const app = express();

app.use(morgan("dev"));

app.use(express.json());


app.use("/api/users", userRouter);

app.all("*", (request, response) => {
    response.send("Undefined route");
});

// CREATE A PORT TO LISTEN FOR REQUEST/RESPONSE CYCLE
const port = process.env.PORT || 5002;

// LISTEN FOR CYCLE
app.listen(port, () => {
    console.log(`Server works on port ${port}...`);
});