import { Pipe, PipeTransform } from '@angular/core';
import { MILLION, MILLION_ABBR, THOUSAND, THOUSAND_ABBR } from '@app/core/variables/constants';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: number): string {
    let formattedValue = value.toString();
    let abbreviation: string;
    if (value > THOUSAND && value < MILLION) {
      formattedValue = (value / THOUSAND).toString();
      abbreviation = THOUSAND_ABBR;
    } else if (value >= MILLION) {
      formattedValue = (value / MILLION).toString();
      abbreviation = MILLION_ABBR;
    }
    const splitValue = formattedValue.split('.');
    if (splitValue.length > 1) {
      const shortenValue = Number(`${splitValue[0]}.${splitValue[1].charAt(0)}`);
      formattedValue = `${shortenValue} ${abbreviation}`;
    }
    return formattedValue;
  }

}
