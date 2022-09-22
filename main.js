let cen=0;



function convertir(){
    
    let faren=parseFloat(document.getElementById("tempF").value);
    
    cen=(faren-32)*(5/9);
    cen=cen.toFixed(1);
    padre.textContent=cen+"°";
    
    let ele=document.createElement("p");
    ele.id="graTer"
    
    
    
        let g=document.createTextNode(cen+"°C");
        ele.appendChild(g);
        termometro.appendChild(ele);
    
   
    

 

    let alto=termometro.clientHeight;
    
    let gra=cen*(alto/100);
    ter.style.height=gra+"px";

}

let ter=document.getElementById("ter");
let termometro=document.getElementById("termometro");
let padre=document.getElementById("padre-p");
let btn=document.getElementById("btn");
btn.addEventListener("click",convertir)