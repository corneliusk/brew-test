import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreweryComponent } from './brewery/brewery.component';
import { BrewMapComponent } from './brew-map/brew-map.component';
import { BreweryDetailComponent } from './brewery-detail/brewery-detail.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { BreweryAutocompleteComponent } from './brewery-autocomplete/brewery-autocomplete.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatSelectTrigger, MatListModule, MatSelectModule, MatCardMdImage, MatCardModule} from '@angular/material';
import { AddBreweryComponent } from './add-brewery/add-brewery.component';
import { AdminModule } from '@app/admin/admin.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomMaterialModule } from '@app/material/custom-material.module';

@NgModule({
  declarations: [
    BreweryComponent,
    BrewMapComponent,
    BreweryDetailComponent,
    BreweryAutocompleteComponent,
    AddBreweryComponent,
    DashboardComponent,
  ],
  exports: [
    BreweryComponent,
    BrewMapComponent,
    BreweryDetailComponent,
    BreweryAutocompleteComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    RouterModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
     MatListModule,
     MatCardModule,
     CustomMaterialModule,
     AdminModule,

  ],
})
export class BreweryModule { }
