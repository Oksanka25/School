// models/Product.js

const mongoose = require('mongoose');

const singerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be empty :(']
    },
    genre: {
        type: String,
        required: [true, 'genre cannot be empty!']
    },
    image: {
        type: String,
        required: [true, 'image cannot be empty!']
    },
    isMyFavorite: {
        type: Boolean,
        required: [true, "fav status can not be empty"],
    }
},
    {
        timestamps: true
    }
);


const Singer = mongoose.model('Singer', singerSchema);

module.exports = Singer;
