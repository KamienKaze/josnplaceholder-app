import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { PhotosManagerService } from '../../services/photos-manager.service';
import { Photo } from '../../../shared/types/photo';
import { PhotoComponent } from '../photo/photo.component';

@Component({
  selector: 'app-photos-list',
  standalone: true,
  imports: [CommonModule, PhotoComponent],
  templateUrl: './photos-list.component.html',
  styleUrl: './photos-list.component.scss',
})
export class PhotosListComponent {
  public photos: Photo[] = [];

  constructor(
    activatedRoute: ActivatedRoute,
    private photosManager: PhotosManagerService,
  ) {
    activatedRoute.params.subscribe((params: Params): void => {
      photosManager.photos.subscribe((next: Photo[]): void => {
        this.photos = next;
      });

      photosManager.getPhotosFromAlbum(params['id']);
    });
  }
}
