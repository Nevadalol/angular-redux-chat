import { Action } from 'redux';

export const AUTH_FAILED = 'AUTH_FAILED';

export interface AuthenticateFailedAction extends Action {
  type: 'AUTH_FAILED';
  isAuthenticated: boolean;
  hasError: boolean;
}

export let authenticateFailed = function (): AuthenticateFailedAction {
  return {
    type: AUTH_FAILED,
    isAuthenticated: false,
    hasError: true
  };
};
