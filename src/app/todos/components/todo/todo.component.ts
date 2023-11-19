import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input('completed') public completed: boolean = false;
  @Input('title') public title: string = 'New Task';
  @Input('todoId') public id: number = 0;
}
