class Prodcto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    obtenerInformacion(){
        return `Nombre ${this.nombre}, Precio ${this.precio}`;
    }

    static productos(){
        console.log("Hola usted selecciono la clase productos");
    }
}

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const combinarArray = [...new Set([...arr1, ...arr2])];
console.log(combinarArray);

function sumar(...numeros){
    let total =0;
    for(const numero of numeros){
        total += numero;
    }
    return total;
}

console.log(sumar(1,2,3,4,5,6));