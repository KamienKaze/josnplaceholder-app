import { TodoListComponent } from './components/todo-list/todo-list.component';
import { Route } from '@angular/router';

export const TO_DO_LIST_ROUTE: Route = {
  path: 'todos',
  component: TodoListComponent,
};
