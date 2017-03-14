const userRoute = require('./routes/users.js')
const recipeRoute = require('./routes/recipes.js')
const ingredientRoute = require('./routes/ingredients.js')
const reviewRoute = require('./routes/reviews.js')
const stepRoute = require('./routes/steps.js')
const ing_recRoute = require('./routes/ingredients_recipes')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('Public'))

app.use('/recipes', recipeRoute)
app.use('/users', userRoute)
app.use('/ingredients', ingredientRoute)
app.use('/reviews', reviewRoute)
app.use('/steps', stepRoute)
app.use('/ingredients_recipes', ing_recRoute)

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`)
})
