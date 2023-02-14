import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@datorama/akita-ng-effects";
import * as UserActions from "./user.actions";
import { UserStore } from "./user.store";
import { AuthService } from "@auth0/auth0-angular";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userStore: UserStore,
    private authService: AuthService
  ) {}

  // ✨ New 👇
  userChanged$ = createEffect(
    () =>
      this.authService.user$.pipe(
        map((user) =>
          UserActions.userChangedFromAuth0SDK({ user: user || undefined })
        )
      ),
    { dispatch: true }
  );

  // ✨ New 👇
  userChangedFromAuth0SDK$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.userChangedFromAuth0SDK),
        tap((action) => {
          this.userStore.update((state) => ({
            ...state,
            user: action.user,
          }));
        })
      ),
    { dispatch: false }
  );

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.allNavbarActions.loginFlowInitiated),
        tap(() => this.authService.loginWithRedirect())
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.allNavbarActions.logoutFlowInitiated),
        tap(() => this.authService.logout())
      ),
    { dispatch: false }
  );
}