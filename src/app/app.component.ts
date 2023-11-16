import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './modules/material/material.module';
import { MatSidenav } from '@angular/material/sidenav';
import { UserListComponent } from './modules/users/components/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MaterialModule, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav | null = null;

  toggle() {
    this.sidenav?.toggle();
  }
}
