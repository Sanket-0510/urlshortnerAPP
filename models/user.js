const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

         firstname:{
            type:String,
            required:true
         },
         lastname:{
            type:String,
            required:true
         },
         email:{
            type:String,
            required:true,
        
         },
         jobtitle:{
            type:String,

         },
         gender:{
            type:String
         }


},{timestamps:true})

const user = new mongoose.model("user", userSchema)

module.exports= user