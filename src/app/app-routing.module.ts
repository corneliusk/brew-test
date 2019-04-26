import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreweryDetailComponent } from './brewery/brewery-detail/brewery-detail.component';
import { BreweryComponent } from './brewery/brewery/brewery.component';
import { AddBreweryComponent } from './brewery/add-brewery/add-brewery.component';

const routes: Routes = [

  { path: 'breweries', component: BreweryComponent},
  {  path: 'breweries/:id', component: BreweryDetailComponent },
  { path: 'brewery/create', component:AddBreweryComponent},
  {path: '', redirectTo: '/breweries', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
