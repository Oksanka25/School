const express = require("express");
const app = express();
const PORT = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({ extended: false }));

const pokemon = require("./models/pokemon")
console.log(pokemon);

app.get('/', (req, res) => {
    // res.send('Welcome to the Pokemon App!');
    res.redirect('/pokemon')
});

// new
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});
// create

app.post('/pokemon', (req, res) => {
    let newOne = {
        name: req.body.name,
        img: req.body.img,

    }
    pokemon.push(newOne);
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