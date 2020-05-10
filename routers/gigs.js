const express = require('express')
//https://www.apeironsoftware.com/crud-operations-using-sequelize/
const sh1 = require('sha1')
const db = require("../config/database")
const User = require("../modules/Gig")
const router = new express.Router();
//welcome massage
router.get('/',(req,res)=>{
  res.send({ message: "Welcome to bezkoder application." })
})

// git all users
router.get('/users',(req,res) =>
User.findAll()
  .then( users => {
    if (users) {
      res.send(users);
    } else {
      res.status(400).send('Error in insert new record');
    }}))

// insert new user
router.post('/insert',(req, res) => 
  User.create({
    userName: req.body.userName,
     password:sh1(req.body.password),
     email: req.body.email,
     Phone: req.body.Phone,
     address: req.body.address,
      date: new Date()
  }).then( users => {
     if (users) {
      res.send(users)
      } else {
       res.status(400).send('Error in insert new record');
      }
  })
)

// update user 
router.put('/update/:id',(req,res) =>
User.update( {userName: req.body.userName,
  password: sh1(req.body.password),
  email: req.body.email,
  Phone: req.body.Phone,
  address: req.body.address,},
  { where: {id: req.params.id} }
).then((user) => {
  res.send(user)
}).catch(function (err) {
      console.log("update failed with error: " + err );
      return 0;
  })
)

// get one user
router.get('/user/:id',(req,res) =>
User.findAll({
    where: {
        id: req.params.id
    }
  }).then((user) => {
         res.send(user)
        })
  .catch(err=> console.log(err)))

  // delete user
router.delete('/delete/:id',(req,res) =>
User.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.send("user "+req.params.id+" is deleted")
  }).catch(err=> console.log(err))) 


module.exports = router
