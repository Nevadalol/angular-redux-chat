import { Reducer } from 'redux';

import { SET_USER, AppUserAction } from './app-user.actions';
import { AppUserState, initialUserState } from './app-user.state';


export let appUserReducer: Reducer<AppUserState> = function (state: AppUserState = initialUserState, action: AppUserAction) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, action.user);

    default:
      return state;
  }
};
