import { Todo } from '../models/todo.model';
import { State, StateContext, Selector } from '@ngxs/store';
import { Receiver, EmitterAction } from '@ngxs-labs/emitter';

export interface TodoStateModel {
  todos: Todo[];
  selectedTodo: Todo;
}

const defaults: TodoStateModel = {
  todos: [
    { id: Math.random(), title: 'Test-Todo', completed: false },
    { id: Math.random(), title: 'Todo2', completed: true }
  ],
  selectedTodo: null
};

@State({
  name: 'TodoState',
  defaults
})
export class TodoState {
  @Selector()
  static getTodos(state: TodoStateModel) {
    return state.todos;
  }

  @Receiver()
  public static toggleTodo({ getState, patchState }: StateContext<TodoStateModel>, { payload }: EmitterAction<Todo>) {
    const state = getState();
    patchState({
      todos: state.todos.map((todo) => {
        if (todo === payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  @Receiver()
  public static selectionChanged({ patchState }: StateContext<TodoStateModel>, { payload }: EmitterAction<Todo[]>) {
    patchState({
      todos: payload
    });
  }

  @Receiver()
  public static editTodo({ patchState }: StateContext<TodoStateModel>, { payload }: EmitterAction<Todo>) {
    patchState({
      selectedTodo: payload
    });
  }

  @Receiver()
  public static completeTodo({ getState, patchState }: StateContext<TodoStateModel>, { payload }: EmitterAction<Todo>) {
    const state = getState();
    patchState({
      todos: state.todos.map((todo) => {
        if (todo === payload) {
          todo.completed = true;
        }
        return todo;
      })
    });
  }

  @Receiver()
  public static addTodo({ getState, patchState }: StateContext<TodoStateModel>, { payload }: EmitterAction<string>) {
    const state = getState();
    patchState({ todos: [{ id: Math.random(), title: payload, completed: false }, ...state.todos] });
  }

  @Receiver()
  public static removeTodo({ getState, patchState }: StateContext<TodoStateModel>, { payload }: EmitterAction<Todo>) {
    const state = getState();
    patchState({
      todos: state.todos.filter((todo) => todo !== payload)
    });
  }

  @Receiver()
  public static completeAll({ getState, patchState }: StateContext<TodoStateModel>) {
    const state = getState();
    patchState({
      todos: state.todos.map((todo) => {
        todo.completed = true;
        return todo;
      })
    });
  }
}
