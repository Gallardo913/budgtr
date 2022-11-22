const express= require("express");
const app = express();
const PORT = 3000;
const budget = require("./models/budget.js")

app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Whats poppin')
})

app.get('/budget', (req,res) => {
    res.render('index.ejs', {
        allBudget: budget
    })
})

app.get('/budget/new', (req, res) => {
    res.render('new.ejs')
})

app.get('/budget/:id', (req, res) => {
    res.render('show.ejs', {
        allBudget: budget[req.params.id]
    })
})

app.post('/budget', (req, res) => {
    budget.push(req.body),
    res.redirect('budget')
})

app.listen(PORT, () => {
    console.log(`Wait and listen...`)
})