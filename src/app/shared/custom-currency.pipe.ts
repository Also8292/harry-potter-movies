import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
  standalone: true
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    let formatedBudget = '';
    const range = value.split('-');
    if (range.length === 1) {
      formatedBudget = `$${range[0]} million`;
    } else {
      formatedBudget = `$${range[0]}-${range[1]} million`;
    }

    return formatedBudget;
  }

}
