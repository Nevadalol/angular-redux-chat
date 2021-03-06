import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';

import { messagesFetched } from '../actions/messages-fetched';
import { usersFetched } from '../actions/users-fetched';
import { MessageState } from '../messages/message.state';
import { AppStore } from '../../core/app.store';
import { UserState } from '../users/user.state';
import { RoomState } from './room.state';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit, OnDestroy {
  private routeParamMapSubscription: Subscription;
  private routeDataSubscription: Subscription;
  room: RoomState;

  constructor (
    private store: AppStore,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeParamMapSubscription = this.route.paramMap.subscribe(
      paramMap => this.room = this.getRoomState(+paramMap.get('id'))
    );

    this.routeDataSubscription = this.route.data.subscribe((data: {users: UserState[], messages: MessageState[]}) => {
      this.store.dispatch(usersFetched(this.getRoomUsersWithAppUser(data.users)));
      this.store.dispatch(messagesFetched(data.messages));
    });
  }

  ngOnDestroy () {
    this.routeParamMapSubscription.unsubscribe();
    this.routeDataSubscription.unsubscribe();
  }

  navigateBack () {
    this.location.back();
  }

  private getRoomState (id: number): RoomState {
    return this.store.getState().chat.rooms.find(room => room.id === id);
  }

  private getRoomUsersWithAppUser (roomUsers: UserState[]): UserState[] {
    return roomUsers.concat(this.store.getState().auth.user);
  }
}
