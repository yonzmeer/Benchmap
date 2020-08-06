import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CesiumMapDirective } from 'projects/cesium-map/src/lib/cesium-map.directive';
import { OlMapDirective } from 'projects/ol-map/src/lib/ol-map.directive';
import { Enum2StringPipe } from './enum-2-string.pipe';
import { Latlng2StringPipe } from './latlng-2-string.pipe';

@NgModule({
  declarations: [
    Enum2StringPipe,
    Latlng2StringPipe,
    CesiumMapDirective,
    OlMapDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Enum2StringPipe,
    Latlng2StringPipe,
    CesiumMapDirective,
    OlMapDirective,
  ]
})
export class SharedModule { }
