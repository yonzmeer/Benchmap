import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CesiumTargetsDrawerService } from 'projects/cesium-map/src/lib/cesium-targets-drawer.service';
import { Location } from 'projects/general-utils/src/public-api';
import { TargetsService, TextDisplayConfiguration } from 'projects/targets/src/public-api';

@UntilDestroy()
@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.scss']
})
export class CesiumComponent implements OnInit, OnDestroy {
  readonly INITIAL_LOCATION: Location = {
    west: 25.0,
    south: 25.0,
    east: 40.0,
    north: 40.0
  };

  readonly MAX_ZOOM_IN = 20000;
  readonly MAX_ZOOM_OUT = 1500000;

  private readonly TEXT_DISPLAY_CONFIGURATION: TextDisplayConfiguration = {
    name: true,
    nickname: false,
    updateTime: false,
  };

  constructor(
    private targetsService: TargetsService,
    private cesiumTargetsDrawerService: CesiumTargetsDrawerService,
  ) {
    this.targetsService.createTargetStream(
      { targetsAmount: 1 },
      { updatesAmount: Infinity, updateInterval: 1000, updateProbability: 1 },
    ).pipe(
      untilDestroyed(this),
    ).subscribe(targets => {
      targets.forEach(target => this.cesiumTargetsDrawerService.drawTarget(target, this.TEXT_DISPLAY_CONFIGURATION));
    });
  }

  ngOnInit(): void { }

  ngOnDestroy(): void { }

}
