import { Reducer } from 'redux';

import { ChatState, initialChatState } from './chat.state';
import { ChatAction } from './chat.actions';


export let chatReducer: Reducer<any> = function (state: ChatState = initialChatState, action: ChatAction) {
  switch (action.type) {
    default:
      return state;
  }
};
