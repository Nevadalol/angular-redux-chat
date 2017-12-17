import { Reducer, Action } from 'redux';
import { LOGIN_SUCCESSFUL, LOGIN_FAILED } from './login.actions';

export interface LoginState {
  isAuthenticated: boolean;
  hasError: boolean;
}

const initialLoginState: LoginState = {
  isAuthenticated: false,
  hasError: false
};

export let loginReducer: Reducer<LoginState> = function (state: LoginState = initialLoginState, action: Action) {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return Object.assign({}, state, {isAuthenticated: true, hasError: false});

    case LOGIN_FAILED:
      return Object.assign({}, state, {isAuthenticated: false, hasError: true});

    default:
      return state;
  }
};
