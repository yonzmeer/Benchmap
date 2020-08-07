import { ElementRef, Injectable, NgZone } from '@angular/core';
import { Location, MapFeature, MapService } from '@general-utils';
import { Map as OlMap, View } from 'ol';
import { Extent } from 'ol/extent';
import Tilelayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Observable } from 'rxjs';

@Injectable()
export class OlMapService extends MapService {
  private map: OlMap;

  constructor(private zone: NgZone) {
    super();
  }

  get mapReady(): Observable<void> {
    throw new Error('Method not implemented.');
  }

  get currentZoom(): number {
    throw new Error('Method not implemented.');
  }

  initMap(elementRef: ElementRef<any>, initalLocation: Location): void {
    this.zone.runOutsideAngular(() => {

      this.map = new OlMap({
        target: elementRef.nativeElement,
        view: new View({
          projection: 'EPSG:4326',
          center: [33, 33],
          zoom: 6,
        }),
        layers: [
          new Tilelayer({
            source: new OSM({})
          }),
        ]
      });
    });

    this.map.once('postrender', () => {
      this.mapReady$.next();
      this.mapReady$.complete();
    });
  }

  zoomIn(amount: number): void {
    throw new Error('Method not implemented.');
  }

  zoomOut(amount: number): void {
    throw new Error('Method not implemented.');
  }

  rotate(degrees: number): void {
    throw new Error('Method not implemented.');
  }

  addArcGisImageryLayer(name: string, mapFeature: MapFeature): void {
    throw new Error('Method not implemented.');
  }

  removeArcGisImageryLayer(name: string): void {
    throw new Error('Method not implemented.');
  }

  removeAllArcGisLayers(destroy: boolean): void {
    throw new Error('Method not implemented.');
  }

  private getExtent(location: Location): Extent {
    return [
      location.west,
      location.south,
      location.east,
      location.north,
    ];
  }
}
