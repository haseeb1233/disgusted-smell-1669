const login=document.getElementById("login_form")

login.addEventListener("submit",(e)=>{
    e.preventDefault()
    let obj={
    email:document.getElementById("emaillogin").value,
    password:document.getElementById("passwordlogin").value
}
console.log(obj)

fetch("http://localhost:8080/users/login",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(obj)
     })
     .then(res=>res.json())
     .then((res)=>{
        console.log(res.token)
       if(res.token){
        console.log(res)
        localStorage.setItem("token",res.token)
        localStorage.setItem("userid",res.userid)
        localStorage.setItem("bmr",res.bmr)
        window.open("diary.html")
       }else{
        console.log(res)
       }
     })
     .catch(err=>console.log(err))

})
