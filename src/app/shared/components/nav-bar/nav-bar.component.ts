import { Component } from "@angular/core";
import { Actions } from "@datorama/akita-ng-effects";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faHome, faUser, faUtensils } from "@fortawesome/free-solid-svg-icons";

// ✨ New 👇
import { allNavbarActions, UserQuery } from "src/app/core/state/user";

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

  // ✨ New 👇
  isAuthenticated$ = this.userQuery.selectIsLoggedIn$;

  // ✨ New 👇
  user$ = this.userQuery.selectUser$;

  navOptions: INavBarMenuLinkProps[] = [
    { to: "/home", label: "Home", icon: faHome },
    { to: "/menu", label: "Menu", icon: faUtensils },
  ];

  // ✨ New 👇
  constructor(private userQuery: UserQuery, private actions: Actions) {}

  loginWithRedirect(): void {
    this.actions.dispatch(allNavbarActions.loginFlowInitiated());
  }

  logout(): void {
    this.actions.dispatch(allNavbarActions.logoutFlowInitiated());
  }
}