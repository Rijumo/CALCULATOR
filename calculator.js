let disp = document.querySelector('#input_item');
let btn = document.querySelectorAll('button');

let str = "";

let btn_array = Array.from(btn);
btn_array.forEach((btn) =>{
   btn.addEventListener('click',(event)=>{
         console.log(event.target.innerHTML)

         if(event.target.innerHTML == "DEL"){

            str = str.substring(0,str.length-1);
            disp.value = str;
         }
         else if(event.target.innerHTML == "AC"){
            str = '';
            disp.value = str;

         }
         else if(event.target.innerHTML == "="){
             str =  eval(str);   
             disp.value = str; 

         }
         else{

         str += event.target.innerHTML;
         disp.value = str;
        }
   });
});

