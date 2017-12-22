import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsAuthenticatedGuard } from '../common/guards/is-authenticated.guard';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsResolverService } from './rooms/rooms-resolver.service';

const routes: Routes = [{
  path: 'rooms',
  component: RoomsComponent,
  canActivate: [IsAuthenticatedGuard],
  resolve: {
    rooms: RoomsResolverService
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
    RoomsResolverService
  ]
})
export class ChatRoutingModule { }
