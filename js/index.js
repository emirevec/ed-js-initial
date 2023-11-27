import * as templates from "./templates.js";
import tiposEnergia from "./tiposEnergia.js";

let data = {info: []};
let template = Handlebars.templates["table"];

function start (){
    const selectImplementarTipos = $("#implementar_tipos");
    tiposEnergia.valores.forEach(valor =>{
        const option = $('<option>', {value: valor, text: valor});
        selectImplementarTipos.append(option);
    })
};

$("#implementar_submit").on("click", function(e){
    e.preventDefault();
    let tipoEnergia = $("#implementar_tipos").val();
    let descripcion = $("#implementar_descripcion").val();
    let energia =  $("#implementar_energia").val();
    let presupuesto = $("#implementar_presupuesto").val();
    let tiempo = $("#implementar_tiempo").val();
    $("#implementar")[0].reset();
    let nuevaImplementacion = {
        tipoDeEnergia: tipoEnergia,
        descripcion: descripcion,
        energiaGenerada: energia,
        presupuesto: presupuesto,
        tiempoEstimado: tiempo
    }

    data.info.push(nuevaImplementacion);
    $("#table").append(template(data));
    data = {info: []};
});

$(document).ready(start());

/*
let energia = 0;  
let presupuesto = 0; 
let tiempo = 0; 
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

$("#calcular").click(calcuar);
 */