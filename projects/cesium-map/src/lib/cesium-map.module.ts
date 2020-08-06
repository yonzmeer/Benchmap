import { NgModule } from '@angular/core';
import { CesiumMapService } from './cesium-map.service';
import { CesiumTargetsDrawerService } from './cesium-targets-drawer.service';

@NgModule({
  providers: [CesiumMapService, CesiumTargetsDrawerService]
})
export class CesiumMapModule { }
