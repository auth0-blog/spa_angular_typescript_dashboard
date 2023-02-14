import { Component, inject } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@auth0/auth0-angular';

export interface INavBarMenuLinkProps {
  to: string;
  icon: IconDefinition;
  label: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  authService = inject(AuthService);

  faUser = faUser;
  isAuthenticated$ = this.authService.isAuthenticated$;
  user$ = this.authService.user$;


  navOptions: INavBarMenuLinkProps[] = [
    { to: '/home', label: 'Home', icon: faHome },
    { to: '/menu', label: 'Menu', icon: faUtensils },
  ];

  loginWithRedirect(): void {
    this.authService.loginWithRedirect();
  }

  logout(): void {
    this.authService.logout();
  }
}
