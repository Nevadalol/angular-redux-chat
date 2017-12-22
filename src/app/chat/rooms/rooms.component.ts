import { Component, OnInit, Inject } from '@angular/core';
import { AppStore } from '../../app.store';
import { ActivatedRoute } from '@angular/router';

import { RoomState } from '../room.state';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: RoomState[];

  constructor (
    @Inject(AppStore) private appStore,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.appStore.subscribe(() => this.readStore());
    this.route.data.subscribe((data: {rooms: RoomState[]}) => {
      this.rooms = data.rooms;
    });

    this.readStore();
  }

  readStore () {
    //this.rooms = data.rooms;
  }
}
