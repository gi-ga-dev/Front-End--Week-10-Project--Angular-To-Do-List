import { Component, OnInit } from '@angular/core';
import { ClassToDo } from 'src/app/classes/class-to-do.class';
import { IntToDo } from 'src/app/interfaces/int-to-do.interface';
import { ServToDo } from 'src/app/services/serv-to-do.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  inpTitle!: string;

  _id: number = 0;
  _title!: string;
  _completed: boolean = false;
  noShow: boolean = false;

  constructor(private toDoService: ServToDo) { }

  ngOnInit(): void { }

  addTask(): void { // creo ed invio ogg. al service
    this.noShow = true;
    setTimeout(() => {
      this.noShow = false;
      let obj = new ClassToDo(this._id, this.inpTitle, this._completed);
      this.toDoService.addTaskS(obj);
    }, 2000);
  }
}
