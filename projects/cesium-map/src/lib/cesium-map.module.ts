import { NgModule } from '@angular/core';
import { CesiumMapDirective } from './cesium-map.directive';
import { CesiumMapService } from './cesium-map.service';

@NgModule({
  declarations: [CesiumMapDirective],
  imports: [
  ],
  exports: [CesiumMapDirective],
  providers: [CesiumMapService]
})
export class CesiumMapModule { }
