import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkService {

  constructor() { }

  getParkFromTheCloud() {
    // pretend to make a web service call

    const parksFromWebService = [
      {
        name: 'devils lake'
      }
      ,
      {
        name: 'gov nelson'
      }
      , 
      {
        name: 'cave point'
      }
    ];

    return parksFromWebService;
  }
}
