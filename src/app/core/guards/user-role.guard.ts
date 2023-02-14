import { Injectable } from '@angular/core';
import {
	CanActivate,
	Router,
	ActivatedRouteSnapshot,
	RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserState } from '..';

@Injectable({ providedIn: 'root' })
export class UserRoleGuard implements CanActivate {
	constructor(private router: Router, private store: Store) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> {
		return this.store.select(UserState.userRoles).pipe(
			map((roles) => {
				if (roles && roles.includes(route?.data?.role)) {
					return true;
				}

				// redirect the user to home
				this.router.navigate(['/home']);
				return false;
			}),
			catchError(() => {
				// redirect the user to home
				this.router.navigate(['/home']);
				return of(false);
			})
		);
	}
}
