const mongoose=require('mongoose')

const signupSchema=new mongoose.Schema({
    user:String,
    email:String,
    password:String
})

const signup=mongoose.model('signup',signupSchema)

module.exports=signup