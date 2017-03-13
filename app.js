const recipes = require('./routes/recipes.js')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('Public'))

app.use('/recipes', recipes)

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`)
})
