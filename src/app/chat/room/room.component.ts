import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages/messages.service';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [
    MessagesService,
    UsersService
  ]
})
export class RoomComponent implements OnInit {

  constructor () { }

  ngOnInit() {
  }
}
