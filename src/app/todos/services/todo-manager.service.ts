import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../types/todo';
import { Subject } from 'rxjs';
import { response } from 'express';

const GET_All_TODOS: string = `https://jsonplaceholder.typicode.com/todos`;

@Injectable({
  providedIn: 'root',
})
export class TodoManagerService {
  public todo: Subject<Todo[]> = new Subject<Todo[]>();

  constructor(private http: HttpClient) {}

  public getClientTodos(userId: number): void {
    this.http
      .get<Todo[]>(GET_All_TODOS + '?userId=' + userId)
      .subscribe((response: Todo[]): void => {
        this.todo.next(response);
      });
  }
}
