import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassLevelProvider1Component } from './class-level-provider1/class-level-provider1.component';
import { LifecycleExampleComponentComponent } from './lifecycle-example-component/lifecycle-example-component.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ //components, directives, pipes  under this module.
    AppComponent,
    ClassLevelProvider1Component,
    LifecycleExampleComponentComponent
  ],
  imports: [ //Modules  added to this module
    BrowserModule,
    AppRoutingModule,
   SharedModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }
