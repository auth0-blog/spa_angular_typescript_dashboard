import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { UserState } from 'src/app/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styles: [
		`
			:host {
				width: 100%;
				height: 100%;
			}
		`
	]
})
export class HomeComponent {
	isAuthenticated$ = this.store.select(UserState.isLoggedIn);
	user$ = this.store.select(UserState.user);

	constructor(private store: Store) {}
}
