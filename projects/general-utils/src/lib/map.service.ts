import { ElementRef } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Location, MapFeature } from './models';

export abstract class MapService {
  protected mapReady$ = new Subject<void>();

  protected maxZoomIn$ = new BehaviorSubject<number>(0);
  protected maxZoomOut$ = new BehaviorSubject<number>(0);
  protected currentRotation$ = new BehaviorSubject<number>(0);

  get mapReady(): Observable<void> {
    return this.mapReady$.asObservable();
  }

  abstract get currentZoom(): number;

  get maxZoomOut(): number {
    return this.maxZoomOut$.value;
  }

  set maxZoomOut(amount: number) {
    this.maxZoomOut$.next(amount);
  }

  get maxZoomIn(): number {
    return this.maxZoomIn$.value;
  }

  set maxZoomIn(amount: number) {
    this.maxZoomIn$.next(amount);
  }

  get currentRotation() {
    return this.currentRotation$.value;
  }

  set currentRotation(degrees: number) {
    this.currentRotation$.next(degrees);
  }

  abstract initMap(elementRef: ElementRef, initalLocation: Location): void;

  abstract zoomIn(amount: number): void;

  abstract zoomOut(amount: number): void;

  abstract rotate(degrees: number): void;

  protected resetRotation(): void {
    this.rotate(360 - this.currentRotation);
    this.currentRotation = 0;
  }

  abstract addArcGisImageryLayer(name: string, mapFeature: MapFeature): void;

  abstract removeArcGisImageryLayer(name: string): void;

  abstract removeAllArcGisLayers(destroy: boolean): void;
}
