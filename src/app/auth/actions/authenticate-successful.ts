import { Action, ActionCreator } from 'redux';
import { User } from '../User';

export const AUTH_SUCCESSFUL = 'AUTH_SUCCESSFUL';

export interface AuthenticateSuccessfulAction extends Action {
  type: 'AUTH_SUCCESSFUL';
  isAuthenticated: boolean;
  hasError: boolean;
  user: User;
}

export let authenticateSuccessful: ActionCreator<AuthenticateSuccessfulAction> = function (user: User) {
  return {
    type: AUTH_SUCCESSFUL,
    isAuthenticated: true,
    hasError: false,
    user
  };
};
