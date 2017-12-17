import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { ChatModule } from './chat/chat.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    LoginModule,
    ChatModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
