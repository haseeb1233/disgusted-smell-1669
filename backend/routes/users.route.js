const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const userRouter=express.Router()


const { UserModel}=require("../model/users.model")

userRouter.post("/register",async(req,res)=>{
    try {
        const email=req.body.email
        console.log(email);
       const result= await UserModel.find({email:email}) 
       console.log(result)
       if(result.length){
        res.status(200).send({"msg":"email is already present"})
       }
       else{
        bcrypt.hash(req.body.password,5, async(err, hash)=> {
            req.body.password=hash
            let birthyear=+(req.body.birthday.split("-")[0])
             const now = new Date();
              const currentYear = now.getFullYear();
               const age=currentYear-birthyear
               req.body.age=age
               if(req.body.sex=="Male"){
                const bmr= Math.round(88.362 + (13.397 *+req.body.weight) + (4.799 * +req.body.height) - (5.677 *+req.body.age))
                req.body.bmr=bmr
               }else{
                const bmr=Math.round( 447.593 + (9.247 *+req.body.weight) + (3.098 * +req.body.height) - (4.330 *+req.body.age))
                req.body.bmr=bmr
               }
            let data = new UserModel(req.body)
            await data.save() 
           res.status(200).send({"msg":"user added sucessfully"})
        })
       }
          
    } 
    catch (error) {
        res.status(400).send({"msg":"bad request"})
    }
    
})

userRouter.post("/login",async(req,res) =>{
    const {email,password}=req.body
    try {

      let data=await UserModel.find({email})
        console.log(data)
      if(data.length){
          bcrypt.compare(password, data[0].password).then((result) => {
              if(result){
                  res.status(200).send({"msg":"sucessfully logged in","token":jwt.sign({ Userid: data[0]._id }, 'diary'),"userid":`${data[0]._id}`,"bmr":`${data[0].bmr}`})
              }else{
                  res.status(200).send({"msg":"login failed"})
              }
          })

      }else{
          res.status(400).send({"msg":"enter correct email"})
      }
      

    } 
    
    catch (error) {
      res.status(400).send({"msg":"bad request"})
    }
})

module.exports={
    userRouter
}