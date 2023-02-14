import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";

// ✨ New 👇
import { map } from "rxjs/operators";

// ✨ New 👇
import { environment } from "src/environments/environment";

// ✨ New 👇
import { UserStore, UserState } from "./user.store";

// ✨ New 👇
export const USER_ROLES = {
  MENU_ADMIN: "menu-admin",
};
@Injectable({ providedIn: "root" })
export class UserQuery extends Query<UserState> {
  selectUser$ = this.select("user");

  // ✨ New 👇
  selectIsLoggedIn$ = this.selectUser$.pipe(map((user) => !!user));

  // ✨ New 👇
  selectUserRoles$ = this.selectUser$.pipe(
    map((user) => user?.[`${environment.auth.authorizationParams.audience}/roles`] || undefined)
  );

  // ✨ New 👇
  selectIsAdmin$ = this.selectUserRoles$.pipe(
    map((userRoles) => userRoles?.includes(USER_ROLES.MENU_ADMIN))
  );

  constructor(protected store: UserStore) {
    super(store);
  }
}