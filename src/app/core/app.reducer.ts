import { Reducer, combineReducers } from 'redux';

import { authReducer } from '../auth/auth.reducer';
import { chatReducer } from '../chat/chat.reducer';
import { AppState } from './app.state';

export let appReducer: Reducer<AppState> = combineReducers<AppState>({
  auth: authReducer,
  chat: chatReducer
});
