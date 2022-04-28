import { Component, Input } from '@angular/core';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

export interface IMenuItemCardConfig {
	id: string;
	name: string;
	image: string;
	tagline: string;
	category: string;
}

@Component({
	selector: 'app-menu-item-card',
	templateUrl: './menu-item-card.component.html',
	styleUrls: ['./menu-item-card.component.scss']
})
export class MenuItemCardComponent {
	@Input() config!: IMenuItemCardConfig;
	faUtensils = faUtensils;
}
