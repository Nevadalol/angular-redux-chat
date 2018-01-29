import { Action, ActionCreator } from 'redux';
import { MessageState } from '../messages/message.state';

export const MESSAGES_FETCHED = 'MESSAGES_FETCHED';

export interface MessagesFetchedAction extends Action {
  type: 'MESSAGES_FETCHED';
  messages: MessageState[];
}

export let messagesFetched: ActionCreator<MessagesFetchedAction> = function (messages: MessageState[]) {
  return {
    type: MESSAGES_FETCHED,
    messages
  };
};
