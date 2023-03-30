const mongoose=require("mongoose")


const userSchema=mongoose.Schema({
    email:String,
    password:String,
    sex:String,
    birthday:Date,
    height:Number,
    weight:Number,
    bmr:Number,
})

const UserModel=mongoose.model("user",userSchema)


module.exports={
    UserModel
}