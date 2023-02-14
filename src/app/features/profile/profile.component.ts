import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { UserState } from 'src/app/core';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
	user$ = this.store.select(UserState.user);

	constructor(private store: Store) {}
}
