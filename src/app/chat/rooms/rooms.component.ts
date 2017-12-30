import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppStore } from '../../app.store';
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
    @Inject(AppStore) private store,
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
