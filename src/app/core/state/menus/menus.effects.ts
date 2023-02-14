import { Location } from "@angular/common";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError, tap } from "rxjs/operators";
import { ApiService } from "../../services";
import * as MenusActions from "./menus.actions";

@Injectable()
export class MenusEffects {
  constructor(
    private router: Router,
    private actions$: Actions<any>,
    private apiService: ApiService,
    private location: Location
  ) {}

  fetchMenus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MenusActions.appLoaded.type, MenusActions.addMenuItemSuccess),
      switchMap(() =>
        this.apiService.getItems().pipe(
          map((menuItems) =>
            MenusActions.fetchMenuSuccess({ menuItems: menuItems })
          ),
          catchError((error) =>
            of(MenusActions.fetchMenuFailed({ error: error }))
          )
        )
      )
    )
  );

  addMenu$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MenusActions.addMenuItemFormSubmitted.type),
      switchMap((action) =>
        this.apiService.addItem(action.menuItem).pipe(
          tap(() => this.router.navigate(["/menu"])),
          map(() => MenusActions.addMenuItemSuccess()),
          catchError((error) =>
            of(MenusActions.addMenuItemFailed({ error: error }))
          )
        )
      )
    )
  );

  editMenu$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MenusActions.editMenuItemFormSubmitted.type),
      switchMap((action) =>
        this.apiService.updateItem(action.menuItem).pipe(
          tap(() => this.location.back()),
          map(() =>
            MenusActions.editMenuItemSuccess({ menuItem: action.menuItem })
          ),
          catchError((error) =>
            of(MenusActions.editMenuItemFailed({ error: error }))
          )
        )
      )
    )
  );

  deleteMenu$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MenusActions.deleteMenuItemInitiated.type),
      switchMap((action) =>
        this.apiService.deleteItem(action.menuId).pipe(
          tap(() => this.router.navigate(["/menu"])),
          map(() =>
            MenusActions.deleteMenuItemSuccess({ menuId: action.menuId })
          ),
          catchError((error) =>
            of(MenusActions.deleteMenuItemFailed({ error: error }))
          )
        )
      )
    )
  );
}
