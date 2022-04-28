import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap, tap } from "rxjs/operators";
import { BaseMenuItem, MenusStateService } from "src/app/core";

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
  menuItem$ = this.menuItemId$.pipe(
    tap((id) => (this.id = id)),
    switchMap((id) => this.menusStateService.selectMenuItem$(id))
  );

  private id: number | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private menusStateService: MenusStateService
  ) {}

  cancel(): void {
    this.location.back();
  }

  submit(menu: BaseMenuItem): void {
    if (!this.id) {
      return;
    }
    this.menusStateService.editMenuItem({
      ...menu,
      id: this.id.toString(),
    });
    this.location.back();
  }
}
