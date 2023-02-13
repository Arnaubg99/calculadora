const operacioLayout = document.querySelector("#operacio-layout");
const numeroLayout = document.querySelector("#numero-layout");
const ac = document.querySelector("#ac"); 
const del = document.querySelector("#del"); 
const multiplicacio = document.querySelector("#multiplicacio"); 
const num7 = document.querySelector("#num7");   
const num8 = document.querySelector("#num8");   
const num9 = document.querySelector("#num9");
const divisio = document.querySelector("#divisio");   
const num4 = document.querySelector("#num4"); 
const num5 = document.querySelector("#num5");   
const num6 = document.querySelector("#num6");
const suma = document.querySelector("#suma");     
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const num3 = document.querySelector("#num3");  
const resta = document.querySelector("#resta");                
const num0 = document.querySelector("#num0");
const punt = document.querySelector("#punt");   
const botons = document.querySelectorAll(".boto");   
const igual = document.querySelector("#igual"); 
let booleanPunt = false;
let variable ="";
let resultat="";
let operacio="";

    ac.addEventListener("click", function(){
        variable = "";
        operacio = "";
        operacioLayout.innerHTML = operacio;
        numeroLayout.innerHTML = 0;
    });
    del.addEventListener("click", function(){
        variable = "";
        numeroLayout.innerHTML = 0;
    });
    punt.addEventListener("click", function(e){
        if(!booleanPunt){
            variable = variable + e.currentTarget.innerHTML;
            booleanPunt = true;
            numeroLayout.innerHTML = variable;
        }
    });
    igual.addEventListener("click", function(){
        if(variable !=""){
            operacio = operacio + variable;
            resultat = String(eval(operacio));
            variable = resultat.slice(0, 14);
            operacioLayout.innerHTML = operacio;
            numeroLayout.innerHTML = variable;
            operacio = "";
            variable="";
        }
    });
    multiplicacio.addEventListener("click",ConcatOperador);
    divisio.addEventListener("click", ConcatOperador);   
    suma.addEventListener("click", ConcatOperador);
    resta.addEventListener("click", ConcatOperador);
    num0.addEventListener("click", ConcatNum);
    num1.addEventListener("click", ConcatNum);
    num2.addEventListener("click", ConcatNum);
    num3.addEventListener("click", ConcatNum);
    num4.addEventListener("click", ConcatNum);
    num5.addEventListener("click", ConcatNum);
    num6.addEventListener("click", ConcatNum);
    num7.addEventListener("click", ConcatNum);
    num8.addEventListener("click", ConcatNum);
    num9.addEventListener("click", ConcatNum);
    function ConcatNum(e){
        if( variable.length <= 13){
            variable = variable + e.currentTarget.innerHTML;
            numeroLayout.innerHTML = variable;
        }
    }
    function ConcatOperador(e){
        if(variable !="" && variable.slice(-1)!="."){
            operacio = operacio + variable + e.currentTarget.innerHTML;
            variable = "";
            booleanPunt = false;
            operacioLayout.innerHTML = operacio;
            numeroLayout.innerHTML = 0;
        }
    }