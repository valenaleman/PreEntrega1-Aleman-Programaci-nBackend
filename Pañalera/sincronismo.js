// Sincronismo

console.log("Inicio de la carga de datos");

function cargarDatosDesdeElServidor(){
    const datos = "Datos cargados desde el sevidor";
    return datos;
}

function procesarDatos(datos){
    console.log("Procesando :", datos);
}

console.log("Pidiendo datos al servidor");
const datosCargados = cargarDatosDesdeServidor();
procesarDatos(datosCargados);
console.log("Fin de la carga de datos");