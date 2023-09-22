import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassLevelProvider1Component } from './class-level-provider1/class-level-provider1.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassLevelProvider1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ ClassLevelProvider1Component]
})
export class AppModule { }
