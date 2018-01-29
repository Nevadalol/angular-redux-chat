import { AuthenticateSuccessfulAction } from './authenticate-successful';
import { AuthenticateFailedAction } from './authenticate-failed';

export type AuthActionTypes = AuthenticateSuccessfulAction | AuthenticateFailedAction;

export { AUTH_SUCCESSFUL } from './authenticate-successful';
export { AUTH_FAILED } from './authenticate-failed';
