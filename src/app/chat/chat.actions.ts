import { Action, ActionCreator } from 'redux';
import { RoomState } from './room/room.state';

export interface ChatAction extends Action {
  rooms: RoomState[];
}

export let roomsFetched: ActionCreator<ChatAction> = function (rooms: RoomState[]) {
  return {
    type: 'ROOMS_FETCHED',
    rooms
  };
};
