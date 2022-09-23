const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "name can not be empty"], // " " comment
    },
    entry: {
        type: String,
        required: [true, "entry can not be empty"],
    },
    shipIsBroken: {
        type: Boolean,
        required: [true, "image can not be empty"],
    }
},
    {
        timestamps: true // this will add a time stamp with the fields createdAt and updatedAt
    });


// mongoose.model('mongoDB collection', our Schema)
const Log = mongoose.model('Log', logSchema);
module.exports = Log;

