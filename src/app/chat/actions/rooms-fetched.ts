import { Action, ActionCreator } from 'redux';
import { RoomState } from '../room/room.state';

export const ROOMS_FETCHED = 'ROOMS_FETCHED';

export interface RoomsFetchedAction extends Action {
  type: 'ROOMS_FETCHED';
  rooms: RoomState[];
}

export let roomsFetched: ActionCreator<RoomsFetchedAction> = function (rooms: RoomState[]) {
  return {
    type: ROOMS_FETCHED,
    rooms
  };
};
