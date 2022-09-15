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

// 3. ## Magic 8 Ball

// 1. Create a route of `'/magic'` that should expect a phrase in the URL that ask the Magic 8 ball a question.
// 2. So if the user hits that route and asks a question of “Will I be a Millionaire” (i.e., `'/magic/Will%20I%20Be%20A%20Millionaire'`) they should see returned to them their question AND a random Magic 8 ball response (see the array below) on the screen.
// 3. Remember that we can’t use spaces in the url, so we use `%20` to express a space in the url.
const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
function randomItem(max) { return Math.floor(Math.random() * max) }

app.get('/magic/:question', (req, res) => {
    res.send(`<p>${req.params.question}?</p>
     <p>${responses[randomItem(responses.length)]}</p>`)
})


// 4.- On the home page (`get "/"`), users should see:
// - "99 Bottles of beer on the wall"
// - a link that says "take one down, pass it around"
// - this should link to `/98`, where the number represents the number of bottles left.
// - When a number is given in the url (`get "/:number_of_bottles"`), users should see:
// - The number of bottles of beer on the wall (i.e. `98 Bottles of beer on the wall.`)
// - a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
// - If there are 0 bottles left, do not show a link to "take one down"
// - Add a link to start over, which directs the user back to the home page.
app.get('/bottles/:number_of_bottles', (req, res) => {
    let bottles = req.params.number_of_bottles;
    if (req.params.number_of_bottles > 1) {
        res.send(`<h1> ${bottles} bottles of beer on the wall</h1> <br> <a href="/bottles/${bottles - 1}"> Take one down, pass it around </a>`);
    }
    else if (req.params.number_of_bottles == 1) {
        res.send(`<h1> ${bottles} bottle of beer on the wall</h1> <br> <a href="/bottles/${bottles - 1}"> Take one down, pass it around </a>`);
    } else if (req.params.number_of_bottles == 0) {
        res.send(`<h1> No bottles of beer left on the wall  </h1> <br> <a href="/bottles/99"> Back to 99 bottles of beer on the wall </a>`)
    } else {
        console.log("something went wrong");
    }
})

app.get("/", (req, res) => {
    res.redirect("/bottles/99");
});


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))