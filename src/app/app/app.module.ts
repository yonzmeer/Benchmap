import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CesiumMapService, CesiumTargetsDrawerService } from '@cesium-map';
import { OlMapModule } from '@ol-map';
import { TargetsModule } from '@targets';
import { CesiumComponent } from '../cesium/cesium.component';
import { OlComponent } from '../ol/ol.component';
import { SharedModule } from '../shared/shared.module';
import { StreamComponent } from '../stream/stream.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CesiumComponent,
    OlComponent,
    StreamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    OlMapModule,
    TargetsModule.forRoot(),
  ],
  providers: [CesiumTargetsDrawerService, CesiumMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
