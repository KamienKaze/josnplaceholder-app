import { Routes } from '@angular/router';
import { TO_DO_LIST_ROUTE } from './todos/routes';
import { ALBUM_LIST_ROUTE } from './albums/routes';

export const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  TO_DO_LIST_ROUTE,
  ALBUM_LIST_ROUTE,
];
