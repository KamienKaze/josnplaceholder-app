import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedUserManagerService } from '../../../shared/services/selected-user-manager.service';

@Component({
  selector: 'app-albums-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums-list.component.html',
  styleUrl: './albums-list.component.scss',
})
export class AlbumsListComponent {
  public selectedUserId: number = 0;
  constructor() {
    SelectedUserManagerService.selectedUserId.subscribe((next) => {
      this.selectedUserId = next;
    });
  }
}
