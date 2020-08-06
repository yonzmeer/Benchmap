import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CesiumComponent } from '../cesium/cesium.component';
import { StreamComponent } from '../stream/stream.component';
import { OlComponent } from '../ol/ol.component';


const routes: Routes = [
  {
    path: 'cesium', component: CesiumComponent, data: { menu: true },
    loadChildren: () => import('../../../projects/cesium-map/src/lib/cesium-map.module').then(m => m.CesiumMapModule)
  },
  { path: 'openlayers', component: OlComponent, data: { menu: true } },
  { path: 'stream', component: StreamComponent, data: { menu: true } },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
