import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Photo } from '../../../shared/types/photo';
import { EMPTY_PHOTO } from '../../const/empty-photo';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss',
})
export class PhotoComponent {
  @Input('photo') public photo: Photo = EMPTY_PHOTO;
}
