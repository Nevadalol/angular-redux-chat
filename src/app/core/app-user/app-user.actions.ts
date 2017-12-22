import { ActionCreator, Action } from 'redux';

export const SET_USER = 'SET_USER';

export interface AppUserAction extends Action {
  username: string;
}

export let setAppUser: ActionCreator<AppUserAction> = function (username: string) {
  return {
    type: SET_USER,
    username
  };
};
