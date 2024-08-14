const express = require("express")
const app = express()
const engine = require("express-handlebars").engine
const port = 3000


app.get('/', (req, res)=>{
  res.redirect('/restaurants')
})

app.get('/restaurants', (req, res)=>{
  res.send('restaurants list')
})

app.listen(port, ()=>{
  console.log(`server on http://localhost:${port}`)
})