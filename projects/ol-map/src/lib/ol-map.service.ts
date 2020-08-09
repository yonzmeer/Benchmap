import { ElementRef, Injectable, NgZone } from '@angular/core';
import { Location, MapFeature, MapService } from '@general-utils';
import { Map as OlMap, View } from 'ol';
import { Extent } from 'ol/extent';
import Tilelayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Observable } from 'rxjs';

@Injectable()
export class OlMapService extends MapService {
  public map: OlMap;

  constructor(private zone: NgZone) {
    super();
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

  zoomIn(amount: number): void { }

  zoomOut(amount: number): void { }

  rotate(degrees: number): void { }

  addArcGisImageryLayer(name: string, mapFeature: MapFeature): void { }

  removeArcGisImageryLayer(name: string): void { }

  removeAllArcGisLayers(destroy: boolean): void { }
}
