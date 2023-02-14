import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { map, switchMap } from "rxjs/operators";

import { Actions } from "@datorama/akita-ng-effects";
// ✨ New 👇
import { deleteMenuItemInitiated, MenusQuery } from "src/app/core/state/menus";

@Component({
  selector: "app-delete-item",
  templateUrl: "./delete-item.component.html",
  styleUrls: ["./delete-item.component.scss"],
})
export class DeleteItemComponent {
  menuItemId$ = this.activatedRoute.params.pipe(map((params) => params.id));

  // ✨ New 👇
  menuItem$ = this.menuItemId$.pipe(
    switchMap((id) => this.menusQuery.selectMenuItem(id))
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router,
    private actions: Actions,
    // ✨ New 👇
    private menusQuery: MenusQuery
  ) {}

  deleteMenuItem(id: string): void {
    this.actions.dispatch(deleteMenuItemInitiated({ menuId: id }));
  }

  cancel(): void {
    this.back();
  }

  back(): void {
    this.location.back();
  }

  navigateHome(): void {
    this.router.navigate(["/menu"]);
  }
}