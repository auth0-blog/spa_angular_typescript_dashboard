import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MenusState } from "./menus.state";

export const selectMenus = createFeatureSelector<MenusState>("menus");

export const selectMenuItems = createSelector(
  selectMenus,
  (state: MenusState) => state.menuItems
);

export const selectMenuItem = (props: { id: string }) =>
  createSelector(selectMenuItems, (menuItems) =>
    menuItems.find((menuItem) => menuItem.id === props.id)
  );
