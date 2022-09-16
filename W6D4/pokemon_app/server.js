const express = require("express");
const app = express();
const PORT = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))