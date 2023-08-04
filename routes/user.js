const express =  require('express')

const router = express.Router();
const User = require('../models/user.js')
router.get("/",(req,res)=>{
    res.send("welcome to user route")
})


router.post("/",async (req,res)=>{
    const userdata ={
        firstname:"sanket",
        lastname:"teli",
        email:"telisanket63@gmail.com",
        jobtitle:"student",
        gender:"male"
    }
    const userdoc =  await User.create(userdata)
    const result =  await userdoc.save()
    console.log(result)
    res.send(result)
})
module.exports=  router
