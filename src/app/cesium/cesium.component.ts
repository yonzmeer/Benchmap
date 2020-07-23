import { Component, OnInit } from '@angular/core';
import { Location } from 'projects/cesium-map/src/lib/models';

@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.scss']
})
export class CesiumComponent implements OnInit {
  readonly INITIAL_LOCATION: Location = {
    west: 31.0,
    south: 29.0,
    east: 35.0,
    north: 35.0
  };

  readonly MAX_ZOOM_IN = 20000;
  readonly MAX_ZOOM_OUT = 1500000;

  constructor() { }

  ngOnInit(): void { }

}
