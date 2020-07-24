import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Enum2StringPipe } from './enum-2-string.pipe';
import { Latlng2StringPipe } from './latlng-2-string.pipe';



@NgModule({
  declarations: [
    Enum2StringPipe,
    Latlng2StringPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Enum2StringPipe,
    Latlng2StringPipe
  ]
})
export class SharedModule { }
