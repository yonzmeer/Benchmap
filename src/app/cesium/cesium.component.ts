import { Component, OnDestroy, OnInit } from '@angular/core';
import { CesiumTargetsDrawerService } from '@cesium-map';
import { Location } from '@general-utils';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TargetsService, TextDisplayConfiguration } from '@targets';

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
  readonly MAX_ZOOM_OUT = 6000000;

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
