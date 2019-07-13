import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, maxLength: number): any {
    if (value.trim().length > maxLength) {
      return `${value.substr(0, maxLength - 3)}...`;
    }
    return value.trim();
  }
}
