import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { RoomState } from '../room/room.state';

@Injectable()
export class RoomsService implements Resolve<RoomState[]> {

  constructor() { }

  resolve (): Observable<RoomState[]> {
    return this.fetchRooms();
  }

  fetchRooms (): Observable<RoomState[]> {
    return Observable.of([{
      id: 1,
      title: 'Monday chat',
      totalUsers: 5
    }, {
      id: 2,
      title: 'Tuesday chat',
      totalUsers: 9
    }, {
      id: 3,
      title: 'Wednesday chat',
      totalUsers: 12
    }])
      .delay(200);
  }
}
