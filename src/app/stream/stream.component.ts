import { Component, OnDestroy } from '@angular/core';
import { emptyTarget, Mood, Nationality, Target, TargetsService } from 'projects/targets/src/public-api';
import { Subject } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnDestroy {

  targets$ = new Subject<Target[]>();

  columns = Object.keys(emptyTarget());

  Mood = Mood;
  Nationality = Nationality;

  constructor(
    private targetsService: TargetsService,
  ) {
    this.targetsService.createTargetStream(
      { targetsAmount: 100 },
      { updatesAmount: 5000, updateInterval: 300 }
    ).pipe(
      untilDestroyed(this),
    ).subscribe(this.targets$);
  }

  ngOnDestroy(): void { }

}
