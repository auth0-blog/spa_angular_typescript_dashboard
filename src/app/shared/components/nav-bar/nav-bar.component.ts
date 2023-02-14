import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngxs/store';
import { User, UserState } from 'src/app/core';

export interface INavBarMenuLinkProps {
	to: string;
	icon: IconDefinition;
	label: string;
}

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
	faUser = faUser;
	isAuthenticated$ = this.store.select(UserState.isLoggedIn);
	user$ = this.store.select(UserState.user);

	navOptions: INavBarMenuLinkProps[] = [
		{ to: '/home', label: 'Home', icon: faHome },
		{ to: '/menu', label: 'Menu', icon: faUtensils }
	];

	constructor(private store: Store) {}

	loginWithRedirect(): void {
		this.store.dispatch(new User.AllNavbarActions.LoginFlowInitiated());
	}

	logout(): void {
		this.store.dispatch(new User.AllNavbarActions.LogoutFlowInitiated());
	}
}
