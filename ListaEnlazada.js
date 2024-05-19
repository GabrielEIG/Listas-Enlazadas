import { Nodee } from "./Node.js";

// Clase que representa una lista enlazada
export class ListasEnlazadas {
  start; // Inicio de la lista

  // Constructor por defecto donde start pasa a ser un Nodee
  constructor() {
    this.start = new Nodee();
  }

  // Insertar el nodo al final de la lista
  createTail(data) {
    let node = new Nodee();

    node.data = data;
    // Verifica si la lista está vacía
    if (this.start == null) {
      this.start = node;
    } else {
      let indicator = new Nodee();
      indicator = this.start;
      while (indicator.next != null) {
        indicator = indicator.next;
      }
      indicator.next = node;
    }
  }

  // Insertar el nodo al comienzo de la lista
  createHead(data) {
    let node = new Nodee();

    node.data = data;
    // Verifica si la lista está vacía
    if (this.start == null) {
      this.start = node;
    } else {
      let indicator = new Nodee();
      indicator = this.start;
      this.start = node;
      node.next = indicator;
    }
  }

  // Eliminar el primer nodo de la lista
  deleteHead() {
    if (this.start == null) {
      console.log("La lista está vacía");
    } else {
      this.start = this.start.next;
    }
  }

  // Eliminar el último nodo de la lista
  deleteTail() {
    if (this.start == null) {
      console.log("La lista está vacía");
    } else {
      let indicatorB, indicatorA;
      indicatorB = this.start;
      indicatorA = this.start;

      while (indicatorA.next != null) {
        indicatorB = indicatorA;
        indicatorA = indicatorA.next;
      }
      indicatorB.next = null;
    }
  }

  createForPosition(data, pos) {
    let node = new Nodee();
    node.data = data;
    // Verifica si la lista está vacía
    if (this.start == null) {
      this.start = node;
    } else {
      let indicator = new Nodee();
      indicator = this.start;
      if (pos == 1) {
        this.start = node;
        node.next = indicator;
      } else {
        for (let i = 1; i < pos - 1; i++) {
          indicator = indicator.next;
          if (indicator.next == null) {
            console.log(
              "Posicion no existente, porfavor inserte desde la cola"
            );
            break;
          } else if (indicator == undefined) {
            console.log("Posicion no existente");
            break;
          }
        }
        let indicatorA;

        indicatorA = indicator.next;
        indicator.next = node;
        node.next = indicatorA;
      }
    }
  }

  // Método para insertar un nodo con datos de forma ascendente en la lista enlazada
  insertAscendente(data) {
    // Crear un nuevo nodo con los datos proporcionados
    let node = new Nodee();
    node.data = data
    // Verificar si la lista está vacía o si el nuevo dato es menor que el primer dato en la lista
    if (this.start == null || data < this.start.data) {
      // Insertar el nuevo nodo al principio de la lista
      node.next = this.start;
      this.start = node;
    } else {
      // Recorrer la lista para encontrar la posición adecuada para insertar el nuevo nodo
      let current = this.start;
      while (current.next != null && data > current.next) {
        current = current.next;
      }
      // Insertar el nuevo nodo en la posición adecuada
      node.next = current.next;
      current.next = node;
    }
  }

  // Mostrar los elementos de la lista enlazada
  show() {
    if (this.start == null) {
      console.log("La lista está vacía");
    } else {
      let indicator;
      indicator = this.start;
      while (indicator.next != null) {
        indicator = indicator.next;
        process.stdout.write(`${indicator.data}---> \t`);
      }
    }
    console.log(`\n\n`);
  }
}
