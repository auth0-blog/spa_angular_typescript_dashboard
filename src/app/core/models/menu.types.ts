export interface BaseMenuItem {
	[key: string]: string | number;
	name: string;
	price: number;
	tagline: string;
	description: string;
	image: string;
	calories: number;
	category: string;
}

export interface MenuItem extends BaseMenuItem {
	id: string;
}

export interface MenuItems {
	[key: string]: MenuItem;
}

export interface MenuError {
	status: number;
	message: string;
}

export enum FetchState {
	FETCHING = 'FETCHING',
	FETCHED = 'FETCHED',
	FETCH_ERROR = 'FETCH_ERROR',
	FETCH_NOT_FOUND = 'FETCH_NOT_FOUND'
}
