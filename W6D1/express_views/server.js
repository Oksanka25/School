const express = require("express");
// create instance
const app = express();
// configure the app settings (used by app.listen)
const PORT = 3001;

// configurations here
// viw engine
app.set('view engine', 'ejs')

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

// "Home" route
app.get('/', (req, res) => res.send('Welcome to Home!'));
// "Index" route
app.get('/index', (req, res) => res.render('index.ejs'))
// "Show" route
app.get('/show', (req, res) => res.render('show.ejs'))

app.get('/fixed', (req, res) => { //this will never be reached
    res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `);
});

// app.get('/:indexOfPlantsArray', (req, res) => {
//     res.send(plants[req.params.indexOfPlantsArray]);
// });

app.get('fixed/:indexOfPlantsArray', (req, res) => {
    if (plants[req.params.index]) {
        res.send(plants[req.params.indexOfPlantsArray]);
    } else {
        res.send('cannot find anything at this index: ' + req.params.indexOfPlantsArray);
    }

});








app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))