import { Reducer, combineReducers } from 'redux';

import { appUserReducer, AppUserState } from './core/app-user/app-user.reducer';
import { loginReducer, LoginState } from './login/login.reducer';
import { chatReducer, ChatState } from './chat/chat.reducer';

export interface AppState {
  login: LoginState;
  appUser: AppUserState;
  chat: ChatState;
}

export let appReducer: Reducer<AppState> = combineReducers<AppState>({
  appUser: appUserReducer,
  login: loginReducer,
  chat: chatReducer
});
