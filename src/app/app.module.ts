import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AkitaNgEffectsModule } from "@datorama/akita-ng-effects";
import { AkitaNgDevtools } from "@datorama/akita-ngdevtools";
import { AuthHttpInterceptor, AuthModule } from "@auth0/auth0-angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarModule } from "./shared";
import { environment } from "src/environments/environment";
import { MenusEffects } from "./core/state/menus";

// ✨ New 👇
import { UserEffects } from "./core/state/user";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule.forRoot({
      ...environment.auth,
      httpInterceptor: {
        allowedList: [
          `${environment.serverUrl}/api/menu/items`,
          `${environment.serverUrl}/api/menu/items/*`,
        ],
      },
    }),
    AppRoutingModule,
    NavBarModule,

    // ✨ Update this 👇
    AkitaNgEffectsModule.forRoot([MenusEffects, UserEffects]),
    environment.production
      ? []
      : AkitaNgDevtools.forRoot({
          maxAge: 25,
        }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {}