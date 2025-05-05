import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCount'
})
export class FilterCountPipe implements PipeTransform {

  transform(items: any[], field: string, value: any): number {
    if (!items || !field || value === undefined) {
      return 0;
    }

    return items.filter(item => item[field] === value).length;
  }
}