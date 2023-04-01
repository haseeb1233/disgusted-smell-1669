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