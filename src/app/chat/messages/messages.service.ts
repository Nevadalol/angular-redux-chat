import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MessageState } from './message.state';

@Injectable()
export class MessagesService {

  constructor () {}

  fetchMessages (): Observable<MessageState[]> {
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
    }, {
      id: 3,
      authorId: 2,
      roomId: 1,
      content: 'Hey you'
    }, {
      id: 4,
      authorId: 3,
      roomId: 1,
      content: 'ДИМОН АМОН'
    }]);
  }
}
