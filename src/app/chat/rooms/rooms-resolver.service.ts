import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {Observable} from "rxjs";

import { RoomState } from '../room.state';
import { RoomService } from '../room.service';

@Injectable()
export class RoomsResolverService implements Resolve<RoomState[]> {

  constructor (private roomService: RoomService) {}

  resolve (): Observable<RoomState[]> {
    return this.roomService.fetchRooms();
  }
}
