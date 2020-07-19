import { NgModule, ModuleWithProviders } from '@angular/core';
import { CesiumService } from './cesium.service';


@NgModule({
  declarations: [],
  imports: [
  ],
  exports: []
})
export class CesiumModule {
  static forRoot(): ModuleWithProviders {
    console.log('loaded');
    return {
      ngModule: CesiumModule,
      providers: [CesiumService]
    };
  }
}
