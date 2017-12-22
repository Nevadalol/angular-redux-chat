import { Reducer, Action } from 'redux';
import { RoomState } from './room.state';

export interface ChatState {
  rooms: RoomState[];
}

interface ChatAction extends Action {
  rooms: RoomState[];
}

const initialChatState: ChatState = {
  rooms: []
};

export let chatReducer: Reducer<any> = function (state: ChatState = initialChatState, action: ChatAction) {
  switch (action.type) {
    default:
      return state;
  }
};
