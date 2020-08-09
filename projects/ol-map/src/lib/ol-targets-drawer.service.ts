import { Injectable } from '@angular/core';
import { ImagesService, Target, TextDisplayConfiguration } from '@targets';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Icon from 'ol/style/Icon';
import Style from 'ol/style/Style';
import { TargetsDrawer } from 'projects/targets/src/lib/targets-drawer';
import { OlMapService } from './ol-map.service';
import { latLngToCoordinate } from './utils';

@Injectable({
  providedIn: 'root'
})
export class OlTargetsDrawerService extends TargetsDrawer {
  private source: VectorSource;
  private layer: VectorLayer;

  constructor(
    private olMapService: OlMapService,
    private imagesService: ImagesService,
  ) {
    super();
    this.olMapService.mapReady.subscribe(() => {
      this.source = new VectorSource({});
      this.layer = new VectorLayer({
        source: this.source,
        updateWhileAnimating: true,
        updateWhileInteracting: true
      });
      this.olMapService.map.addLayer(this.layer);
    });
  }

  drawTarget(target: Target, textDisplayConfiguration: TextDisplayConfiguration): void {
    const canvas = this.imagesService.createTextFieldsImage(target, textDisplayConfiguration);
    const feature = new Feature(new Point(latLngToCoordinate(target.latLng)));
    feature.setStyle(new Style({
      image: new Icon({
        src: canvas.toDataURL(),
      }),
    })
    );
    this.source.addFeature(feature);

  }

  deleteTarget(id: string): void {
    this.source.removeFeature(this.source.getFeatureById(id));
  }
}
