import { MessageState } from './messages/message.state';
import { RoomState } from './room/room.state';
import { UserState } from './users/user.state';

export interface ChatState {
  messages: MessageState[];
  rooms: RoomState[];
  users: UserState[];
  selectedRoomId: number;
}

export let initialChatState: ChatState = {
  messages: [],
  rooms: [],
  users: [],
  selectedRoomId: null
};
