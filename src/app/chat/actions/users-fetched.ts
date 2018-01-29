import { Action, ActionCreator } from 'redux';
import { UserState } from '../users/user.state';

export const USERS_FETCHED = 'USERS_FETCHED';

export interface UsersFetchedAction extends Action {
  type: 'USERS_FETCHED';
  users: UserState[];
}

export let usersFetched: ActionCreator<UsersFetchedAction> = function (users: UserState[]) {
  return {
    type: USERS_FETCHED,
    users
  };
};
