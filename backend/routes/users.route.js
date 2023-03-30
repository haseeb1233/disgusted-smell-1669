const express=require("express")

const userRouter=express.Router()

const { UserModel}=require("../model/users.model")

userRouter.post("/register",async(req,res)=>{
    try {
        const email=req.body.email
        console.log(email);
       let result=UserModel.find() 
       console.log(result)
       if(result.length){
        res.send({"msg":"email is already present"})
       }else{
        const user= new UserModel(req.body)
        await user.save()
        res.send({"msg":"registered sucessfully"})
       }
          
    } 
    catch (error) {
        res.send(error)
    }
    
})



module.exports={
    userRouter
}