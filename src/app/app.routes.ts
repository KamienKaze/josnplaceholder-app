import { Routes } from '@angular/router';
import { ALBUM_LIST_ROUTE } from './albums/routes';
import { TODO_LIST_ROUTE } from './todos/routes';
import { ALBUM_ROUTE } from './photos/routes';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todos' },
  ALBUM_LIST_ROUTE,
  TODO_LIST_ROUTE,
  ALBUM_ROUTE,
];
