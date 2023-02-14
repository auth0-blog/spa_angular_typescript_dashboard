import { BaseMenuItem, MenuItem } from '../../models';

export namespace Menus {
	export class AppLoaded {
		static readonly type = '[App] App Loaded';
	}
	export class FetchMenuSuccess {
		static readonly type = '[Menu API] Fetch Menu Success';
		constructor(public payload: { menuItems: MenuItem[] }) {}
	}

	export class FetchMenuFailed {
		static readonly type = '[Menu API] Fetch Menu Failed';
		constructor(public payload: { error: any }) {}
	}

	export class AddMenuItemFormSubmitted {
		static readonly type = '[Add Menu Page] Add Menu Item Form Submitted';
		constructor(public payload: { menuItem: BaseMenuItem }) {}
	}

	export class AddMenuItemSuccess {
		static readonly type = '[Menu API] Add Menu Item Success';
	}

	export class AddMenuItemFailed {
		static readonly type = '[Menu API] Add Menu Item Failed';
		constructor(public payload: { error: any }) {}
	}

	export class EditMenuItemFormSubmitted {
		static readonly type = '[Edit Menu Page] Edit Menu Item Form Submitted';
		constructor(public payload: { menuItem: MenuItem }) {}
	}

	export class EditMenuItemSuccess {
		static readonly type = '[Menu API] Edit Menu Item Success';
		constructor(public payload: { menuItem: MenuItem }) {}
	}

	export class EditMenuItemFailed {
		static readonly type = '[Menu API] Edit Menu Item Failed';
		constructor(public payload: { error: any }) {}
	}

	export class DeleteMenuItemInitiated {
		static readonly type = '[Delete Menu Page] Delete Menu Item Initiated';
		constructor(public payload: { menuId: string }) {}
	}

	export class DeleteMenuItemSuccess {
		static readonly type = '[Menu API] Delete Menu Item Success';
		constructor(public payload: { menuId: string }) {}
	}

	export class DeleteMenuItemFailed {
		static readonly type = '[Menu API] Delete Menu Item Failed';
		constructor(public payload: { error: any }) {}
	}
}
