import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MenusQuery } from "src/app/core/state/menus";

// ✨ New 👇
import { UserQuery } from "src/app/core/state/user";

@Component({
  selector: "app-menu-items",
  templateUrl: "./menu-items.component.html",
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
  menuItems$ = this.menuQuery.selectMenuItems$;

  // ✨ New 👇
  isAdmin$ = this.userQuery.selectIsAdmin$;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    // ✨ New 👇
    private userQuery: UserQuery,
    private menuQuery: MenusQuery
  ) {}

  addMenuItem(): void {
    this.router.navigate(["add"], { relativeTo: this.activatedRoute });
  }
}