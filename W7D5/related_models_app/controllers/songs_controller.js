const express = require('express')
// import express to access Router function

const router = express.Router()
// creates an instance of the router 

// MODELS
const db = require('../models')

// ROUTES - http://localhost:4000/reviews

// index route - Index.jsx template 
router.get('/', async (req, res, next) => {
    // res.send('hitting review index')
    try {
        const allSongs = await db.Song.find({})
        res.send(allSongs)

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})
// New song route
// locahost:4000/songs/new
router.get('/new', async (req, res, next) => {

    try {
        const allSongs = await db.Song.find({})
        // console.log(allSongs)
        const context = { songs: allSongs }
        res.render('songs/new', context)

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// create - POST route 
router.post('/', async (req, res, next) => {
    try {
        const newSongData = req.body
        const newSong = await db.Song.create(newSongData)
        console.log(newSong)
        res.redirect(`/singers/${newSong.singer}`)

        // return user to singer detail page -> 
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})
// Song show  page
router.get('/:songId', async (req, res, next) => {
    // res.send('hitting review show: '+req.params.reviewId)
    try {
        const foundSong = await db.Song.findById(req.params.songId).populate('singer')
        res.render('songs/Show', { song: foundSong })
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// edit - GET route
router.get('/:songId/edit', async (req, res, next) => {
    try {
        const updatedSong = await db.Song.findById(req.params.songId);
        console.log(updatedSong);
        const context = {
            song: updatedSong
        }
        return res.render('songs/Edit', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
    // res.send('hitting song edit: ' + req.params.songId)
})

// update - PUT route
router.put('/:songId', async (req, res, next) => {
    try {
        const updatedSong = await db.Song.findByIdAndUpdate(req.params.songId, req.body);
        console.log(updatedSong);
        return res.redirect('/singers/' + updatedSong.singer)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
    // res.send('hitting song update: ' + req.params.songId)
})


// destroy - delete 
router.delete('/:songId', async (req, res, next) => {
    // res.send('hitting review delete: '+req.params.reviewId)
    try {
        const deleteSong = await db.Song.findByIdAndDelete(req.params.songId)
        console.log(deleteSong.id, "<<song|", deleteSong.singer, "<<singer")
        res.redirect('/singers/' + deleteSong.singer)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

module.exports = router