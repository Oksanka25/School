const express = require("express");
const app = express();
const PORT = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
const methodOverride = require('method-override');

// middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method')) // for delete

const pokemon = require("./models/pokemon")
console.log(pokemon);

// home page
app.get('/', (req, res) => {
    // res.send('Welcome to the Pokemon App!');
    res.redirect('/pokemon')
});

// index route
app.get('/pokemon', (req, res) => {
    res.render('Index', { allPokemon: pokemon });
});

// new route
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

// show page
app.get('/pokemon/:id', (req, res) => {
    let id = req.params.id;
    const context = { onePokemon: pokemon[id] };
    res.render('Show', context)
})

// edit page




//Delete
app.delete('/pokemon/:id', (req, res) => {
    let id = req.params.id;
    pokemon.splice(id, 1);
    res.redirect('/pokemon');
});

// update





app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))