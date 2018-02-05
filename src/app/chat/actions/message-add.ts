import { Action } from 'redux';
import { MessageState } from '../messages/message.state';

export const MESSAGE_ADD = 'MESSAGE_ADD';

export interface AddMessageAction extends Action {
  type: 'MESSAGE_ADD';
  message: MessageState;
}

export let addMessage = function (message: MessageState): AddMessageAction {
  return {
    type: MESSAGE_ADD,
    message
  };
};
