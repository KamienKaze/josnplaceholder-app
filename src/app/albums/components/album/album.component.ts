import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Album } from '../../../shared/types/album';
import { EMPTY_ALBUM } from '../../const/empty-albym';
import { MaterialModule } from '../../../material/material.module';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterLink],
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss',
})
export class AlbumComponent {
  @Input('album') public album: Album = EMPTY_ALBUM;

  constructor(private dialog: MatDialog) {}
}
