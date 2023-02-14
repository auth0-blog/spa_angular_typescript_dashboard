import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { map } from "rxjs/operators";
import { MenusState, MenusStore } from "./menus.store";

@Injectable({ providedIn: "root" })
export class MenusQuery extends Query<MenusState> {
  selectMenuItems$ = this.select("menus");

  constructor(protected store: MenusStore) {
    super(store);
  }

  // ✨ New 👇
  selectMenuItem(id: string) {
    return this.selectMenuItems$.pipe(
      map((menuItems) => menuItems.find((menuItem) => menuItem.id === id))
    );
  }
}