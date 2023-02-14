import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { BaseMenuItem } from 'src/app/core';
import { Store } from '@ngrx/store';
import { addMenuItemFormSubmitted } from 'src/app/core/state/menus';

const MenuItemPlaceholder: BaseMenuItem = {
	name: 'French Fries',
	price: 2.99,
	tagline: 'Crispy goodness',
	description:
		'A plate of light and crispy French fries using Idaho potatoes and peanut oil',
	image:
		'https://as2.ftcdn.net/jpg/02/13/18/09/500_F_213180964_DfqvRIHj0D3t9duYUROXuQ011AgVJIaM.jpg',
	calories: 410,
	category: 'sides'
};

@Component({
	selector: 'app-add-item',
	templateUrl: './add-item.component.html',
	styles: [
		`
			:host {
				width: 100%;
				height: 100%;
			}
		`
	]
})
export class AddItemComponent {
	menuItem = MenuItemPlaceholder;
	constructor(private location: Location, private store: Store) {}

	submit(menu: BaseMenuItem): void {
		this.store.dispatch(
			addMenuItemFormSubmitted({
				menuItem: menu
			})
		);
	}

	cancel(): void {
		this.location.back();
	}
}
