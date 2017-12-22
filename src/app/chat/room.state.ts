import { MessageState } from './message.state';
import { UserState } from './user.state';

export interface RoomState {
  id: number;
  title: string;
  messages: MessageState[];
  users: UserState[];
}
