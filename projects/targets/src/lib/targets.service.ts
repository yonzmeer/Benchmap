import { Injectable } from '@angular/core';
import { interval, Observable, of, merge, EMPTY, zip, combineLatest } from 'rxjs';
import { switchMap, take, map } from 'rxjs/operators';
import { Target } from './models/target';
import { randomTarget } from './target-utils';

@Injectable()
export class TargetsService {

    createTargetStream(
        { targetsAmount }: TargetsStreamParams,
        targetUpdateParmas: TargetUpdateParmas,
    ): Observable<Target[]> {
        const targetsWithUpdates = Array.from({ length: targetsAmount }, () => {
            const targetwithUpdates = this.createTargetWithUpdates(targetUpdateParmas);
            return targetwithUpdates;
        });

        return combineLatest(targetsWithUpdates);
    }

    createTargetWithUpdates({ updatesAmount, updateInterval }: TargetUpdateParmas): Observable<Target> {
        const target = randomTarget();
        return interval(updateInterval).pipe(
            take(updatesAmount),
            switchMap(() => {
                const { id, name, ...rest } = randomTarget();
                return of({
                    ...target,
                    ...rest
                });
            })
        );

    }
}

export interface TargetUpdateParmas {
    updatesAmount: number;
    updateInterval: number;
}

export interface TargetsStreamParams {
    targetsAmount: number;
}
