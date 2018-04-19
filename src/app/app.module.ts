import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MasterSwordComponent } from './master-sword/master-sword.component';


@NgModule({
  declarations: [
    AppComponent,
    MasterSwordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
