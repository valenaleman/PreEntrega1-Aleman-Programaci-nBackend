/*// Definir variables

let nombre = "Babysec"
let tipo = "Ultrasec"
let precio = 3200
let contenido = 60 

// Mostrar variables por consola

console.log("Nombre:", nombre);
console.log("Tipo:", tipo);
console.log("Precio:", precio);
console.log("Contenido del producto:", contenido);

// Incrementar el precio en 4500

precio = precio + 4500

// Agregar un item de stock a la lista

contenido.push("Hay 5 productos en stock");

// Mostrar los valores actuaizados por consola

console.log("Precio incrementado", precio);
console.log("Stock actualizado", contenido);*/

// Imprimimos lista

let products = [
    { id: 1, name: 'Babysec - Ultrasec', price: 3200, content: 60 },
    { id: 2, name: 'Pampers - Premium care, piel delicada', price: 5900, content: 58},
    { id: 3, name: 'Pampers - Premium care, recién nacido hipoalergénico', price: 2420, content: 36},
]

let elements = products.find(p=>{
    let products;
    products = p.id === 3;
    return products;
})

console.log(products)

console.log("Inicio de programa");

function cargarDatosDesdeElServidor(callback){
    setTimeout(() => {
        const datos = "Datos cargados desde el servidor";
        callback(datos)
    }, 2023);
}

function procesarDatos(datos){
    console.log("1. Se estan pocesando los datos cargados", datos);
}

console.log("2. Pidiendo datos al servidor");
procesarDatos(datosCargados);
console.log("3. Fin de carga de datos procesados desde el servidor");