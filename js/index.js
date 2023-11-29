import * as templates from "./templates.js";
import tiposEnergia from "./tiposEnergia.js";
import energias from "./energias.js";

let data = {info: []};
let template = Handlebars.templates["table"];
let templatePortrait = Handlebars.templates["tablePortrait"];

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

    switch (nuevaImplementacion.tipoDeEnergia) {
        case "Eólica":
            energias[0].eficiencia += nuevaImplementacion.efectividad;
            break;
        case "Hidroeléctrica":
            energias[1].eficiencia += nuevaImplementacion.efectividad;
            break;
        case "Solar":
            energias[2].eficiencia += nuevaImplementacion.efectividad;
            break;
        default:
            console.log("Tipo de energía no reconocido");
    }

    console.log(energias[0].eficiencia);
    console.log(energias[1].eficiencia);
    console.log(energias[2].eficiencia);
    
    data.info.push(nuevaImplementacion);
    $("#table").append(template(data));
    $("#tablePortrait").append(templatePortrait(data));
    data = {info: []};
});


$(document).ready(start());
