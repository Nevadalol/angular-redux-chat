import { Reducer, combineReducers } from 'redux';

import { userReducer, UserState } from './core/user/user.reducer';
import { loginReducer, LoginState } from './login/login.reducer';
import { chatReducer, ChatState } from './chat/chat.reducer';

export interface AppState {
  login: LoginState;
  user: UserState;
  chat: ChatState;
}

export let appReducer: Reducer<AppState> = combineReducers<AppState>({
  user: userReducer,
  login: loginReducer,
  chat: chatReducer
});
