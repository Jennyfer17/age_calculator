

let day = document.querySelector("#td");
let month = document.querySelector("#tm");
let year = document.querySelector("#ta");

let text1 = document.querySelector(".pa");
let text2 = document.querySelector(".pb");
let text3 = document.querySelector(".pc");

let button = document.querySelector(".botao");

let date = new Date(year.value, month.value - 1, day.value);

let labelDay = document.querySelector("#idDay");
let labelMonth = document.querySelector("#idMonth");
let labelYear = document.querySelector("#idYear");

let fieldDay = document.querySelector("#td");
let fieldMonth = document.querySelector("#tm");
let fieldYear = document.querySelector("#ta");

//output
let outYear = document.querySelector("#trac1");
let outMonth = document.querySelector("#trac2");
let outDay = document.querySelector("#trac3");


//validating field

function validateDay(){
   let d = day.value;
   let m = month.value;
   let l1 = validateMaxDay();
   let l2 = validateMonth();
   let logic;
 
   if((l1 == true) && (l2==true)){
      if(m==1 || m==3 || m==5 || m==7 
         || m==8 || m==10 || m==12){
            if(d>31){
               text1.innerHTML = 'Must be a valid date';
               changeColor();
               logic = false;
            } else{text1.innerHTML = ''; logic = true;}
      } else{
         if(m==2){
            if(d>29){
               text1.innerHTML = 'Must be a valid date';
               changeColor();
               logic = false;
            } else{text1.innerHTML = ''; logic = true;}
         } else{
            if(m==4 || m==6 || m==9 || m==11){
               if(d>30){
                  text1.innerHTML = 'Must be a valid date';
                  changeColor();
                  logic = false;
               } else{text1.innerHTML = ''; logic = true;}
            }
         }
      }
   }
   
   return logic;

}

function validateMaxDay(){
   let logic;
   let val = emptyDay();

   if(val==true){
      if(day.value > 31){
         text1.innerHTML = 'Must be a valid date';
         logic = false;
      }else{
         text1.innerHTML = '';
         logic = true;
      }
   } else{
      logic = false;
   }

   return logic;
}

function colorReset(){
   let l1 = validateDay();
   let l2 = validateYear();

   if((l1==true) && (l2==true)){
      resetState();
   }
}

function emptyDay(){
   let d = day.value;
   let logic;

   if(d == ''){
      text1.innerHTML = 'This field is required';
      changeColor();
      logic = false;
   } else{text1.innerHTML = ''; logic = true;}

   return logic;
}

function emptyMonth(){
   let logic;

   if(month.value === ''){
      text2.innerHTML = 'This field is required';
      changeColor();
      logic = false;
   } else{text2.innerHTML = ''; logic = true;}

   return logic;
}

function emptyYear(){
   let y = year.value;
   let logic;

   if(y == ''){
      text3.innerHTML = 'This field is required';
      changeColor();
      logic = false;
   } else{text3.innerHTML = ''; logic = true;}

   return logic;
}

function validateMonth(){
   let m = month.value;
   let logic;

   if(emptyMonth()==true){
      if(m==0 || m>12){
         text2.innerHTML = 'Must be a valid month';
         changeColor();
         logic = false;
      } else{text2.innerHTML = ''; logic = true;}
   }   

   return logic;
}

function validateYear(){
   let y = year.value;
   let logic;
   const d = new Date();
   if(emptyYear() == true){
      if (y<1900 || y>d.getFullYear()){
         text3.innerHTML = 'Must be a valid year';
         changeColor();
         logic = false;
      }else{text3.innerHTML = '';
      // resetState();
      logic = true;}
   }
   return logic;
}


//getting the user age

function calcAge(){
   
   let val1 = validateDay();
   let val2 = validateYear();

   if(val1==true && val2==true){

      colorReset();

      let meses = month.value;
      let dias = day.value;
      let anos = year.value;
      const currentDate = new Date();

      let aux1 = currentDate.getFullYear() - anos;
      let aux2 = currentDate.getMonth() - (meses-1); // month is between 0 and 11
      let aux3 = currentDate.getDate() - dias; // day is between 1 and 7
      aux1 *= 365;
      aux2 *= 30;
      
      let total = aux1 + aux2 + aux3;

      anos = parseInt(total/365);
      aux1 = parseInt(total%365);
      meses = parseInt(aux1/30);
      dias = parseInt(aux1 - meses*30);

      outYear.innerHTML = ''+anos;
      outMonth.innerHTML = ''+meses;
      outDay.innerHTML = ''+dias;
   } else{
      outYear.innerHTML = '--';
      outMonth.innerHTML = '--';
      outDay.innerHTML = '--';
   }
  
}
function changeColor(){

   labelDay.style.color = 'hsl(0, 60%, 67%)';
   labelMonth.style.color = 'hsl(0, 60%, 67%)';
   labelYear.style.color = 'hsl(0, 60%, 67%)';
   text1.style.color = 'hsl(0, 60%, 67%)';
   text2.style.color = 'hsl(0, 60%, 67%)';
   text3.style.color = 'hsl(0, 60%, 67%)';

   fieldDay.style.borderColor = 'hsl(0, 60%, 67%)';
   fieldMonth.style.borderColor = 'hsl(0, 60%, 67%)';
   fieldYear.style.borderColor = 'hsl(0, 60%, 67%)';

}

function resetState(){

   labelDay.style.color = 'hsl(0, 1%, 44%)';
   labelMonth.style.color = 'hsl(0, 1%, 44%)';
   labelYear.style.color = 'hsl(0, 1%, 44%)';
   
   // text1.style.color = 'black';
   // text2.style.color = 'black';
   // text3.style.color = 'black';

   fieldDay.style.borderColor = 'hsl(0, 0%, 86%)';
   fieldMonth.style.borderColor = 'hsl(0, 0%, 86%)';
   fieldYear.style.borderColor = 'hsl(0, 0%, 86%)';

}



//adding the event

button.addEventListener("click", calcAge);

