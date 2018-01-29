import { MessagesFetchedAction } from './messages-fetched';
import { RoomsFetchedAction } from './rooms-fetched';
import { UsersFetchedAction } from './users-fetched';
import { AddMessageAction } from './message-add';

export type ChatActionTypes = AddMessageAction | RoomsFetchedAction | UsersFetchedAction | MessagesFetchedAction;

export { MESSAGES_FETCHED } from './messages-fetched';
export { ROOMS_FETCHED } from './rooms-fetched';
export { USERS_FETCHED } from './users-fetched';
export { MESSAGE_ADD } from './message-add';
