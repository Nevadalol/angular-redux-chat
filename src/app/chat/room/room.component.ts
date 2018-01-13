import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MessagesService } from '../messages/messages.service';
import { UsersService } from '../users/users.service';
import { RoomsService } from '../rooms/rooms.service';
import { AppStore } from '../../app.store';
import { RoomState } from './room.state';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [
    MessagesService,
    RoomsService,
    UsersService
  ]
})
export class RoomComponent implements OnInit {
  room: RoomState;

  constructor (
    @Inject(AppStore) private store,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => this.room = this.getRoomState(+paramMap.get('id')));
  }

  private getRoomState (id: number): RoomState {
    return this.store.getState().chat.rooms.find(room => room.id === id);
  }
}
