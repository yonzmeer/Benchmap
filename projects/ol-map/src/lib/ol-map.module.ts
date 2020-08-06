import { NgModule } from '@angular/core';
import { OlMapDirective } from './ol-map.directive';
import { OlMapService } from './ol-map.service';

@NgModule({
  declarations: [OlMapDirective],
  imports: [
  ],
  exports: [OlMapDirective],
  providers: [OlMapService]
})
export class OlMapModule { }
