import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MasterSwordComponent } from './master-sword/master-sword.component';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    MasterSwordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
