import { AppUserState } from './app-user/app-user.state';
import { AuthState } from '../auth/auth.state';
import { ChatState } from '../chat/chat.state';

export interface AppState {
  auth: AuthState;
  user: AppUserState;
  chat: ChatState;
}
