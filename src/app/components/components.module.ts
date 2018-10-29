import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatModule } from '../mat.module';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MatModule, FormsModule, ReactiveFormsModule],
  declarations: [TodoComponent, TodoListComponent, AddTodoComponent],
  exports: [TodoComponent, TodoListComponent, AddTodoComponent]
})
export class ComponentsModule {}
