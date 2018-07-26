import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { MdSidenavModule } from '@angular/material';

//import router
import { AppRoutingModule } from './app-routing.module';

import {LoginModule} from './login/login.module'; //chen add

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MdSidenavModule,
    AppRoutingModule,
    LoginModule //chen add
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
