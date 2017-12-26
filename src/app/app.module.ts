import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { ChatModule } from './chat/chat.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AuthModule,
    ChatModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
