import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Pipe({ name: 'numberSeparator' })
export class NumberSeparatorPipe implements PipeTransform {
  transform(value: number): string {
    if(value){
      if (isNaN(value)) {
        return '';
      }
      return value?.toLocaleString('en-US');
    }
    else {
      return '0'
    }
  }
}