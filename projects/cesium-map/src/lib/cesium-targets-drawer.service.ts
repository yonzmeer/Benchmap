import { Injectable } from '@angular/core';
import { ImagesService, Target, TextDisplayConfiguration } from '@targets';
import { CesiumMapService } from './cesium-map.service';
import { createImageCollection, ImageCollection } from './image-collection';
import { latLngToCartesian3 } from './utils';

@Injectable()
export class CesiumTargetsDrawerService {
  private targets: ImageCollection;

  constructor(
    private cesiumMapService: CesiumMapService,
    private imagesService: ImagesService,
  ) {
    this.cesiumMapService.mapReady.subscribe(() => {
      this.targets = createImageCollection({
        viewer: this.cesiumMapService.viewer,
      });
    });
  }

  drawTarget(target: Target, textDisplayConfiguration: TextDisplayConfiguration): void {
    const canvas = this.imagesService.createTextFieldsImage(target, textDisplayConfiguration);
    const billboard = this.targets.add(
      target.id,
      {
        image: canvas.toDataURL(),
        position: latLngToCartesian3(target.latLng)
      }
    );
  }

  deleteTarget(id: string): void {
    this.targets.remove(id);
  }
}
