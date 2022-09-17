const express = require("express");
const app = express();
const PORT = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

const pokemon = require("./models/pokemon")
console.log(pokemon);

app.get('/', (req, res) => {
    // res.send('Welcome to the Pokemon App!');
    res.redirect('/pokemon')
});

app.get('/pokemon', (req, res) => {
    res.render('Index', { allPokemon: pokemon });
});

app.get('/pokemon/:id', (req, res) => {
    let id = req.params.id;
    const context = { onePokemon: pokemon[id] };
    res.render('Show', context)
})





app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))