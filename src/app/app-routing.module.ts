import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreweryDetailComponent } from './brewery/brewery-detail/brewery-detail.component';
import { BreweryComponent } from './brewery/brewery/brewery.component';
import { AddBreweryComponent } from './brewery/add-brewery/add-brewery.component';
import { CanActivate } from '@angular/router';
import {AdminRoutingModule} from './admin/admin-routing.module'
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './brewery/dashboard/dashboard.component';
const routes: Routes = [

  { path: 'breweries', component: BreweryComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
  {  path: 'breweries/:id', component: BreweryDetailComponent },
  { path: 'brewery/create', component:AddBreweryComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/breweries', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
