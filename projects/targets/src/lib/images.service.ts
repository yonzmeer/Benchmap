import { Injectable } from '@angular/core';
import { Target } from './models/target';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  createTextFieldsImage({ name, nickname, updateTime, mood }: Target): string {
    return;
  }

  createCostumesImage({ costumes }: Target): string {
    return;
  }

  createSymbolImage({ nationality, mood }: Target): string {
    return;
  }
}
