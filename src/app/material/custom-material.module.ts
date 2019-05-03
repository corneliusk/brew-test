import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatAutocompleteModule, MatCardModule, MatMenuModule, MatIconModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatAutocompleteModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,

  ],
  exports: [
    MatButtonModule,
    MatAutocompleteModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,

  ]

})
export class CustomMaterialModule { }
