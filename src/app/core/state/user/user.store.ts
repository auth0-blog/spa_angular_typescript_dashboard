import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { User as Auth0User } from "@auth0/auth0-spa-js";

export interface UserState {
  user: Auth0User | undefined;
}

export function createInitialState(): UserState {
  return {
    user: undefined,
  };
}
@StoreConfig({ name: "user" })
@Injectable({ providedIn: "root" })
export class UserStore extends Store<UserState> {
  constructor() {
    super(createInitialState());
  }
}