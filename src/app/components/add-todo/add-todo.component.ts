import { Component, OnInit } from '@angular/core';
import { Emitter, Emittable } from '@ngxs-labs/emitter';
import { TodoState } from 'src/app/state/todo.state';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  textField: FormControl;

  @Emitter(TodoState.addTodo)
  public addTodo: Emittable<string>;

  constructor() {
    this.textField = new FormControl('', []);
  }

  saveTodo() {
    const text: string = this.textField.value.trim();
    if (text.length === 0) {
      return;
    }
    this.addTodo.emit(text);
    this.textField.setValue('', { emitEvent: false });
    this.textField.markAsPristine();
  }

  ngOnInit() {}
}
