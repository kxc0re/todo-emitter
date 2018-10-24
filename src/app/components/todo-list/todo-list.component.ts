import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { TodoState } from 'src/app/state/todo.state';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { Emitter, Emittable } from '@ngxs-labs/emitter';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Select(TodoState.getTodos)
  todos$: Observable<Todo[]>;

  @Emitter(TodoState.completeAll)
  public completeAll: Emittable<void>;

  constructor() {}

  ngOnInit() {}
}
