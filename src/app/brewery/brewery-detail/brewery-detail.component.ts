import { Component, OnInit, Input } from '@angular/core';
import { BrewApiService } from 'src/app/brew-api.service';
import { BreweryDetail } from 'src/app/brewery-detail';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-brewery-detail',
  templateUrl: './brewery-detail.component.html',
  styleUrls: ['./brewery-detail.component.sass']
})
export class BreweryDetailComponent implements OnInit {
  @Input() breweryDetail: BreweryDetail;

  constructor(
    private brewApiService:BrewApiService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,

  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    }
   }

  ngOnInit():void {
    this.getBrewery();
  }
  getBrewery(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.brewApiService.getBrewery(id)
      .subscribe(BreweryDetail => this.breweryDetail = BreweryDetail)
  }
  goBack(): void {
    this.location.back();
  }
}
