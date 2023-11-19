import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { Todo } from '../../../shared/types/todo';
import { TodoListEditService } from '../../services/todo-list-edit.service';

const EMPTY_TODO: Todo = {
  id: 0,
  userId: 0,
  title: '',
  completed: false,
};

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input('todo') public todo: Todo = EMPTY_TODO;

  constructor(private todoListEdit: TodoListEditService) {}

  public removeThisTodo(): void {
    this.todoListEdit.removeTodo(this.todo.id);
  }

  public updateThisTodo(): void {
    this.todoListEdit.changeTodoCompletionState(this.todo);
  }
}
