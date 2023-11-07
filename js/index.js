let d = document;
let energía = prompt("Ingrese energía total generada, y presione aceptar.");
let presupuesto = prompt("Ingrese el presupuesto disponible, y presione aceptar.");
let tiempo = prompt("Ingrese energía el tiempo utilizado, y presione aceptar.");
let efectividad = energía/(presupuesto * tiempo);
alert(efectividad);
