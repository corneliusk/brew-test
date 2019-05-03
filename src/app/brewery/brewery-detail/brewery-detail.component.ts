import { Component, OnInit, Input } from '@angular/core';
import { BrewApiService } from '@app/brew-api.service';
import { BreweryDetail } from '@app/brewery-detail';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { FavoritesService } from '@app/favorites.service';
import { AuthService } from '@app/auth.service';
import { Favorite } from '@app/favorite';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-brewery-detail',
  templateUrl: './brewery-detail.component.html',
  styleUrls: ['./brewery-detail.component.scss']
})
export class BreweryDetailComponent implements OnInit {

  isFavorite = false;
  favorite:Favorite;
  @Input() breweryDetail: BreweryDetail;

  constructor(
    private brewApiService:BrewApiService,
    private authService: AuthService,
    private favoritesService:FavoritesService,
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
      .subscribe(breweryDetail => {
        this.breweryDetail = breweryDetail;
        if(this.isLoggedIn()){
          this.checkFavorite();
        }
      })
  }
  goBack(): void {
    this.location.back();
  }
  toggleFavorite():void {
    if(this.isFavorite) {
      this.removeFromFavorites(this.breweryDetail)
    } else {
      this.addToFavorites(this.breweryDetail)
    }
  }
  addToFavorites(detail: BreweryDetail):void {
    this.favoritesService.addFavorite({
      breweryId: detail.id,
      breweryName: detail.name,
      userId: this.authService.userDetails.uid

    } as Favorite)
    .subscribe(favorite=> {
      this.favorite = favorite;
      this.isFavorite = true;
    })
  }
  removeFromFavorites(detail: BreweryDetail):void {
    this.favoritesService.deleteFavorite({
      id: this.favorite.id,
      breweryId: detail.id,
      breweryName: detail.name,
      userId: this.authService.userDetails.uid
    } as Favorite)
      .subscribe(favorite =>{
        this.isFavorite = false;
      })
  }
  checkFavorite():void {
    this.favoritesService.getFavorites(this.authService.userDetails.uid)
      .subscribe(favorites=>{
        let favorite = null;
        if(favorite = favorites.find(element=>{
          return element.breweryId == this.breweryDetail.id
        })){
          this.favorite = favorite;
          this.isFavorite = true;
        }
      })
  }
  // removeFromFavorites():Observable<Favorite[]> {


  // }
  isLoggedIn():boolean {
    return this.authService.isLoggedIn();
  }

}
