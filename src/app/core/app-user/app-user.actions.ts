import { ActionCreator, Action } from 'redux';
import { AppUserState } from './app-user.state';

export const SET_USER = 'SET_USER';

export interface AppUserAction extends Action {
  user: AppUserState;
}

export let setAppUser: ActionCreator<AppUserAction> = function (user: AppUserState) {
  return {
    type: SET_USER,
    user
  };
};
