import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {HttpModule} from '@angular/http';


import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

import {loadSvgResources} from '../utils/svg.util'

//shared module
import { SharedModule } from '../shared/shared.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


// only install once
@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent,
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    iconRegistry: MdIconRegistry, 
    sanitizer: DomSanitizer
  ){
    if(parent){
      throw new Error('Module already exist, cant not be load twice.')
    }
    loadSvgResources(iconRegistry, sanitizer);
  }
}
