import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppStore } from '../../core/app.store';
import { RoomState } from '../room/room.state';
import { roomsFetched } from '../chat.actions';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: RoomState[] = [];

  constructor (
    private store: AppStore,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.store.subscribe(() => this.readStore());

    this.route.data.subscribe((data: {rooms: RoomState[]}) => {
      this.store.dispatch(roomsFetched(data.rooms));
    });
  }

  private readStore () {
    this.rooms = this.store.getState().chat.rooms;
  }
}
