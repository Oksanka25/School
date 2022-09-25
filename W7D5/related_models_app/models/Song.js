const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    name: String,
    year: Number,
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
        // required: true 
    },
    content: {
        type: String,
        // required: [true, 'You must provide a reason for your review']
    },
    singer: {
        // required: [true, "a singer is required for review"],
        type: mongoose.Types.ObjectId,
        ref: 'Singer'
        // reference is how mongoose will know where to look up documents
        // that match the current singer's ObjectId
        // ref should store a string that matches the name of your related model
    }
}, { timestamps: true })

const Song = mongoose.model("Song", songSchema)

module.exports = Song