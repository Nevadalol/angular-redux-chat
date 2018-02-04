import { Action } from 'redux';
import { UserState } from '../users/user.state';

export const USERS_FETCHED = 'USERS_FETCHED';

export interface UsersFetchedAction extends Action {
  type: 'USERS_FETCHED';
  users: UserState[];
}

export let usersFetched = function (users: UserState[]): UsersFetchedAction {
  return {
    type: USERS_FETCHED,
    users
  };
};
