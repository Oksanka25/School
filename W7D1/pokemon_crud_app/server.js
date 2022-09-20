const express = require("express");
const app = express();
const methodOverride = require('method-override');
const PORT = 3000;

//  set up our view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method')) // for delete

// Import the pokemon model
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
    const context = { onePokemon: pokemon[id], allPokemon: pokemon };
    res.render('Show', context)
})

// Edit
app.get('/pokemon/:id/edit', (req, res) => {
    // const foundPokemon = pokemon[req.params.id]
    // const context = {
    //     onePokemon: foundPokemon,
    //     id: req.params.id
    // }

    // let id = req.params.id;
    // const context = { onePokemon: pokemon[id] };
    res.render('Edit', {
        onePokemon: pokemon[req.params.id],
        allPokemon: pokemon,
        id: req.params.id,
    });
});


//Delete
app.delete('/pokemon/:id', (req, res) => {
    let id = req.params.id;
    pokemon.splice(id, 1);
    res.redirect('/pokemon');
});

// Update
app.put('/pokemon/:id', (req, res) => {
    // pokemon[req.params.id] = req.body
    pokemon.splice(req.params.id, 1, req.body)
    res.redirect(`/pokemon/${req.params.id}`)
});





app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))