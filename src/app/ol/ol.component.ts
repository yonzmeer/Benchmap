import { Component, OnInit } from '@angular/core';
import { Location } from '@general-utils';

@Component({
  selector: 'app-ol',
  templateUrl: './ol.component.html',
  styleUrls: ['./ol.component.scss']
})
export class OlComponent implements OnInit {
  readonly INITIAL_LOCATION: Location = {
    west: 25.0,
    south: 25.0,
    east: 40.0,
    north: 40.0
  };

  readonly MAX_ZOOM_IN = 20000;
  readonly MAX_ZOOM_OUT = 1500000;


  constructor() { }

  ngOnInit(): void { }
}
