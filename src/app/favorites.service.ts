import { Injectable } from '@angular/core';
import { Favorite } from '../app/favorite';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BreweryDetail } from './brewery-detail';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class FavoritesService {


  private favoritesUrl = 'api/favorites';

  constructor( private http:HttpClient) { }

  getFavorites(userId:string): Observable<Favorite[]> {
    const options = userId ? {params: new HttpParams().set('userId', userId)} : {};
    return this.http.get<Favorite[]>(this.favoritesUrl, options)
  }
  addFavorite(favorite:Favorite): Observable<Favorite> {
    return this.http.post<Favorite>(this.favoritesUrl, favorite, httpOptions)
  }
  deleteFavorite(favorite:Favorite | number): Observable<Favorite> {
    const id = typeof favorite == 'number' ? favorite : favorite.id;
    const url = `${this.favoritesUrl}/${id}`;
    return this.http.delete<Favorite>(url, httpOptions);

  }
}

