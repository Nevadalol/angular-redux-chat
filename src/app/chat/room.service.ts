import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RoomState } from './room.state';

@Injectable()
export class RoomService {

  constructor() { }

  fetchRooms (): Observable<RoomState[]> {
    let mock: RoomState[] = [
      {id: 1, title: 'Foo', messages: [], users: []},
      {id: 2, title: 'Bar', messages: [], users: []},
      {id: 3, title: 'Baz', messages: [], users: []}
    ];

    return Observable.of(mock).delay(300);
  }
}
