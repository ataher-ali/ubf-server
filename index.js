const express = require('express')
const app = express()
const port = 1010
const volunteer = require('./volunteer.json')
const certificate = require('./certificate.json')
const gest = require('./gest.json')

var cors = require('cors')

app.use(cors())


app.get('/', (req, res) => {
  res.send('Welcome to  Ulipur Book Fair  📡 server ! ') 
})

//volunteer
app.get('/volunteer', (req, res) => {
    res.send(volunteer)
  })

  app.get('/volunteers/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(`params ${id}`);
    const man = volunteer.find(volunteer=>volunteer._id===id )||{message: "data not found!"};
    res.send(man) 
})

app.get('/volunteer/:url', (req, res) => {
  const url = req.params.url
  console.log(`params ${url}`);
  const man = volunteer.find(volunteer=>volunteer.url===url )||{message: "data not found!"};
  res.send(man) 
})

//Certificate
app.get('/certificate', (req, res) => {
    res.send(certificate)
  })

  app.get('/certificate/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(`params ${id}`);
    const Certificate = certificate.find(certificate=>certificate.id===id )||{message: "data not found!"};
    res.send(Certificate) 
})

//gest
app.get('/gest', (req, res) => {
  res.send(gest)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})