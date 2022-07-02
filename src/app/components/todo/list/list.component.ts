import { Component, OnInit } from '@angular/core';
import { IntToDo } from 'src/app/interfaces/int-to-do.interface';
import { ServToDo } from 'src/app/services/serv-to-do.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  task!: IntToDo;   // prop. da assegnare a btn
  toDo!: IntToDo[]; // prop. conten. return dati array 
  noShow: boolean = false;

  constructor(private toDoService: ServToDo) { } // inietto il service

  ngOnInit(): void {
    this.toDo = this.toDoService.getToDoList(); // iniz. array di dati
  }

  removeTask(task: IntToDo): void { // passo metodo del service
    this.noShow = true;
    setTimeout(() => {
      this.noShow = false;
      this.toDoService.removeTaskS(task);
    }, 2000);
  }

  markTask(task: IntToDo): void { // mark come completato e push in un ogg. (non interface)
    this.noShow = true;
    setTimeout(() => {
      this.noShow = false;
      this.toDoService.markTaskS(task);   // trasferisco a page completed
      this.toDoService.removeTaskS(task); // e lo rimuovo da page todo
    }, 2000);
  }
}
