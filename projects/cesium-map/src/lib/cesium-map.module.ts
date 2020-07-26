import { NgModule } from '@angular/core';
import { CesiumMapDirective } from './cesium-map.directive';
import { CesiumMapService } from './cesium-map.service';
import { TargetsDrawerService } from './targets-drawer.service';

@NgModule({
  declarations: [CesiumMapDirective],
  imports: [
  ],
  exports: [CesiumMapDirective],
  providers: [CesiumMapService, TargetsDrawerService]
})
export class CesiumMapModule { }
