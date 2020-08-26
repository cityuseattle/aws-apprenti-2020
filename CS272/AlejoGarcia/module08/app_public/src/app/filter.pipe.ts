import { Pipe, PipeTransform } from '@angular/core';
import {Location} from './location';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(locations: Location[], searchText: string): Location[] {

    if (!locations) {
      return [];
    }
    if (!searchText) {
      return locations;
    }

    return locations.filter(location => {
      return location.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    });

  }

}
