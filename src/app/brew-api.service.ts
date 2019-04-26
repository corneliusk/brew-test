import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Brewery} from './brewery';
import { Observable } from 'rxjs';
import { BreweryDetail } from './brewery-detail';
@Injectable({
  providedIn: 'root'
})
export class BrewApiService {

  private apiUrl = "https://api.openbrewerydb.org/breweries";

  constructor(private http:HttpClient) { }

  public getBreweries(): Observable<Brewery[]> {
    return this.http.get<Brewery[]>(this.apiUrl)

  }
  public getBrewery(id:number): Observable<BreweryDetail> {
    return this.http.get<BreweryDetail>(this.apiUrl  + '/' + id)
  }
  public getAutocomplete(query:string): Observable<Brewery[]> {
    return this.http.get<Brewery[]>(this.apiUrl + '/autocomplete?query=' + query)
  }
}
