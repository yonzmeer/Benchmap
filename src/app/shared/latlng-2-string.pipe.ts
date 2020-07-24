import { Pipe, PipeTransform } from '@angular/core';
import { LatLng } from 'projects/general-utils/src/lib/models';

@Pipe({
  name: 'latlng2String'
})
export class Latlng2StringPipe implements PipeTransform {

  transform({ latitude, longitude }: LatLng): string {
    return `[${latitude}, ${longitude}]`;
  }

}
