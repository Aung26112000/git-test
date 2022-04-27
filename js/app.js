let keypad = document.querySelector(".keypad");
let displaybox= document.querySelector(".display");
let operators =["+","-","/","*","%"];


let filter =x =>{
    let current = displaybox.innerText;
    let lastchar = current[current.length-1]
    if(current == "0"){
        if( x != ".")
       clearlast()
    }
    if(current.length>=10){
        return false;
    }
  if(operators.includes(x)){
      if(operators.includes(lastchar)){
          return false;
      }
  }
    return true;
}
function showindisplay(x){
 if(filter(x)){
    displaybox.innerText +=x
 }
    
}

let calc =_=>{
   if(!operators.includes(displaybox.innerText[displaybox.innerText.length-1])){
    displaybox.innerText = eval(displaybox.innerText)
   }
}

function clearall(){
    displaybox.innerText =" ";
}
let clearlast =_=>{
    displaybox.innerText=displaybox.innerText.substring(0,displaybox.innerText.length-1)}
    keypad.addEventListener("click",function(){
        if(displaybox.innerText > 10){
            displaybox.style.fontSize = 30 +"px";
        }else if(displaybox.innerText > 5){
            displaybox.style.fontSize = 60+ "px"
        }
    })