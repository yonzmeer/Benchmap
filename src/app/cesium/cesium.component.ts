import { Component, OnInit } from '@angular/core';
import { CesiumMapService } from 'projects/cesium-map/src/public-api';

@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.scss']
})
export class CesiumComponent implements OnInit {

  constructor(
    private cesiumMapService: CesiumMapService
  ) {
  }

  ngOnInit(): void { }

}
