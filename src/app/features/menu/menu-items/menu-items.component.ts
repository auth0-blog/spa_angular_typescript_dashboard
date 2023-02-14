import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { MenusState, UserState } from 'src/app/core';

@Component({
	selector: 'app-menu-items',
	templateUrl: './menu-items.component.html',
	styles: [
		`
			:host {
				width: 100%;
				height: 100%;
			}
		`
	]
})
export class MenuItemsComponent {
	menuItems$ = this.store.select(MenusState.menuItems);
	isAdmin$ = this.store.select(UserState.isAdmin);

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private store: Store
	) {}

	addMenuItem(): void {
		this.router.navigate(['add'], { relativeTo: this.activatedRoute });
	}
}
