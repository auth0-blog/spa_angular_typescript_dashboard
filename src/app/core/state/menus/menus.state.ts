import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import {
	State,
	Action,
	StateContext,
	Selector,
	createSelector
} from '@ngxs/store';
import { MenusStateModel } from './menus.model';
import { ApiService } from '../../services';
import { Menus } from './menus.actions';
import { MenuItem } from '../../models';
import { Location } from '@angular/common';

@State<MenusStateModel>({
	name: 'menus',
	defaults: {
		menuItems: []
	}
})
@Injectable()
export class MenusState {
	constructor(
		private router: Router,
		private location: Location,
		private zone: NgZone,
		private apiService: ApiService
	) {}

	@Action([Menus.AppLoaded, Menus.AddMenuItemSuccess])
	fetchMenu(ctx: StateContext<MenusStateModel>) {
		return this.apiService.getItems().pipe(
			map((menuItems: MenuItem[]) => {
				return ctx.dispatch(
					new Menus.FetchMenuSuccess({
						menuItems: menuItems
					})
				);
			}),
			catchError((error) => {
				return of(
					ctx.dispatch(
						new Menus.FetchMenuFailed({
							error: error
						})
					)
				);
			})
		);
	}

	@Action(Menus.FetchMenuSuccess)
	fetchMenuSuccess(
		ctx: StateContext<MenusStateModel>,
		action: Menus.FetchMenuSuccess
	) {
		const state = ctx.getState();
		ctx.setState({
			...state,
			menuItems: action.payload.menuItems
		});
	}

	@Action(Menus.AddMenuItemFormSubmitted)
	addMenuItem(
		ctx: StateContext<MenusStateModel>,
		action: Menus.AddMenuItemFormSubmitted
	) {
		return this.apiService.addItem(action.payload.menuItem).pipe(
			tap(() => {
				this.zone.run(() => {
					this.router.navigate(['/menu']);
				});
			}),
			map(() => {
				return ctx.dispatch(new Menus.AddMenuItemSuccess());
			}),
			catchError((error) => {
				return of(ctx.dispatch(new Menus.AddMenuItemFailed({ error: error })));
			})
		);
	}

	@Action(Menus.EditMenuItemFormSubmitted)
	editMenuItem(
		ctx: StateContext<MenusStateModel>,
		action: Menus.EditMenuItemFormSubmitted
	) {
		const menuItem = action.payload.menuItem;
		return this.apiService.updateItem(menuItem).pipe(
			tap(() => this.location.back()),
			map(() => {
				return ctx.dispatch(
					new Menus.EditMenuItemSuccess({
						menuItem: action.payload.menuItem
					})
				);
			}),
			catchError((error) => {
				return of(ctx.dispatch(new Menus.EditMenuItemFailed({ error: error })));
			})
		);
	}

	@Action(Menus.EditMenuItemSuccess)
	editMenuSuccess(
		ctx: StateContext<MenusStateModel>,
		action: Menus.EditMenuItemSuccess
	) {
		const state = ctx.getState();
		const menuItem = action.payload.menuItem;
		const menuItemIndex = state.menuItems.findIndex(
			(item) => item.id === menuItem.id
		);
		const updatedMenuItems = [...state.menuItems];
		updatedMenuItems[menuItemIndex] = menuItem;
		ctx.setState({
			...state,
			menuItems: updatedMenuItems
		});
	}

	@Action(Menus.DeleteMenuItemInitiated)
	deleteMenuItem(
		ctx: StateContext<MenusStateModel>,
		action: Menus.DeleteMenuItemInitiated
	) {
		const menuId = action.payload.menuId;
		return this.apiService.deleteItem(menuId).pipe(
			tap(() => {
				this.zone.run(() => {
					this.router.navigate(['/menu']);
				});
			}),
			map(() => {
				return ctx.dispatch(
					new Menus.DeleteMenuItemSuccess({ menuId: menuId })
				);
			}),
			catchError((error) => {
				return of(
					ctx.dispatch(new Menus.DeleteMenuItemFailed({ error: error }))
				);
			})
		);
	}

	@Action(Menus.DeleteMenuItemSuccess)
	deleteMenuSuccess(
		ctx: StateContext<MenusStateModel>,
		action: Menus.DeleteMenuItemSuccess
	) {
		const state = ctx.getState();
		const menuId = action.payload.menuId;
		const menuItemIndex = state.menuItems.findIndex(
			(item) => item.id === menuId
		);
		const updatedMenuItems = [...state.menuItems];
		updatedMenuItems.splice(menuItemIndex, 1);
		ctx.setState({
			...state,
			menuItems: updatedMenuItems
		});
	}

	@Selector()
	static menus(state: MenusStateModel) {
		return state;
	}

	@Selector()
	static menuItems(state: MenusStateModel) {
		return state.menuItems;
	}

	// dynamic selector with arguments
	static menuItem(id: string) {
		return createSelector([MenusState], (state: MenusStateModel) => {
			return state.menuItems.find((menuItem) => menuItem.id === id);
		});
	}
}
