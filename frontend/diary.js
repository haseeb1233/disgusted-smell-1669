const accountbtn=document.getElementById("accountbtn")

accountbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("hi")
   if(account_dropdown.style.display=="none"){
    account_dropdown.style.display="block"
   }else{
    account_dropdown.style.display="none"
   }
})


const foodmaindiv=document.getElementById("foodmaindiv")
const foodcontainer=document.getElementById("foodcontainer")
foodcontainer.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("hi")
    foodmaindiv.style.display="block"
    foodmaindiv.style.zIndex = "1200";
    document.body.style.overflow = "hidden";
    
})