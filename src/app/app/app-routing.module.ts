import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CesiumComponent } from '../cesium/cesium.component';
import { StreamComponent } from '../stream/stream.component';


const routes: Routes = [
  { path: 'cesium', component: CesiumComponent, data: { menu: true } },
  { path: 'stream', component: StreamComponent, data: { menu: true } },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
