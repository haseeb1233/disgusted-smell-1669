const express=require("express")
const {DiaryModel} = require("../model/diary.model")
const {FoodModel}=require("../model/foods.model")
const diaryRouter=express.Router()



diaryRouter.post("/add",async(req,res) =>{
    console.log(req.body)
    try {
        const diary = new DiaryModel(req.body)
        await diary.save()
        res.status(200).send({"msg":"added successfully"})

    } catch (error) {
        res.status(400).send({"msg":`error is ${error}`})
        console.log(error)
    }
})

module.exports={
    diaryRouter
}