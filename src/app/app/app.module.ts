import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TargetsModule } from 'projects/targets/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { CesiumComponent } from '../cesium/cesium.component';
import { StreamComponent } from '../stream/stream.component';
import { CesiumMapModule } from 'projects/cesium-map/src/public-api';
import { OlComponent } from '../ol/ol.component';
import { OlMapModule } from 'projects/ol-map/src/public-api';

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
    TargetsModule.forRoot(),
    CesiumMapModule,
    OlMapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
