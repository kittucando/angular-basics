import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassLevelProvider1Component } from './class-level-provider1/class-level-provider1.component';
import { LifecycleExampleComponentComponent } from './lifecycle-example-component/lifecycle-example-component.component';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { FormComponent } from './form/form.component';
import { GAuthGuard } from './g-auth.guard';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'classLevel', component: ClassLevelProvider1Component },
  { path: 'lifecycleExample', component: LifecycleExampleComponentComponent },
  { path: 'forms', component: FormComponent },
  { path: 'admin', component: AdminComponent , canActivate:[GAuthGuard]},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
    //{path:'404',component:ErrorpageComponent},
  { path: '**', component: ErrorpageComponent }, // This will handle any unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
