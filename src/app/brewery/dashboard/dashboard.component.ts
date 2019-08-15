import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../favorites.service';
import { Favorite } from '../../favorite';
import { AuthService } from '../../auth.service';

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
