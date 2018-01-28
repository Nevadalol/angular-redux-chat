import { Reducer } from 'redux';

import { ChatState, initialChatState } from './chat.state';
import { ChatActionTypes } from './chat.actions';

export let chatReducer: Reducer<ChatState> = function (state: ChatState = initialChatState, action: ChatActionTypes) {
  switch (action.type) {
    case 'ROOMS_FETCHED':
      return Object.assign({}, state, {rooms: action.rooms});

    case 'USERS_FETCHED':
      return Object.assign({}, state, {users: action.users});

    case 'MESSAGES_FETCHED':
      return Object.assign({}, state, {messages: action.messages});

    case 'ADD_MESSAGE':
      return Object.assign({}, state, {messages: state.messages.concat(action.message)});

    default:
      return state;
  }
};
