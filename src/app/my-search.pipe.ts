import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item-list/item-models';

@Pipe({
  name: 'mySearch'
})
export class MySearchPipe implements PipeTransform {
  transform(items: Item[], filterBy: string, name: string): any {
    return items.filter(item => item[filterBy] === name);
  }
}
