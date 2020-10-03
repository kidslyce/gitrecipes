const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  author: String,
  name: String,
  prepTime: Number,
  cookTime: Number,
  ingredients: String,
  instructions: String,
  image: String,
  tags:String
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe
