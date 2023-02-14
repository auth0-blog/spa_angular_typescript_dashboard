import { Component } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faHome, faUser, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import {
  allNavbarActions,
  selectIsLoggedIn,
  selectUserDetails,
} from "src/app/core/state/user";

export interface INavBarMenuLinkProps {
  to: string;
  icon: IconDefinition;
  label: string;
}

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent {
  faUser = faUser;
  isAuthenticated$ = this.store.select(selectIsLoggedIn);
  user$ = this.store.select(selectUserDetails);

  navOptions: INavBarMenuLinkProps[] = [
    { to: "/home", label: "Home", icon: faHome },
    { to: "/menu", label: "Menu", icon: faUtensils },
  ];

  constructor(private store: Store) {}

  loginWithRedirect(): void {
    this.store.dispatch(allNavbarActions.loginFlowInitiated());
  }

  logout(): void {
    this.store.dispatch(allNavbarActions.logoutFlowInitiated());
  }
}
