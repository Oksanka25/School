const express = require('express')
const app = express()
const PORT = 3000;

app.set('view engine', 'ejs')



app.get('/home', (req, res) => {
    res.render('home.ejs')
})

app.get('/orders', (req, res) => {
    res.render('orders.ejs')
})

app.get('/cart', (req, res) => {
    res.render('cart.ejs')
})

app.get('/returns', (req, res) => {
    res.render('returns.ejs')
})

app.get('/deals', (req, res) => {
    res.render('deals.ejs')
})

app.get('/college', (req, res) => {
    res.render('college.ejs')
})

app.get('/health', (req, res) => {
    res.render('health.ejs')
})

app.get('/household', (req, res) => {
    res.render('household.ejs')
})

app.get('/groceries', (req, res) => {
    res.render('groceries.ejs')
})

app.get('/account', (req, res) => {
    res.render('account.ejs')
})




app.listen(PORT, () => {
    console.log('listening on 3000')
})