import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap, tap } from "rxjs/operators";
import { BaseMenuItem, MenuItem } from "src/app/core";

import { Actions } from "@datorama/akita-ng-effects";
// ✨ New 👇
import {
  editMenuItemFormSubmitted,
  MenusQuery,
} from "src/app/core/state/menus";

@Component({
  selector: "app-edit-item",
  templateUrl: "./edit-item.component.html",
  styles: [
    `
      :host {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class EditItemComponent {
  menuItemId$ = this.activatedRoute.params.pipe(map((params) => params.id));

  // ✨ New 👇
  menuItem$ = this.menuItemId$.pipe(
    tap((id) => (this.id = id)),
    switchMap((id) => this.menusQuery.selectMenuItem(id))
  );

  private id: number | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private actions: Actions,
    // ✨ New 👇
    private menusQuery: MenusQuery
  ) {}

  cancel(): void {
    this.location.back();
  }

  submit(menu: BaseMenuItem): void {
    if (!this.id) {
      return;
    }
    this.actions.dispatch(
      editMenuItemFormSubmitted({
        menuItem: {
          ...menu,
          id: this.id.toString(),
        },
      })
    );
  }
}