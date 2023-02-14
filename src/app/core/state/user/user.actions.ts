import { User as Auth0User } from '@auth0/auth0-spa-js';

export namespace User {
	export namespace AllNavbarActions {
		export class LoginFlowInitiated {
			static readonly type = '[Navbar] Login Flow Initiated';
		}

		export class LogoutFlowInitiated {
			static readonly type = '[Navbar] Logout Flow Initiated';
		}
	}
	export class UserChangedFromAuth0SDK {
		static readonly type = '[Auth0 SDK] User Changed';
		constructor(public payload: { user: Auth0User | undefined }) {}
	}
}
