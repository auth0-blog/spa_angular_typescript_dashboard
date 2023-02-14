import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectIsLoggedIn, selectUserDetails } from "src/app/core/state/user";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [
    `
      :host {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class HomeComponent {
  isAuthenticated$ = this.store.select(selectIsLoggedIn);
  user$ = this.store.select(selectUserDetails);

  constructor(private store: Store) {}
}
