import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-photo-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-window.component.html',
  styleUrl: './photo-window.component.scss',
})
export class PhotoWindowComponent {
  public photoTitle: string = '';
  public photoUrl: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { photoUrl: string; photoTitle: string },
  ) {
    this.photoTitle = data.photoTitle;
    this.photoUrl = data.photoUrl;
  }
}
