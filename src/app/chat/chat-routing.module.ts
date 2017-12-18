import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsAuthenticatedGuard } from '../common/guards/is-authenticated.guard';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [{
  path: 'rooms',
  component: RoomsComponent,
  canActivate: [IsAuthenticatedGuard]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChatRoutingModule { }
