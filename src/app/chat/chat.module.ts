import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { RoomComponent } from './room/room.component';
import { RoomsComponent } from './rooms/rooms.component';
import { UsersComponent } from './users/users.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageFormComponent } from './message-form/message-form.component';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule
  ],
  declarations: [
    RoomComponent,
    RoomsComponent,
    UsersComponent,
    MessagesComponent,
    MessageFormComponent
  ],
  providers: [
  ]
})
export class ChatModule { }
