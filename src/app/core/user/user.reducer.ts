import { Reducer } from 'redux';
import { SET_USER, UserAction } from './user.actions';

export interface UserState {
  username: string;
}

const initialUserState: UserState = {
  username: ''
};

export let userReducer: Reducer<UserState> = function (state: UserState = initialUserState, action: UserAction) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {username: action.username});

    default:
      return state;
  }
};
