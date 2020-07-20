import { NgModule, ModuleWithProviders } from '@angular/core';
import { CesiumMapService as CesiumMapService } from './cesium-map.service';
import { CesiumMapDirective } from './cesium-map.directive';


@NgModule({
  declarations: [CesiumMapDirective],
  imports: [
  ],
  exports: []
})
export class CesiumMapModule {
  static forRoot(): ModuleWithProviders {
    console.log('loaded');
    return {
      ngModule: CesiumMapModule,
      providers: [CesiumMapService]
    };
  }
}
