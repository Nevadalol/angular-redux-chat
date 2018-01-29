import { Reducer } from 'redux';

import { ChatActionTypes, MESSAGES_FETCHED, USERS_FETCHED, ROOMS_FETCHED, MESSAGE_ADD } from './actions';
import { ChatState, initialChatState } from './chat.state';

export let chatReducer: Reducer<ChatState> = function (state: ChatState = initialChatState, action: ChatActionTypes) {
  switch (action.type) {
    case ROOMS_FETCHED:
      return Object.assign({}, state, {rooms: action.rooms});

    case USERS_FETCHED:
      return Object.assign({}, state, {users: action.users});

    case MESSAGES_FETCHED:
      return Object.assign({}, state, {messages: action.messages});

    case MESSAGE_ADD:
      return Object.assign({}, state, {messages: state.messages.concat(action.message)});

    default:
      return state;
  }
};
