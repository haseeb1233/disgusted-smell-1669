const mongoose=require("mongoose")


const diarySchema=mongoose.Schema({
    food:String,
    userid:String,
    date:Date
})


const DiaryModel=mongoose.model("diary",diarySchema)


module.exports={
    DiaryModel
}