import { Component, OnInit } from '@angular/core';
import { CesiumService } from 'projects/cesium/src/public-api';

@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.scss']
})
export class CesiumComponent implements OnInit {

  constructor(
    private cesiumService: CesiumService
  ) {
  }

  ngOnInit(): void { }

}
