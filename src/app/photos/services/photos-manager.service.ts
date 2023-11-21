import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Photo } from '../../shared/types/photo';
import { response } from 'express';

const PHOTOS: string = 'https://jsonplaceholder.typicode.com/photos';

@Injectable({
  providedIn: 'root',
})
export class PhotosManagerService {
  public photos: BehaviorSubject<Photo[]> = new BehaviorSubject<Photo[]>([]);

  constructor(private http: HttpClient) {}

  public getPhotosFromAlbum(albumId: number): void {
    this.http
      .get<Photo[]>(PHOTOS + '?albumId=' + albumId)
      .subscribe((response: Photo[]) => {
        this.photos.next(response);
      });
  }
}
