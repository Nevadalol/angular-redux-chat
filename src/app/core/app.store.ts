import { createStore, Store } from 'redux';

import { appReducer } from './app.reducer';
import { AppState } from './app.state';

const store = createStore<AppState>(appReducer);

export class AppStore implements Store<AppState> {
  dispatch (action) {
    return store.dispatch(action);
  }

  getState () {
    return store.getState();
  }

  subscribe (listener: () => void) {
    return store.subscribe(listener);
  }

  replaceReducer (nextReducer) {
    store.replaceReducer(nextReducer);
  }
}
