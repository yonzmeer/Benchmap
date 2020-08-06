import { Injectable } from '@angular/core';
import { Map as OlMap } from 'ol';

@Injectable()
export class OlMapService {
  private map: OlMap;

  constructor() { }
}
