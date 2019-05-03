import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreweryComponent } from './brewery/brewery/brewery.component';
import { HttpClientModule } from '@angular/common/http';
import { BreweryModule } from './brewery/brewery.module';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import {BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {CollapseModule } from 'ngx-bootstrap/collapse';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule}  from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';
import {environment } from '../environments/environment';
import { AdminModule } from './admin/admin.module';
import { CustomMaterialModule } from '@app/material/custom-material.module'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),
    BreweryModule,
    BrowserModule,
    CustomMaterialModule,
    AdminModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
