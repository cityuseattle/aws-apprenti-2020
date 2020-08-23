import { Pipe, PipeTransform } from '@angular/core';
import {Location} from './location'
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: Location[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
  
    return items.filter(it => {
      return it.name.includes(searchText)
    });
  }
  // function wordIsContained(element, index, array){
    
  // }

  //   transform(locations: Location[], searchText: string): Location[] {
  //     console.log(locations)
            
  //     searchText = searchText;
  //     console.log(searchText)

  //     return locations.filter(location => {
  //       location.name.startsWith('*');
  //       console.log(location.name.includes(searchText));
  //       console.log(location.name);
  //       // console.log(searchText);
      
  //     });
  // }
}