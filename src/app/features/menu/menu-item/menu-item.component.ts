import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { map, switchMap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { selectMenuItem } from "src/app/core/state/menus";
import { selectIsAdmin } from "src/app/core/state/user";

@Component({
  selector: "app-menu-item",
  templateUrl: "./menu-item.component.html",
  styleUrls: ["./menu-item.component.scss"],
})
export class MenuItemComponent {
  menuItemId$ = this.activatedRoute.params.pipe(map((params) => params.id));
  menuItem$ = this.menuItemId$.pipe(
    switchMap((id) => this.store.select(selectMenuItem({ id: id })))
  );
  isAdmin$ = this.store.select(selectIsAdmin);

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private store: Store
  ) {}

  back(): void {
    this.location.back();
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(`${this.router.url}/${url}`);
  }
}
