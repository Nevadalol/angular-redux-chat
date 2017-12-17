import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const appRoutes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
