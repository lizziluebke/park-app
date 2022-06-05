import { Component, OnInit } from '@angular/core';
import { ParkService } from '../park.service';

interface ParkDisplay {
  name: string
  , checked: boolean
}

@Component({
  selector: 'app-new-parks',
  templateUrl: './new-parks.component.html',
  styleUrls: ['./new-parks.component.css']
})
export class NewParksComponent implements OnInit {

  // magic DI... dependency injection
  constructor(
    private parksSvc: ParkService
  ) { }

  availableParks: ParkDisplay[] = []; 


  ngOnInit(): void {

    const p = this.parksSvc.getParkFromTheCloud();
    console.log(p); 

    this.availableParks = p.map(
      x => ({
        ...x 
        , checked: false
      })
    ); 
    console.log(this.availableParks); 
  }

}
