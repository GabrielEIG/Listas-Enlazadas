// Importar la clase ListasEnlazadas desde el archivo ListaEnlazada.js
import { ListasEnlazadas } from "./ListaEnlazada.js";
import * as readline from "readline";

// Crear una nueva lista enlazada
var newList = new ListasEnlazadas();

// Crear una interfaz de lectura de la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {

// Mensaje de inicio
console.log("Menu para interactuar con Listas enlazadas\n");
console.log("a. Insertar al Frente");
console.log("b. Insertar al Final");
console.log("c. Insertar en una posición específica");
console.log("d. Insertar por orden ascendente");
console.log("e. Eliminar al Frente");
console.log("f. Eliminar al Final");
console.log("g. Mostrar lista");
console.log("h. Salir");


rl.question("Seleccione una opción: ", (opcion) => {
    procesarOpcion(opcion.trim().toLowerCase());
});
}


// Función para procesar la opción seleccionada por el usuario
function procesarOpcion(opcion) {
    switch (opcion) {
        case 'a':
            // Insertar al Frente
            rl.question("Ingrese el valor a insertar al frente: ", (valor) => {
                newList.createHead(parseInt(valor));
                mostrarMenu();
            });
            break;
        case 'b':
            // Insertar al Final
            rl.question("Ingrese el valor a insertar al final: ", (valor) => {
                newList.createTail(parseInt(valor));
                mostrarMenu();
            });
            break;
        case 'c':
            // Insertar en una posición específica

            rl.question("Ingrese el valor a insertar: ", (valor) => {
                let data = parseInt(valor);
                rl.question("Ingrese posición donde lo insertará: ", (posicion) => {
                    newList.createForPosition(data, parseInt(posicion));
                    mostrarMenu();
                });
            });

            break;
        case 'd':
            // Insertar en orden ascendente
            rl.question("Ingrese el valor a insertar: ", (valor) => {
                newList.insertAscendente(parseInt(valor));
                mostrarMenu();
            });
            break;
            break;
        case 'e':
            // Eliminar al Frente
            newList.deleteHead();
            mostrarMenu();
            break;
        case 'f':
            // Eliminar al Final
            newList.deleteTail();
            mostrarMenu();
            break;
        case 'g':
            // Mostrar newList
            newList.show();
            mostrarMenu();
            break;
        case 'h':
            // Salir
            rl.close();
            break;
        default:
            console.log("Opción no válida");
            mostrarMenu();
            break;
    }
}

// Mostrar el menú inicial
mostrarMenu();

// Evento para cerrar la interfaz de lectura cuando el usuario selecciona 'g' para salir
rl.on("close", () => {
    console.log("Saliendo...");
    process.exit(0);
});
