import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { SelectedUserManagerService } from './selected-user-manager.service';
import { Todo } from '../types/todo';
import { Album } from '../types/album';

const TODOS: string = 'https://jsonplaceholder.typicode.com/todos';
const ALBUMS: string = 'https://jsonplaceholder.typicode.com/albums';

@Injectable({
  providedIn: 'root',
})
export class SelectedUserDataService {
  public static selectedUserTodos: BehaviorSubject<Todo[]> =
    new BehaviorSubject<Todo[]>([]);
  public static selectedUserAlbums: BehaviorSubject<Album[]> =
    new BehaviorSubject<Album[]>([]);

  constructor(private http: HttpClient) {
    SelectedUserManagerService.selectedUserId.subscribe(
      (next: number): void => {
        this.getUserData(next);
      },
    );
  }

  private getUserData(userId: number): void {
    this.http
      .get<Todo[]>(TODOS + '/?userId=' + userId)
      .subscribe((response: Todo[]): void => {
        SelectedUserDataService.selectedUserTodos.next(response);
      });

    this.http
      .get<Album[]>(ALBUMS + '/?userId=' + userId)
      .subscribe((response: Album[]): void => {
        SelectedUserDataService.selectedUserAlbums.next(response);
      });
  }
}
