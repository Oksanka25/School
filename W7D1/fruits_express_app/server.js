const express = require('express');
const app = express();

const fruits = ['apple', 'banana', 'pear'];

// Middleware


// Routes
// Index - GET
app.get('/fruits', (req, res) => {
    res.send(fruits);
});

app.listen(3000, () => {
    console.log('listening');
});