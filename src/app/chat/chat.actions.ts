import { Action, ActionCreator } from 'redux';
import { RoomState } from './room/room.state';
import { UserState } from './users/user.state';

export interface RoomsFetchedAction extends Action {
  rooms: RoomState[];
}

export interface UsersFetchedAction extends Action {
  users: UserState[];
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
