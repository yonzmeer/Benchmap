import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@general-utils';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { OlTargetsDrawerService } from '@ol-map';
import { TargetsService, TextDisplayConfiguration } from '@targets';

@UntilDestroy()
@Component({
  selector: 'app-ol',
  templateUrl: './ol.component.html',
  styleUrls: ['./ol.component.scss']
})
export class OlComponent implements OnInit, OnDestroy {
  readonly INITIAL_LOCATION: Location = {
    west: 25.0,
    south: 25.0,
    east: 40.0,
    north: 40.0
  };

  private readonly TEXT_DISPLAY_CONFIGURATION: TextDisplayConfiguration = {
    name: true,
    nickname: false,
    updateTime: false,
  };

  constructor(
    private targetsService: TargetsService,
    private olTargetsDrawerService: OlTargetsDrawerService,
  ) {
    this.targetsService.createTargetStream(
      { targetsAmount: 1 },
      { updatesAmount: Infinity, updateInterval: 1000, updateProbability: 1 },
    ).pipe(
      untilDestroyed(this),
    ).subscribe(targets => {
      targets.forEach(target => this.olTargetsDrawerService.drawTarget(target, this.TEXT_DISPLAY_CONFIGURATION));
    });
  }

  ngOnDestroy(): void { }

  ngOnInit(): void { }
}
