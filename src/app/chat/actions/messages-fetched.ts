import { Action } from 'redux';
import { MessageState } from '../messages/message.state';

export const MESSAGES_FETCHED = 'MESSAGES_FETCHED';

export interface MessagesFetchedAction extends Action {
  type: 'MESSAGES_FETCHED';
  messages: MessageState[];
}

export let messagesFetched = function (messages: MessageState[]): MessagesFetchedAction {
  return {
    type: MESSAGES_FETCHED,
    messages
  };
};
