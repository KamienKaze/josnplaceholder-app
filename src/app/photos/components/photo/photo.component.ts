import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Photo } from '../../../shared/types/photo';
import { EMPTY_PHOTO } from '../../const/empty-photo';
import { MatDialog } from '@angular/material/dialog';
import { PhotoWindowComponent } from '../photo-window/photo-window.component';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss',
})
export class PhotoComponent {
  @Input('photo') public photo: Photo = EMPTY_PHOTO;

  constructor(private dialog: MatDialog) {}

  public openPhoto(): void {
    this.dialog.open(PhotoWindowComponent, {
      data: { photoUrl: this.photo.url, photoTitle: this.photo.title },
    });
  }
}
