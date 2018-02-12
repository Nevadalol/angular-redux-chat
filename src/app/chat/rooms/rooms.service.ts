import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { RoomState } from '../room/room.state';

@Injectable()
export class RoomsService implements Resolve<RoomState[]> {

  constructor (private http: HttpClient) {}

  resolve (): Observable<RoomState[]> {
    return this.fetchRooms();
  }

  fetchRooms (): Observable<RoomState[]> {
    return this.http.get<RoomState[]>('api/rooms');
  }
}
