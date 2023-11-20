import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumComponent } from '../album/album.component';
import { SelectedUserDataService } from '../../../shared/services/selected-user-data.service';
import { Album } from '../../../shared/types/album';

@Component({
  selector: 'app-albums-list',
  standalone: true,
  imports: [CommonModule, AlbumComponent],
  templateUrl: './albums-list.component.html',
  styleUrl: './albums-list.component.scss',
})
export class AlbumsListComponent {
  public albumList: Album[] = [];

  constructor() {
    SelectedUserDataService.selectedUserAlbums.subscribe(
      (next: Album[]): void => {
        this.albumList = next;
      },
    );
  }
}
