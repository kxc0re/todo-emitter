import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoState } from 'src/app/state/todo.state';
import { Emittable, Emitter } from '@ngxs-labs/emitter';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input()
  todo: Todo;

  visible = false;

  @Emitter(TodoState.toggleTodo)
  public toggleTodo: Emittable<Todo>;

  @Emitter(TodoState.completeTodo)
  public completeTodo: Emittable<Todo>;

  @Emitter(TodoState.removeTodo)
  public removeTodo: Emittable<Todo>;

  @Emitter(TodoState.editTodo)
  public editTodo: Emittable<Todo>;

  constructor() {}

  ngOnInit() {}
}
