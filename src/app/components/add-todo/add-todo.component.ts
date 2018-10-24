import { Component, OnInit } from '@angular/core';
import { Emitter, Emittable } from '@ngxs-labs/emitter';
import { TodoState } from 'src/app/state/todo.state';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Emitter(TodoState.addTodo)
  public addTodo: Emittable<string>;

  constructor() {}

  ngOnInit() {}
}
