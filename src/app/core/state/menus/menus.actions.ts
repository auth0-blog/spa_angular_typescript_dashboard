import { createAction, props } from "@datorama/akita-ng-effects";
import { BaseMenuItem, MenuItem } from "../../models";

export const appLoaded = createAction("[App] App Loaded");

// ✨ New 👇
export const fetchMenuSuccess = createAction(
  "[Menu API] Fetch Menu Success",
  props<{ menuItems: MenuItem[] }>()
);

// ✨ New 👇
export const fetchMenuFailed = createAction(
  "[Menu API] Fetch Menu Failed",
  props<{ error: any }>()
);

export const addMenuItemFormSubmitted = createAction(
  "[Add Menu Page] Add Menu Item Form Submitted",
  props<{ menuItem: BaseMenuItem }>()
);

// ✨ New 👇
export const addMenuItemSuccess = createAction(
  "[Menu API] Add Menu Item Success"
);

// ✨ New 👇
export const addMenuItemFailed = createAction(
  "[Menu API] Add Menu Item Failed",
  props<{ error: any }>()
);

export const editMenuItemFormSubmitted = createAction(
  "[Edit Menu Page] Edit Menu Item Form Submitted",
  props<{ menuItem: MenuItem }>()
);

// ✨ New 👇
export const editMenuItemSuccess = createAction(
  "[Menu API] Edit Menu Item Success",
  props<{ menuItem: MenuItem }>()
);

// ✨ New 👇
export const editMenuItemFailed = createAction(
  "[Menu API] Edit Menu Item Failed",
  props<{ error: any }>()
);

export const deleteMenuItemInitiated = createAction(
  "[Delete Menu Page] Delete Menu Item Initiated",
  props<{ menuId: string }>()
);

// ✨ New 👇
export const deleteMenuItemSuccess = createAction(
  "[Menu API] Delete Menu Item Success",
  props<{ menuId: string }>()
);

// ✨ New 👇
export const deleteMenuItemFailed = createAction(
  "[Menu API] Delete Menu Item Failed",
  props<{ error: any }>()
);