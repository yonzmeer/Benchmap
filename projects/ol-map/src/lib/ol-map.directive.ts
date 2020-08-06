import { Directive } from '@angular/core';

@Directive({
  selector: '[libOlMap]',
  exportAs: 'libOlMap'
})
export class OlMapDirective {

  constructor() { }

}
