import { ApplicationRef, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { appLoaded } from './core/state/menus';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'spa-angular-typescript-dashboard';
	constructor(private store: Store, private appRef: ApplicationRef) {
		this.appRef.isStable.pipe(first((stable) => stable)).subscribe(() => {
			this.store.dispatch(appLoaded());
		});
	}
}
