import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';

const routes: Routes = [
  {path:"about", component:AboutComponent},
  {path:"home", component:HomeComponent},
  {path:"store", component:StoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
