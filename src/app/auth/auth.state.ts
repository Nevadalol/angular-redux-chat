export interface AuthState {
  isAuthenticated: boolean;
  hasError: boolean;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  hasError: false
};
