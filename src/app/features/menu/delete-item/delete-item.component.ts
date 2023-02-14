import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Menus, MenusState } from 'src/app/core';
import { Store } from '@ngxs/store';

@Component({
	selector: 'app-delete-item',
	templateUrl: './delete-item.component.html',
	styleUrls: ['./delete-item.component.scss']
})
export class DeleteItemComponent {
	menuItemId$ = this.activatedRoute.params.pipe(map((params) => params.id));

	menuItem$ = this.menuItemId$.pipe(
		switchMap((id) => this.store.select(MenusState.menuItem(id)))
	);

	constructor(
		private activatedRoute: ActivatedRoute,
		private location: Location,
		private router: Router,
		private store: Store
	) {}

	deleteMenuItem(id: string): void {
		this.store.dispatch(
			new Menus.DeleteMenuItemInitiated({
				menuId: id
			})
		);
	}

	cancel(): void {
		this.back();
	}

	back(): void {
		this.location.back();
	}

	navigateHome(): void {
		this.router.navigate(['/menu']);
	}
}
