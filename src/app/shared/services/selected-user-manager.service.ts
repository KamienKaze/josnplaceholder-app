import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedUserManagerService {
  public static selectedUserId: BehaviorSubject<number> =
    new BehaviorSubject<number>(1);

  public static selectUser(selectedUser: number): void {
    this.selectedUserId.next(selectedUser);
  }
}
