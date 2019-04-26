import { Component, OnInit } from '@angular/core';
import { Brewery } from '../../brewery';
import { BrewApiService } from '../../brew-api.service';
import {AppRoutingModule} from '../../app-routing.module'


@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.scss']
})
export class BreweryComponent implements OnInit {

  breweries: Brewery[];


  constructor( private brewApiService: BrewApiService) { }

  ngOnInit() {
    this.getBreweries();
  }
  getBreweries():void {
    this.brewApiService.getBreweries()
      .subscribe(breweries => this.breweries = breweries);
  }
  onSelect(): void {

  }
}
