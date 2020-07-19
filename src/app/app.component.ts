import { Component } from '@angular/core';
import { Target, TargetsService } from 'projects/targets/src/public-api';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  target$ = new Subject<Target>();

  constructor(
    private targetsService: TargetsService,
  ) {
    this.targetsService.createTargetStream(300).subscribe(this.target$);
  }
}
