import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/observable/of';

import { MessageState } from './message.state';

@Injectable()
export class MessagesService implements Resolve<MessageState[]> {

  constructor () {}

  resolve (): Observable<MessageState[]> {
    return Observable.of([{
      id: 1,
      authorId: 1,
      roomId: 1,
      content: 'Hello, world!'
    }, {
      id: 2,
      authorId: 2,
      roomId: 1,
      content: 'Muahahhaha!'
    }]);
  }
}
