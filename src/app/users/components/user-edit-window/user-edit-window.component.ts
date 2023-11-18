import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UserManagerService } from '../../services/user-manager.service';
import { User } from '../../types/user';
import { EMPTY_USER } from '../../const/empty-user';

@Component({
  selector: 'app-user-edit-window',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './user-edit-window.component.html',
  styleUrl: './user-edit-window.component.scss',
})
export class UserEditWindowComponent {
  public user: User = EMPTY_USER;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { userId: number },
    private userManager: UserManagerService,
  ) {
    userManager.getUserById(data.userId);

    userManager.user.subscribe((next: User): void => {
      this.user = next;
    });
  }

  protected readonly EMPTY_USER = EMPTY_USER;
}
