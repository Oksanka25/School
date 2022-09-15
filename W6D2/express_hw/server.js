const express = require("express");
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');


// 1. ## Greetings

// 1. Your app should have a route of `'/greeting'` and it should send a generic greeting to the screen like “Hello, stranger”.
// 2. Your app should have a route of `'/greeting/:name'` and it should expect *1 param* which takes in a person’s name. When hitting the route, the page should display a message such as “Hello, ”, or “What’s up, `<name>`”, or “`<name>`! It’s so great to see you!” For example, hitting `'/greeting/Jimmy-boy'` should display `Wow! Hello there, Jimmy-boy` on the page.

app.get('/greeting', (req, res) => {
    res.send('Hello, stranger!')
});

app.get('/greeting/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}. It's so great to see you!`)
});

// 2.## Tip Calculator

// 1. Your app should have a route of `'/tip'` and it should expect *2 params*. One should be `total` and one should be `tipPercentage`.
// 2. When hitting the route, the page should *display how much your tip will be* based on the total amount of the bill and the tip percentage. For example, hitting `'/tip/100/20'` should display `20` on the page.
// 3. Be sure you are `res.send()`ing a **String**. If you try to directly `res.send()` a Number, you will get errors about HTTP status codes.

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let num1 = req.params.total;
    let num2 = req.params.tipPercentage;
    let tip = (parseInt(num1) * parseInt(num2)) / 100;
    let totalPay = parseInt(num1) + parseInt(tip);
    res.send(`Total: $${num1}. Tip: 20%. Tip: $${tip.toString()}. To pay: $${totalPay}`)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))