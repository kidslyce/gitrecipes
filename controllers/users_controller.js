const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/user.js')

//==================
//  SHOW USERS ROUTE
//==================

users.get('/', (req,res) => {
  User.find({}, (err, foundUser) => {
    res.json(foundUser)
  })
})

//==================
//  CREATE USER ROUTE
//==================

users.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
    User.find({}, (err, foundUser) => {
      res.json(foundUser)
    })
  })
})

module.exports = users
