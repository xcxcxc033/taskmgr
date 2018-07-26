import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule, MdIconModule, MdButtonModule, MdCardModule, MdInputModule } from '@angular/material';


//put shared component
@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule, MdIconModule, MdButtonModule, MdCardModule, MdInputModule
  ],
  exports: [
    CommonModule,
    MdToolbarModule, MdIconModule, MdButtonModule, MdCardModule, MdInputModule
  ],
  declarations: []
})
export class SharedModule { }
