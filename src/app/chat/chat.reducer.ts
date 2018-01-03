import { Reducer, Action } from 'redux';

import { ChatState, initialChatState } from './chat.state';
import { UsersFetchedAction, RoomsFetchedAction } from './chat.actions';

export let chatReducer: Reducer<ChatState> = function (state: ChatState = initialChatState, action: Action) {
  switch (action.type) {
    case 'ROOMS_FETCHED':
      return Object.assign({}, state, {rooms: (<RoomsFetchedAction>action).rooms});
    case 'USERS_FETCHED':
      return Object.assign({}, state, {users: (<UsersFetchedAction>action).users});
    default:
      return state;
  }
};
