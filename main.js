let cen=0;



function convertir(){
    
    let faren=parseFloat(document.getElementById("tempF").value);
    
    cen=(faren-32)*(5/9);
    cen=cen.toFixed(1);
    padre.textContent=cen+"°C";
    
   temp.textContent=cen+"°C";
   
    let alto=termometro.clientHeight;
    
    let gra=cen*(alto/100);
    ter.style.height=gra+"px";

}

function reset(){
    let faren=document.getElementById("tempF").value="";
    ter.style.height=0+"px";
    temp.textContent="";
    padre.innerText="";
    

}

let ter=document.getElementById("ter");
let temp=document.getElementById("temp");
let termometro=document.getElementById("termometro");
let padre=document.getElementById("padre-p");

let btnConv=document.getElementById("btn");
btnConv.addEventListener("click",convertir);

let btnReset=document.getElementById("btnReset");
btnReset.addEventListener("click",reset)