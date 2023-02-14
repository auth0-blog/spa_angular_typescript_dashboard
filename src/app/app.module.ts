import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './shared';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { MenusState, UserState } from './core';

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
		NgxsModule.forRoot([MenusState, UserState], { developmentMode: true }),
		NgxsReduxDevtoolsPluginModule.forRoot()
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
