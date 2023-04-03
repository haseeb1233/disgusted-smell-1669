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

const closeicon=document.getElementById("closeicon")
closeicon.addEventListener("click",(e)=>{
    e.preventDefault()
    foodmaindiv.style.display="none"
})


// table food
const tablebody=document.getElementById("tablebody")
const addfood=document.getElementById("addfood")

fetch("http://localhost:8080/food/")
.then(res =>res.json())
.then((res) =>{
    console.log(res[0].title)
    res.forEach((ele) => {
        const tr=document.createElement("tr")
        const td1=document.createElement("td")
        const td2=document.createElement("td")
        td2.innerText="NCCDB"
        td1.innerText=ele.title
        tr.append(td1,td2)
        tr.setAttribute("id","tbodytr")
        tr.addEventListener("click",(e) =>{
            addfood.innerHTML=null
            e.preventDefault()
            const titlediv=document.createElement("div")
              titlediv.innerText=ele.title
              titlediv.setAttribute("id","titlediv")
              const contentdiv=document.createElement("div")
              contentdiv.setAttribute("id","contentdiv")
              const contentdiv1=document.createElement("div")
              contentdiv1.setAttribute("id","contentdiv1")
              const graphdiv=document.createElement("div")
              graphdiv.setAttribute("id","graphdiv")
              const graphdetailsdiv=document.createElement("div")
              const detail1div=document.createElement("div")
              detail1div.setAttribute("id","detail1div")
              const colordiv1=document.createElement("div")
              colordiv1.setAttribute("class","colordiv")
              const detail1=document.createElement("span")
              const colordiv2=document.createElement("div")
              colordiv2.style.backgroundColor="#FF6384"
              colordiv2.setAttribute("class","colordiv")
              const detail2=document.createElement("span")

              const colordiv3=document.createElement("div")
              colordiv3.style.backgroundColor="#FFCE56"
              colordiv3.setAttribute("class","colordiv")
              const detail3=document.createElement("span")
              
              const text=document.createElement("span")
              text.innerText=`${ele.general.energy}\nKcal`
              const canvas=document.createElement("canvas")
              canvas.setAttribute("id","canvas")
              let ctx = canvas.getContext('2d');
               let data=[ele.carbohydrates.carbs,ele.protein.Protein,ele.lipids.fat]
               let colors = ['#FF6384', '#36A2EB', '#FFCE56'];
               let total = 0;
               for (let i = 0; i < data.length; i++) {
               total += data[i];
                }
                detail1.innerText=`protein:${ele.protein.Protein} (${Math.round((ele.protein.Protein/total)*100)}%)`
                detail2.innerText=`Net Carbs:${ele.carbohydrates.carbs} (${Math.round((ele.carbohydrates.carbs/total)*100)}%)`
                detail3.innerText=`Net Carbs:${ele.lipids.fat} (${Math.round((ele.lipids.fat/total)*100)}%)`
                let sliceStarts = [];
            let sliceEnds = [];

        for (let i = 0; i < data.length; i++) {
    let sliceStart = (i === 0) ? 0 : sliceEnds[i - 1];
    let sliceEnd = sliceStart + (data[i] / total) * Math.PI * 2;
    sliceStarts.push(sliceStart);
    sliceEnds.push(sliceEnd);
            }
let x = canvas.width / 2;
let y = canvas.height / 2;
let radius = Math.min(x, y) * 0.7;

for (let i = 0; i < data.length; i++) {
    ctx.beginPath();
    ctx.arc(x, y, radius, sliceStarts[i], sliceEnds[i], false);
    ctx.arc(x, y, radius * .6, sliceEnds[i], sliceStarts[i], true);
    ctx.fillStyle = colors[i];
    ctx.fill();
}    

         const addbtn=document.createElement("button")
         addbtn.addEventListener("click",()=>{
            
         })
         addbtn.innerText="ADD TO DIARY"
         addbtn.setAttribute("id","addbtn")
                 detail1div.append(colordiv1,detail1,colordiv2,detail2,colordiv3,detail3)  
                 graphdetailsdiv.append(detail1div)      
                graphdiv.append(canvas,text)
                contentdiv1.append(graphdiv,graphdetailsdiv)
                contentdiv.append(contentdiv1)
              addfood.append(titlediv,contentdiv,addbtn)
            console.log(ele)
            
        })
        tablebody.append(tr)
    });

})
.catch(err=>console.log(err))