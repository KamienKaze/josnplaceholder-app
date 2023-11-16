import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawerToggleManagerService {
  toggle: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  public toggleDrawer(isToggled: boolean): void {
    this.toggle.next(isToggled);
  }
}
