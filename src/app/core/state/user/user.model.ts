import { User as Auth0User } from '@auth0/auth0-spa-js';

export interface UserStateModel {
	userDetails: Auth0User | undefined;
}
