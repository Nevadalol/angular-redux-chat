import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomComponent } from './room/room.component';
import { RoomService } from './room.service';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule
  ],
  declarations: [
    RoomsComponent,
    RoomComponent
  ],
  providers: [
    RoomService
  ]
})
export class ChatModule { }
