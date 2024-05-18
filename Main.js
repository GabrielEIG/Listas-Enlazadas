// Importar la clase ListasEnlazadas desde el archivo ListaEnlazada.js
import { ListasEnlazadas } from "./ListaEnlazada.js";

// Mensaje de inicio
console.log("Listas enlazadas\n");

// Crear una nueva lista enlazada
var newList = new ListasEnlazadas();

// Insertar elementos al inicio de la lista
newList.createHead(10);
newList.createHead(8);
newList.createHead(6);
newList.createHead(4);
newList.createHead(2);
newList.createHead(0);

// Mostrar la lista enlazada
newList.show();

// Eliminar el primer elemento de la lista
newList.deleteHead();
newList.show();

// Eliminar el último elemento de la lista
newList.deleteTail();
newList.show();
