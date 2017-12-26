import { Reducer, combineReducers } from 'redux';

import { appUserReducer, AppUserState } from './core/app-user/app-user.reducer';
import { authReducer } from './auth/auth.reducer';
import { AuthState } from './auth/auth.state';
import { chatReducer, ChatState } from './chat/chat.reducer';

export interface AppState {
  auth: AuthState;
  user: AppUserState;
  chat: ChatState;
}

export let appReducer: Reducer<AppState> = combineReducers<AppState>({
  user: appUserReducer,
  auth: authReducer,
  chat: chatReducer
});
