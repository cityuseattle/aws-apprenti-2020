import { Pipe, PipeTransform } from '@angular/core';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {
  
  transform(distance: number): string {
    const isNUmeric = (n) => !isNaN(parseFloat(n)) && isFinite(n);

    if (distance && isNUmeric(distance)) {
      let thisDistance = '0';
      let unit = 'm';
      if (distance > 1000) {
        thisDistance = (distance/ 1000).toFixed(1);
          unit = 'km';
      } else {
        thisDistance = Math.floor(distance).toString();
      }
      return thisDistance + unit; 
    } else {
      return '?';
    }
  }
}
