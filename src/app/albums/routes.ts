import { Route } from '@angular/router';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';

export const ALBUM_LIST_ROUTE: Route = {
  path: 'albums',
  component: AlbumsListComponent,
};
