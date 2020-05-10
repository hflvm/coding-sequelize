const express = require('express')

const bodyparser = require('body-parser')


//Database
const db = require("./config/database")
const userRouter = require('./routers/gigs')

const app= express()

//Gig routes

app.use(bodyparser.json())
app.use(userRouter)



//server
const PORT = process.env.PORT || 5000
app.listen(PORT,console.log("server started on port "+ PORT))
