import { Pipe, PipeTransform } from '@angular/core';
import { MILLION, MILLION_ABBR, THOUSAND, THOUSAND_ABBR } from '@app/core/variables/constants';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: number): string {
    let shortenedValue = 0;
    let formattedValue = '';
    if (value > THOUSAND && value < MILLION) {
      shortenedValue = value / THOUSAND;
      formattedValue = `${+shortenedValue.toFixed(1)}${THOUSAND_ABBR}`;

    } else if (value >= MILLION) {
      shortenedValue = value / MILLION;
      formattedValue = `${+shortenedValue.toFixed(1)}${MILLION_ABBR}`;
    } else {
      formattedValue = value.toString();
    }
    return formattedValue;
  }

}
