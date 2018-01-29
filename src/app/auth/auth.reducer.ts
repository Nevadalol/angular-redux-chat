import { Reducer } from 'redux';

import { AuthActionTypes, AUTH_SUCCESSFUL, AUTH_FAILED } from './actions';
import { AuthState, initialAuthState } from './auth.state';

export let authReducer: Reducer<AuthState> = function (state: AuthState = initialAuthState, action: AuthActionTypes) {
  switch (action.type) {
    case AUTH_SUCCESSFUL:
      return Object.assign({}, state, {
        isAuthenticated: action.isAuthenticated,
        hasError: action.hasError,
        user: action.user
      });

    case AUTH_FAILED:
      return Object.assign({}, state, {
        isAuthenticated: action.isAuthenticated,
        hasError: action.hasError
      });

    default:
      return state;
  }
};
