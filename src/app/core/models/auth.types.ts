export enum AccessRoleState {
  FETCHING = 'FETCHING',
  FETCHED = 'FETCHED',
}

export interface AccessRoles {
  [index: string]: boolean;
}
