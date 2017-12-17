import { ActionCreator, Action } from 'redux';

export const SET_USER = 'SET_USER';

export interface UserAction extends Action {
  username: string;
}

export let setUser: ActionCreator<UserAction> = function (username: string) {
  return {
    type: SET_USER,
    username
  };
};
