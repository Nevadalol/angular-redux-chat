import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { RoomState } from '../room/room.state';

@Injectable()
export class RoomsService implements Resolve<RoomState[]> {

  resolve (): Observable<RoomState[]> {
    return this.fetchRooms();
  }

  fetchRooms (): Observable<RoomState[]> {
    return Observable.of([{
      id: 1,
      title: 'Monday chat',
      totalUsers: 5
    }])
      .delay(200);
  }
}
