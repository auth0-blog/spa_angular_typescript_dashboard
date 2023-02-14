import { Injectable } from "@angular/core";
// ✨ New 👇
import { Location } from "@angular/common";
// ✨ New 👇
import { Router } from "@angular/router";
import { of } from "rxjs";
import { map, tap, switchMap, catchError } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@datorama/akita-ng-effects";
import { ApiService } from "../../services";
import * as MenusActions from "./menus.actions";
import { MenusStore } from "./menus.store";

@Injectable()
export class MenusEffects {
  constructor(
    // ✨ New 👇
    private router: Router,
    // ✨ New 👇
    private location: Location,
    private actions$: Actions,
    private menusStore: MenusStore,
    private apiService: ApiService
  ) {}

  fetchMenu$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MenusActions.appLoaded, MenusActions.addMenuItemSuccess),
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
      ),
    { dispatch: true }
  );

  fetchMenuSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MenusActions.fetchMenuSuccess),
        tap((action) => {
          this.menusStore.update((state) => ({
            ...state,
            menus: action.menuItems,
          }));
        })
      ),
    { dispatch: false }
  );

  // ✨ New 👇
  addMenu$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MenusActions.addMenuItemFormSubmitted),
        switchMap((action) =>
          this.apiService.addItem(action.menuItem).pipe(
            tap(() => this.router.navigate(["/menu"])),
            map(() => MenusActions.addMenuItemSuccess()),
            catchError((error) =>
              of(MenusActions.addMenuItemFailed({ error: error }))
            )
          )
        )
      ),
    { dispatch: true }
  );

  // ✨ New 👇
  editMenu$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MenusActions.editMenuItemFormSubmitted),
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
      ),
    { dispatch: true }
  );

  // ✨ New 👇
  editMenuSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MenusActions.editMenuItemSuccess),
        tap((action) => {
          const menuItem = action.menuItem;
          const menuItems = this.menusStore.getValue().menus;
          const menuItemIndex = menuItems.findIndex(
            (item) => item.id === menuItem.id
          );
          const updatedMenuItems = [...menuItems];
          updatedMenuItems[menuItemIndex] = menuItem;
          this.menusStore.update((state) => ({
            ...state,
            menus: updatedMenuItems,
          }));
        })
      ),
    { dispatch: false }
  );

  // ✨ New 👇
  deleteMenu$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MenusActions.deleteMenuItemInitiated),
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
      ),
    { dispatch: true }
  );

  // ✨ New 👇
  deleteMenuSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MenusActions.deleteMenuItemSuccess),
        tap((action) => {
          const menuId = action.menuId;
          const menuItems = this.menusStore.getValue().menus;
          const menuItemIndex = menuItems.findIndex(
            (item) => item.id === menuId
          );
          const updatedMenuItems = [...menuItems];
          updatedMenuItems.splice(menuItemIndex, 1);
          this.menusStore.update((state) => ({
            ...state,
            menus: updatedMenuItems,
          }));
        })
      ),
    { dispatch: false }
  );
}