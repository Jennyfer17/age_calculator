

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

//validacoes

function validateDay(){
   let d = day.value;
   let m = month.value;
   let l1 = emptyDay();
   let l2 = validateMonth();
   let logic;
 
   if((l1 == true) && (l2 ==true)){
      if(m==1 || m==3 || m==5 || m==7 
         || m==8 || m==10 || m==12){
            if(d>31){
               text1.innerHTML = 'data invalida';
               changeColor();
               logic = false;
            } else{text1.innerHTML = ''; logic = true;}
      } else{
         if(m==2){
            if(d>29){
               text1.innerHTML = 'data invalida';
               changeColor();
               logic = false;
            } else{text1.innerHTML = ''; logic = true;}
         } else{
            if(m==4 || m==6 || m==9 || m==11){
               if(d>30){
                  text1.innerHTML = 'data invalida';
                  changeColor();
                  logic = false;
               } else{text1.innerHTML = ''; logic = true;}
            }
         }
      }
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
      text1.innerHTML = 'preencha este campo';
      changeColor();
      logic = false;
   } else{text1.innerHTML = ''; logic = true;}

   return logic;
}

function emptyMonth(){
   let logic;

   if(month.value === ''){
      text2.innerHTML = 'preencha este campo';
      changeColor();
      logic = false;
   } else{text2.innerHTML = ''; logic = true;}

   return logic;
}

function emptyYear(){
   let y = year.value;
   let logic;

   if(y == ''){
      text3.innerHTML = 'preencha este campo';
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
         text2.innerHTML = 'mes invalido';
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
         text3.innerHTML = 'ano invalido';
         changeColor();
         logic = false;
      }else{text3.innerHTML = '';
      // resetState();
      logic = true;}
   }
   return logic;
}


//calculo da idade

function calcAge(){
   
   let val1 = validateDay();
   let val2 = validateYear();

   if(val1==true && val2==true){

      colorReset();

      let meses = month.value;
      let dias = day.value;
      let anos = year.value;
      const dataActual = new Date();

      let aux1 = dataActual.getFullYear() - anos;
      let aux2 = dataActual.getMonth() - (meses-1); // mes vai de 0 a 11
      let aux3 = dataActual.getDate() - dias; // dia vai de 1 a 7
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

   labelDay.style.color = 'red';
   labelMonth.style.color = 'red';
   labelYear.style.color = 'red';
   text1.style.color = 'red';
   text2.style.color = 'red';
   text3.style.color = 'red';

   fieldDay.style.borderColor = 'red';
   fieldMonth.style.borderColor = 'red';
   fieldYear.style.borderColor = 'red';

}

function resetState(){

   labelDay.style.color = 'black';
   labelMonth.style.color = 'black';
   labelYear.style.color = 'black';
   
   text1.style.color = 'black';
   text2.style.color = 'black';
   text3.style.color = 'black';

   fieldDay.style.borderColor = 'black';
   fieldMonth.style.borderColor = 'black';
   fieldYear.style.borderColor = 'black';

}



//button.addEventListener("click", calcAge);

button.addEventListener("click", calcAge);

//Ver como e que sao chamados as funcoes em JavaScript, principalmente as funcoes do tipo boolean