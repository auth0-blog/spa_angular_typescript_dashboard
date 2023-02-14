import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './shared';
import { environment } from 'src/environments/environment';
import { reducers, metaReducers } from './core/state';
import { UserEffects } from './core/state/user';
import { MenusEffects } from './core/state/menus';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		AuthModule.forRoot({
			...environment.auth,
			cacheLocation: 'localstorage',
			httpInterceptor: {
				allowedList: [
					`${environment.serverUrl}/api/menu/items`,
					`${environment.serverUrl}/api/menu/items/*`
				]
			}
		}),
		AppRoutingModule,
		NavBarModule,

		// NgRx
		StoreModule.forRoot(reducers, {
			metaReducers
		}),
		EffectsModule.forRoot([MenusEffects, UserEffects]),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production
		})
	],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthHttpInterceptor,
			multi: true
		}
	]
})
export class AppModule {}
