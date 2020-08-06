import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Location, MapDirective } from 'projects/general-utils/src/public-api';
import { CesiumMapService } from '../public-api';

@Directive({
  selector: '[libCesiumMap]',
  exportAs: 'libCesiumMap'
})
export class CesiumMapDirective extends MapDirective implements OnInit {
  @Input() initialLocation: Location;
  @Input() set maxZoomIn(value: number) {
    this.cesiumMapService.maxZoomIn = value;
  }

  @Input() set maxZoomOut(value: number) {
    this.cesiumMapService.maxZoomOut = value;
  }

  constructor(
    protected elementRef: ElementRef,
    private cesiumMapService: CesiumMapService
  ) {
    super(elementRef);
  }

  ngOnInit(): void {
    this.cesiumMapService.initMap(this.elementRef, this.initialLocation);
  }
}
