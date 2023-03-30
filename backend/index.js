const express =require("express")
const { connection } = require("./db")
const { userRouter}=require("./routes/users.route")
require("dotenv").config()


const app =express()

app.use(express.json())

app.use("/users",userRouter)




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