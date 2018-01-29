import { User } from './User';

export interface AuthState {
  isAuthenticated: boolean;
  hasError: boolean;
  user: User;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  hasError: false,
  user: {
    id: null,
    username: ''
  }
};
