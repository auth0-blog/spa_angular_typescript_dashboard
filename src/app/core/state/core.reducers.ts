import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { State } from "./core.state";
import * as MenusReducer from "./menus/menus.reducer";
import * as UserReducer from "./user/user.reducer";

export const reducers: ActionReducerMap<State> = {
  menus: MenusReducer.reducer,
  user: UserReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
