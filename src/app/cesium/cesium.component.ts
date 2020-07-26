import { Component, OnInit } from '@angular/core';
import { Location } from 'projects/cesium-map/src/lib/models';
import { TargetsDrawerService } from 'projects/cesium-map/src/lib/targets-drawer.service';
import { TargetsService, TextDisplayConfiguration } from 'projects/targets/src/public-api';

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

  private readonly TEXT_DISPLAY_CONFIGURATION: TextDisplayConfiguration = {
    name: true,
    nickname: true,
    updateTime: true,
  };

  constructor(
    private targetsService: TargetsService,
    private targetsDrawerService: TargetsDrawerService,
  ) {
    this.targetsService.createTargetStream(
      { targetsAmount: 300 },
      { updateInterval: 1000, updatesAmount: 1 },
    ).subscribe(targets => {
      targets.forEach(target => this.targetsDrawerService.drawTarget(target, this.TEXT_DISPLAY_CONFIGURATION));
    });
  }

  ngOnInit(): void { }

}
