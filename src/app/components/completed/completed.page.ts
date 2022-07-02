import { Component, OnInit } from '@angular/core';
import { IntToDo } from 'src/app/interfaces/int-to-do.interface';
import { ServToDo } from 'src/app/services/serv-to-do.service';

@Component({
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss']
})
export class CompletedPage implements OnInit {

  task!: IntToDo;   // prop. da assegnare a btn
  toDo!: IntToDo[]; // prop. conten. return dati array
  markedList!: IntToDo[]; // prop. conten. return dati array marked
  noShow: boolean = false;

  constructor(private toDoService: ServToDo) { }

  ngOnInit(): void {
    this.toDo = this.toDoService.getToDoList(); // iniz. array di dati
    this.markedList = this.toDoService.getMarkedList();
  }

  removeMarked(task: IntToDo): void { // passo metodo del service
    this.noShow = true;
    setTimeout(() => {
      this.noShow = false;
      this.toDoService.removeMarkedS(task);
    }, 2000);
  }
}
