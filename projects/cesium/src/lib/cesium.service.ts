import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CesiumService implements OnDestroy {

  constructor() {
    console.log('cesium service yeaaah');
  }

  ngOnDestroy(): void {
    console.log('cesium destroyed');
  }

  hello(): void {
    console.log('hello cesium');
  }
}
