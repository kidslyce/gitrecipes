const bcrypt = require('bcrypt')
const express = require('express')
const User = require('../models/user.js')
const sessions = express.Router()

sessions.get('/', (req, res) => {

})

sessions.post('/', (req, res) => {
  User.findOne({username: req.body.username},
  (err, foundUser) => {
    if(err){
      console.log(err);
    }else if(!foundUser){
      //username isn't found
    }else{
      if(bcrypt.compareSync(req.body.password, foundUser.password)){
        req.session.currentUser = foundUser
        //successful log in
      }else{
        //password + username doesnt match
      }
    }
  })
})

sessions.delete('/', (req, res) => {
  req.session.destroy( () => {
    //redirect home
  })
})

module.exports = sessions
