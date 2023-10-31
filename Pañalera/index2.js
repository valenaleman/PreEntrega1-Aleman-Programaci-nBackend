function mostrarProductos (productos) {
    if(productos.length === 0) {
        console.log("Sin productos");
    } else {
        productos.forEach((element, indice) => {
            console.log(`${indice + 1}: ${element}`);
        });
    }
    console.log(`La lista de productos es ${productos.length}`)
}

const sinProductos = [];
const conProductos = ["Babysec - Ultrasec", "Pampers - Premium care, piel delicada", "Pampers - Premium care, recién nacido hipoalergénico"];

mostrarProductos(sinProductos);
mostrarProductos(conProductos);

const usuario = {
    nombre: "Pañalera",
    existencias: 2020
}

const productos = Object.products (usuario)

for(const [key, value] of productos){
    console.log(`${key}: ${value}`);
}

const valores = Object.values(usuario);
console.log(valores);

const keys = Object.keys(usuario);
console.log(keys);

