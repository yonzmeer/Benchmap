import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enum2String'
})
export class Enum2StringPipe implements PipeTransform {

  transform(value: number, enumType: any): string {
    return enumType[value];
  }
}
