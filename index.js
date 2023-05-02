const express = require('express')
const app = express()
const port = 1010
const Chefs = require('./chef.json')

app.get('/', (req, res) => {
  res.send('Welcome to  🍕🍜rest 2 rant 📡 server ! ') 
})

app.get('/chefs', (req, res) => {
    res.send(Chefs)
  })

  app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(`params ${id}`);
    const Chef = Chefs.find(chef=>chef._id===id )||{message: "data not found!"};
    // if(job){
    //     res.send(job)
    // }
    // else{
    //     res.json({message: "data not found!"})
    // }
    res.send(Chef) // if if-else statement will you work 23 line make salient
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})