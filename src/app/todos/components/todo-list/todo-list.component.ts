import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedUserManagerService } from '../../../shared/services/selected-user-manager.service';
import { TodoManagerService } from '../../services/todo-manager.service';
import { Todo } from '../../types/todo';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  public selectedUserId: number = 0;

  public todos: Todo[] = [];

  constructor(todoManager: TodoManagerService) {
    todoManager.todo.subscribe((next: Todo[]): void => {
      this.todos = next;
    });

    SelectedUserManagerService.selectedUserId.subscribe((next) => {
      this.selectedUserId = next;
      todoManager.getClientTodos(this.selectedUserId);
    });
  }
}
