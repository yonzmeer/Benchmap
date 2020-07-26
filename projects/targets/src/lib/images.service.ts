import { Injectable } from '@angular/core';
import { emptyCanvas } from 'projects/general-utils/src/public-api';
import { TextDisplayConfiguration } from './models';
import { Target } from './models/target';
import { moodToColor } from './target-utils';

@Injectable()
export class ImagesService {

  constructor() { }

  createTextFieldsImage(
    target: Target,
    textDisplayConfiguration: TextDisplayConfiguration,
  ): HTMLCanvasElement {
    const displayedTexts = Object.keys(target)
      .filter(field => textDisplayConfiguration[field])
      .map(field => `${target[field]}`);
    const numberOfTexts = displayedTexts.length;

    if (numberOfTexts === 0) {
      return emptyCanvas(200, 200);
    }

    const canvas = emptyCanvas(150, numberOfTexts * 30);
    const context = canvas.getContext('2d');
    context.font = '20px Comic Sans MS';
    context.fillStyle = moodToColor(target.mood);
    context.textAlign = 'center';

    const numberOfTextsPositioning = numberOfTexts * 2;
    for (let positionIndex = 1, textIndex = 0; positionIndex <= numberOfTextsPositioning - 1; positionIndex += 2, textIndex++) {
      const x = canvas.width / 2;
      const y = canvas.height * positionIndex / numberOfTextsPositioning;
      context.fillText(displayedTexts[textIndex], x, y);
    }

    return canvas;
  }

  createSymbolImage({ nationality, mood }: Target): string {
    return;
  }

  createCostumesImage({ costumes }: Target): string {
    return;
  }
}
