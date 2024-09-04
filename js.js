const allBtn = document.getElementsByClassName("btn");
let count = 0;
for(const btn of allBtn){
   btn.addEventListener("click",function(event){
    const place = event.target.parentNode.childNodes[3].innerText
    const cost = event.target.parentNode.childNodes[5].innerText
    const price = event.target.parentNode.childNodes[7].innerText
    console.log(place,cost,price);
    event.target.style.backgroundColor = "orange"
    event.target.disabled = true;
    bajet(price)
    count += 1;
    if(count <=4){
      innerTextSet("added-card",count)
    }
    else{
      alert("No more set 😴");
      return
    }
   
    
    
    const ul = document.getElementById("ul");
    const li= document.createElement("li")
    li.innerText= place +" "+cost+" "+price
    ul.appendChild(li)

    const priceNum = parseInt(price)
    totalPrice("total",priceNum)
    const tr = document.getElementById("total").innerText;
    innerTextSet("gt",tr)
    
    
   })
}

// Total Price 
function totalPrice(id,value){
  const total = document.getElementById("total").innerText;
  const totalNum = parseInt(total)
  const sum = totalNum +value;
  innerTextSet(id,sum)
}



// Inner Text Set Function
function innerTextSet(id,value){
  const text = document.getElementById(id);
  text.innerText = value
}
function grantTotalCost(Category){
const totals = document.getElementById("total").innerText;
const totalNumber = parseInt(totals)
if(Category=='Bus'){
  innerTextSet("gt",totalNumber+100)
}
else if(Category=='Train'){
  innerTextSet("gt",totalNumber-200)
}
else{
  innerTextSet("gt",totalNumber+500)
}
}


function bajet(value){

  const bact = document.getElementById("beget").innerText;
  const baezNum = parseInt(bact)
  const r = baezNum-parseInt(value)
 if(r>=0){
  
  innerTextSet("beget",r)
 }
 else{
  alert("Tk Nai😩");
     
 }
 
}



document.getElementById("kbtn").addEventListener("click",function(){
  const a = document.getElementById("kupon").value;
  const r = document.getElementById("total").innerText;
const t = parseInt(r)
  if(a == "Rahat"){
      const rt = t-20
      innerTextSet("gt",rt)
      
  }
  else{
      alert("Input Valid Kupon");
  }
})
