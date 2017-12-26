import { AppUserState } from './core/app-user/app-user.reducer';
import { AuthState } from './auth/auth.state';
import { ChatState } from './chat/chat.reducer';

export interface AppState {
  auth: AuthState;
  user: AppUserState;
  chat: ChatState;
}
