import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedUserDataService } from '../../../shared/services/selected-user-data.service';
import { Todo } from '../../../shared/types/todo';
import { TodoComponent } from '../todo/todo.component';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoComponent, MaterialModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  public todoList: Todo[] = [];

  constructor() {
    SelectedUserDataService.selectedUserTodos.subscribe(
      (next: Todo[]): void => {
        this.todoList = next;
      },
    );
  }
}
