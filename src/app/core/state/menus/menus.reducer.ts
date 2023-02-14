import { Action, createReducer, on } from "@ngrx/store";
import * as MenusActions from "./menus.actions";
import { initialState, MenusState } from "./menus.state";

const menusReducer = createReducer(
  initialState,
  on(MenusActions.fetchMenuSuccess, (state, { menuItems }) => ({
    ...state,
    menuItems: menuItems,
  })),
  on(MenusActions.editMenuItemSuccess, (state, { menuItem }) => {
    const menuItemIndex = state.menuItems.findIndex(
      (item) => item.id === menuItem.id
    );
    const updatedMenuItems = [...state.menuItems];
    updatedMenuItems[menuItemIndex] = menuItem;
    return {
      ...state,
      menuItems: updatedMenuItems,
    };
  }),
  on(MenusActions.deleteMenuItemSuccess, (state, { menuId }) => {
    const menuItemIndex = state.menuItems.findIndex(
      (item) => item.id === menuId
    );
    const updatedMenuItems = [...state.menuItems];
    updatedMenuItems.splice(menuItemIndex, 1);
    return {
      ...state,
      menuItems: updatedMenuItems,
    };
  })
);

export function reducer(state: MenusState | undefined, action: Action) {
  return menusReducer(state, action);
}
