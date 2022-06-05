import { Component, OnInit } from '@angular/core';
import { ParkService } from '../park.service';

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

  ngOnInit(): void {

    const p = this.parksSvc.getParkFromTheCloud();
    console.log(p); 
  }

}
