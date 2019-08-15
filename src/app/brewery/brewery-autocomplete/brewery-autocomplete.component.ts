import { Component, OnInit } from '@angular/core';
import { BrewApiService } from '../../brew-api.service';
import { Brewery } from '@/brewery';
import {FormControl} from '@angular/forms';
import {MatInputModule, MatSelectTrigger} from '@angular/material';
import {Observable, UnaryFunction} from 'rxjs';
import {debounceTime, switchMap, distinctUntilChanged, mergeMap} from 'rxjs/operators'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brewery-autocomplete',
  templateUrl: './brewery-autocomplete.component.html',
  styleUrls: ['./brewery-autocomplete.component.sass']
})
export class BreweryAutocompleteComponent implements OnInit {
  hasValue = false;
  breweryName = new FormControl();
  breweries: Brewery[];
  route:ActivatedRoute;
  navigating = false;

  constructor(private brewApiService:BrewApiService, private router: Router) { }

  ngOnInit() {
    this.breweryName.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        mergeMap((query) => this.brewApiService.getAutocomplete(query))
      )
      .subscribe( breweries => {
        this.breweries = breweries;
        console.log(this.breweryName);

      })
  }

  displayFn(brewery?: Brewery): string | undefined {
    return brewery ? brewery.name : undefined;
  }
  goToBrewery(id:string) {
      console.log(id);
      this.breweryName.setValue('');
      this.router.navigate(['/breweries', id])
  }
}
