import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassLevelProvider1Component } from './class-level-provider1/class-level-provider1.component';
import { LifecycleExampleComponentComponent } from './lifecycle-example-component/lifecycle-example-component.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CheckHowthingsworkService } from './check-howthingswork.service';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';


@NgModule({
  declarations: [ //components, directives, pipes  under this module.
    AppComponent,
    ClassLevelProvider1Component,
    LifecycleExampleComponentComponent,
    HomeComponent,
    ErrorpageComponent
  ],
  imports: [ //Modules  added to this module
    BrowserModule,
    AppRoutingModule,
   SharedModule,
   HttpClientModule,
   
  ],
  providers: [CheckHowthingsworkService],
  bootstrap: [ AppComponent]
})
export class AppModule { }
