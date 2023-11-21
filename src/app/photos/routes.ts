import { Route } from '@angular/router';
import { PhotosListComponent } from './components/photos-list/photos-list.component';

export const ALBUM_ROUTE: Route = {
  path: 'album/:id',
  component: PhotosListComponent,
};
