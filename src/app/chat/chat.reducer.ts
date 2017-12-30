import { Reducer } from 'redux';

import { ChatState, initialChatState } from './chat.state';
import { ChatAction } from './chat.actions';


export let chatReducer: Reducer<any> = function (state: ChatState = initialChatState, action: ChatAction) {
  switch (action.type) {
    case 'ROOMS_FETCHED':
      return Object.assign({}, state, {rooms: action.rooms});
    default:
      return state;
  }
};
