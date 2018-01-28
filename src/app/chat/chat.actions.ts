import { Action, ActionCreator } from 'redux';

import { RoomState } from './room/room.state';
import { UserState } from './users/user.state';
import { MessageState } from './messages/message.state';

export type ChatActionTypes = RoomsFetchedAction | UsersFetchedAction | MessagesFetchedAction | AddMessageAction;

export interface RoomsFetchedAction extends Action {
  type: 'ROOMS_FETCHED';
  rooms: RoomState[];
}

export interface UsersFetchedAction extends Action {
  type: 'USERS_FETCHED';
  users: UserState[];
}

export interface MessagesFetchedAction extends Action {
  type: 'MESSAGES_FETCHED';
  messages: MessageState[];
}

export interface AddMessageAction extends Action {
  type: 'ADD_MESSAGE';
  message: MessageState;
}

export let roomsFetched: ActionCreator<RoomsFetchedAction> = function (rooms: RoomState[]) {
  return {
    type: 'ROOMS_FETCHED',
    rooms
  };
};

export let usersFetched: ActionCreator<UsersFetchedAction> = function (users: UserState[]) {
  return {
    type: 'USERS_FETCHED',
    users
  };
};

export let messagesFetched: ActionCreator<MessagesFetchedAction> = function (messages: MessageState[]) {
  return {
    type: 'MESSAGES_FETCHED',
    messages
  };
};

export let addMessage: ActionCreator<AddMessageAction> = function (message: MessageState) {
  return {
    type: 'ADD_MESSAGE',
    message
  };
};
