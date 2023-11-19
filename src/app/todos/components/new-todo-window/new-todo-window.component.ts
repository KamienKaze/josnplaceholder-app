import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EMPTY_USER } from '../../../users/const/empty-user';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-new-todo-window',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './new-todo-window.component.html',
  styleUrl: './new-todo-window.component.scss',
})
export class NewTodoWindowComponent {
  constructor() {}

  protected readonly EMPTY_USER = EMPTY_USER;
}
