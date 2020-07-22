import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Target } from './models/target';
import { randomTarget } from './target-utils';

@Injectable()
export class TargetsService {

    constructor() { }

    createTargetStream(intervalValue: number = 100, length: number = Infinity): Observable<Target> {
        return interval(intervalValue).pipe(
            take(length),
            switchMap(() => {
                return of(randomTarget());
            }),
        );
    }
}
