import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../shared/types/todo';

const TODOS: string = 'https://jsonplaceholder.typicode.com/todos';

@Injectable({
  providedIn: 'root',
})
export class TodoListEditService {
  constructor(private http: HttpClient) {}

  public addTodo(todo: Todo): void {
    this.http.post<Todo>(TODOS, todo).subscribe((content: Todo): void => {
      console.log(content);
    });
  }

  public removeTodo(todoId: number): void {
    this.http
      .delete<Todo>(TODOS + '/' + todoId)
      .subscribe((content: Todo): void => {
        console.log(content);
      });
  }

  public changeTodoCompletionState(todo: Todo): void {
    this.http
      .put<Todo>(TODOS + '/' + todo.id, todo)
      .subscribe((content: Todo): void => {
        console.log(content);
      });
  }
}
