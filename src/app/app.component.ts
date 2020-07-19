import { Component } from '@angular/core';
import { Mood, Nationality, Target, TargetsService, emptyTarget } from 'projects/targets/src/public-api';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  target$ = new Subject<Target>();

  columns = Object.keys(emptyTarget());

  Mood = Mood;
  Nationality = Nationality;

  constructor(
    private targetsService: TargetsService,
  ) {
    this.targetsService.createTargetStream(300).subscribe(this.target$);
  }
}
