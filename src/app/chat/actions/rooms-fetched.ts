import { Action } from 'redux';
import { RoomState } from '../room/room.state';

export const ROOMS_FETCHED = 'ROOMS_FETCHED';

export interface RoomsFetchedAction extends Action {
  type: 'ROOMS_FETCHED';
  rooms: RoomState[];
}

export let roomsFetched = function (rooms: RoomState[]): RoomsFetchedAction {
  return {
    type: ROOMS_FETCHED,
    rooms
  };
};
