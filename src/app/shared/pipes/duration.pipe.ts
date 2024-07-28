import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(value: string): string {
    if (!value || isNaN(parseInt(value))) return '';
    const valueMinutes = parseInt(value);
    const hours = Math.floor(valueMinutes / 60);
    const minutes = valueMinutes % 60;

    let duration = '';
    if (hours > 0) {
      duration = `${hours}h ${minutes}min`
    } else {
      duration = `${minutes}min`;
    }

    return duration;
  }

}
