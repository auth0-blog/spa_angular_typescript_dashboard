import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { BaseMenuItem, MenusStateService } from 'src/app/core';

const MenuItemPlaceholder: BaseMenuItem = {
	name: 'French Fries',
	price: 299,
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
	constructor(
		private location: Location,
		private menusStateService: MenusStateService
	) {}

	submit(menu: BaseMenuItem): void {
		this.menusStateService.addMenuItem(menu);
		this.location.back();
	}

	cancel(): void {
		this.location.back();
	}
}
