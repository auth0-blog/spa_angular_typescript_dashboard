import { createAction, props } from "@datorama/akita-ng-effects";
import { User as Auth0User } from "@auth0/auth0-spa-js";

export const allNavbarActions = {
  loginFlowInitiated: createAction("[Navbar] Login Flow Initiated"),
  logoutFlowInitiated: createAction("[Navbar] Logout Flow Initiated"),
};

export const userChangedFromAuth0SDK = createAction(
  "[Auth0 SDK] User Changed",
  props<{ user: Auth0User | undefined }>()
);