const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gpa: {
        type: String,
        required: true,
    },
    isPassing: { type: Boolean }
})

const Student = mongoose.model("Student", studentSchema)

module.exports = Student