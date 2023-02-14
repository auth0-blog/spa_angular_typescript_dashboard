import { Component } from '@angular/core';
import { ViewStates } from 'src/app/shared';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
	styles: [
		`
			:host {
				width: 100%;
				height: 100%;
			}
		`
	]
})
export class NotFoundComponent {
	viewStates = ViewStates;
}
