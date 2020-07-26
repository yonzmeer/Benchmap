import { Injectable } from '@angular/core';
import { Billboard, BillboardCollection } from 'cesium';
import { ImagesService } from 'projects/targets/src/lib/images.service';
import { Target, TextDisplayConfiguration } from 'projects/targets/src/public-api';
import { CesiumMapService } from './cesium-map.service';
import { latLngToCartesian3 } from './utils';

@Injectable()
export class TargetsDrawerService {
  private targets: BillboardCollection;
  private targetIdToCanvas: Map<string, HTMLCanvasElement>;
  private targetIdToBillboard: Map<string, Billboard>;

  constructor(
    private cesiumMapService: CesiumMapService,
    private imagesService: ImagesService,
  ) {
    this.cesiumMapService.viewerReady.subscribe(() => {
      this.targets = this.cesiumMapService.viewer.scene.primitives.add(new BillboardCollection());
      this.targetIdToCanvas = new Map<string, HTMLCanvasElement>();
      this.targetIdToBillboard = new Map<string, Billboard>();
    });
  }

  drawTarget(target: Target, textDisplayConfiguration: TextDisplayConfiguration): void {
    const canvas = this.imagesService.createTextFieldsImage(target, textDisplayConfiguration);
    const billboard = this.targets.add({
      image: canvas.toDataURL(),
      position: latLngToCartesian3(target.latLng),
    });

    this.targetIdToCanvas.set(target.id, canvas);
    this.targetIdToBillboard.set(target.id, billboard);
  }

  deleteTarget(id: string): void { }
}
