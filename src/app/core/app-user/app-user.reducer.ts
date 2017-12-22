import { Reducer } from 'redux';
import { SET_USER, AppUserAction } from './app-user.actions';

export interface AppUserState {
  username: string;
}

const initialUserState: AppUserState = {
  username: ''
};

export let appUserReducer: Reducer<AppUserState> = function (state: AppUserState = initialUserState, action: AppUserAction) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {username: action.username});

    default:
      return state;
  }
};
