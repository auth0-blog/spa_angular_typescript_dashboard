import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

// ✨ New 👇
import { UserQuery } from "../state/user";

@Injectable({ providedIn: "root" })
export class UserRoleGuard implements CanActivate {
  constructor(
    private router: Router,
    // ✨ New 👇
    private userQuery: UserQuery
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // ✨ Update this 👇
    return this.userQuery.selectUserRoles$.pipe(
      map((roles) => {
        if (roles && roles.includes(route?.data?.role)) {
          return true;
        }

        // redirect the user to home
        this.router.navigate(["/home"]);
        return false;
      }),
      catchError((err) => {
        // redirect the user to home
        this.router.navigate(["/home"]);
        return of(false);
      })
    );
  }
}