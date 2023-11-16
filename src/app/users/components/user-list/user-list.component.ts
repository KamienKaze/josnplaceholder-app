import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User } from '../../types/user';
import { UserManagerService } from '../../services/user-manager.service';
import { MaterialModule } from '../../../material/material.module';
import { DrawerToggleManagerService } from '../../../shared/services/drawer-toggle-manager.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  public users: User[] = [];

  constructor(
    userManager: UserManagerService,
    private drawerToggleManager: DrawerToggleManagerService,
  ) {
    userManager.users.subscribe((next: User[]) => {
      this.users = next;
    });
  }

  public toggleDrawer(): void {
    this.drawerToggleManager.toggleDrawer(false);
  }
}
