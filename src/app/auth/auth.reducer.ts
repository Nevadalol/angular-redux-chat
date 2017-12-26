import { Reducer, Action } from 'redux';

import { AUTH_SUCCESSFUL, AUTH_FAILED } from './auth.actions';
import { AuthState, initialAuthState } from './auth.state';

export let authReducer: Reducer<AuthState> = function (state: AuthState = initialAuthState, action: Action) {
  switch (action.type) {
    case AUTH_SUCCESSFUL:
      return Object.assign({}, state, {isAuthenticated: true, hasError: false});

    case AUTH_FAILED:
      return Object.assign({}, state, {isAuthenticated: false, hasError: true});

    default:
      return state;
  }
};
