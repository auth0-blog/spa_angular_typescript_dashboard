import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { MenuItem } from "../../models";

export interface MenusState {
  menus: MenuItem[];
}

export function createInitialState(): MenusState {
  return {
    menus: [],
  };
}

@StoreConfig({ name: "menus" })
@Injectable({ providedIn: "root" })
export class MenusStore extends Store<MenusState> {
  constructor() {
    super(createInitialState());
  }
}