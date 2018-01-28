import { AuthState } from '../auth/auth.state';
import { ChatState } from '../chat/chat.state';

export interface AppState {
  auth: AuthState;
  chat: ChatState;
}
