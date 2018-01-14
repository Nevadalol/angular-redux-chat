import { Reducer, Action } from 'redux';

import { ChatState, initialChatState } from './chat.state';
import * as ChatActions from './chat.actions';

export let chatReducer: Reducer<ChatState> = function (state: ChatState = initialChatState, action: Action) {
  switch (action.type) {
    case 'ROOMS_FETCHED':
      return Object.assign({}, state, {rooms: (<ChatActions.RoomsFetchedAction>action).rooms});
    case 'USERS_FETCHED':
      return Object.assign({}, state, {users: (<ChatActions.UsersFetchedAction>action).users});
    case 'MESSAGES_FETCHED':
      return Object.assign({}, state, {messages: (<ChatActions.MessagesFetchedAction>action).messages});
    case 'ADD_MESSAGE':
      return Object.assign({}, state, {messages: state.messages.concat((<ChatActions.AddMessageAction>action).message)});
    default:
      return state;
  }
};
