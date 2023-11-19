import { Route } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';

export const TODO_LIST_ROUTE: Route = {
  path: 'todos',
  component: TodoListComponent,
};
