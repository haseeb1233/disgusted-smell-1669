const express=require("express")

const foodRouter=express.Router()
const {FoodModel}=require("../model/foods.model")



foodRouter.post("/add",async(req,res)=>{
       try {
          const food = new FoodModel(req.body)
          await food.save()
          res.status(200).send({"msg":"food is added"})
       } catch (error) {
          res.status(400).send(error)
       }

})

foodRouter.get("/",async(req,res) =>{
    try {
        let data= await FoodModel.find()
        res.status(200).send(data)
    } catch (error) {
        res.send(error)
    }
})

module.exports={
    foodRouter
}