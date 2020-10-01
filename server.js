// ============
// DEPENDENCIES
// ============
const express = require('express')
const mongoose = require('mongoose')

//=================
// CONFIG
//=================
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

//==============
// DATABASE
//==============
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

//===================
// Error / Success
//===================
mongoose.connection.on('error', err =>
  console.log(
    err.message,
    ' is Mongod not running?/Problem with Atlas Connection?'
  )
)
mongoose.connection.on('connected', () =>
  console.log('mongo connected: ', MONGODB_URI)
)
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

//============
//Middleware
//=============
app.use(express.json())
app.use(express.static('public'))

//=========
//ROUTES
//=========
const recipeController = require('./controllers/recipes_controller.js')
app.use('/recipes', recipeController)


//===============
// LISTENERS
//===============

app.listen(PORT, () => {
  console.log('listening on PORT 3000');
})
