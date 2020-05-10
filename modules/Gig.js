const db = require("../config/database")
const sequelize = require("sequelize")

const User = db.define('users',{
  userName:{
    type:sequelize.STRING
  },
  password:{
    type:sequelize.STRING
  },
  email:{
    type:sequelize.STRING
  },
  Phone:{
    type:sequelize.STRING
  },
  address:{
    type:sequelize.TEXT
  },
  date:{
    type:sequelize.DATE
 }
})

module.exports= User
