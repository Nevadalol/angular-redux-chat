import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppStore } from '../../core/app.store';
import { RoomState } from './room.state';
import { UserState } from '../users/user.state';
import { MessageState } from '../messages/message.state';

import { messagesFetched, usersFetched } from '../chat.actions';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  room: RoomState;

  constructor (
    @Inject(AppStore) private store,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => this.room = this.getRoomState(+paramMap.get('id')));

    this.route.data.subscribe((data: {users: UserState[], messages: MessageState[]}) => {
      this.store.dispatch(usersFetched(data.users));
      this.store.dispatch(messagesFetched(data.messages));
    });
  }

  private getRoomState (id: number): RoomState {
    return this.store.getState().chat.rooms.find(room => room.id === id);
  }
}
