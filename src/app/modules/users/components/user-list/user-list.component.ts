import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User } from '../../types/user';
import { UserManagerService } from '../../user-manager.service';
import { MaterialModule } from '../../../material/material.module';

const GET_ALL_USERS: string = `https://jsonplaceholder.typicode.com/users`;

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  public users: User[] = [];

  constructor(userManager: UserManagerService) {
    userManager.users.subscribe((next: User[]) => {
      this.users = next;
    });
  }
}
