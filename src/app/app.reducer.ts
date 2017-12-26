import { Reducer, combineReducers } from 'redux';

import { userReducer, UserState } from './core/user/user.reducer';
import { authReducer } from './auth/auth.reducer';
import { AuthState } from './auth/auth.state';
import { chatReducer, ChatState } from './chat/chat.reducer';

export interface AppState {
  auth: AuthState;
  user: UserState;
  chat: ChatState;
}

export let appReducer: Reducer<AppState> = combineReducers<AppState>({
  user: userReducer,
  auth: authReducer,
  chat: chatReducer
});
