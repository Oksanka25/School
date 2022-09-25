// import express to access Router function
const express = require('express')

// creates an instance of the router 
const router = express.Router()


// MODELS
const db = require('../models')

/*  Beginning of singers routes */

// get all singers route
router.get('/', async (req, res, next) => {
    try {
        const singers = await db.Singer.find({});
        const context = { singers }
        console.log(singers);
        return res.render('Index', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// Singer "new" route - GET request- displays form for creating a new singer

router.get('/new', (req, res) => {
    res.render('New')
})



// singers "show" route - GET request - display details about one singer 
// http://localhost:4000/singers/0

router.get('/:id/', async (req, res, next) => {
    try {
        const foundSinger = await db.Singer.findById(req.params.id)
        const allSongs = await db.Song.find({ singer: req.params.id })
        console.log(allSongs.length, 'Songs Found');
        const context = {
            oneSinger: foundSinger,
            songs: allSongs,
            message: "Hello there"
        }
        return res.render('Show', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})



// singers "edit" route - GET request - display an edit form for one singer
// http://localhost:4000/singers/0/edit

router.get('/:id/edit', async (req, res, next) => {
    try {
        const updatedSinger = await db.Singer.findById(req.params.id);
        console.log(updatedSinger);
        const context = {
            singer: updatedSinger
        }
        return res.render('Edit', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})



// singers "create" route - POST request -> request body (new singer data)

// http://localhost:4000/singers/

router.post('/', async (req, res, next) => {
    try {
        if (req.body.isMyFavorite === "on") {
            req.body.isMyFavorite = true;
        } else {
            req.body.isMyFavorite = false;
        }
        // console.log(`The req.body is ${req.body}`)
        const createdSinger = await db.Singer.create(req.body);
        console.log(`The created singer is ${createdSinger}`)
        res.redirect('/singers');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})



// singers "destroy" route - DELETE request - removes data from singers database and redirects to index route

// http://localhost:4000/singers/0/ 

router.delete('/:id', async (req, res, next) => {
    try {
        const deletedSinger = await db.Singer.findByIdAndDelete(req.params.id);
        // delete one Singer (req.params.id)
        // find all songs where Singer == req.params.id | delete those as well
        const deletedSong = await db.Song.deleteMany({ singer: req.params.id })
        // confirming the deletion of reviews 
        // 'orphan' documents in our reviews collection are removed

        // console.log(deletedSong);
        return res.redirect('/singers')
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})



// singers "update" route - PUT request - update the singers array and redirects to show route
// http://localhost:4000/singers/0/

router.put('/:id', async (req, res, next) => {
    try {
        if (req.body.isMyFavorite === "on") {
            req.body.isMyFavorite = true;
        } else {
            req.body.isMyFavorite = false;
        }
        const updatedSinger = await db.Singer.findByIdAndUpdate(req.params.id, req.body);
        console.log(updatedSinger);
        return res.redirect(`/singers`)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


module.exports = router