import { MenusState } from "./menus";
import { UserState } from "./user";

export interface State {
  menus: MenusState;
  user: UserState;
}
