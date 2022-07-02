export class ClassToDo {

    _id: number;
    _title: string;
    _completed: boolean;

    constructor(id: number, title: string, completed: boolean) {
        this._id = id;
        this._title = title;
        this._completed = completed;

        this._id++;
        this._completed = true;
    }
}
