const express = require('express')
const app = express()
const port = process.env.PORT || 3000

let db = [];

app.get('/', (req, res) => {
    res.json(db)
})

app.get('/add/:number', (req, res) => {
    console.log(req.params.number)
    db.push(Number(req.params.number))
    res.json(db)
})

app.get('/delete/:number', (req, res) => {
    db = db.filter(item => item !== +req.params.number)
    res.json(db)

})

app.get('/update/:target/:destination', (req, res) => {

  for (let i=0; i<db.length; i++) {if(db[i]===+req.params.target) {db[i]=+req.params.destination;}}
    res.json(db)
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
