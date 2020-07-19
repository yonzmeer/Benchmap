import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Enum2StringPipe } from './enum-2-string.pipe';



@NgModule({
  declarations: [
    Enum2StringPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Enum2StringPipe
  ]
})
export class SharedModule { }
