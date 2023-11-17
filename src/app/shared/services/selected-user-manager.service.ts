import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedUserManagerService {
  public static selectedUserId: Subject<number> = new Subject<number>();

  public static selectUser(selectedUser: number): void {
    this.selectedUserId.next(selectedUser);
  }
}
