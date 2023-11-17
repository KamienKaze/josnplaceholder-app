import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User } from '../../types/user';
import { UserManagerService } from '../../services/user-manager.service';
import { MaterialModule } from '../../../material/material.module';
import { DrawerToggleManagerService } from '../../../shared/services/drawer-toggle-manager.service';
import { SelectedUserManagerService } from '../../../shared/services/selected-user-manager.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  public users: User[] = [];
  public buttonToggleGroupValue: number = 1;

  constructor(
    userManager: UserManagerService,
    private drawerToggleManager: DrawerToggleManagerService,
  ) {
    userManager.users.subscribe((next: User[]) => {
      this.users = next;
    });

    SelectedUserManagerService.selectUser(this.buttonToggleGroupValue);
  }

  public selectUser(selectedUser: number): void {
    SelectedUserManagerService.selectUser(selectedUser);
  }

  public toggleDrawer(): void {
    this.drawerToggleManager.toggleDrawer(false);
  }
}
