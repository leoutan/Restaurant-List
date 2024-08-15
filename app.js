const express = require("express")
const app = express()
const engine = require("express-handlebars").engine
const port = 3000


app.use(express.static('public'))

app.get('/', (req, res)=>{
  res.redirect('/restaurants')
})

app.get('/restaurants', (req, res)=>{
  res.send('restaurants list')
})

app.get('/restaurant/:id', (req, res)=>{
  const id = req.params.id
  res.send(`restaurant detail: ${id}`)
})

app.listen(port, ()=>{
  console.log(`server on http://localhost:${port}`)
})