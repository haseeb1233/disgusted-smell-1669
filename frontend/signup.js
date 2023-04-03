const signupbtn=document.getElementById("signupbtn")
signupbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    let data={
        email:document.getElementById("signupemail").value,
        password:document.getElementById("signuppassword").value,
        sex:document.getElementById("gender").value,
        birthday:document.getElementById("birthday").value,
        height:document.getElementById("height").value,
        weight:document.getElementById("weight").value
    }
    console.log(data)
    fetch("http://localhost:8080/users/register",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(data)

    })
    .then(res=>res.json())
     .then((res)=>{
        console.log(res)
        window.open("login.html")
     })
     .catch(err=>console.log(err))
})