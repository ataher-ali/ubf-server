const express = require('express')
const app = express()
const port = 1010
const Chefs = require('./chef.json')
const Foods = require('./foods.json')

app.get('/', (req, res) => {
  res.send('Welcome to  🍕🍜rest 2 rant 📡 server ! ') 
})

//chef
app.get('/chefs', (req, res) => {
    res.send(Chefs)
  })

  app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(`params ${id}`);
    const Chef = Chefs.find(chef=>chef._id===id )||{message: "data not found!"};
    res.send(Chef) 
})

//food
app.get('/foods', (req, res) => {
    res.send(Foods)
  })

  app.get('/foods/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(`params ${id}`);
    const food = Foods.find(food=>food.id===id )||{message: "data not found!"};
    res.send(food) 
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})