const mongoose=require("mongoose")


const foodSchema=mongoose.Schema({
    title:String,
    general:Object,
    carbohydrates:Object,
    lipids:Object,
    protein:Object,
    vitamins:Object,
    minerals:Object,
    categories:String
})

const FoodModel=mongoose.model("food",foodSchema)

module.exports={
    FoodModel
}