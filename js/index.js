const d = document;
const btnCalcluar = d.querySelector("button")
let energia;  
let presupuesto; 
let tiempo; 


function calcular(){
    energia = prompt("Ingrese energía total generada, y presione aceptar.");
    presupuesto = prompt("Ingrese el presupuesto disponible, y presione aceptar.");
    tiempo =prompt("Ingrese energía el tiempo utilizado, y presione aceptar.");
    const efectividad = energia / (presupuesto * tiempo);
    alert(efectividad)
}

btnCalcluar.addEventListener("click", calcular);

//prompt("Ingrese el presupuesto disponible, y presione aceptar.");
//prompt("Ingrese energía el tiempo utilizado, y presione aceptar.");

/* function start (){
    ingresarEnergia();
} */

/* function ingresarEnergia (){
    energia = parseInt(prompt("Ingrese energía total generada, y presione aceptar."));
    if (Number.isNaN(energia)){
        alert("Error");
    }
    console.log(energia);
} */