import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User } from '../../types/user';
import { MaterialModule } from '../../../material/material.module';
import { UserManagerService } from '../../services/user-manager.service';
import { DrawerToggleManagerService } from '../../../shared/services/drawer-toggle-manager.service';
import { SelectedUserManagerService } from '../../../shared/services/selected-user-manager.service';
import { MatDialog } from '@angular/material/dialog';
import { UserEditWindowComponent } from '../user-edit-window/user-edit-window.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  public users: User[] = [];
  public buttonToggleGroupValue: number = 0;

  constructor(
    private userManager: UserManagerService,
    private drawerToggleManager: DrawerToggleManagerService,
    private dialog: MatDialog,
  ) {
    userManager.users.subscribe((next: User[]): void => {
      this.users = next;
    });

    SelectedUserManagerService.selectedUserId.subscribe(
      (next: number): void => {
        this.buttonToggleGroupValue = next;
      },
    );
  }

  public selectUser(selectedUser: number): void {
    SelectedUserManagerService.selectUser(selectedUser);
  }

  public toggleDrawer(toggle: boolean): void {
    this.drawerToggleManager.toggleDrawer(toggle);
  }

  public openUserEdit(userId: number): void {
    this.dialog.open(UserEditWindowComponent, { data: { userId: userId } });
  }
}
