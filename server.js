const express= require("express");
const app = express();
const PORT = 3000;
const budget = require("./models/budget.js")

app.get('/', (req, res) => {
    res.send('Whats poppin')
})

app.get('/budget', (req,res) => {
    res.render('index.ejs', {
        allBudget: budget
    })
})

app.get('/budget/:id', (req, res) => {
    res.render('show.ejs', {
        allBudget: budget[req.params.id]
    })
})











app.listen(PORT, () => {
    console.log(`Wait and listen...`)
})