import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsAuthenticatedGuard } from '../common/guards/is-authenticated.guard';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsService } from './rooms/rooms.service';

const routes: Routes = [{
  path: 'rooms',
  component: RoomsComponent,
  canActivate: [IsAuthenticatedGuard],
  resolve: {
    rooms: RoomsService
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
    RoomsService
  ]
})
export class ChatRoutingModule { }
