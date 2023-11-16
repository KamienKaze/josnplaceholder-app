import { Injectable } from '@angular/core';
import { User } from './types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const GET_ALL_USERS: string = `https://jsonplaceholder.typicode.com/users`;

@Injectable({
  providedIn: 'root',
})
export class UserManagerService {
  public users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<User[]>(GET_ALL_USERS).subscribe((response: User[]) => {
      this.users.next(response);
    });
  }
}
