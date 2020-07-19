import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TargetsModule } from 'projects/targets/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Enum2StringPipe } from './enum-2-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Enum2StringPipe
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
