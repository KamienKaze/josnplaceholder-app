import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

const GET_ALL_USERS: string = `https://jsonplaceholder.typicode.com/users`;

@Injectable({
  providedIn: 'root',
})
export class UserManagerService {
  public users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public user: Subject<User> = new Subject<User>();

  constructor(private http: HttpClient) {
    this.http.get<User[]>(GET_ALL_USERS).subscribe((response: User[]): void => {
      this.users.next(response);
    });
  }

  public getUserById(userId: number): void {
    this.http
      .get<User>(GET_ALL_USERS + '/' + userId)
      .subscribe((response: User): void => {
        this.user.next(response);
      });
  }

  public addUserToDatabase(newUser: User): void {
    this.http
      .post<User>(GET_ALL_USERS, newUser)
      .subscribe((content: User): void => {
        console.log(content);
      });
  }

  public updateUserInDatabase(updatedUser: User): void {
    this.http
      .put<User>(GET_ALL_USERS + '/' + updatedUser.id, updatedUser)
      .subscribe((content: User): void => {
        console.log(content);
      });
  }
}
