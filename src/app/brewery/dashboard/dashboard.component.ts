import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '@app/favorites.service';
import { Favorite } from '@app/favorite';
import { AuthService } from '@app/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  favorites:Favorite[];
  user:string;
  constructor( private favoritesService: FavoritesService, private authService: AuthService) {
  }

  ngOnInit() {
    this.user = this.authService.userDetails.email;
    this.favoritesService.getFavorites((this.authService.userDetails.uid))
      .subscribe(favorites => this.favorites = favorites)
  }

}
