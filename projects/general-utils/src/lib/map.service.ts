import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Location, MapFeature } from './models';

export abstract class MapService {

  constructor() { }

  abstract get mapReady(): Observable<void>;

  abstract get currentZoom(): number;

  abstract get maxZoomOut(): number;

  abstract set maxZoomOut(meters: number);

  abstract get maxZoomIn(): number;

  abstract set maxZoomIn(meters: number);

  abstract get currentRotation();

  abstract set currentRotation(degrees: number);

  abstract initMap(elementRef: ElementRef, initalLocation: Location): void;

  abstract zoomIn(amount: number): void;

  abstract zoomOut(amount: number): void;

  abstract rotate(degrees: number): void;

  abstract resetRotation(): void;

  abstract addArcGisImageryLayer(name: string, mapFeature: MapFeature): void;

  abstract removeArcGisImageryLayer(name: string): void;

  abstract removeAllArcGisLayers(destroy: boolean): void;
}
