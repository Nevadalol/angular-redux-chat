import { Reducer, combineReducers } from 'redux';

import { userReducer } from './core/user/user.reducer';
import { loginReducer } from './login/login.reducer';
import { UserState } from './core/user/user.reducer';
import { LoginState } from './login/login.reducer';

export interface AppState {
  login: LoginState;
  user: UserState;
}

export let appReducer: Reducer<AppState> = combineReducers<AppState>({
  user: userReducer,
  login: loginReducer
});
