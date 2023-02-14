import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { selectMenuItems } from "src/app/core/state/menus";
import { selectIsAdmin } from "src/app/core/state/user";

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
  menuItems$ = this.store.select(selectMenuItems);
  isAdmin$ = this.store.select(selectIsAdmin);

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {}

  addMenuItem(): void {
    this.router.navigate(["add"], { relativeTo: this.activatedRoute });
  }
}
