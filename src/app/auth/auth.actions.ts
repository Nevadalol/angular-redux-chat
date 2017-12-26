import { ActionCreator } from 'redux';
import { AuthState } from './auth.state';

export const AUTH_SUCCESSFUL = 'AUTH_SUCCESSFUL';
export const AUTH_FAILED = 'AUTH_FAILED';

export let authSuccessful: ActionCreator<AuthState> = function () {
  return {
    type: AUTH_SUCCESSFUL,
    isAuthenticated: true,
    hasError: false
  };
};

export let authFailed: ActionCreator<AuthState> = function () {
  return {
    type: AUTH_FAILED,
    isAuthenticated: false,
    hasError: true
  };
};
