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
  @Input('text') public text: string = '';
}
