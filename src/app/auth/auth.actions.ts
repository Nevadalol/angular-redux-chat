import { ActionCreator, Action } from 'redux';
import { User } from './user/User';

export const AUTH_SUCCESSFUL = 'AUTH_SUCCESSFUL';
export const AUTH_FAILED = 'AUTH_FAILED';
export type AuthActionTypes = AuthSuccessfulAction | AuthFailedAction;

export interface AuthSuccessfulAction extends Action {
  type: 'AUTH_SUCCESSFUL';
  isAuthenticated: boolean;
  hasError: boolean;
  user: User;
}

export interface AuthFailedAction extends Action {
  type: 'AUTH_FAILED';
  isAuthenticated: boolean;
  hasError: boolean;
}

export let authSuccessful: ActionCreator<AuthSuccessfulAction> = function (user: User) {
  return {
    type: AUTH_SUCCESSFUL,
    isAuthenticated: true,
    hasError: false,
    user
  };
};

export let authFailed: ActionCreator<AuthFailedAction> = function () {
  return {
    type: AUTH_FAILED,
    isAuthenticated: false,
    hasError: true
  };
};
