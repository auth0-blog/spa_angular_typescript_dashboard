import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map } from 'rxjs/operators';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
	constructor(
		private actions$: Actions<any>,
		private authService: AuthService
	) {}

	userChanged$ = createEffect(() =>
		this.authService.user$.pipe(
			map((userDetails) =>
				UserActions.userChangedFromAuth0SDK({
					userDetails: userDetails || undefined
				})
			)
		)
	);

	login$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(UserActions.allNavbarActions.loginFlowInitiated.type),
				tap(() => this.authService.loginWithRedirect())
			),
		{ dispatch: false }
	);

	logout$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(UserActions.allNavbarActions.logoutFlowInitiated.type),
				tap(() => this.authService.logout())
			),
		{ dispatch: false }
	);
}
