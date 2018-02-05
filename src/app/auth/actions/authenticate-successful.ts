import { Action } from 'redux';
import { User } from '../User';

export const AUTH_SUCCESSFUL = 'AUTH_SUCCESSFUL';

export interface AuthenticateSuccessfulAction extends Action {
  type: 'AUTH_SUCCESSFUL';
  isAuthenticated: boolean;
  hasError: boolean;
  user: User;
}

export let authenticateSuccessful = function (user: User): AuthenticateSuccessfulAction {
  return {
    type: AUTH_SUCCESSFUL,
    isAuthenticated: true,
    hasError: false,
    user
  };
};
