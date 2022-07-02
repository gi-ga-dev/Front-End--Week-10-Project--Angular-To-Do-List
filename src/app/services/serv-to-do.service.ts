import { Injectable } from '@angular/core';
import { IntToDo } from '../interfaces/int-to-do.interface';

@Injectable({
  providedIn: 'root'
})
export class ServToDo {

  private toDoList: IntToDo[] = [];
  private markedList: IntToDo[] = [];

  constructor() { }

  getToDoList(): IntToDo[] { return this.toDoList; }
  getMarkedList(): IntToDo[] { return this.markedList; }

  /* --- Metodi list.component --- */
  removeTaskS(t: IntToDo): void {
    let index = this.toDoList.indexOf(t); // vedo indice ogg. da rimuovere
    this.toDoList.splice(index, 1);       // lo tolgo dall'array
  }
  markTaskS(task: IntToDo): void { // mark come completato e push in un ogg. (non interface)
    this.markedList.push(task);
    console.log(this.markedList);
  }
  /* --- Metodi add.component --- */
  addTaskS(task: IntToDo): void {
    this.toDoList.push(task);
  }
  /* --- Metodi completed.page --- */
  removeMarkedS(t: IntToDo): void {
    let index = this.markedList.indexOf(t);
    this.markedList.splice(index, 1);
  }

}
