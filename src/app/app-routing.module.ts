import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassLevelProvider1Component } from './class-level-provider1/class-level-provider1.component';
import { LifecycleExampleComponentComponent } from './lifecycle-example-component/lifecycle-example-component.component';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent,pathMatch:'full'},
  {path:'ClassLevel',component:ClassLevelProvider1Component},
  {path:'404',component:ErrorpageComponent}, 
{path:'LifecycleExample',component:LifecycleExampleComponentComponent},
{ path: '**', component: ErrorpageComponent} // This will handle any unknown routes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
