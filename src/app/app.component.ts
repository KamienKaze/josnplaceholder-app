import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { MaterialModule } from './material/material.module';
import { MatSidenav } from '@angular/material/sidenav';
import { UserListComponent } from './users/components/user-list/user-list.component';
import { DrawerToggleManagerService } from './shared/services/drawer-toggle-manager.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MaterialModule,
    UserListComponent,
    RouterLink,
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
    drawerToggleManager: DrawerToggleManagerService,
    public router: Router,
  ) {
    drawerToggleManager.toggle.subscribe((next: boolean): void => {
      this.toggleDrawer(next);
    });
  }
}
