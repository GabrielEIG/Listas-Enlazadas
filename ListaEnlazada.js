import { Nodee } from "./Node.js";

// Clase que representa una lista enlazada
export class ListasEnlazadas {

    start; // Inicio de la lista

    // Constructor por defecto donde start pasa a ser un Nodee
    constructor(){
        this.start = new Nodee();
    }

    // Insertar el nodo al final de la lista
    createTail(data){

        let node = new Nodee();

        node.data = data;
        // Verifica si la lista está vacía
        if(this.start == null){
            this.start = node;
        }else{

            let indicator = new Nodee()
            indicator = this.start;
            while(indicator.next != null){
                indicator = indicator.next;
            }
            indicator.next = node;
        }


    }

    // Insertar el nodo al comienzo de la lista
    createHead(data){

        let node = new Nodee();

        node.data = data;
        // Verifica si la lista está vacía
        if(this.start == null){
            this.start = node;
        }else{

            let indicator = new Nodee()
            indicator = this.start;
            this.start = node;
            node.next = indicator;
        }
    }

    // Eliminar el primer nodo de la lista
    deleteHead(){
        if(this.start == null){
            console.log("La lista está vacía")
        }else{
            this.start = this.start.next
        }
    }

    // Eliminar el último nodo de la lista
    deleteTail(){

        if(this.start == null){
            console.log("La lista está vacía")
        }else{

            let indicatorB, indicatorA;
            indicatorB = this.start;
            indicatorA = this.start;

            while(indicatorA.next != null){
                indicatorB = indicatorA
                indicatorA = indicatorA.next
            }
            indicatorB.next = null;
        }

    }

    // Mostrar los elementos de la lista enlazada
    show(){
        if(this.start == null){
            console.log("La lista está vacía")
        }else{

            let indicator;
            indicator = this.start;
            process.stdout.write(`${indicator.data}---> \t`)
            while(indicator.next != null){
                indicator = indicator.next
                process.stdout.write(`${indicator.data}---> \t`)
            }
        }
        console.log(`\n\n`)


    }

}
