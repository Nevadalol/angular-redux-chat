import { Reducer, Action } from 'redux';
import { Room } from './room';

export interface ChatState {
  rooms: Room[];
}

interface ChatAction extends Action {
  rooms: Room[];
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
