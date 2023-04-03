const express =require("express")
const cors=require("cors")
const { connection } = require("./db")
const { userRouter}=require("./routes/users.route")
const {foodRouter}=require("./routes/foods.route")
const {diaryRouter}=require("./routes/diary.route")
const {auth}=require("./middleware/auth.middleware")
require("dotenv").config()


const app =express()

app.use(express.json())
app.use(cors())
app.use("/users",userRouter)

app.use("/food",foodRouter)
app.use(auth)
app.use("/diary",diaryRouter)

app.listen(process.env.port,async() =>{
    try {
      await connection
      console.log("connected to mongodb")
    } 
    catch (error) {
        console.log(error)
    }
    console.log(`server is connected to ${process.env.port}`)
})