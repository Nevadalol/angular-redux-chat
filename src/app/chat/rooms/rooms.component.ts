import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Unsubscribe } from 'redux';

import { AppStore } from '../../core/app.store';
import { RoomState } from '../room/room.state';
import { roomsFetched } from '../actions/rooms-fetched';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, OnDestroy {
  private routeDataSubscription: Subscription;
  private storeSubscription: Unsubscribe;
  rooms: RoomState[] = [];

  constructor (
    private store: AppStore,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.storeSubscription = this.store.subscribe(() => this.readStore());

    this.routeDataSubscription = this.route.data.subscribe((data: {rooms: RoomState[]}) => {
      this.store.dispatch(roomsFetched(data.rooms));
    });
  }

  ngOnDestroy () {
    this.routeDataSubscription.unsubscribe();
    this.storeSubscription();
  }

  private readStore () {
    this.rooms = this.store.getState().chat.rooms;
  }
}
