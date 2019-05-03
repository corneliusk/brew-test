import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    let favorites = [
      { breweryId:2300,
        id:1,
        breweryName:"jim brewer",
        userId: 'uasdfkljladjks'
      }

    ];
    return {favorites};
  }
}
