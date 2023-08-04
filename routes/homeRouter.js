const express = require('express')

const homeRouter = express.Router();

homeRouter.get("/",(req,res)=>{
     res.send("welcome to the home page")
})

module.exports = homeRouter