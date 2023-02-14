import { Action, createReducer, on } from "@ngrx/store";
import * as UserActions from "./user.actions";
import { initialState, UserState } from "./user.state";

const userReducer = createReducer(
  initialState,
  on(UserActions.userChangedFromAuth0SDK, (state, { userDetails }) => ({
    ...state,
    userDetails: userDetails,
  }))
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
