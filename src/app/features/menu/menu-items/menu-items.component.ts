import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenusStateService, RolesService } from 'src/app/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styles: [
    `
      :host {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class MenuItemsComponent {
  menuItems$ = this.menusStateService.selectMenuItems$();
  isAdmin$ = this.rolesService.isAdmin$;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private menusStateService: MenusStateService,
    private rolesService: RolesService
  ) {
    this.menusStateService.fetchMenuItems();
  }

  addMenuItem(): void {
    this.router.navigate(['add'], { relativeTo: this.activatedRoute });
  }
}
