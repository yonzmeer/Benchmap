import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CesiumComponent } from './cesium/cesium.component';
import { OlComponent } from './ol/ol.component';
import { StreamComponent } from './stream/stream.component';


const routes: Routes = [
  {
    path: 'cesium',
    component: CesiumComponent,
    data: { menu: true },
    loadChildren: () => import('@cesium-map').then(m => m.CesiumMapModule)
  },
  {
    path: 'openlayers',
    component: OlComponent,
    data: { menu: true },
    loadChildren: () => import('@ol-map').then(m => m.OlMapModule)
  },
  { path: 'stream', component: StreamComponent, data: { menu: true } },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
