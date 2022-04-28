import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
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
  isAuthenticated$ = this.authService.isAuthenticated$;
  user$ = this.authService.user$;

  constructor(private authService: AuthService) {}
}
