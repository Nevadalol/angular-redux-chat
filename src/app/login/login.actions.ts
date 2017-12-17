import { ActionCreator } from 'redux';
import { LoginState } from './login.reducer';

export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export let loginSuccessful: ActionCreator<LoginState> = function () {
  return {
    type: LOGIN_SUCCESSFUL,
    isAuthenticated: true,
    hasError: false
  };
};

export let loginFailed: ActionCreator<LoginState> = function () {
  return {
    type: LOGIN_FAILED,
    isAuthenticated: false,
    hasError: true
  };
};
