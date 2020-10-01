const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  name: String,
  prepTime: Number,
  cookTime: Number,
  ingredients: String,
  instructions: String,
  image: String,
  tags:[]
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe
