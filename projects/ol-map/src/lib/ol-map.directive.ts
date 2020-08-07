import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { MapDirective } from '@general-utils';
import { OlMapService } from './ol-map.service';

@Directive({
  selector: '[libOlMap]',
  exportAs: 'libOlMap'
})
export class OlMapDirective extends MapDirective implements OnInit {
  @Input() set maxZoomIn(value: number) {
    this.olMapService.maxZoomIn = value;
  }

  @Input() set maxZoomOut(value: number) {
    this.olMapService.maxZoomOut = value;
  }

  ngOnInit(): void {
    this.olMapService.initMap(this.elementRef, this.initialLocation);
  }

  constructor(
    protected elementRef: ElementRef,
    private olMapService: OlMapService,
  ) {
    super(elementRef);
  }

}
