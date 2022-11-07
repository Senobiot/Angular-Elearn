import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'durationPipe'})
export class DurationPipe implements PipeTransform {
  transform(duration: any = '0'): string {
      const hours = Math.trunc(+duration / 60);
      const minutes = +duration % 60;
      const ending = hours > 1 ? 'hours' : 'hour';
  
      return `${hours}:${minutes} ${ending}`;
  }
}