import { Injectable } from '@angular/core';
import { State, Action, StateContext, Store, Selector } from '@ngxs/store';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { UserStateModel } from './user.model';
import { User } from './user.actions';

export const USER_ROLES = {
	MENU_ADMIN: 'menu-admin'
};

@State<UserStateModel>({
	name: 'user',
	defaults: {
		userDetails: undefined
	}
})
@Injectable()
export class UserState {
	constructor(private store: Store, private authService: AuthService) {
		this.listenToUserChange();
	}

	@Action(User.UserChangedFromAuth0SDK)
	userChangedFromAuth0SDK(
		ctx: StateContext<UserStateModel>,
		actions: User.UserChangedFromAuth0SDK
	) {
		const state = ctx.getState();
		ctx.setState({
			...state,
			userDetails: actions.payload.user
		});
	}

	@Action(User.AllNavbarActions.LoginFlowInitiated)
	login() {
		this.authService.loginWithRedirect();
	}

	@Action(User.AllNavbarActions.LogoutFlowInitiated)
	logout() {
		this.authService.logout();
	}

	private listenToUserChange(): void {
		this.authService.user$.subscribe((user) => {
			this.store.dispatch(
				new User.UserChangedFromAuth0SDK({ user: user || undefined })
			);
		});
	}

	@Selector()
	static user(state: UserStateModel) {
		return state.userDetails;
	}

	@Selector()
	static isLoggedIn(state: UserStateModel) {
		return !!state.userDetails;
	}

	@Selector()
	static userRoles(state: UserStateModel) {
		return (
			state.userDetails?.[`${environment.auth.authorizationParams.audience}/roles`] || undefined
		);
	}

	@Selector()
	static isAdmin(state: UserStateModel) {
		return state.userDetails?.[`${environment.auth.authorizationParams.audience}/roles`]?.includes(
			USER_ROLES.MENU_ADMIN
		);
	}
}
