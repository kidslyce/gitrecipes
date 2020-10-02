const bcrypt = require('bcrypt')
const express = require('express')
const User = require('../models/user.js')
const sessions = express.Router()

// sessions.get('/', (req, res) => {
//   res.json({
//     currentUser: req.session.currentUser
//   })
// })

sessions.post('/', (req, res) => {
  User.findOne({username: req.body.username},
  (err, foundUser) => {
    if(err){
      console.log(err);
    }else if(!foundUser){
      res.json({
        msg: "User Not Found"
      })
      //user not found
    }else{
      if(bcrypt.compareSync(req.body.password, foundUser.password)){
        username = foundUser
        res.json({
          msg: "Successfully Logged in"
        })
        //successful log in
      }else{
        res.json({
          msg: "Password incorrect"
        })
        //password + username doesnt match
      }
    }
  })
})

sessions.delete('/', (req, res) => {
  req.session.destroy( () => {
    res.clearCookie("session-id")
    res.json("Logged Out")
  })
})

module.exports = sessions
