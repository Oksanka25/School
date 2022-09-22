// 1. Boilerplate
const express = require("express");
const app = express();
const PORT = 3000;

// 2. Requiring and Initializing
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Student = require("./models/Student");
require("dotenv").config()


// 2.1 Middleware

app.set("view engine", "jsx");

// Creates link to JSX
app.engine("jsx", require("express-react-views").createEngine());
// instantiates MethodOverride for CRUD actions
app.use(methodOverride("_method"))
// to Parse req.body
app.use(express.urlencoded({ extended: false }))
// establishes Middleware Process
app.use((req, res, next) => {
    console.log('I am here for there routes ')
    next()
})

mongoose.connect(process.env.MONGO_URI
);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

// 4 ROUTES
// 4.1 Index page of students
app.get('/students', (req, res) => {
    Student.find({}, (err, allStudents) => {
        console.log(err);
        res.render('Index', {
            students: allStudents
        })
    })
})

// 4.4 New student

app.get('/students/new', (req, res) => {
    res.render('New', {});
});

// 4.3 POST
app.post('/students', (req, res) => {
    if (req.body.isPassing === "on") {
        req.body.isPassing = true
    } else {
        req.body.isPassing = false
    }
    Student.create(req.body, (err, createdStudent) => {
        console.log((err));
        // res.send(createdStudent)
    })
    res.redirect('/students')
})

// 4.5 Edit
app.get('/students/:id/edit', (req, res) => {
    Student.findById(req.params.id, (err, foundStudent) => {
        console.log((err));
        if (!err) {
            res.render("Edit", { student: foundStudent })
        } else {
            res.send({ msd: err.message })
        }
    })
});


// 4.6 Update
app.put("/students/:id", (req, res) => {
    if (req.body.isPassing === "on") {
        req.body.isPassing = true;
    } else {
        req.body.isPassing = false;
    }
    Student.findByIdAndUpdate(req.params.id, req.body, (err, updatedStudent) => {
        console.log(err)
        console.log(updatedStudent);
        res.redirect(`/students/${req.params.id}`);
    });
});




// 3. Seeds
app.get('/students/seed', (req, res) => {
    Student.create([
        {
            name: 'Beyonce',
            gpa: '3.0',
            isPassing: true
        },
        {
            name: 'Rihanna',
            gpa: '4.0',
            isPassing: true
        },
        {
            name: 'J-LO',
            gpa: '1.0',
            isPassing: false
        }
    ], (err, data) => {
        res.redirect('/students')
    }
    )
})

//4.2 Show

app.get('/students/:id', (req, res) => {
    Student.findById(req.params.id, (err, foundStudent) => {
        console.log((err));
        if (!err) {
            res.render("Show", { student: foundStudent })
        } else {
            res.send({ msd: err.message })
        }
    })
});

// 4.7 Delete
app.delete('/students/:id', (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, data) => {
        console.log((err));
    })
    res.redirect('/students')
})








// 1. Boilerplate
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))