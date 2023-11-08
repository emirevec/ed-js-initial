const d = document;
const btnCalcluar = d.querySelector("button")
let energia;  
let presupuesto; 
let tiempo; 


function calcuar (){
    energia = parseInt(prompt("Ingrese energía total generada, y presione aceptar."));
    if (Number.isNaN(energia)){
        alert("Error! Debe ingresar un número entero");
        return;
    }
    
    presupuesto = parseInt(prompt("Ingrese el presupuesto disponible, y presione aceptar."));
    if (Number.isNaN(presupuesto)){
        alert("Error! Debe ingresar un número entero");
        return;
    }
    
    tiempo = parseInt(prompt("Ingrese energía el tiempo utilizado, y presione aceptar."));
    if (Number.isNaN(tiempo)){
        alert("Error! Debe ingresar un número entero");
        return;
    }
    const efectividad = energia / (presupuesto * tiempo);
    alert(efectividad)
}

/* function calcular(){
    energia = prompt("Ingrese energía total generada, y presione aceptar.");
    presupuesto = prompt("Ingrese el presupuesto disponible, y presione aceptar.");
    tiempo =prompt("Ingrese energía el tiempo utilizado, y presione aceptar.");
    const efectividad = energia / (presupuesto * tiempo);
    alert(efectividad)
} */

btnCalcluar.addEventListener("click", calcuar);
//btnCalcluar.addEventListener("click", calcular);
