import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreweryComponent } from './brewery/brewery/brewery.component';
import { HttpClientModule } from '@angular/common/http';
import { BreweryModule } from './brewery/brewery.module';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { from } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatInputModule } from '@angular/material';
import {BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BreweryModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
