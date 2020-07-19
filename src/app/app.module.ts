import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TargetsModule } from 'projects/targets/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TargetsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
