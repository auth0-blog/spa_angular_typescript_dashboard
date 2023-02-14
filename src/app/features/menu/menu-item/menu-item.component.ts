import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { map, switchMap } from "rxjs/operators";
import { MenusQuery } from "src/app/core/state/menus";

// ✨ New 👇
import { UserQuery } from "src/app/core/state/user";

@Component({
  selector: "app-menu-item",
  templateUrl: "./menu-item.component.html",
  styleUrls: ["./menu-item.component.scss"],
})
export class MenuItemComponent {
  menuItemId$ = this.activatedRoute.params.pipe(map((params) => params.id));

  menuItem$ = this.menuItemId$.pipe(
    switchMap((id) => this.menusQuery.selectMenuItem(id))
  );

  // ✨ New 👇
  isAdmin$ = this.userQuery.selectIsAdmin$;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    // ✨ New 👇
    private userQuery: UserQuery,
    private menusQuery: MenusQuery
  ) {}

  back(): void {
    this.location.back();
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(`${this.router.url}/${url}`);
  }
}