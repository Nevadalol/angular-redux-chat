import { Reducer, combineReducers } from 'redux';

import { appUserReducer } from './app-user/app-user.reducer';
import { authReducer } from '../auth/auth.reducer';
import { chatReducer } from '../chat/chat.reducer';
import { AppState } from './app.state';

export let appReducer: Reducer<AppState> = combineReducers<AppState>({
  user: appUserReducer,
  auth: authReducer,
  chat: chatReducer
});
