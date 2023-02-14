import { MenuItem } from "../../models";

export interface MenusState {
  menuItems: MenuItem[];
}

export const initialState: MenusState = {
  menuItems: [],
};
