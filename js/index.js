import * as templates from "./templates.js";
import energias from "./energias.js";

let data = {info: []};
let template = Handlebars.templates["table"];
let templatePortrait = Handlebars.templates["tablePortrait"];
let templateProcesados = Handlebars.templates["tableProcesados"];

function start (){
    const selectImplementarTipos = $("#implementar_tipos");
    energias.energia.forEach(arrayPosition =>{
        const option = $('<option>', {value: arrayPosition.nombre, text: arrayPosition.nombre});
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
    let efectividadImplementacion = energia / (presupuesto * tiempo);
    $("#implementar")[0].reset();
    let nuevaImplementacion = {
        tipoDeEnergia: tipoEnergia,
        descripcion: descripcion,
        energiaGenerada: energia,
        presupuesto: presupuesto,
        tiempoEstimado: tiempo,
        efectividad: efectividadImplementacion
    }

    data.info.push(nuevaImplementacion);
    $("#table").append(template(data));
    $("#tablePortrait").append(templatePortrait(data));
    data = {info: []};

    switch (nuevaImplementacion.tipoDeEnergia) {
        case "Eólica":
            energias.energia[0].eficiencia += nuevaImplementacion.efectividad;
            break;
        case "Hidroeléctrica":
            energias.energia[1].eficiencia += nuevaImplementacion.efectividad;
            break;
        case "Solar":
            energias.energia[2].eficiencia += nuevaImplementacion.efectividad;
            break;
        default:
            console.log("Tipo de energía no reconocido");
    }
    
    return energias
});

$("#btn_procesar").on("click", function(e){
    e.preventDefault();
    $("#tableProcesados").empty();
    $("#tableProcesados").append(templateProcesados({energias}));
})

$(document).ready(start());