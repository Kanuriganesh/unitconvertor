/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const converBtn = document.getElementById("conver-Btn");   
const inputEl = document.getElementById("input-el")   
let length = document.getElementById("length"); 
let volume = document.getElementById("volume"); 
let mass  = document.getElementById("mass")   
converBtn.addEventListener("click",function(){
           if(inputEl.value !== ""){ 
               if(inputEl.value.length < 4){   
                   let value =  Number(inputEl.value); 
                   length.textContent = `${value} meters = ${(value*3.281).toFixed(3)} feet | ${value} feet = ${(value/3.281).toFixed(3)} meters`; 
                   volume.textContent=  `${value} liters = ${(value*0.264).toFixed(3)} gallons | ${value} gallons = ${(value/0.264).toFixed(3)} liters`;
                   mass.textContent= `${value} kilos = ${(value*2.204).toFixed(3)} pounds | ${value} pounds = ${(value/2.204).toFixed(3)} kilos`;
               }  
               else{
                   alert(`Accept upto 3 digits only`) 
               }
           }   
           else{
               alert("please enter the text")
           }   
})
inputEl.addEventListener("input",function(){
      if(inputEl.value.length > 3){
          inputEl.value = inputEl.value.slice(0,3);
      }
})
inputEl.addEventListener("keydown",function(event){
     if(event.key === "Enter"){
        converBtn.click()
     }   
    
})
