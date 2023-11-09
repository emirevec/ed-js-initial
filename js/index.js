const d = document;
const btnCalcluar = d.querySelector("button")
let energia;  
let presupuesto; 
let tiempo; 

function validarDatos(dato){
    if (Number.isNaN(dato)){
        alert("Error! Debe ingresar un número entero");
        return null;
    }
    return dato;
}

function calcuar (){
    energia = validarDatos(parseInt(prompt("Ingrese energía total generada, y presione aceptar.")));
    if (energia === null){
        return;
    }
    
    presupuesto = validarDatos(parseInt(prompt("Ingrese energía total generada, y presione aceptar.")));
    if (presupuesto === null){
        return;
    }
    
    tiempo = validarDatos(parseInt(prompt("Ingrese energía total generada, y presione aceptar.")));
    if (tiempo === null){
        return;
    }
    
    const efectividad = energia / (presupuesto * tiempo);
    alert(efectividad)
}

btnCalcluar.addEventListener("click", calcuar);

