import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListEditService } from '../../services/todo-list-edit.service';
import { Todo } from '../../../shared/types/todo';
import { EMPTY_TODO } from '../../const/empty-todo';
import { MaterialModule } from '../../../material/material.module';
import { SelectedUserManagerService } from '../../../shared/services/selected-user-manager.service';

@Component({
  selector: 'app-new-todo-window',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './new-todo-window.component.html',
  styleUrl: './new-todo-window.component.scss',
})
export class NewTodoWindowComponent {
  public inputField: string = '';
  private selectedUser: number = 0;

  constructor(private todoListEdit: TodoListEditService) {
    SelectedUserManagerService.selectedUserId.subscribe(
      (next: number): void => {
        this.selectedUser = next;
      },
    );
  }

  public addTodo(): void {
    let newTodo: Todo = EMPTY_TODO;
    newTodo.title = this.inputField;
    newTodo.userId = this.selectedUser;
    this.todoListEdit.addTodo(newTodo);
  }
}
