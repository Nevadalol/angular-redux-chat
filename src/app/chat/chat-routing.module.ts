import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsAuthenticatedGuard } from '../common/guards/is-authenticated.guard';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomComponent } from './room/room.component';
import { RoomsService } from './rooms/rooms.service';

import { MessagesService } from './messages/messages.service';
import { UsersService } from './users/users.service';

const routes: Routes = [{
  path: 'rooms',
  component: RoomsComponent,
  canActivate: [IsAuthenticatedGuard],
  resolve: {
    rooms: RoomsService
  }
}, {
  path: 'rooms/:id',
  component: RoomComponent,
  canActivate: [IsAuthenticatedGuard],
  resolve: {
    messages: MessagesService,
    users: UsersService
  }
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    RoomsService,
    MessagesService,
    UsersService
  ]
})
export class ChatRoutingModule { }
