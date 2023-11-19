import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { MatSidenav } from '@angular/material/sidenav';
import { UserListComponent } from './users/components/user-list/user-list.component';
import { DrawerToggleManagerService } from './shared/services/drawer-toggle-manager.service';
import { AlbumsListComponent } from './albums/components/albums-list/albums-list.component';
import { SelectedUserDataService } from './shared/services/selected-user-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MaterialModule,
    UserListComponent,
    RouterLink,
    AlbumsListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('drawer') drawer: MatSidenav | null = null;

  public toggleDrawer(isToggled: boolean): void {
    this.drawer?.toggle(isToggled);
  }

  constructor(
    selectedUserData: SelectedUserDataService,
    drawerToggleManager: DrawerToggleManagerService,
    public router: Router,
  ) {
    drawerToggleManager.toggle.subscribe((next: boolean): void => {
      this.toggleDrawer(next);
    });
  }
}
